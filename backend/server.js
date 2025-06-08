const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const walletRoutes = require('./routes/walletRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/wallets', walletRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
