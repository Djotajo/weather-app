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
    // const response = await fetch(
    //   `https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=${city}&days=3`
    // );
    // const responseJson = await response.json();

    const responseJson = await getData(city);

    console.log(responseJson);
    const home = document.querySelector("#content");
    const weather = document.createElement("div");

    const unitInfo = document.querySelector("#unit-p");
    const unitButton = document.querySelector("#checkbox");

    getLocation(responseJson);

    // getMetric(responseJson);

    if (unitInfo.innerHTML === "Metric") {
      await getMetric(responseJson);
    } else {
      await getImperial(responseJson);
    }

    // unitButton.addEventListener("click", async function () {
    //   console.log("sranje radi");
    //   if (unitInfo.innerHTML === "Metric") {
    //     await getImperial(responseJson);
    //     await getHourly(responseJson);
    //     unitInfo.innerHTML = "Imperial";
    //   } else {
    //     await getMetric(responseJson);
    //     await getHourly(responseJson);
    //     unitInfo.innerHTML = "Metric";
    //   }
    // });
    // unitButton.removeEventListener("click");

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
    console.log(error);
  }
}
