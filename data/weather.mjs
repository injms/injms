const getWeather = async ({ latitude, longitude, apiKey }) => {
  const weatherAPIURI = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`
  const { weather } = await (await fetch(weatherAPIURI)).json()

  // TODO: Use the more descriptive `description` rather than the `main`; this
  // will allow for `light thunderstorm`, `thunderstorm with heavy rain` etc
  // rather than the more vague `thunderstorm`.
  const dictionary = {
    Ash: 'ashy',
    Clear: 'bright',
    Clouds: 'cloudy',
    Drizzle: 'drizzly',
    Dust: 'dusty',
    Fog: 'foggy',
    Haze: 'hazy',
    Mist: 'misty',
    Rain: 'rainy',
    Sand: 'sandy',
    Smoke: 'smokey',
    Snow: 'snowy',
    Squall: 'squally',
    Thunderstorm: 'stormy',
    Tornado: 'really really windy',
  }

  return {
    currently: dictionary[weather?.[0].main],
  }
}

export default getWeather
