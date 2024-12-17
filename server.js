import express from 'express'
import dotenv from 'dotenv'

import { test } from './lib/test.js'
import { weather } from './lib/weather.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

// ENDPOINTS

app.get('/', (req, res, next) => {
  res.send(test())
})

app.post('/test', (req, res, next) => {
  const { message } = req.body
  res.json({ message })
})

app.post('/weather', async (req, res, next) => {
  const { city } = req.body
  console.log(await weather(city))
})
