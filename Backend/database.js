const mongoose = require('mongoose');
// const dbURI = 'mongodb://localhost:27017/lost_found'; 
const dbURI = 'mongodb+srv://LostAndFound:lostandfound@cluster0.3zpx7oc.mongodb.net/LostAndFound?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

module.exports = mongoose;
