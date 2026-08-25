const express = require("express");

const {
  createDisease,
  getDiseases,
  getDiseaseById,
  getDiseasesByCrop,
  createDiseasesBulk
} = require("../controllers/diseaseController");

const router = express.Router();

router.post("/", createDisease);

router.post("/bulk",createDiseasesBulk);

router.get("/", getDiseases);

router.get("/crop/:cropName", getDiseasesByCrop);

router.get("/:id", getDiseaseById);

module.exports = router;