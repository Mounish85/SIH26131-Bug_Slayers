const Alert = require("../models/Alert");

// Create alert
const createAlert = async (req, res) => {
  try {
    const alert = await Alert.create(req.body);

    const populatedAlert = await Alert.findById(alert._id)
      .populate("diseaseId");

    res.status(201).json({
      success: true,
      message: "Alert created successfully",
      data: populatedAlert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create alert",
      error: error.message
    });
  }
};

// Get all alerts
const getAlerts = async (req, res) => {
  try {
    const alerts = await Alert.find()
      .populate("diseaseId")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: alerts.length,
      data: alerts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch alerts",
      error: error.message
    });
  }
};

// Get alert by ID
const getAlertById = async (req, res) => {
  try {
    const alert = await Alert.findById(req.params.id)
      .populate("diseaseId");

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: "Alert not found"
      });
    }

    res.status(200).json({
      success: true,
      data: alert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch alert",
      error: error.message
    });
  }
};

// Mark alert as read
const markAlertAsRead = async (req, res) => {
  try {
    const alert = await Alert.findByIdAndUpdate(
      req.params.id,
      {
        isRead: true
      },
      {
        new: true
      }
    );

    if (!alert) {
      return res.status(404).json({
        success: false,
        message: "Alert not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Alert marked as read",
      data: alert
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update alert",
      error: error.message
    });
  }
};

const createAlertsBulk = async (req, res) => {
  try {
    const alerts = await Alert.insertMany(req.body);

    const populatedAlerts = await Alert.find({
      _id: {
        $in: alerts.map((alert) => alert._id)
      }
    }).populate("diseaseId");

    res.status(201).json({
      success: true,
      message: "Alerts uploaded successfully",
      count: populatedAlerts.length,
      data: populatedAlerts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Bulk alert upload failed",
      error: error.message
    });
  }
};

module.exports = {
  createAlert,
  getAlerts,
  getAlertById,
  markAlertAsRead,
  createAlertsBulk
};