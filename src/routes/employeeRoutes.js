import express from 'express'
import {
  createNewEmployee,
  getAllEmployees,
  getEmployeeById
} from '../controllers/employeeController.js'

const router = express.Router()

router.post('/', async (req, res, next) => {
  // validate data
  const {
    emp_no,
    emp_name,
    hire_date,
    supervisor_name,
    department_code
  } = req.body
  
  const employeeData = {
    emp_no,
    emp_name,
    hire_date,
    supervisor_name,
    department_code
  }
  try {
    const newEmployee = await createNewEmployee(employeeData)
    res.sendStatus(201).json(newEmployee)
  } catch (err) {
    next(err)
  }
})

router.get('/', async (req, res, next) => {
  try {
    const allEmployees = await getAllEmployees()
    res.json(allEmployees)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  const { id } = req.params
  try {
    const employee = await getEmployeeById(id)
    res.json(employee)
  } catch (err) {
    next(err)
  }
})

// router.put('/:id', async (req, res, next) => {
//   // patch?
//   // Update the details of an employee.
//   // 200
// })

// router.delete('/:id', async (req, res, next) => {
//   // Remove an employee by ID.
//   // 204
// })

export default router
