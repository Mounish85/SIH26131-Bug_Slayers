const Detection = require("../models/Detection");

// Create detection
const createDetection = async (req, res) => {
  try {
    const detection = await Detection.create(req.body);

    const populatedDetection = await Detection.findById(
      detection._id
    )
      .populate("cropId")
      .populate("diseaseId");

    res.status(201).json({
      success: true,
      message: "Detection created successfully",
      data: populatedDetection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create detection",
      error: error.message
    });
  }
};

// Get all detections
const getDetections = async (req, res) => {
  try {
    const detections = await Detection.find()
      .populate("cropId")
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
      message: "Failed to fetch detections",
      error: error.message
    });
  }
};

// Get detection by ID
const getDetectionById = async (req, res) => {
  try {
    const detection = await Detection.findById(req.params.id)
      .populate("cropId")
      .populate("diseaseId");

    if (!detection) {
      return res.status(404).json({
        success: false,
        message: "Detection not found"
      });
    }

    res.status(200).json({
      success: true,
      data: detection
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch detection",
      error: error.message
    });
  }
};

// Get detections for a crop
const getDetectionsByCrop = async (req, res) => {
  try {
    const detections = await Detection.find({
      cropId: req.params.cropId
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

// Get latest detections
const getLatestDetections = async (req, res) => {
  try {
    const detections = await Detection.find()
      .populate("cropId")
      .populate("diseaseId")
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: detections.length,
      data: detections
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch latest detections",
      error: error.message
    });
  }
};

// Get detection statistics
const getDetectionStats = async (req, res) => {
  try {
    const total = await Detection.countDocuments();

    const completed = await Detection.countDocuments({
      status: "COMPLETED"
    });

    const pending = await Detection.countDocuments({
      status: "PENDING"
    });

    const failed = await Detection.countDocuments({
      status: "FAILED"
    });

    const severityStats = await Detection.aggregate([
      {
        $group: {
          _id: "$severity.level",
          count: { $sum: 1 }
        }
      }
    ]);

    res.status(200).json({
      success: true,
      data: {
        total,
        completed,
        pending,
        failed,
        severityStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch detection statistics",
      error: error.message
    });
  }
};

// Delete detection
const deleteDetection = async (req, res) => {
  try {
    const detection = await Detection.findByIdAndDelete(
      req.params.id
    );

    if (!detection) {
      return res.status(404).json({
        success: false,
        message: "Detection not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Detection deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete detection",
      error: error.message
    });
  }
};

//Bulk create detections
const createDetectionsBulk = async (req, res) => {
  try {
    const detections = await Detection.insertMany(req.body);

    const populatedDetections = await Detection.find({
      _id: { $in: detections.map((detection) => detection._id) }
    })
      .populate("cropId")
      .populate("diseaseId");

    res.status(201).json({
      success: true,
      message: "Detections uploaded successfully",
      count: populatedDetections.length,
      data: populatedDetections
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk detection upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createDetection,
  getDetections,
  getDetectionById,
  getDetectionsByCrop,
  getLatestDetections,
  getDetectionStats,
  deleteDetection,
  createDetectionsBulk
};