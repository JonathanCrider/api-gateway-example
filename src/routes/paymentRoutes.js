import express from 'express'
import { recentChargesByDays } from '../controllers/paymentController.js'

const router = express.Router()

router.get('/recentCharges', recentChargesByDays)

export default router
