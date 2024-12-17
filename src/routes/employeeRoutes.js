import express from 'express'
import * as employeeController from '../controllers/employeeController.js'

const router = express.Router()

// router.post('/employees', (req, res, next) => {
//   // Add a new employee (accepts name, email, and position).
// })

router.get('/', (req, res, next) => {
  res.send(employeeController.test())
  // Retrieve the list of all employees.
})

// router.get('/:id', (req, res, next) => {
//  // Retrieve details of a single employee by ID.
// })

// router.put('/:id', (req, res, next) => {
//   // Update the details of an employee.
// })

// router.delete('/:id', (req, res, next) => {
//   // Remove an employee by ID.
// })

export default router
