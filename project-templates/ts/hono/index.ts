import { Hono } from 'hono';
import { fileURLToPath } from 'url';
import path from 'path';
import { db } from './src/db/config';
import { users } from './src/db/schema';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = new Hono();

app.get('/', async (c) => {
  const users = await db.select().from(users);
  return c.json({ message: 'Hello World!', users });
});

app.post('/users', async (c) => {
  const body = await c.req.json();
  const user = await db.insert(users).values(body).returning();
  return c.json(user[0]);
});

const PORT = process.env.PORT || 3000;
app.listen(`:${PORT}`);
