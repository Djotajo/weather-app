import searchBar from "./searchbar";
import searchButton from "./searchbutton";
import units from "./units";

export default function header() {
  const header = document.createElement("header");

  header.appendChild(searchBar());
  header.appendChild(searchButton());
  header.appendChild(units());

  return header;
}
