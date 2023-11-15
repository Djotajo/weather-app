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

// export default async function searchFunction() {
//     //   let home = document.querySelector("#vrijeme");
//     //   home.innerHTML = "";
//     if (document.querySelector("#search").value) {
//       // home.appendChild(await getWeather(document.querySelector("#search").value));
//       await getWeather(document.querySelector("#search").value);
//     } else {
//       // home.appendChild(await getWeather());
//       await getWeather();
//     }
//   }
