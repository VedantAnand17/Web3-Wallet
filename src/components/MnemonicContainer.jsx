import MnemonicCard from './MnemonicCard';
import CopyButton from './CopyButton';

const MnemonicContainer = ({ mnemonic }) => {
  if (!mnemonic) return null;

  const words = mnemonic.split(' ');

  return (
    <div>
        <div className="mt-14">
        <div className="">Your Seed is below. <br /> <span className="text-red-800 font-bold">(Keep it Carefully, away from scammers)</span></div>
      <div className="flex w-full justify-center">
      {words.map((word, index) => (
        <MnemonicCard key={index} index={index + 1} word={word} />
      ))}
      </div>
      <CopyButton word={mnemonic} />
      <br />
      <hr />
        </div>
    </div>
  );
};

export default MnemonicContainer;