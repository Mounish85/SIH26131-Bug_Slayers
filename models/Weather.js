const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    location: {
      state: {
        type: String,
        required: true,
        trim: true
      },

      district: {
        type: String,
        required: true,
        trim: true
      },

      latitude: {
        type: Number,
        required: true
      },

      longitude: {
        type: Number,
        required: true
      }
    },

    temperature: {
      type: Number
    },

    humidity: {
      type: Number,
      min: 0,
      max: 100
    },

    rainfall: {
      type: Number,
      min: 0
    },

    windSpeed: {
      type: Number,
      min: 0
    },

    weatherCondition: {
      type: String,
      trim: true
    },

    diseaseRisk: {
      level: {
        type: String,
        enum: ["LOW", "MEDIUM", "HIGH", "CRITICAL"]
      },

      score: {
        type: Number,
        min: 0,
        max: 100
      },

      possibleDiseases: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Disease"
        }
      ]
    },

    fetchedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true
  }
);

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;