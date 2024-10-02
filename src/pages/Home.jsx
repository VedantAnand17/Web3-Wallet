import { useState } from 'react';
import { generateMnemonic } from 'bip39';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SolanaWallet from '../components/SolanaWallet';
import EthWallet from '../components/ETHWallet';
import MnemonicContainer from '../components/MnemonicContainer';

function Home() {
  const [mnemonic, setMnemonic] = useState('');
  const [buttonText, setButtonText] = useState('Create Seed Phrase');
  const [isMnemonicGenerated, setIsMnemonicGenerated] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleGenerateMnemonic = async () => {
    const mn = await generateMnemonic();
    setMnemonic(mn);

    if (!isMnemonicGenerated) {
      setButtonText('Phrase Changed!');
      setIsMnemonicGenerated(true);

      setTimeout(() => {
        setButtonText('Create Seed Phrase');
        setIsMnemonicGenerated(false);
      }, 1000);
    }
  };

  const handleNavigateToDAppBrowser = () => {
    navigate('/dapp-browser'); // Navigate to DAppBrowserPage
  };

  return (
    <div className="bg-neutral-400 rounded-2xl flex flex-col justify-center items-center h-full min-h-screen">
      <h1 className="text-6xl font-bold text-center mt-8">Wallet Generator</h1>
      <MnemonicContainer mnemonic={mnemonic} />

      <button
        className={`p-2 rounded-3xl mt-8 transition-all duration-300 ease-in-out ${
          isMnemonicGenerated ? 'bg-green-500' : 'bg-rose-500'
        } hover:bg-green-600 hover:scale-105`}
        onClick={handleGenerateMnemonic}
      >
        {buttonText}
      </button>

      <div className="flex lg:justify-between lg:flex-row flex-col items-center pb-5">
        {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
        {mnemonic && <EthWallet mnemonic={mnemonic} />}
      </div>

      <button
        className="p-2 rounded-3xl mt-8 bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out"
        onClick={handleNavigateToDAppBrowser}
      >
        Go to DApp Browser
      </button>
    </div>
  );
}

export default Home;
