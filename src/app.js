import express from 'express'
// ROUTES IMPORT
import {
  employeeRoutes,
  testRoutes,
  weatherRoutes
} from './routes/index.js'
import auth from './middleware/authMiddleware.js'

const app = express()
app.use(express.json())

// AUTH
app.use(auth)

// ROUTES
app.use('/employees', employeeRoutes)
app.use('/test', testRoutes)
app.use('/weather', weatherRoutes)

// ERROR HANDLING
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: err.message })
})

export default app
