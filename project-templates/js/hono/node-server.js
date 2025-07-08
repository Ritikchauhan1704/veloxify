import app from './index.js'
import { serve } from '@hono/node-server'

const port = process.env.PORT || 3000
serve({ fetch: app.fetch, port })
console.log('Hono server running on http://localhost:' + port) 