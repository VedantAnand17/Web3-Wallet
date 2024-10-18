const { createSolanaWallet, createEthWallet } = require('../services/walletService');

exports.addSolanaWallet = async (req, res) => {
    try {
        const { mnemonic, currentIndex } = req.body;

        // Validate input
        if (!mnemonic || currentIndex === undefined) {
            console.error('Validation Error: Missing mnemonic or currentIndex'); // Log validation error
            return res.status(400).json({ message: 'Mnemonic and currentIndex are required.' });
        }

        console.log('Received in addSolanaWallet - Mnemonic:', mnemonic, 'Current Index:', currentIndex); // Log received data

        const publicKey = await createSolanaWallet(mnemonic, currentIndex);
        res.status(200).json({ publicKey });
    } catch (error) {
        console.error('Error in addSolanaWallet:', error); 
        res.status(500).json({ message: 'Internal Server Error', error: error.message }); // More descriptive error message
    }
};

exports.addEthWallet = async (req, res) => {
    try {
        const { mnemonic, currentIndex } = req.body;

        // Validate input
        if (!mnemonic || currentIndex === undefined) {
            console.error('Validation Error: Missing mnemonic or currentIndex'); // Log validation error
            return res.status(400).json({ message: 'Mnemonic and currentIndex are required.' });
        }

        console.log('Received in addEthWallet - Mnemonic:', mnemonic, 'Current Index:', currentIndex); // Log received data

        const address = await createEthWallet(mnemonic, currentIndex);
        res.status(200).json({ address });
    } catch (error) {
        console.error('Error in addEthWallet:', error); 
        res.status(500).json({ message: 'Internal Server Error', error: error.message }); // More descriptive error message
    }
};
