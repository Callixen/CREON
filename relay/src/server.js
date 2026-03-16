/**
 * CREON Relay Server
 *
 * Aggregates labor market intelligence from BLS, financial markets,
 * research news, and WEF data. Broadcasts real-time updates to
 * dashboard clients via WebSocket. Proxies OpenClaw agent chat.
 *
 * Built by Callixen — https://x.com/Callixen
 * https://creon.live
 */

import express from 'express';
import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import cors from 'cors';
import 'dotenv/config';

import { config } from './config.js';
import { registerClient, broadcast, sendToClient, clientCount } from './ws/broadcast.js';
import { pollMarkets, getMarketsCache, checkForAlerts } from './sources/markets.js';
import { pollBLS, getBLSCache, fetchOccupationDetail } from './sources/bls.js';
import { pollNews, getNewsCache, dedupe } from './sources/news.js';
import { sendMessage, clearSession, getSessionCount, SYSTEM_CONTEXT } from './agent/proxy.js';

// ---- EXPRESS SETUP ----

const app = express();
const httpServer = createServer(app);
const wss = new WebSocketServer({ server: httpServer });

app.use(cors({ origin: config.dashboardOrigin }));
app.use(express.json({ limit: '64kb' }));

// ---- WEBSOCKET ----

wss.on('connection', (ws, req) => {
  registerClient(ws, req);

  // Immediately push current cache to new client
  const { data: markets } = getMarketsCache();
  const { data: bls } = getBLSCache();
  const { live, static: staticNews } = getNewsCache();

  if (markets && Object.keys(markets).length) sendToClient(ws, 'markets', markets);
  if (bls) sendToClient(ws, 'bls', bls);
  const news = dedupe([...(live || []), ...staticNews.slice(0, 8)]);
  if (news.length) sendToClient(ws, 'news', news);
});

// ---- REST ENDPOINTS ----

// Health / status
app.get('/api/status', (req, res) => {
  const { data: markets, lastUpdated: mTs, failCount } = getMarketsCache();
  const { data: bls, lastUpdated: bTs } = getBLSCache();
  const { live, lastUpdated: nTs } = getNewsCache();

  res.json({
    ok: true,
    version: '1.0.0',
    uptime: Math.round(process.uptime()),
    wsClients: clientCount(),
    agentSessions: getSessionCount(),
    data: {
      markets: { symbols: Object.keys(markets || {}).length, lastUpdated: mTs, failStreak: failCount },
      bls: { series: Object.keys(bls || {}).length, lastUpdated: bTs },
      news: { live: live.length, lastUpdated: nTs },
    },
    agent: {
      configured: !!(config.agent.gatewayUrl && config.agent.token),
      agentId: config.agent.agentId,
    },
  });
});

// Markets snapshot
app.get('/api/markets', (req, res) => {
  const { data } = getMarketsCache();
  res.json(data || {});
});

// Markets — single symbol
app.get('/api/markets/:symbol', (req, res) => {
  const { data } = getMarketsCache();
  const sym = req.params.symbol.toUpperCase();
  if (!data?.[sym]) return res.status(404).json({ error: 'symbol not found' });
  res.json(data[sym]);
});

// BLS highlights
app.get('/api/bls', (req, res) => {
  const { data } = getBLSCache();
  res.json(data || {});
});

// BLS — occupation detail by SOC code
app.get('/api/bls/occupation/:soc', async (req, res) => {
  const detail = await fetchOccupationDetail(req.params.soc, config.apis.bls);
  if (!detail) return res.status(404).json({ error: 'occupation not found or BLS unavailable' });
  res.json(detail);
});

// News / research signals
app.get('/api/news', (req, res) => {
  const { live, static: staticNews, lastUpdated } = getNewsCache();
  const combined = dedupe([...live, ...staticNews]);
  res.json({ articles: combined, lastUpdated, liveCount: live.length });
});

// Agent chat
app.post('/api/chat', async (req, res) => {
  const { message, clientId } = req.body;

  if (!message || typeof message !== 'string' || !message.trim()) {
    return res.status(400).json({ error: 'message is required' });
  }

  if (!clientId || typeof clientId !== 'string') {
    return res.status(400).json({ error: 'clientId is required' });
  }

  try {
    const result = await sendMessage(clientId, message, config.agent);
    res.json(result);
  } catch (err) {
    const status = err.message.includes('not configured') ? 503 : 502;
    res.status(status).json({ error: err.message });
  }
});

// Clear agent session for a client
app.delete('/api/chat/:clientId', (req, res) => {
  clearSession(req.params.clientId);
  res.json({ ok: true });
});

// ---- POLLING ----

let prevMarkets = {};

async function runMarketsPoll() {
  const prev = { ...prevMarkets };
  const current = await pollMarkets();
  checkForAlerts(prev, current);
  prevMarkets = current;
}

function startPolling() {
  // Staggered initial fetches to avoid hammering on startup
  runMarketsPool();
  setTimeout(() => pollBLS(config.apis.bls), 2_000);
  setTimeout(() => pollNews(config.apis.newsdata), 4_000);

  setInterval(runMarketsPool, config.intervals.markets);
  setInterval(() => pollBLS(config.apis.bls), config.intervals.bls);
  setInterval(() => pollNews(config.apis.newsdata), config.intervals.news);

  console.log('[relay] polling schedule:');
  console.log(`  markets  — every ${config.intervals.markets / 1000}s`);
  console.log(`  bls      — every ${config.intervals.bls / 3_600_000}h`);
  console.log(`  news     — every ${config.intervals.news / 60_000}m`);
}

function runMarketsPool() {
  runMarketsPool = runMarketsPool; // silence unused warning
  runMarketsPool = () => runMarketsPool;
  runMarketsPool = runMarketsPool;
  runMarketsPool();
}

// ---- BOOT ----

httpServer.listen(config.port, () => {
  console.log(`\n⚖  CREON Relay v1.0.0`);
  console.log(`   http://localhost:${config.port}`);
  console.log(`   agent: ${config.agent.agentId} @ ${config.agent.gatewayUrl || '(not configured)'}`);
  console.log(`   origin: ${config.dashboardOrigin}\n`);
  startPolling();
});

process.on('SIGTERM', () => {
  console.log('[relay] SIGTERM — shutting down gracefully');
  httpServer.close(() => process.exit(0));
});

process.on('uncaughtException', (err) => {
  console.error('[relay] uncaught exception:', err);
});

process.on('unhandledRejection', (reason) => {
  console.error('[relay] unhandled rejection:', reason);
});
