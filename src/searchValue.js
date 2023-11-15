export default function searchValue() {
  if (document.querySelector("#search").value) {
    console.log(document.querySelector("#search").value);
    return document.querySelector("#search").value;
  } else {
    return "banja_luka";
  }
}
