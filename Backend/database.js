const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/lost_found'; 

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
