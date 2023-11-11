import getWeather from "./getweather";

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

  return search;
}
