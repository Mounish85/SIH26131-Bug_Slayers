const Weather = require("../models/Weather");

// Create weather record
const createWeather = async (req, res) => {
  try {
    const weather = await Weather.create(req.body);

    const populatedWeather = await Weather.findById(weather._id)
      .populate("diseaseRisk.possibleDiseases");

    res.status(201).json({
      success: true,
      message: "Weather record created successfully",
      data: populatedWeather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create weather record",
      error: error.message
    });
  }
};

// Get current/latest weather
const getCurrentWeather = async (req, res) => {
  try {
    const { district } = req.query;

    const filter = district
      ? { "location.district": district }
      : {};

    const weather = await Weather.findOne(filter)
      .populate("diseaseRisk.possibleDiseases")
      .sort({ fetchedAt: -1 });

    if (!weather) {
      return res.status(404).json({
        success: false,
        message: "Weather data not found"
      });
    }

    res.status(200).json({
      success: true,
      data: weather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch current weather",
      error: error.message
    });
  }
};

// Get weather forecast
const getWeatherForecast = async (req, res) => {
  try {
    const { district } = req.query;

    const filter = district
      ? { "location.district": district }
      : {};

    const weather = await Weather.find(filter)
      .populate("diseaseRisk.possibleDiseases")
      .sort({ fetchedAt: -1 })
      .limit(7);

    res.status(200).json({
      success: true,
      count: weather.length,
      data: weather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch weather forecast",
      error: error.message
    });
  }
};

// Get weather-based disease risk
const getWeatherRisk = async (req, res) => {
  try {
    const { district } = req.query;

    const filter = district
      ? { "location.district": district }
      : {};

    const weather = await Weather.findOne(filter)
      .populate("diseaseRisk.possibleDiseases")
      .sort({ fetchedAt: -1 });

    if (!weather) {
      return res.status(404).json({
        success: false,
        message: "Weather data not found"
      });
    }

    res.status(200).json({
      success: true,
      data: weather.diseaseRisk
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch weather risk",
      error: error.message
    });
  }
};

const createWeatherBulk = async (req, res) => {
  try {
    const weatherRecords = await Weather.insertMany(req.body);

    const populatedWeather = await Weather.find({
      _id: {
        $in: weatherRecords.map(
          (weather) => weather._id
        )
      }
    }).populate("diseaseRisk.possibleDiseases");

    res.status(201).json({
      success: true,
      message: "Weather records uploaded successfully",
      count: populatedWeather.length,
      data: populatedWeather
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk weather upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createWeather,
  getCurrentWeather,
  getWeatherForecast,
  getWeatherRisk,
  createWeatherBulk
};