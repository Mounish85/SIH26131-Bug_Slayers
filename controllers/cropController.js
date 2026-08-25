const Crop = require("../models/Crop");

// Create a new crop
const createCrop = async (req, res) => {
  try {
    const crop = await Crop.create(req.body);

    res.status(201).json({
      success: true,
      message: "Crop created successfully",
      data: crop
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create crop",
      error: error.message
    });
  }
};

// Get all crops
const getCrops = async (req, res) => {
  try {
    const crops = await Crop.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: crops.length,
      data: crops
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch crops",
      error: error.message
    });
  }
};

// Get crop by ID
const getCropById = async (req, res) => {
  try {
    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found"
      });
    }

    res.status(200).json({
      success: true,
      data: crop
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch crop",
      error: error.message
    });
  }
};

// Update crop
const updateCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Crop updated successfully",
      data: crop
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update crop",
      error: error.message
    });
  }
};

// Delete crop
const deleteCrop = async (req, res) => {
  try {
    const crop = await Crop.findByIdAndDelete(req.params.id);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Crop deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete crop",
      error: error.message
    });
  }
};

// Get detections for a crop
const getCropDetections = async (req, res) => {
  try {
    const Detection = require("../models/Detection");

    const crop = await Crop.findById(req.params.id);

    if (!crop) {
      return res.status(404).json({
        success: false,
        message: "Crop not found"
      });
    }

    const detections = await Detection.find({
      cropId: req.params.id
    })
      .populate("diseaseId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: detections.length,
      data: detections
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch crop detections",
      error: error.message
    });
  }
};

//Bulk upload crops
const createCropsBulk = async (req, res) => {
  try {
    const crops = await Crop.insertMany(req.body);

    res.status(201).json({
      success: true,
      message: "Crops uploaded successfully",
      count: crops.length,
      data: crops
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk crop upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
  getCropDetections,
  createCropsBulk
};