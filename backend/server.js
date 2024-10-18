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

// Add a transfer route
app.post('/transfer', (req, res) => {
  const { amount, recipient } = req.body;

  // Here you would implement your transfer logic
  console.log(Transferring $,{amount} to $,{recipient});

  // Simulate a successful response
  res.json({ message: 'Transfer successful' });
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT})";
});
