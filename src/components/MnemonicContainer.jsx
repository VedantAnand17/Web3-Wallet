import MnemonicCard from './MnemonicCard';
import CopyButton from './CopyButton';

const MnemonicContainer = ({ mnemonic }) => {
    if (!mnemonic) return null;

    const words = mnemonic.split(' ');
    
    return (
      <div>
        <div className="mt-14">
          <div>Your Seed is below. <br /> <span className="text-red-800 font-bold">(Keep it Carefully, away from scammers)</span></div>
          <div className="flex flex-col items-center">
          <div className="grid grid-cols-3 justify-center items-center">
            {words.map((word, index) => (
              <div key={index} className="flex justify-center items-center">
                <MnemonicCard index={index + 1} word={word} />
              </div>
            ))}
          </div>
          <CopyButton word={mnemonic} />
          </div>
          <br />
          <hr />
        </div>
      </div>
  );
};

export default MnemonicContainer;