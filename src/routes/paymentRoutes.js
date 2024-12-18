import express from 'express'
import {
  recentChargesByDays
} from '../controllers/paymentController.js'

const router = express.Router()

router.get('/', async (req, res, next) => {
  const numDays = parseInt(req.query.numDays)
  const chargesLast30 = await recentChargesByDays(numDays)
  res.json(chargesLast30)
})

export default router
