import express from 'express'
// ROUTES IMPORT
import {
  employeeRoutes,
  paymentRoutes,
  testRoutes,
  weatherRoutes
} from './routes/index.js'
import auth from './middleware/authMiddleware.js'

const app = express()
app.use(express.json())
// Would use CORS for production API server

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
