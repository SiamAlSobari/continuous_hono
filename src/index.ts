import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello saya belajar CI/CD'))
app.get('/say', (c) => c.text('HALLO BOSS APA KABAR'))

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000,
})

console.log("Server is running...")
