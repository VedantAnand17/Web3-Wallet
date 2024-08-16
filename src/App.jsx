import { useState } from 'react'
import './App.css'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/ETHWallet';
import MnemonicContainer from './components/MnemonicContainer';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
      <h1 className='text-6xl font-bold text-center mt-8'>Wallet Generator</h1>
      <MnemonicContainer mnemonic={mnemonic}/>
      <button className='bg-rose-500 p-2 rounded-3xl mt-8' onClick={async function () {
        const mn = await generateMnemonic();
        setMnemonic(mn)
      }}>
        Create Seed Phrase
      </button>
      <div className="flex justify-between w-full">
      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      {mnemonic && <EthWallet mnemonic={mnemonic} />}
      </div>
    </>
  )
}

export default App
