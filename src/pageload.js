import header from "./header";
import footer from "./footer";
import gitLogo from "../assets/github-mark-white.png";
import getWeather from "./getweather";
import setWeather from "./setweather";
// import deleteIcon from "../assets/delete.svg";

export default async function pageLoad() {
  const content = document.querySelector("#content");
  const home = document.createElement("div");
  home.setAttribute("id", "vrijeme");

  // content.innerHTML = "";
  content.appendChild(header());
  content.appendChild(home);
  // console.log(getWeather());
  // let weatherInfo = await getWeather();
  home.appendChild(await getWeather());
  content.appendChild(footer());

  document.getElementById("githubLogo").src = gitLogo;
}
