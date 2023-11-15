import getWeather from "./getweather";

export default async function searchFunction() {
  if (document.querySelector("#search").value) {
    console.log("ima neka vrijednost");
    console.log(document.querySelector("#search").value);
    await getWeather(document.querySelector("#search").value);
  } else {
    await getWeather();
    console.log("ima neka vrijednost 2");
  }
}
