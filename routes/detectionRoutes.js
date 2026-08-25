const express = require("express");

const {
  createDetection,
  getDetections,
  getDetectionById,
  getDetectionsByCrop,
  getLatestDetections,
  getDetectionStats,
  deleteDetection,
  createDetectionsBulk
} = require("../controllers/detectionController");

const router = express.Router();

router.post("/", createDetection);

router.post("/bulk", createDetectionsBulk);

router.get("/", getDetections);

router.get("/latest", getLatestDetections);

router.get("/stats", getDetectionStats);

router.get("/crop/:cropId", getDetectionsByCrop);

router.get("/:id", getDetectionById);

router.delete("/:id", deleteDetection);

module.exports = router;