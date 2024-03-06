// server.js
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const keys = require('./config/keys');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

// Routes
app.use('/api/auth', authRoutes);


// MongoDB connection
mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => {
      console.log('MongoDB Connected')
      app.listen(3000, () => console.log('Server running on port 3000'))
    })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  }
)