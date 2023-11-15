export default async function getData(city) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=02e62c481b0f42a08d755821231011&q=${city}&days=3`
  );
  const responseJson = await response.json();
  return responseJson;
}
