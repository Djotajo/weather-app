export default async function getLocation(responseJson) {
  const locationInfo = document.querySelector("#location-info");
  locationInfo.innerHTML = "";

  let location = document.createElement("div");
  location.innerHTML = `${await responseJson.location
    .name}, ${await responseJson.location.country}`;

  let localTime = document.createElement("div");
  localTime.innerHTML = `${new Date(
    responseJson.location.localtime
  ).toLocaleString()}`;

  locationInfo.appendChild(location);
  locationInfo.appendChild(localTime);
}
