import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import MnemonicCard from './MnemonicCard';
import CopyButton from './CopyButton';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from './ui/Card';
import { ShieldCheck } from 'lucide-react';

const MnemonicContainer = ({ mnemonic }) => {
  if (!mnemonic) return null;

  const words = mnemonic.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Card className="bg-black/40 border-white/10 backdrop-blur-2xl">
        <CardHeader className="text-center pb-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center"
          >
            <div className="p-3 bg-primary-500/10 rounded-full mb-4 ring-1 ring-primary-500/20">
              <ShieldCheck className="w-8 h-8 text-primary-400" />
            </div>
            <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Your Secret Recovery Phrase
            </CardTitle>
            <p className="text-gray-400 mt-2 text-sm max-w-md">
              Write these words down and store them in a safe place.
              <span className="text-red-400 font-medium ml-1">Do not share them with anyone.</span>
            </p>
          </motion.div>
        </CardHeader>

        <CardContent>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4"
            variants={{
              show: { transition: { staggerChildren: 0.05 } }
            }}
            initial="hidden"
            animate="show"
          >
            {words.map((word, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 }
                }}
                className="relative"
              >
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-white/10 rounded-full flex items-center justify-center text-xs font-mono text-gray-400 z-10 border border-white/5">
                  {index + 1}
                </div>
                <MnemonicCard word={word} />
              </motion.div>
            ))}
          </motion.div>
        </CardContent>

        <CardFooter className="justify-center border-t border-white/5 pt-6 bg-white/5">
          <CopyButton text={mnemonic} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

MnemonicContainer.propTypes = {
  mnemonic: PropTypes.string.isRequired,
};

export default MnemonicContainer;