import header from "./header";
import footer from "./footer";
import gitLogo from "../assets/github-mark-white.png";
import getWeather from "./getweather";

export default async function pageLoad() {
  const content = document.querySelector("#content");
  const home = document.createElement("div");

  home.setAttribute("id", "vrijeme");

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

  home.appendChild(await getWeather());
  content.appendChild(footer());

  document.getElementById("githubLogo").src = gitLogo;
}
