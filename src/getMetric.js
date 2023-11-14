export default async function getMetric(responseJson) {
  const currentWeather = document.createElement("div");
  console.log("Djordje");
  console.log(responseJson);

  let temperature = document.createElement("div");
  temperature.innerHTML = `<span>Temperature</span> ${await responseJson.current
    .temp_c}°C`;

  //   if (unitInfo.innerHTML === "Metric") {
  //     temperature.innerHTML = `<span>Temperature</span> ${await responseJson
  //       .current.temp_c}°C`;
  //   } else {
  //     temperature.innerHTML = `<span>Temperature</span> ${await responseJson
  //       .current.temp_f}°F`;
  //   }

  let feelsLike = document.createElement("div");
  feelsLike.innerHTML = `<span>Feels like</span> ${await responseJson.current
    .feelslike_c}°C`;

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
    .wind_kph}km/h`;

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
