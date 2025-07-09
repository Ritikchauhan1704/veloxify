import { Hono } from 'hono';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = new Hono();

app.get('/', (c) => {
  return c.text('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(`:${PORT}`);
