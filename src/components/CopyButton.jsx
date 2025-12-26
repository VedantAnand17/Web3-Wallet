import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Copy, CheckCircle } from 'lucide-react';
import { Button } from './ui/Button';

const CopyButton = ({ text }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy text: ', err));
  };

  return (
    <Button
      variant={isCopied ? "default" : "secondary"}
      size="sm"
      className={`transition-all duration-300 ${isCopied ? 'bg-green-500 hover:bg-green-600 border-green-500' : ''}`}
      onClick={handleCopy}
    >
      {isCopied ? <CheckCircle className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
      <span>{isCopied ? 'Copied' : 'Copy'}</span>
    </Button>
  );
};

CopyButton.propTypes = {
  text: PropTypes.string.isRequired,
  // className: PropTypes.string, // Implicitly passed via styled component but good to know
};

export default CopyButton;
