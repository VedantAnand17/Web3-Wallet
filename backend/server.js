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

// Example of how you might handle wallet-related logic
app.post('/wallet', (req, res) => {
  const { action, data } = req.body; // action can be 'create', 'send', etc.

  // You can implement your wallet logic here, for example:
  if (action === 'create') {
    // Logic to create a wallet
    res.json({ message: 'Wallet created successfully', wallet: data });
  } else if (action === 'send') {
    // Logic to send coins
    res.json({ message: 'Coins sent successfully', transaction: data });
  } else {
    res.status(400).json({ error: 'Invalid action' });
  }
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log('Server is running on http://localhost:${PORT}');
});

// Import the required modules
const express = require('express');
const cors = require('cors');

// Create an instance of the express app
const APP = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Define a basic route for testing
app.get('/', (req, res) => {
  res.send('Hello World from the Express server!');
});

// Start the server on port 3001
const port = process.env.port || 3001;
app.listen(PORT, () => {
  console.log("Server is running on http://localhost:${PORT}");
});