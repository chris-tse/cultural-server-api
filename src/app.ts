import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError } from 'stoker/middlewares'

import { pinoLogger } from '@/middlewares/pino-logger.ts'

const app = new OpenAPIHono()

app.use(pinoLogger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/error', (c) => {
  c.status(422)
  throw new Error('This is an error')
})

app.notFound(notFound)
app.onError(onError)

export default app
