const express = require("express");

const {
  createRecommendation,
  getRecommendationsByDisease,
  getRecommendationByDetection,
  createRecommendationsBulk
} = require("../controllers/recommendationController");

const router = express.Router();

router.post("/", createRecommendation);

router.post("/bulk", createRecommendationsBulk);

router.get("/disease/:diseaseId", getRecommendationsByDisease);

router.get("/detection/:detectionId", getRecommendationByDetection);

module.exports = router;