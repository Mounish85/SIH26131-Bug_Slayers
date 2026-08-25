const mongoose = require("mongoose");

const diseaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    type: {
      type: String,
      enum: ["DISEASE", "PEST"],
      required: true
    },

    crop: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      trim: true
    },

    symptoms: [
      {
        type: String,
        trim: true
      }
    ],

    causes: [
      {
        type: String,
        trim: true
      }
    ],

    prevention: [
      {
        type: String,
        trim: true
      }
    ],

    affectedRegions: [
      {
        type: String,
        trim: true
      }
    ],

    severityLevels: [
      {
        level: {
          type: String,
          enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"]
        },

        description: {
          type: String,
          trim: true
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

const Disease = mongoose.model("Disease", diseaseSchema);

module.exports = Disease;