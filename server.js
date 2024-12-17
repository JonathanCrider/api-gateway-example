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

// ENDPOINTS //
///////////////

// TEST

app.get('/', (req, res, next) => {
  res.send(test())
})

app.post('/test', (req, res, next) => {
  const { message } = req.body
  res.json({ message })
})

// Problem 1: WEATHER

app.post('/weather', async (req, res, next) => {
  const { city } = req.body
  const current = await weather(city)
  res.json(current)
})

// Problem 2: REST API

app.post('/employees', (req, res, next) = {
  // Add a new employee (accepts name, email, and position).
})

app.get('/employees', (req, res, next) = {
  // Retrieve the list of all employees.
})

app.get('/employees:id', (req, res, next) = {
 // Retrieve details of a single employee by ID.
})

app.put('/employees:id', (req, res, next) = {
  // Update the details of an employee.
})

app.delete('/employees:id', (req, res, next) = {
  // Remove an employee by ID.
})
