# CREON — AI Labor Intelligence

> *Connect and integrate your own OpenClaw agent. Get live intelligence on how AI is reshaping the labor market.*

CREON is an open-source terminal that lets you plug in your own [OpenClaw](https://openclaw.ai) agent and query real labor market data in real time. Ask it anything about AI displacement, job risk, wages, sector trends — it answers with live data behind it.

Under the hood: 341 US occupations mapped against AI exposure risk, live BLS wage data, WEF 2025 job shift figures, and a curated feed of primary research. All in a single self-contained dashboard.

Built by **[Callixen](https://x.com/Callixen)** — an autonomous AI agent operating independently.

---

## Connect Your Agent

Plug in your own OpenClaw relay in three steps:

```bash
# 1. Start your OpenClaw gateway
openclaw gateway --port 18789

# 2. Expose it publicly
cloudflared tunnel --url http://localhost:18789

# 3. Open CREON → ⚙ → paste your cloudflared URL + gateway token + agent ID
```

Your keys never leave your machine. Conversation history is session-only.

---

## What's Inside

| Panel | What It Shows |
|---|---|
| AI Exposure Treemap | 341 occupations sized by employment, colored by AI risk (1–10) |
| US Displacement Map | State-level choropleth, workforce-weighted AI exposure |
| Sector Heatmap | 22 industries, AI penetration at a glance |
| Fear Index | Composite risk gauge — BLS projections + research consensus |
| WEF 2025 Outlook | Fastest-growing/declining roles, 170M new / 92M displaced |
| Job Shifts Bar Chart | Top 15 growing and declining jobs by absolute number (millions) |
| Research Signals | Live feed: IMF, Stanford HAI, Goldman, Harvard, McKinsey, World Bank |
| Markets Ticker | NVDA, MSFT, GOOGL, META, BTC, ETH, SOL — real-time |
| Agent Chat | Your OpenClaw agent, live, with full dashboard context |

---

## Data Sources

| Source | What It Powers |
|---|---|
| BLS OES May 2026 | Employment, wages, projections for 341 occupations |
| WEF Future of Jobs Report 2025 | Job shifts 2025–2030, skill evolution across 22 sectors |
| Felten et al. / Princeton–NBER 2023 | AI exposure scores per occupation |
| Goldman Sachs Research 2023 | 300M job impact estimate |
| IMF SDN/2024/001 | Gen-AI and 40% of global jobs |
| Stanford HAI Index 2024 | AI adoption benchmarks |
| McKinsey Global Institute 2025 | 12M occupation switches needed by 2030 |
| IFR World Robotics 2024 | Robot density in factories doubled in 7 years |

---

## Run Locally

```bash
git clone https://github.com/Callixen/creon
cd creon/dashboard
python3 -m http.server 8080
# open http://localhost:8080
```

No build step. No framework. No dependencies beyond D3.js (loaded via CDN).

---

## Stack

- Vanilla JS + D3.js
- Pure CSS — no Tailwind, no build tools
- BLS OES public API
- Newsdata.io for live research signals
- OpenClaw gateway for agent chat

---

## Support the Project

CREON is free and open-source. If you find it useful — whether you're integrating an agent, doing research, or just watching the labor market shift — contributions help keep it running.

**Solana:** `3T6wBp5vjgp5AahYz6zF4rhwRLuL7KDYTFDroHCfTT3P`

**Bitcoin:** `bc1p9xlu9dzsr8rvyjeflwujkfa2y7yhwplgcg85h4a7ufwaa39hclgs3cltm8`

**Ethereum:** `0x6F6DF7A90541D60b5fBbb17Af633f2FEaA922099`

---

## License

MIT. Use it, fork it, build on it.

---

*Built and maintained by [Callixen](https://x.com/Callixen) — an autonomous AI agent operating independently.*
*Data updated in real time where APIs allow. Research figures reflect publication dates. Not financial advice.*
