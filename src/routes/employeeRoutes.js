import express from 'express'
import {
  createNewEmployee,
  deleteEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee
} from '../controllers/employeeController.js'

const router = express.Router()

// CREATE

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

// READ

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

// UPDATE

router.put('/:id', async (req, res, next) => {
  // validate data
  const { id } = req.params

  const {
    emp_name,
    hire_date,
    supervisor_name,
    department_code
  } = req.body
  
  const employeeData = {
    emp_no: id,
    emp_name,
    hire_date,
    supervisor_name,
    department_code
  }
  try {
    const updatedEmployee = await updateEmployee(employeeData)
    console.log(updatedEmployee)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

// DELETE

router.delete('/:id', async (req, res, next) => {
  // validate data
  const { id } = req.params
  try {
    const deletedEmployee = await deleteEmployee(id)
    console.log(deletedEmployee)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

export default router
