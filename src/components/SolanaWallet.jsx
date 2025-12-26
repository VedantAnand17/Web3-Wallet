import { useState } from "react";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import { Button } from "./ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/Card";
import { Trash2, Plus, Eye, Copy, Check } from "lucide-react";

function SolanaWallet({ mnemonic }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const [copiedIndex, setCopiedIndex] = useState(null);

    const handleAddWallet = () => {
        const seed = mnemonicToSeed(mnemonic);
        const path = `m/44'/501'/${currentIndex}'/0'`;
        const derivedSeed = derivePath(path, seed.toString("hex")).key;
        const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
        const keypair = Keypair.fromSecretKey(secret);

        setCurrentIndex(currentIndex + 1);
        setPublicKeys([...publicKeys, keypair.publicKey]);
    };

    const copyToClipboard = (key, index) => {
        navigator.clipboard.writeText(key.toBase58());
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <Card className="w-full bg-black/20 border-white/5 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Solana Wallets
                </CardTitle>
                <Button onClick={handleAddWallet} size="sm" variant="premium">
                    <Plus className="w-4 h-4 mr-2" /> Add Wallet
                </Button>
            </CardHeader>
            <CardContent className="space-y-3">
                {publicKeys.map((p, index) => (
                    <div
                        key={index}
                        className="group flex flex-col p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">Wallet {index + 1}</span>
                            <div className="flex space-x-2">
                                <button
                                    onClick={() => copyToClipboard(p, index)}
                                    className="p-1.5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
                                >
                                    {copiedIndex === index ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                </button>
                            </div>
                        </div>
                        <div className="font-mono text-sm break-all text-gray-300 group-hover:text-white transition-colors">
                            {p.toBase58()}
                        </div>
                    </div>
                ))}

                {publicKeys.length === 0 && (
                    <div className="text-center py-8 text-gray-500 border-2 border-dashed border-white/5 rounded-xl">
                        No Solana wallets generated yet.
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default SolanaWallet;
