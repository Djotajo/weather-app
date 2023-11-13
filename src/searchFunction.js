import getWeather from "./getweather";

export default async function searchFunction() {
  let home = document.querySelector("#vrijeme");
  home.innerHTML = "";
  if (document.querySelector("#search").value) {
    home.appendChild(await getWeather(document.querySelector("#search").value));
  } else {
    home.appendChild(await getWeather());
  }
}
