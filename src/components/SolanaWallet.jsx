import React, { useState } from "react";

const SolanaWallet = () => {
    const mnemonic = "scissors seven blush spider pluck regular crawl stable rapid tornado whip you"; // Use the known valid mnemonic
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const [buttonText, setButtonText] = useState('Add Solana Wallet');
    const [isWalletAdded, setIsWalletAdded] = useState(false);

    const handleAddWallet = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/wallets/solana', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ mnemonic, currentIndex }),
            });

            if (!response.ok) {
                throw new Error('Failed to create Solana wallet');
            }

            const data = await response.json();
            setPublicKeys([...publicKeys, data.publicKey]);
            setCurrentIndex(currentIndex + 1);
            
            // Change button text and color after adding wallet
            setButtonText('Wallet Added!');
            setIsWalletAdded(true);

            // Reset the button text after 2 seconds
            setTimeout(() => {
                setButtonText('Add Solana Wallet');
                setIsWalletAdded(false);
            }, 2000);
        } catch (error) {
            console.error(error);
            // Handle error (e.g., show a notification to the user)
        }
    };

    return (
        <div className="flex flex-col items-center mb-10">
            <button
                className={`p-2 rounded-3xl m-8 transition-all duration-300 ease-in-out ${isWalletAdded ? 'bg-green-500' : 'bg-rose-500'} hover:bg-green-600 hover:scale-105`}
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
};

export default SolanaWallet;
