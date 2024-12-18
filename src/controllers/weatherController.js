import fetch from 'node-fetch'

const currentWeather = async (req, res, next) => {
  // I know you said create a simple program or CLI tool, but decided to implement as
  // a route since I was building the server anyway.

  const { city } = req.body
  const apiKey = process.env.OPENWEATHER_API_KEY

  if (!city) return res.status(400).json({ error: 'Missing reqired data'})
  // TODO: add more validation for valid city

  try {
    const resRaw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
    const data = await resRaw.json()
    
    const { weather, main, wind } = data
    const description = `${weather[0].main}, with a high of ${Math.round(main.temp_max)}\u{2109} and a low of ${Math.round(main.temp_min)}\u{2109}. Humidity at ${main.humidity}% with winds around ${Math.round(wind.speed)}mph`
  
    const current = {
      current: Math.round(main.temp),
      humidity: main.humidity,
      description
    }
    res.json(current)
  } catch (err) {
    console.error('Error fetching weather', err.message)
    res.status(500).json({ error: `Failed to retrieve weather for ${city}`})
  }
}

export default currentWeather
