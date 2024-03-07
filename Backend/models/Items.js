const mongoose = require('mongoose');
// const User = require('./User');

const itemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    // required: true
  },
  category: String,
  itemName: String,
//   image: String,
  details: String,
  status: String
});

module.exports = mongoose.model('Items', itemSchema);
