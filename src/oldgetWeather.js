// import sunny from "../assets/sunny.jpg";
// import night from "../assets/night.jpg";
// import rain from "../assets/rain.jpg";
// import snow from "../assets/snow.jpg";
// import getLocation from "./getLocation";
// import getMetric from "./getMetric";
// import getImperial from "./getImperial";

// export default async function getWeather(city = "banja_luka") {
//   try {
//     const response = await fetch(
//       `https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=${city}&days=3`
//     );
//     const responseJson = await response.json();
//     console.log(responseJson);
//     const home = document.querySelector("#content");
//     const weather = document.createElement("div");
//     // const locationInfo = document.createElement("div");
//     // const currentWeather = document.createElement("div");

//     const unitInfo = document.querySelector("#unit-p");

//     getLocation(responseJson);

//     // let location = document.createElement("div");
//     // location.innerHTML = `${await responseJson.location
//     //   .name}, ${await responseJson.location.country}`;

//     // let localTime = document.createElement("div");
//     // localTime.innerHTML = `${new Date(
//     //   responseJson.location.localtime
//     // ).toLocaleString()}`;

//     // locationInfo.appendChild(location);
//     // locationInfo.appendChild(localTime);

//     // locationInfo.setAttribute("id", "location-info");

//     // weather.appendChild(locationInfo);

//     // const currentWeather = document.createElement("div");
//     // currentWeather.setAttribute("id", "current");
//     // weather.appendChild(currentWeather);

//     if (unitInfo.innerHTML === "Metric") {
//       console.log("ovdje");
//       getMetric(responseJson);
//     } else {
//       getImperial(responseJson);
//     }

//     unitInfo.addEventListener("DOMSubtreeModified", async function () {
//       if (unitInfo.innerHTML === "Metric") {
//         // weather.removeChild(weather.firstChild);
//         getMetric(responseJson);
//       } else {
//         // weather.removeChild(weather.firstChild);
//         getImperial(responseJson);
//       }
//     });

//     // if (unitInfo.innerHTML === "Metric") {
//     //   weather.appendChild(await getMetric(responseJson));
//     // } else {
//     //   weather.appendChild(await getImperial(responseJson));
//     // }

//     // unitInfo.addEventListener("DOMSubtreeModified", async function () {
//     //   if (unitInfo.innerHTML === "Metric") {
//     //     weather.removeChild(weather.firstChild);
//     //     weather.appendChild(await getMetric(responseJson));
//     //   } else {
//     //     weather.removeChild(weather.firstChild);
//     //     weather.appendChild(await getImperial(responseJson));
//     //   }
//     // });

//     const hourly = document.createElement("div");
//     let hourlyCast = [];
//     await responseJson.forecast.forecastday[0].hour.forEach((element) => {
//       hourlyCast.push(element);
//     });
//     await responseJson.forecast.forecastday[1].hour.forEach((element) => {
//       hourlyCast.push(element);
//     });
//     console.log(hourlyCast);
//     hourlyCast = hourlyCast.filter(
//       (element) =>
//         new Date(element.time) > new Date(responseJson.location.localtime)
//     );
//     console.log(hourlyCast);

//     for (let n = 0; n < 6; n++) {
//       let hour = document.createElement("div");
//       let hourImg = document.createElement("img");
//       hourImg.src = hourlyCast[n].condition.icon;

//       hour.innerHTML = `<span>${
//         hourlyCast[n].time.split(" ")[1]
//       }</span> <span>${
//         hourlyCast[n].temp_c
//       }°C</span> <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>weather-pouring</title><path d="M9,12C9.53,12.14 9.85,12.69 9.71,13.22L8.41,18.05C8.27,18.59 7.72,18.9 7.19,18.76C6.65,18.62 6.34,18.07 6.5,17.54L7.78,12.71C7.92,12.17 8.47,11.86 9,12M13,12C13.53,12.14 13.85,12.69 13.71,13.22L11.64,20.95C11.5,21.5 10.95,21.8 10.41,21.66C9.88,21.5 9.56,20.97 9.7,20.43L11.78,12.71C11.92,12.17 12.47,11.86 13,12M17,12C17.53,12.14 17.85,12.69 17.71,13.22L16.41,18.05C16.27,18.59 15.72,18.9 15.19,18.76C14.65,18.62 14.34,18.07 14.5,17.54L15.78,12.71C15.92,12.17 16.47,11.86 17,12M17,10V9A5,5 0 0,0 12,4C9.5,4 7.45,5.82 7.06,8.19C6.73,8.07 6.37,8 6,8A3,3 0 0,0 3,11C3,12.11 3.6,13.08 4.5,13.6V13.59C5,13.87 5.14,14.5 4.87,14.96C4.59,15.43 4,15.6 3.5,15.32V15.33C2,14.47 1,12.85 1,11A5,5 0 0,1 6,6C7,3.65 9.3,2 12,2C15.43,2 18.24,4.66 18.5,8.03L19,8A4,4 0 0,1 23,12C23,13.5 22.2,14.77 21,15.46V15.46C20.5,15.73 19.91,15.57 19.63,15.09C19.36,14.61 19.5,14 20,13.72V13.73C20.6,13.39 21,12.74 21,12A2,2 0 0,0 19,10H17Z" /></svg> ${
//         hourlyCast[n].chance_of_rain
//       }% </span>`;
//       hour.appendChild(hourImg);
//       hourly.appendChild(hour);
//     }
//     home.classList.add("sunny");
//     home.style.backgroundImage = `url(${sunny})`;
//     hourly.setAttribute("id", "hourly");
//     weather.appendChild(hourly);

//     if ((await responseJson.current.condition.text).includes("rain")) {
//       home.style.backgroundImage = `url(${rain})`;
//     } else if ((await responseJson.current.condition.text).includes("snow")) {
//       home.style.backgroundImage = `url(${snow})`;
//     } else if ((await responseJson.current.is_day) == 0) {
//       home.style.backgroundImage = `url(${night})`;
//     }

//     weather.classList.add("fuckingWeather");

//     return weather;
//   } catch (error) {
//     console.log(error);
//   }
// }
