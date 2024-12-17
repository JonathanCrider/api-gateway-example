import express from 'express'
import { test } from '../controllers/testController.js'

const router = express.Router()

router.get('/', (req, res, next) => {
  res.send(test())
})

router.post('/', (req, res, next) => {
  const { message } = req.body
  res.json({ message })
})

export default router
