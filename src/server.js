import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()
const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


// ENDPOINTS //
///////////////

// TEST



// Problem 1: WEATHER



// Problem 2: REST API

// app.post('/employees', (req, res, next) = {
//   // Add a new employee (accepts name, email, and position).
// })

// app.get('/employees', (req, res, next) = {
//   // Retrieve the list of all employees.
// })

// app.get('/employees:id', (req, res, next) = {
//  // Retrieve details of a single employee by ID.
// })

// app.put('/employees:id', (req, res, next) = {
//   // Update the details of an employee.
// })

// app.delete('/employees:id', (req, res, next) = {
//   // Remove an employee by ID.
// })
