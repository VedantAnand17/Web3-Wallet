// Import the required modules
const express = require('express');
const cors = require('cors');

// Create an instance of the express app
const app = express();

// Middleware to parse JSON
app.use(express.json());
app.use(cors());

// Sample wallet data (you can replace this with actual wallet logic)
let walletData = {
    address: '0x1234567890abcdef1234567890abcdef12345678',
    balance: 1.5, // Example balance in ETH
};

// Define a route to get wallet data
app.get('/api/wallet', (req, res) => {
    res.json(walletData);
});

// Define a basic route for testing
app.get('/', (req, res) => {
    res.send('Hello World from the Express server!');
});

// Start the server on port 3001
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});