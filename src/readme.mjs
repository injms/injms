export default ({
  guildfordWeather = '',
  geelongWeather = '',
}) => `
# Hi, I'm Ian.

And I make things for the web.

Sometimes big things - currently I'm lead frontend developer for [GOV.UK].

Sometimes small things - like [Squarify][squarify], [yaled], and any attempt to _once again try and consistently blog_.

Based near [${guildfordWeather} Guildford][weather_in_guildford] 🇬🇧 for the moment, I'm about to move to [${geelongWeather} Geelong][weather_in_geelong] 🇦🇺.

My work and personal project code is here on [GitHub][github], my CV is on [LinkedIn][linkedin], and some photos are on [Instagram][instagram]. You should take a look.

[weather_in_guildford]: https://openweathermap.org/city/2647793
[weather_in_geelong]: https://openweathermap.org/city/2165798
[squarify]: https://squarify.inj.ms/
[yaled]: https://github.com/injms/yaled
[GOV.UK]: https://www.gov.uk
[github]: https://inj.ms/github
[linkedin]: https://inj.ms/linkedin
[instagram]: https://inj.ms/instagram
`.trimStart()
