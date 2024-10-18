// Import the required modules
const express = require('express');
const cors = require('cors');

// Create an instance of the express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World from the Express server!');
});

// Define the /transfer route
app.post('/transfer', (req, res) => {
  console.log('Received request body:', req.body); // Log the body
  const { amount, recipient } = req.body;

  // You can add your transfer logic here
  // For now, just return a response
  res.json({ message: 'Transfer processed', amount, recipient });
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});