const fs = require("fs");
const path = require("path");

const cacheFilePath = path.join(__dirname, "../cache/weather-cache.json");

function readCache() {
  try {
    const data = fs.readFileSync(cacheFilePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

function writeCache(cacheData) {
  fs.writeFileSync(
    cacheFilePath,
    JSON.stringify(cacheData, null, 2),
    "utf-8"
  );
}

function getCachedWeather(city) {
  const cache = readCache();

  if (!cache[city]) {
    return null;
  }

  const cachedEntry = cache[city];

  const now = Date.now();
  const oneHour = 60 * 60 * 1000;

  if (now - cachedEntry.timestamp < oneHour) {
    return cachedEntry.data;
  }

  return null;
}

function saveWeatherToCache(city, data) {
  const cache = readCache();

  cache[city] = {
    timestamp: Date.now(),
    data
  };

  writeCache(cache);
}

module.exports = {
  getCachedWeather,
  saveWeatherToCache
};