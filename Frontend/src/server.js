// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const cors = require('cors');
// const { Schema } = mongoose;
// require("dotenv").config({ path: '../.env' });

// const app = express();
// const port = process.env.PORT || 5000;

// // Use CORS middleware
// app.use(cors());

// // Connect to MongoDB
// mongoose.connect('connectionlink', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB');
// });

// // Define a Mongoose schema for the User model
// const userSchema = new Schema({
//   name: String,
//   email: String,
//   password: String,
//   photo: Buffer,
//   gender: String,
//   role: String,
// });

// // Create the User model using the schema
// const User = mongoose.model('User', userSchema);

// // Define a Mongoose schema for the ReportItem model
// const reportItemSchema = new Schema({
//   category: String,
//   itemName: String,
//   image: Buffer,
//   details: String,
//   status: String,
// });

// // Create the ReportItem model using the schema
// const ReportItem = mongoose.model('ReportItem', reportItemSchema);

// // Multer configuration for handling file uploads
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// // Sample route for handling user signup
// app.post('/signup', upload.single('photo'), async (req, res) => {
//   try {
//     const { name, email, password, gender, role } = req.body;
//     const photo = req.file.buffer;

//     // Create a new user instance with the provided information
//     const newUser = new User({
//       name,
//       email,
//       password,
//       photo,
//       gender,
//       role,
//     });

//     // Save the user to MongoDB
//     await newUser.save();

//     res.json({ message: 'User signed up successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // Sample route for handling report item submission
// app.post('/reportitem', upload.single('image'), async (req, res) => {
//   try {
//     const { category, itemName, details, status } = req.body;
//     const image = req.file.buffer;

//     // Create a new report item instance with the provided information
//     const newReportItem = new ReportItem({
//       category,
//       itemName,
//       image,
//       details,
//       status,
//     });

//     // Save the report item to MongoDB
//     await newReportItem.save();

//     res.json({ message: 'Report item submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// });

// // ... (other routes and server setup)

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
