import getWeather from "./getweather";
import searchFunction from "./searchFunction";

export default function searchBar() {
  const search = document.createElement("input");
  search.type = "text";
  search.name = "search";
  search.id = "search";
  search.placeholder = "Enter location";
  //   search.value = "Belgrade";

  //   search.addEventListener("submit", function () {
  //     getWeather(search.value);
  //   });
  search.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchFunction();
    }
  });

  return search;
}
