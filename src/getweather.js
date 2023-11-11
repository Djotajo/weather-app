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
    let cityName = document.createElement("p");
    cityName.innerHTML = await responseJson.location.name;

    let country = document.createElement("p");
    country.innerHTML = await responseJson.location.country;

    weather.appendChild(cityName);
    weather.appendChild(country);

    home.classList.add("sunny");
    home.style.backgroundImage = `url(${sunny})`;
    // console.log(responseJson.current.wind_mph);
    // console.log(responseJson.current.wind_mph);
    for (const [key, value] of Object.entries(responseJson.current)) {
      const item = document.createElement("p");
      item.innerHTML = `${key}: ${value}`;
      weather.appendChild(item);
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
