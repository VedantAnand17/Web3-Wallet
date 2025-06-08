// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const walletController = require('../controllers/walletController');

router.post('/solana', walletController.addSolanaWallet);
router.post('/eth', walletController.addEthWallet);

module.exports = router;
