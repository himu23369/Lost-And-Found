// routes/itemRoutes.js
const express = require('express');
const router = express.Router();
const Items = require('../models/Items');

// Route to handle form submission
router.post('/submit', async (req, res) => {
  try {
    // Create a new Item object with data from the request body
    const newItem = new Items({
    //   user: req.user._id, // Assuming the user object is attached to the request by your authentication middleware
      category: req.body.category,
      itemName: req.body.itemName,
    //   image: req.body.image,
      details: req.body.details,
      status: req.body.status
    });

    // Save the new item to the database
    await newItem.save();

    res.status(201).json({ message: 'Item saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
