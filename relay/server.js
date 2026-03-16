import express from 'express';
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import * as dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve dashboard static files
app.use(express.static(path.join(__dirname, '../dashboard')));

// ─── Chat proxy endpoint ──────────────────────────────────────────────────────
// Accepts: { gatewayUrl, token, agentId, messages }
// Proxies to: POST {gatewayUrl}/v1/chat/completions
// This runs server-side — no CORS or mixed-content issues for the browser.
// ─────────────────────────────────────────────────────────────────────────────
app.post('/api/chat', async (req, res) => {
  const { gatewayUrl, token, agentId = 'main', messages } = req.body;

  if (!gatewayUrl || !token || !messages) {
    return res.status(400).json({ error: 'Missing gatewayUrl, token, or messages' });
  }

  // Validate URL — must be http(s), reject private IPs if desired
  let parsedUrl;
  try {
    parsedUrl = new URL(gatewayUrl);
    if (!['http:', 'https:'].includes(parsedUrl.protocol)) throw new Error();
  } catch {
    return res.status(400).json({ error: 'Invalid gatewayUrl' });
  }

  const target = `${gatewayUrl.replace(/\/$/, '')}/v1/chat/completions`;

  try {
    const upstream = await fetch(target, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'X-OpenClaw-Agent-Id': agentId,
      },
      body: JSON.stringify({
        model: `openclaw:${agentId}`,
        messages,
        stream: false,
      }),
      signal: AbortSignal.timeout(60000),
    });

    const data = await upstream.json();

    if (!upstream.ok) {
      return res.status(upstream.status).json({ error: data?.error?.message || `Gateway returned ${upstream.status}` });
    }

    res.json(data);
  } catch (err) {
    const msg = err.name === 'TimeoutError' ? 'Gateway timed out (60s)' : err.message;
    res.status(502).json({ error: msg });
  }
});

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', ts: Date.now() });
});

// Fallback — serve dashboard for any unknown route
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../dashboard/index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  Callixen Dashboard relay running`);
  console.log(`  → http://localhost:${PORT}\n`);
});
