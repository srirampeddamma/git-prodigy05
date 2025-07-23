const apiKey = "ca4aaa8d7b554b78ab522738251307"; // Your WeatherAPI key

function getWeather() {
  const city = ${document.getElementById("cityInput").value},IN;

  if (city === '') {
    alert("Please enter a city name!");
    return;
  }

  const url = https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("Failed to fetch");
      return response.json();
    })
    .then(data => {
      document.getElementById("location").innerText = ${data.location.name}, ${data.location.country};
      document.getElementById("temperature").innerText = 🌡 Temperature: ${data.current.temp_c}°C;
      document.getElementById("description").innerText = 🌥 Condition: ${data.current.condition.text};
      document.getElementById("humidity").innerText = 💧 Humidity: ${data.current.humidity}%;
      document.getElementById("wind").innerText = 💨 Wind: ${data.current.wind_kph} km/h;
      document.getElementById("icon").src = "https:" + data.current.condition.icon;

      document.getElementById("weatherCard").classList.remove("hidden");
    })
    .catch(() => {
      alert("❌ Failed to fetch weather data.");
    });
}
// Trigger getWeather() when Enter is pressed
document.getElementById("cityInput").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    getWeather();
  }
});