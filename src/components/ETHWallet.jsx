import { useState } from "react";

function EthWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [buttonText, setButtonText] = useState('Add Ethereum Wallet');
    const [isWalletAdded, setIsWalletAdded] = useState(false);

    const handleAddWallet = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/wallets/eth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mnemonic, currentIndex }),
            });

            const data = await response.json();
            if (response.ok) {
                setAddresses([...addresses, data.address]);
                setCurrentIndex(currentIndex + 1);
                // Change button text and color after adding wallet
                setButtonText('Wallet Added!');
                setIsWalletAdded(true);

                // Reset the button text after 2 seconds
                setTimeout(() => {
                    setButtonText('Add Ethereum Wallet');
                    setIsWalletAdded(false);
                }, 2000);
            } else {
                console.error('Error:', data.message);
                alert(data.message); // Alert the user if there's an error
            }
        } catch (error) {
            console.error('Error adding wallet:', error);
        }
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
                {addresses.map((address, index) => (
                    <div key={index} className="shrink">
                        Eth - {address}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default EthWallet;
