/**
 * WebSocket connection manager
 * Tracks connected clients and broadcasts typed messages
 */

const clients = new Set();

export function registerClient(ws, req) {
  const ip = req?.socket?.remoteAddress || 'unknown';
  clients.add(ws);
  console.log(`[ws] + connected: ${ip} (total: ${clients.size})`);

  ws.on('close', () => {
    clients.delete(ws);
    console.log(`[ws] - disconnected (total: ${clients.size})`);
  });

  ws.on('error', (err) => {
    console.error('[ws] error:', err.message);
    clients.delete(ws);
  });
}

export function broadcast(type, data) {
  if (!clients.size) return;
  const msg = JSON.stringify({ type, data, ts: Date.now() });
  let sent = 0;
  for (const client of clients) {
    if (client.readyState === 1) { // OPEN
      client.send(msg);
      sent++;
    }
  }
  return sent;
}

export function sendToClient(ws, type, data) {
  if (ws.readyState === 1) {
    ws.send(JSON.stringify({ type, data, ts: Date.now() }));
  }
}

export function clientCount() {
  return clients.size;
}
