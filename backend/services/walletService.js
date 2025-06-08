const { mnemonicToSeed } = require('bip39');
const { Keypair } = require('@solana/web3.js');
const { Wallet, HDNodeWallet } = require('ethers');
const nacl = require('tweetnacl');
const { derivePath } = require('ed25519-hd-key'); // Ensure this import is present

const createSolanaWallet = async (mnemonic, currentIndex) => {
    try {
        const seed = await mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);
        return keypair.publicKey.toBase58();
    } catch (error) {
        console.error('Error in createSolanaWallet:', error);
        throw new Error('Failed to create Solana wallet'); // Throw a new error to be caught in the controller
    }
};

const createEthWallet = async (mnemonic, currentIndex) => {
    try {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const wallet = new Wallet(child.privateKey);
        return wallet.address;
    } catch (error) {
        console.error('Error in createEthWallet:', error);
        throw new Error('Failed to create Ethereum wallet'); // Throw a new error to be caught in the controller
    }
};

module.exports = { createSolanaWallet, createEthWallet };
