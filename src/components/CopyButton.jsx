export default function MnemonicCard({ word }) {
  const handleClick = () => {
    navigator.clipboard.writeText(word)
      .then(() => {
        console.info('Text copied to clipboard');
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div>
        <button className='bg-rose-500 p-2 rounded-3xl mt-8' onClick={handleClick}>
            Copy Seed Phrase
        </button>
    </div>
  );
}