import sunny from "../assets/sunny.jpg";
import night from "../assets/night.jpg";
import rain from "../assets/rain.jpg";
import snow from "../assets/snow.jpg";
import getData from "./getData";
import getLocation from "./getLocation";
import getMetric from "./getMetric";
import getImperial from "./getImperial";
import getHourly from "./getHourly";

export default async function getWeather(city = "banja_luka") {
  try {
    const responseJson = await getData(city);

    console.log(responseJson);
    const home = document.querySelector("#content");
    const weather = document.createElement("div");

    const unitInfo = document.querySelector("#unit-p");
    const unitButton = document.querySelector("#checkbox");

    getLocation(responseJson);

    if (unitInfo.innerHTML === "Metric") {
      await getMetric(responseJson);
    } else {
      await getImperial(responseJson);
    }

    getHourly(responseJson);

    home.classList.add("sunny");
    home.style.backgroundImage = `url(${sunny})`;

    if ((await responseJson.current.condition.text).includes("rain")) {
      home.style.backgroundImage = `url(${rain})`;
    } else if ((await responseJson.current.condition.text).includes("snow")) {
      home.style.backgroundImage = `url(${snow})`;
    } else if ((await responseJson.current.is_day) == 0) {
      home.style.backgroundImage = `url(${night})`;
    }

    return weather;
  } catch (error) {
    alert("Invalid location, returning default");
    getWeather();
  }
}
