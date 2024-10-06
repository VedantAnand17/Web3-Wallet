import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MnemonicCard = ({ word }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-700 to-gray-800 p-4 rounded-xl shadow-lg border border-gray-600 backdrop-blur-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-center">
        <div className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          {word}
        </div>
      </div>
    </motion.div>
  );
};

MnemonicCard.propTypes = {
  word: PropTypes.string.isRequired,
};

export default MnemonicCard;