import getMetric from "./getMetric";
import getImperial from "./getImperial";
import getHourly from "./getHourly";
import getData from "./getData";
import searchFunction from "./searchFunction";
import searchValue from "./searchValue";

export default function units() {
  const unitsDiv = document.createElement("div");
  unitsDiv.setAttribute("id", "units-div");
  const unitsButtonLabel = document.createElement("label");
  unitsButtonLabel.classList.add("switch");
  const unitsInput = document.createElement("input");
  unitsInput.setAttribute("type", "checkbox");
  unitsInput.setAttribute("id", "checkbox");
  const unitsSpan = document.createElement("span");
  unitsSpan.classList.add("slider");
  unitsSpan.classList.add("round");
  const unit = document.createElement("p");
  unit.setAttribute("id", "unit-p");
  unit.innerHTML = "Metric";

  // unit = document.querySelector("#unit-p");
  // unitsInput = document.querySelector("#checkbox");

  unitsInput.addEventListener("click", async function () {
    console.log("sranje radi");
    if (unit.innerHTML === "Metric") {
      getImperial(await getData(searchValue()));
      console.log(await searchValue());
      // await getHourly(await getData(searchFunction()));
      unit.innerHTML = "Imperial";
    } else {
      console.log(await searchValue());
      getMetric(await getData(searchValue()));

      // await getHourly(await getData(searchFunction()));
      unit.innerHTML = "Metric";
    }
    getHourly(await getData(searchValue()));
  });

  unitsButtonLabel.appendChild(unitsInput);
  unitsButtonLabel.appendChild(unitsSpan);

  unitsDiv.appendChild(unitsButtonLabel);
  unitsDiv.appendChild(unit);
  return unitsDiv;
}

{
  /* <label class="switch">
  <input type="checkbox">
  <span class="slider round"></span>
</label> */
}
