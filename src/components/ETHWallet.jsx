import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";

export const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [buttonText, setButtonText] = useState('Add Ethereum Wallet');
    const [isWalletAdded, setIsWalletAdded] = useState(false);

    const handleAddWallet = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);

        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);

        // Change button text and color after adding wallet
        setButtonText('Wallet Added!');
        setIsWalletAdded(true);

        // Reset the button text after 2 seconds
        setTimeout(() => {
            setButtonText('Add Ethereum Wallet');
            setIsWalletAdded(false);
        }, 2000);
    };

    return (
        <div className="flex flex-col items-center">
            <button
                className={`p-2 rounded-3xl m-8 transition-all duration-300 ease-in-out ${
                    isWalletAdded ? 'bg-green-500' : 'bg-rose-500'
                } hover:bg-green-600 hover:scale-105`}
                onClick={handleAddWallet}
            >
                {buttonText}
            </button>

            {addresses.map((address, index) => (
                <div key={index} className="max-md:text-xs">
                    Eth - {address}
                </div>
            ))}
        </div>
    );
};
