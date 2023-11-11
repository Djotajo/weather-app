import sunny from "../assets/sunny.jpg";
import night from "../assets/night.jpg";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";

export default async function getWeather(city = "belgrade") {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=${city}&days=3`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    const home = document.querySelector("#content");
    // home.innerHTML = responseJson.current.cloud;
    // console.log(responseJson.current.cloud);
    const weather = document.createElement("div");
    let location = document.createElement("p");
    location.innerHTML = `${await responseJson.location
      .name}, ${await responseJson.location.country}`;

    let temperature = document.createElement("p");
    temperature.innerHTML = `${await responseJson.current.temp_c}°C`;

    let condition = document.createElement("p");
    condition.innerHTML = await responseJson.current.condition.text;

    let conditionImg = document.createElement("img");
    conditionImg.src = await responseJson.current.condition.icon;

    let chanceOfRain = document.createElement("p");
    chanceOfRain.innerHTML = `Chance of rain - ${await responseJson.forecast
      .forecastday[0].day.daily_chance_of_rain}%`;

    weather.appendChild(location);
    weather.appendChild(temperature);
    weather.appendChild(condition);
    weather.appendChild(conditionImg);
    weather.appendChild(chanceOfRain);

    home.classList.add("sunny");
    home.style.backgroundImage = `url(${sunny})`;

    let units = "metric";
    // console.log(responseJson.current.wind_mph);
    // console.log(responseJson.current.wind_mph);
    let items = ["humidity", "is_day", "uv"];
    let metricItems = ["temp_c", "feelslike_c", "wind_kph"];
    let imperialItems = ["temp_f", "feelslike_f", "wind_mph"];
    for (const [key, value] of Object.entries(responseJson.current)) {
      if (items.includes(key)) {
        const item = document.createElement("p");
        item.innerHTML = `${key}: ${value}`;
        weather.appendChild(item);
      }
      if (units === "metric" && metricItems.includes(key)) {
        const item = document.createElement("p");
        item.innerHTML = `${key}: ${value}`;
        weather.appendChild(item);
      }

      // console.log(`${key}: ${value}`);
    }
    if ((await responseJson.current.condition.text).includes("rain")) {
      home.style.backgroundImage = `url(${rain})`;
    } else if ((await responseJson.current.condition.text).includes("snow")) {
      home.style.backgroundImage = `url(${snow})`;
    } else if ((await responseJson.current.is_day) == 0) {
      home.style.backgroundImage = `url(${night})`;
    }

    // if ((await responseJson.current.cloud) >= 0) {
    //   //   console.log(weather);
    // }
    // console.log(weather);
    return weather;
    // return responseJson;
  } catch (error) {
    console.log(error);
  }
}

// humidity;
// is_day;
// forecast.forecastday[0].day.daily_chance_of_rain;
// uv;

// temp_c;
// feelslike_c;
// wind_kph;

// current.temp_f;
// current.current.feelslike_f;
// current.wind_mph;
