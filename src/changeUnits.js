export default function changeUnits() {
  //   const unitValue = document.querySelector("#checkbox");
  const unitInfo = document.querySelector("#unit-p");

  //   console.log(unitValue.value);
  if (unitInfo.innerHTML === "Metric") {
    unitInfo.innerHTML = "Imperial";
    console.log(unitInfo);
  } else if (unitInfo.innerHTML === "Imperial") {
    unitInfo.innerHTML = "Metric";
    console.log(unitInfo);
  }
}
