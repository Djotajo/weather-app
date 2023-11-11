import searchBar from "./searchbar";
import searchButton from "./searchbutton";

export default function header() {
  const header = document.createElement("header");

  header.appendChild(searchBar());
  header.appendChild(searchButton());

  return header;
}
