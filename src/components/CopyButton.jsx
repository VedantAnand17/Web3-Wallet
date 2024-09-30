import PropTypes from 'prop-types';
import { useState } from 'react';

export default function MnemonicCard({ word }) {
    const [buttonText, setButtonText] = useState('Copy Seed Phrase');
    const [isCopied, setIsCopied] = useState(false); // State to track if the text is copied

    const handleClick = () => {
        navigator.clipboard.writeText(word)
            .then(() => {
                setButtonText('Copied!');
                setIsCopied(true); // Set copied state to true
                setTimeout(() => {
                    setButtonText('Copy Seed Phrase');
                    setIsCopied(false); // Reset copied state after 2 seconds
                }, 2000);
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    };

    return (
        <div>
            <button
                className={`p-2 rounded-3xl mt-8 transition-all duration-300 ease-in-out ${
                    isCopied ? 'bg-green-500' : 'bg-rose-500'
                } hover:bg-green-600 hover:scale-105`}
                onClick={handleClick}
            >
                {buttonText}
            </button>
        </div>
    );
}

// Adding prop-types validation
MnemonicCard.propTypes = {
    word: PropTypes.string.isRequired,
};
