import header from "./header";
import footer from "./footer";
import gitLogo from "../assets/github-mark-white.png";
import getWeather from "./getweather";

import setWeather from "./setweather";
// import deleteIcon from "../assets/delete.svg";

export default async function pageLoad() {
  const content = document.querySelector("#content");
  const home = document.createElement("div");
  // const homeWeather = document.createElement("div");
  home.setAttribute("id", "vrijeme");

  // content.innerHTML = "";
  content.appendChild(header());

  content.appendChild(home);

  const locationInfo = document.createElement("div");
  locationInfo.setAttribute("id", "location-info");
  home.appendChild(locationInfo);

  const currentWeather = document.createElement("div");
  currentWeather.setAttribute("id", "current");
  home.appendChild(currentWeather);

  const hourly = document.createElement("div");
  hourly.setAttribute("id", "hourly");
  home.appendChild(hourly);
  // console.log(getWeather());
  // let weatherInfo = await getWeather();
  // homeWeather.appendChild(await getWeather());
  // home.appendChild(homeWeather);
  home.appendChild(await getWeather());
  content.appendChild(footer());

  document.getElementById("githubLogo").src = gitLogo;
}
