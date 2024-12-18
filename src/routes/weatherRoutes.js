import express from 'express'
import currentWeather from '../controllers/weatherController.js'

const router = express.Router()

router.post('/', currentWeather)

export default router
