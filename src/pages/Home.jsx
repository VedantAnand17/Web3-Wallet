import React, { useState } from 'react';
import { generateMnemonic } from 'bip39';
import { motion, AnimatePresence } from 'framer-motion';
import SolanaWallet from '../components/SolanaWallet';
import EthWallet from '../components/ETHWallet';
import MnemonicContainer from '../components/MnemonicContainer';
import { Button } from '../components/ui/Button';
import { ChevronRight, Shield, Wallet, Zap } from 'lucide-react';

const Home = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerateMnemonic = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);
    setIsGenerated(true);
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary-500/30 overflow-x-hidden pt-20">

      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-purple-600/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary-500/30 bg-primary-500/10 text-primary-300 text-sm font-medium mb-6 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-primary-400 mr-2 animate-pulse"></span>
            Next Gen Web3 Wallet
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8 leading-tight">
            <span className="text-white">Secure your crypto</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-purple-400 to-cyan-400">
              with confidence.
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Generate a secure mnemonic phrase and create multiple wallets for Solana and Ethereum instantly. No downloads required.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button
              size="lg"
              variant="default"
              onClick={handleGenerateMnemonic}
              className="w-full sm:w-auto text-lg px-8 py-6 shadow-xl shadow-primary-500/20"
            >
              <Wallet className="w-5 h-5 mr-2" />
              {isGenerated ? "Regenerate Phrase" : "Create Seed Phrase"}
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-lg px-8 py-6"
            >
              Learn More <ChevronRight className="w-5 h-5 ml-1" />
            </Button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
            {[
              { icon: Shield, title: "Bank-Grade Security", desc: "Your keys are generated locally and never leave your browser." },
              { icon: Zap, title: "Instant Generation", desc: "Create Solana and Ethereum wallets in milliseconds." },
              { icon: Wallet, title: "Multi-Chain Support", desc: "Manage assets across multiple blockchains effortlessly." }
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <feature.icon className="w-8 h-8 text-primary-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Generated Content Section */}
        <AnimatePresence>
          {mnemonic && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="max-w-4xl mx-auto">
                <MnemonicContainer mnemonic={mnemonic} />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <SolanaWallet mnemonic={mnemonic} />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <EthWallet mnemonic={mnemonic} />
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Home;
