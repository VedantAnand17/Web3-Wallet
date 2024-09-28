import { useState } from "react";
import { generateMnemonic } from "bip39";
import { SolanaWallet } from "./components/SolanaWallet";
import { EthWallet } from "./components/ETHWallet";
import MnemonicContainer from "./components/MnemonicContainer";
import { Analytics } from "@vercel/analytics/react";
import { Button } from "@nextui-org/button";
import { HiShieldCheck, HiLightningBolt, HiUser } from "react-icons/hi";

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <Analytics />
      <div className="bg-gradient-to-r from-blue-50 via-white to-indigo-50 min-h-screen p-8">
        {/* Hero Section */}
        <div className="bg-white rounded-3xl shadow-md p-10 flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto mb-12">
          <div className="lg:w-1/2">
            <h1 className="text-5xl font-bold text-gray-900">
              Experience the Future of <br />
              <span className="text-indigo-500">Digital Wallets</span>
            </h1>
            <p className="text-lg text-gray-600 mt-4 max-w-md">
              Secure, lightning-fast, and easy to use. Protect your assets and
              manage your crypto effortlessly with our state-of-the-art wallet.
            </p>
            <Button
              className="bg-indigo-500 text-white font-semibold text-lg mt-6 py-3 px-6 rounded-full hover:bg-indigo-600 transition-all"
              onClick={async function () {
                const mn = await generateMnemonic();
                setMnemonic(mn);
              }}
            >
              Get Started Now
            </Button>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
            {/* Icon Feature Badges */}
            <div className="grid grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <HiShieldCheck className="text-indigo-500 text-6xl" />
                <p className="text-center mt-2 text-gray-700 font-semibold">
                  Maximum Security
                </p>
              </div>
              <div className="flex flex-col items-center">
                <HiLightningBolt className="text-indigo-500 text-6xl" />
                <p className="text-center mt-2 text-gray-700 font-semibold">
                  Lightning Fast
                </p>
              </div>
              <div className="flex flex-col items-center">
                <HiUser className="text-indigo-500 text-6xl" />
                <p className="text-center mt-2 text-gray-700 font-semibold">
                  User Friendly
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Wallet Generator Section */}
        <div className="bg-white rounded-3xl shadow-md p-8 max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Wallet Generator
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Generate your wallet seed phrase to create Solana and Ethereum
            wallets instantly.
          </p>

          <MnemonicContainer mnemonic={mnemonic} />

          <Button
            className="bg-indigo-500 text-white text-xl font-semibold p-4 rounded-full mt-8 transition-transform transform hover:scale-105"
            onClick={async function () {
              const mn = await generateMnemonic();
              setMnemonic(mn);
            }}
          >
            Create Seed Phrase
          </Button>

          {/* Wallet Information Display */}
          <div className="flex flex-col lg:flex-row justify-center items-center mt-12 space-y-6 lg:space-y-0 lg:space-x-6">
            {mnemonic && (
              <div className="bg-neutral-50 shadow-lg rounded-xl p-6 w-full lg:w-1/2">
                <SolanaWallet mnemonic={mnemonic} />
              </div>
            )}
            {mnemonic && (
              <div className="bg-neutral-50 shadow-lg rounded-xl p-6 w-full lg:w-1/2">
                <EthWallet mnemonic={mnemonic} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
