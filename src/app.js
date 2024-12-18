import express from 'express'
import {
  employeeRoutes,
  paymentRoutes,
  testRoutes,
  weatherRoutes
} from './routes/index.js'
import auth from './middleware/authMiddleware.js'
import * as path from 'path'
const __dirname = import.meta.dirname

const app = express()
app.use(express.json())
// Would use CORS for production API server

// DOCS
app.get('/docs', (req, res, next) => res.sendFile(path.join(__dirname, '../docs/redoc-static.html')))

// AUTH
app.use(auth)

// ROUTES
app.use('/employees', employeeRoutes)
app.use('/finance', paymentRoutes)
app.use('/test', testRoutes)
app.use('/weather', weatherRoutes)


// ERROR HANDLING
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message })
})

export default app
