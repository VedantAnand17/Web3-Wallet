import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MnemonicCard from './MnemonicCard';
import CopyButton from './CopyButton';

const MnemonicContainer = ({ mnemonic }) => {
  if (!mnemonic) return null;

  const words = mnemonic.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700 backdrop-blur-lg"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-center mb-6"
      >
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-2">
          Your Seed Phrase
        </h2>
        <p className="text-gray-300">
          Keep it safe and{' '}
          <span className="text-red-500 font-semibold">
            away from scammers
          </span>
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {words.map((word, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            className="relative"
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm z-10">
              {index + 1}
            </div>
            <MnemonicCard word={word} />
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-6">
        <CopyButton text={mnemonic} />
      </div>
    </motion.div>
  );
};

MnemonicContainer.propTypes = {
  mnemonic: PropTypes.string.isRequired,
};

export default MnemonicContainer;