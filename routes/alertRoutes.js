const express = require("express");

const {
  createAlert,
  getAlerts,
  getAlertById,
  markAlertAsRead,
  createAlertsBulk
} = require("../controllers/alertController");

const router = express.Router();

router.post("/", createAlert);

router.post("/bulk",createAlertsBulk);

router.get("/", getAlerts);

router.put("/:id/read", markAlertAsRead);

router.get("/:id", getAlertById);

module.exports = router;