const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema(
  {
    cropName: {
      type: String,
      required: true,
      trim: true
    },

    variety: {
      type: String,
      trim: true
    },

    area: {
      type: Number,
      required: true,
      min: 0
    },

    plantingDate: {
      type: Date
    },

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

      village: {
        type: String,
        trim: true
      },

      latitude: {
        type: Number
      },

      longitude: {
        type: Number
      }
    },

    status: {
      type: String,
      enum: ["ACTIVE", "HARVESTED", "INACTIVE"],
      default: "ACTIVE"
    }
  },
  {
    timestamps: true
  }
);

const Crop = mongoose.model("Crop", cropSchema);

module.exports = Crop;