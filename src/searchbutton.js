import getWeather from "./getweather";

export default function searchButton() {
  const searchButton = document.createElement("button");
  searchButton.value = "Submit";
  searchButton.innerHTML = "Submit";

  searchButton.addEventListener("click", async function () {
    if (document.querySelector("#search").value) {
      await getWeather(document.querySelector("#search").value);
    } else {
      await getWeather();
    }
  });

  return searchButton;
}
