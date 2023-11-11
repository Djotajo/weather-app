import getWeather from "./getweather";
import pageLoad from "./pageload";

export default function searchButton() {
  const searchButton = document.createElement("button");
  searchButton.value = "Submit";
  searchButton.innerHTML = "Submit";

  //   const search = document.querySelector("#search");
  //   if (search.value) {
  //     console.log(search.value);
  //   }
  //   console.log(search.value);

  searchButton.addEventListener("click", async function () {
    // getWeather(document.querySelector("#search").value);
    let home = document.querySelector("#vrijeme");
    home.innerHTML = "";
    if (document.querySelector("#search").value) {
      home.appendChild(
        await getWeather(document.querySelector("#search").value)
      );
    } else {
      home.appendChild(await getWeather());
    }
  });

  return searchButton;
}
