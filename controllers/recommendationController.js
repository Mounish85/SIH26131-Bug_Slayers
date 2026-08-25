const Recommendation = require("../models/Recommendation");

// Create recommendation
const createRecommendation = async (req, res) => {
  try {
    const recommendation = await Recommendation.create(req.body);

    res.status(201).json({
      success: true,
      message: "Recommendation created successfully",
      data: recommendation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create recommendation",
      error: error.message
    });
  }
};

// Get recommendations for a disease
const getRecommendationsByDisease = async (req, res) => {
  try {
    const recommendations = await Recommendation.find({
      diseaseId: req.params.diseaseId
    }).populate("diseaseId");

    res.status(200).json({
      success: true,
      count: recommendations.length,
      data: recommendations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch recommendations",
      error: error.message
    });
  }
};

// Get recommendation for a detection
const getRecommendationByDetection = async (req, res) => {
  try {
    const Detection = require("../models/Detection");

    const detection = await Detection.findById(
      req.params.detectionId
    ).populate("diseaseId");

    if (!detection) {
      return res.status(404).json({
        success: false,
        message: "Detection not found"
      });
    }

    if (!detection.diseaseId) {
      return res.status(404).json({
        success: false,
        message: "No disease associated with this detection"
      });
    }

    const recommendation = await Recommendation.findOne({
      diseaseId: detection.diseaseId._id,
      severityLevel: detection.severity.level
    }).populate("diseaseId");

    if (!recommendation) {
      return res.status(404).json({
        success: false,
        message: "Recommendation not found"
      });
    }

    res.status(200).json({
      success: true,
      data: recommendation
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch recommendation",
      error: error.message
    });
  }
};

//Recommendation Bulk Upload
const createRecommendationsBulk = async (req, res) => {
  try {
    const recommendations = await Recommendation.insertMany(req.body);

    const populatedRecommendations = await Recommendation.find({
      _id: {
        $in: recommendations.map(
          (recommendation) => recommendation._id
        )
      }
    }).populate("diseaseId");

    res.status(201).json({
      success: true,
      message: "Recommendations uploaded successfully",
      count: populatedRecommendations.length,
      data: populatedRecommendations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk recommendation upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createRecommendation,
  getRecommendationsByDisease,
  getRecommendationByDetection,
  createRecommendationsBulk
};