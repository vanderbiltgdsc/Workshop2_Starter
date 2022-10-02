// NEVER PUT YOUR API KEY IN ANY FRONTEND FILE, AND DON'T SHARE IT WITH OTHERS
API_KEY = "";

// Gets weather data for a specific city from our api
async function getWeather(city) {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      city +
      "&units=imperial&appid=" +
      API_KEY
  );
  const data = await response.json();
  displayWeather(data);
}

// Displays Weather
function displayWeather(data) {
  // Destructuring
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity, feels_like } = data.main;
  const { speed } = data.wind;

  document.querySelector(".city").innerText = "Weather in " + name;
  document.querySelector(".weather__icon").src =
    "http://openweathermap.org/img/wn/" + icon + ".png";
  document.querySelector(".temp").innerText = Math.round(temp) + "°F";
  document.querySelector(".description").innerText = description;
  document.querySelector(".wind").innerText = "Wind Speed: " + speed + " mph";
  document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
  document.querySelector(".feels_like").innerText =
    "Feels like: " + feels_like + "°F";
}

// Gets the city that the user inputs
function searchWeather() {
  const city = document.querySelector(".search__bar").value;
  getWeather(city);
}

// Listen for click event on the search button
document.querySelector(".search__button").addEventListener("click", () => {
  searchWeather();
});

getWeather("Nashville");
