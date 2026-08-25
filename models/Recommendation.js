const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema(
  {
    diseaseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Disease",
      required: true
    },

    severityLevel: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"],
      required: true
    },

    immediateActions: [
      {
        type: String,
        trim: true
      }
    ],

    preventiveMeasures: [
      {
        type: String,
        trim: true
      }
    ],

    treatment: [
      {
        type: String,
        trim: true
      }
    ],

    organicMethods: [
      {
        type: String,
        trim: true
      }
    ],

    chemicalMethods: [
      {
        type: String,
        trim: true
      }
    ],

    expertAdvice: {
      type: String,
      trim: true
    },

    source: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Recommendation = mongoose.model(
  "Recommendation",
  recommendationSchema
);

module.exports = Recommendation;