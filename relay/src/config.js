/**
 * CREON Relay — configuration
 * Reads from environment variables with sensible defaults
 */

export const config = {
  port: parseInt(process.env.PORT || '18900', 10),

  // OpenClaw agent
  agent: {
    gatewayUrl: process.env.OPENCLAW_GATEWAY_URL || '',
    token: process.env.OPENCLAW_GATEWAY_TOKEN || '',
    agentId: process.env.OPENCLAW_AGENT_ID || 'main',
    timeoutMs: 30_000,
  },

  // External APIs
  apis: {
    newsdata: process.env.NEWSDATA_API_KEY || '',
    bls: process.env.BLS_API_KEY || '',         // optional — public tier works without
    alphaVantage: process.env.ALPHAVANTAGE_KEY || '', // optional, fallback to Yahoo
  },

  // CORS
  dashboardOrigin: process.env.DASHBOARD_ORIGIN || '*',

  // Polling intervals (ms)
  intervals: {
    markets: 60_000,          // 1 min
    bls: 6 * 60 * 60_000,    // 6h
    news: 3 * 60_000,         // 3 min
    occupations: 24 * 60 * 60_000, // 24h
  },
};
