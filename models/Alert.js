const mongoose = require("mongoose");

const alertSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    message: {
      type: String,
      required: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["DISEASE", "PEST", "WEATHER", "REGIONAL"],
      required: true
    },

    diseaseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      default: null
    },

    location: {
      state: {
        type: String,
        required: true
      },

      district: {
        type: String,
        required: true
      },

      latitude: {
        type: Number
      },

      longitude: {
        type: Number
      }
    },

    severity: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      required: true
    },

    affectedCrops: [
      {
        type: String
      }
    ],

    isRead: {
      type: Boolean,
      default: false
    },

    expiresAt: {
      type: Date
    }
  },
  {
    timestamps: true
  }
);

const Alert = mongoose.model("Alert", alertSchema);

module.exports = Alert;