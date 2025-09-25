document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("searchBtn");

  searchBtn.addEventListener("click", async () => {
    const city = document.getElementById("cityInput").value.trim();
    if (!city) return alert("Please enter a city name!");

    const apiKey = "8a94aa566ca5938ce99c03cd76327960"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json();

      const weatherBox = document.getElementById("weatherResult");
      weatherBox.innerHTML = `
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather">
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡 ${data.main.temp}°C</p>
        <p>${data.weather[0].description}</p>`;
    } catch (error) {
      document.getElementById("weatherResult").innerHTML =
        `<p style="color:red;">❌ ${error.message}</p>`;
    }
  });
});