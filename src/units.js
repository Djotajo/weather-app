import changeUnits from "./changeUnits";

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
  //   unit.innerHTML = "Metric";

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
