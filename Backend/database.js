const mongoose = require('mongoose');
const { mongoURI } = require('./config/keys');

// const dbURI = 'mongodb://localhost:27017/lost_found'; 

const dbURI = mongoURI

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
