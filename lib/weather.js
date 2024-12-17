import fetch from 'node-fetch'

export const weather = async (city) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
  return res.json()
}
