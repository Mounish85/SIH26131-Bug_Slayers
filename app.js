const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const alertRoutes = require('./routes/alertRoutes');
const weatherRoutes = require('./routes/weatherRoutes');
const cropRoutes = require('./routes/cropRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');
const recommendationRoutes = require('./routes/recommendationRoutes');
const detectionRoutes = require('./routes/detectionRoutes');

// Initialize Express app
const app = express();

// Middleware
app.use(morgan('dev'));
app.use(express.json());
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(err);
  });

// Routes
app.use('/alerts', alertRoutes);
app.use('/weather', weatherRoutes);
app.use('/crops', cropRoutes);
app.use('/diseases', diseaseRoutes);
app.use('/recommendations', recommendationRoutes);
app.use('/detections', detectionRoutes);

