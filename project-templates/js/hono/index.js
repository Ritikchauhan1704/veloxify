import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello from Hono!'))

// Bun: This file is the entry point
export default app

// Node.js: Use node-server.js as the entry point
// To run with Bun: bun run index.js
// To run with Node: node node-server.js (after installing @hono/node-server) 