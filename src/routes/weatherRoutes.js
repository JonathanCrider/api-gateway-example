import express from 'express'
import current from '../controllers/weatherController.js'

const router = express.Router()

router.post('/', async (req, res, next) => {
  const { city } = req.body
  const currentWeather = await current(city)
  res.json(currentWeather)
})

export default router
