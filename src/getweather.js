import sunny from "../assets/sunny.jpg";

export default async function getWeather() {
  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=london&days=3`
    );
    const responseJson = await response.json();
    console.log(responseJson);
    const home = document.querySelector("#content");
    // home.innerHTML = responseJson.current.cloud;
    console.log(responseJson.current.cloud);
    if ((await responseJson.current.cloud) >= 0) {
      home.classList.add("sunny");
      home.style.backgroundImage = `url(${sunny})`;
      console.log("kolaps");
    }
    // return responseJson;
  } catch (error) {
    console.log(error);
  }
}
