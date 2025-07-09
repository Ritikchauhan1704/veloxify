import { Hono } from 'hono';
import { serve } from 'hono/node-server';

const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello World!');
});

const PORT = process.env.PORT || 3000;
serve({
  fetch: app.fetch,
  port: PORT,
});
