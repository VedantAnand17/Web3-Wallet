import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { Wallet, HDNodeWallet } from "ethers";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Plus, Copy, Check } from "lucide-react";

const EthWallet = ({ mnemonic }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [addresses, setAddresses] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleAddWallet = async () => {
        const seed = await mnemonicToSeed(mnemonic);
        const derivationPath = `m/44'/60'/${currentIndex}'/0'`;
        const hdNode = HDNodeWallet.fromSeed(seed);
        const child = hdNode.derivePath(derivationPath);
        const privateKey = child.privateKey;
        const wallet = new Wallet(privateKey);

        setCurrentIndex(currentIndex + 1);
        setAddresses([...addresses, wallet.address]);
    };

    const copyToClipboard = (address, index) => {
        navigator.clipboard.writeText(address);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <Card className="w-full bg-black/20 border-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
                    Ethereum Wallets
                </CardTitle>
                <Button onClick={handleAddWallet} size="sm" variant="premium" className="from-blue-500 to-indigo-600 shadow-blue-500/20">
                    <Plus className="w-4 h-4 mr-2" /> Add Wallet
                </Button>
            </CardHeader>
            <CardContent className="space-y-3">
                {addresses.map((address, index) => (
                    <div
                        key={index}
                        className="group flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Wallet {index + 1}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => copyToClipboard(address, index)}
                                    className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    {copiedIndex === index ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="font-mono text-sm break-all text-gray-300 group-hover:text-white transition-colors">
                            {address}
                        </div>
                    </div>
                ))}

                {addresses.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-white/5 rounded-xl">
                        No Ethereum wallets generated yet.
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default EthWallet;
