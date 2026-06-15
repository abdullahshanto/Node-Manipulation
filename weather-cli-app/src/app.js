const fetchWeather = require("./weatherService");
const {
  getCachedWeather,
  saveWeatherToCache
} = require("./cacheService");

const logRequest = require("./logger");

async function main() {
  try {
    const city = process.argv[2];

    if (!city) {
      console.log("❌ Please provide a city name.");
      console.log("Usage: npm start Dhaka");
      return;
    }

    const normalizedCity = city.toLowerCase();

    // Check cache
    const cachedData = getCachedWeather(normalizedCity);

    if (cachedData) {
      console.log("✅ Using cached data\n");

      displayWeather(cachedData);

      logRequest(`CACHE HIT for city: ${city}`);

      return;
    }

    // API request
    console.log("🌍 Fetching weather data...\n");

    const weatherData = await fetchWeather(city);

    saveWeatherToCache(normalizedCity, weatherData);

    logRequest(`API REQUEST for city: ${city}`);

    displayWeather(weatherData);

  } catch (error) {

    if (error.response) {
      console.log("❌ City not found.");
    } else {
      console.log("❌ Error:", error.message);
    }

    logRequest(`ERROR: ${error.message}`);
  }
}

function displayWeather(data) {
  console.log("========== WEATHER REPORT ==========");
  console.log(`📍 City: ${data.name}`);
  console.log(`🌡 Temperature: ${data.main.temp} °C`);
  console.log(`☁ Weather: ${data.weather[0].description}`);
  console.log(`💧 Humidity: ${data.main.humidity}%`);
  console.log(`🌬 Wind Speed: ${data.wind.speed} m/s`);
  console.log("====================================");
}

main();