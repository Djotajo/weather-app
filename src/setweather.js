import getWeather from "./getweather";

export default async function setWeather() {
  const home = document.querySelector("#home");
  home.innerHTML = await getWeather().current.cloud;
}
