import home from "./home";
import footer from "./footer";
import gitLogo from "../assets/github-mark-white.png";
import getWeather from "./getweather";
import setWeather from "./setweather";
// import deleteIcon from "../assets/delete.svg";

export default function pageLoad() {
  const content = document.querySelector("#content");

  content.appendChild(home());
  content.appendChild(footer());
  // setWeather();
  getWeather();

  document.getElementById("githubLogo").src = gitLogo;
}
