import express from 'express'
import {
  recentChargesByDays
} from '../controllers/paymentController.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
  // setup
  res.json({ message: await recentChargesByDays() })
})

export default router
