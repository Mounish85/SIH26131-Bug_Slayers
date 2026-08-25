const express = require("express");

const {
  createCrop,
  getCrops,
  getCropById,
  updateCrop,
  deleteCrop,
  getCropDetections,
  createCropsBulk
} = require("../controllers/cropController");

const router = express.Router();

router.post("/", createCrop);

router.post("/bulk", createCropsBulk);

router.get("/", getCrops);

router.get("/:id", getCropById);

router.put("/:id", updateCrop);

router.delete("/:id", deleteCrop);

router.get("/:id/detections", getCropDetections);

module.exports = router;