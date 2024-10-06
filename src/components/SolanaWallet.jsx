import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const [buttonText, setButtonText] = useState('Add Solana Wallet');
    const [isWalletAdded, setIsWalletAdded] = useState(false);

    const handleAddWallet = () => {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);

        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);

        // Change button text and color after adding wallet
        setButtonText('Wallet Added!');
        setIsWalletAdded(true);

        // Reset the button text after 2 seconds
        setTimeout(() => {
            setButtonText('Add Solana Wallet');
            setIsWalletAdded(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center mb-10">
            <button
                className={`p-2 rounded-3xl m-8 transition-all duration-300 ease-in-out ${
                    isWalletAdded ? 'bg-green-500' : 'bg-rose-500'
                } hover:bg-green-600 hover:scale-105`}
                onClick={handleAddWallet}
            >
                {buttonText}
            </button>

            <div className="max-md:text-xs">
                {publicKeys.map((p, index) => (
                    <div key={index} className="shrink">
                        {p.toBase58()}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SolanaWallet; // Default export
