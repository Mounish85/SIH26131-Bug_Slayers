const Disease = require("../models/Disease");

// Create disease
const createDisease = async (req, res) => {
  try {
    const disease = await Disease.create(req.body);

    res.status(201).json({
      success: true,
      message: "Disease created successfully",
      data: disease
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create disease",
      error: error.message
    });
  }
};

// Get all diseases
const getDiseases = async (req, res) => {
  try {
    const diseases = await Disease.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: diseases.length,
      data: diseases
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch diseases",
      error: error.message
    });
  }
};

// Get disease by ID
const getDiseaseById = async (req, res) => {
  try {
    const disease = await Disease.findById(req.params.id);

    if (!disease) {
      return res.status(404).json({
        success: false,
        message: "Disease not found"
      });
    }

    res.status(200).json({
      success: true,
      data: disease
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch disease",
      error: error.message
    });
  }
};

// Get diseases by crop
const getDiseasesByCrop = async (req, res) => {
  try {
    const diseases = await Disease.find({
      crop: {
        $regex: `^${req.params.cropName}$`,
        $options: "i"
      }
    });

    res.status(200).json({
      success: true,
      count: diseases.length,
      data: diseases
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch diseases for crop",
      error: error.message
    });
  }
};

// Bulk create diseases
const createDiseasesBulk = async (req, res) => {
  try {
    const diseases = await Disease.insertMany(req.body);

    res.status(201).json({
      success: true,
      message: "Diseases uploaded successfully",
      count: diseases.length,
      data: diseases
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk disease upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createDisease,
  getDiseases,
  getDiseaseById,
  getDiseasesByCrop,
  createDiseasesBulk
};