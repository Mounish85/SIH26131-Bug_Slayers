const express = require("express");

const {
  createWeather,
  getCurrentWeather,
  getWeatherForecast,
  getWeatherRisk,
  createWeatherBulk
} = require("../controllers/weatherController");

const router = express.Router();

router.post("/", createWeather);

router.post("/bulk",createWeatherBulk);

router.get("/current", getCurrentWeather);

router.get("/forecast", getWeatherForecast);

router.get("/risk", getWeatherRisk);

module.exports = router;