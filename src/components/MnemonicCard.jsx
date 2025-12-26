import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const MnemonicCard = ({ word }) => {
  return (
    <motion.div
      className="group relative bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-md transition-all duration-300 overflow-hidden"
      whileHover={{ y: -2 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="text-center relative z-10">
        <span className="font-display font-bold text-lg text-gray-200 group-hover:text-white transition-colors">
          {word}
        </span>
      </div>
    </motion.div>
  );
};

MnemonicCard.propTypes = {
  word: PropTypes.string.isRequired,
};

export default MnemonicCard;