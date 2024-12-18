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
  const {
    name,
    email,
    position
  } = req.body
  
  if (!name || !email || !position) res.sendStatus(400)
  
  const employeeData = {
    name,
    email,
    position
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
  const { id } = req.params

  const {
    name,
    email,
    position
  } = req.body
  
  if (!id || !name || !email || !position) res.sendStatus(400)

  const employeeData = {
    id,
    name,
    email,
    position
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
  if (!id) res.status(400)
  
    try {
    const deletedEmployee = await deleteEmployee(id)
    console.log(deletedEmployee)
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
})

export default router
