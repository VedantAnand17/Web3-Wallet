import { useState } from 'react'
import { generateMnemonic } from "bip39";
import { SolanaWallet } from './components/SolanaWallet';
import { EthWallet } from './components/ETHWallet';
import MnemonicContainer from './components/MnemonicContainer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [mnemonic, setMnemonic] = useState("");

  return (
    <>
    <Analytics />
      <div className="bg-neutral-400 rounded-2xl flex flex-col justify-center items-center h-screen">
        <h1 className='text-6xl font-bold text-center mt-8'>Wallet Generator</h1>
        <MnemonicContainer mnemonic={mnemonic} />
        <button className='bg-rose-500 p-2 rounded-3xl mt-8 ' onClick={async function () {
          const mn = await generateMnemonic();
          setMnemonic(mn)
        }}>
          Create Seed Phrase
        </button>
        <div className="flex lg:justify-between lg:flex-row flex-col items-center">
          {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
          {mnemonic && <EthWallet mnemonic={mnemonic} />}
        </div>
      </div>
    </>
  )
}

export default App
