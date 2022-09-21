import fs from 'node:fs/promises'

import getWeather from './data/weather.mjs'
import readme from './src/readme.mjs'

(async () => {
  const currentGuildfordWeather = getWeather({
    latitude: '51.23642',
    longitude: '-0.5702912',
    apiKey: process.env.WEATHER_API_KEY,
  })

  const currentGeelongWeather = getWeather({
    latitude: '-38.14852',
    longitude: '144.36017',
    apiKey: process.env.WEATHER_API_KEY,
  })

  const [
    guildfordWeather,
    geelongWeather,
  ] = await Promise.all([
    currentGuildfordWeather,
    currentGeelongWeather,
  ])

  const readmeText = readme({
    guildfordWeather: guildfordWeather.currently,
    geelongWeather: geelongWeather.currently,
  })

  await fs.writeFile('./readme.md', readmeText)
})()
