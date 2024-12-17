import fetch from 'node-fetch'

const current = async (city) => {
  const API_KEY = process.env.OPENWEATHER_API_KEY
  const resRaw = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=imperial`)
  const res = await resRaw.json()
  
  const { weather, main, wind } = res
  const description = `${weather[0].main}, with a high of ${Math.round(main.temp_max)}\u{2109} and a low of ${Math.round(main.temp_min)}\u{2109}. Humidity at ${main.humidity}% with winds around ${Math.round(wind.speed)}mph`

  return {
    current: Math.round(main.temp),
    humidity: main.humidity,
    description
  }
}

export default current
