export default async function getImperial(responseJson) {
  const currentWeather = document.createElement("div");

  let temperature = document.createElement("div");
  temperature.innerHTML = `<span>Temperature</span> ${await responseJson.current
    .temp_f}°F`;

  let feelsLike = document.createElement("div");
  feelsLike.innerHTML = `<span>Feels like</span> ${await responseJson.current
    .feelslike_f}°F`;

  let condition = document.createElement("div");

  let conditionText = document.createElement("span");
  conditionText.innerHTML = await responseJson.current.condition.text;

  let conditionImg = document.createElement("img");
  conditionImg.src = await responseJson.current.condition.icon;

  condition.appendChild(conditionText);
  condition.appendChild(conditionImg);

  let chanceOfRain = document.createElement("div");
  chanceOfRain.innerHTML = `<span>Chance of rain</span> ${await responseJson
    .forecast.forecastday[0].day.daily_chance_of_rain}%`;

  let wind = document.createElement("div");
  wind.innerHTML = `<span>Wind</span> ${await responseJson.current
    .wind_mph}mph`;

  let humidity = document.createElement("div");
  humidity.innerHTML = `<span>Humidity</span> ${await responseJson.current
    .humidity}%`;

  currentWeather.appendChild(temperature);
  currentWeather.appendChild(feelsLike);
  currentWeather.appendChild(condition);
  currentWeather.appendChild(chanceOfRain);
  currentWeather.appendChild(wind);
  currentWeather.appendChild(humidity);

  currentWeather.setAttribute("id", "current");

  return currentWeather;
}
