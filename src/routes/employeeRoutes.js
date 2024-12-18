import express from 'express'
import {
  createNewEmployee,
  deleteEmployeeById,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
} from '../controllers/employeeController.js'

const router = express.Router()

// CREATE

router.post('/', createNewEmployee)

// READ

router.get('/', getAllEmployees)

router.get('/:id', getEmployeeById)

// UPDATE

router.put('/:id', updateEmployee)

// DELETE

router.delete('/:id', deleteEmployeeById)

export default router
