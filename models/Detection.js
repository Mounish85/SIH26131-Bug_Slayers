const mongoose = require("mongoose");

const detectionSchema = new mongoose.Schema(
  {
    cropId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Crop",
      required: true
    },

    diseaseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      default: null
    },

    prediction: {
      label: {
        type: String,
        required: true,
        trim: true
      },

      confidence: {
        type: Number,
        required: true,
        min: 0,
        max: 1
      }
    },

    severity: {
      level: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
        required: true
      },

      score: {
        type: Number,
        min: 0,
        max: 100
      }
    },

    symptoms: [
      {
        type: String,
        trim: true
      }
    ],

    location: {
      state: String,
      district: String,
      latitude: Number,
      longitude: Number
    },

    modelVersion: {
      type: String,
      default: "pending"
    },

    status: {
      type: String,
      enum: ["PENDING", "COMPLETED", "FAILED"],
      default: "PENDING"
    }
  },
  {
    timestamps: true
  }
);

const Detection = mongoose.model("Detection", detectionSchema);

module.exports = Detection;