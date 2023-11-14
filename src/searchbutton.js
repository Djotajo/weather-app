import getWeather from "./getweather";
import pageLoad from "./pageload";

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

// export default function searchButton() {
//     const searchButton = document.createElement("button");
//     searchButton.value = "Submit";
//     searchButton.innerHTML = "Submit";

//     searchButton.addEventListener("click", async function () {
//       let home = document.querySelector("#vrijeme");
//       home.innerHTML = "";
//       if (document.querySelector("#search").value) {
//         home.appendChild(
//           await getWeather(document.querySelector("#search").value)
//         );
//       } else {
//         home.appendChild(await getWeather());
//       }
//     });

//     return searchButton;
//   }
