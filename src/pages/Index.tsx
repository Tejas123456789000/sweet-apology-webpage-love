
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const SweetApology: React.FC = () => {
  const [showFullMessage, setShowFullMessage] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FDE1D3] to-[#E5DEFF] p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-8 max-w-md w-full text-center"
      >
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop" 
          }}
          className="flex justify-center mb-6"
        >
          <Heart color="#FF6B6B" size={64} fill="#FFD93D" fillOpacity={0.3} />
        </motion.div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          I'm Sorry
        </h1>

        <p className="text-gray-600 mb-6">
          I know I hurt you, and I deeply regret my actions. 
          {showFullMessage && (
            <>
              <br /><br />
              I value our connection more than anything, and I hope you can forgive me. 
              My heart is truly sorry for the pain I've caused.
            </>
          )}
        </p>

        {!showFullMessage && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowFullMessage(true)}
            className="bg-[#FFDEE2] text-gray-800 px-6 py-3 rounded-full hover:bg-[#FFB6C1] transition-colors"
          >
            Read More
          </motion.button>
        )}

        {showFullMessage && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#E5DEFF] text-gray-800 px-6 py-3 rounded-full hover:bg-[#D3C4FF] transition-colors"
          >
            I Hope You Can Forgive Me
          </motion.button>
        )}
      </motion.div>
    </div>
  );
};

export default SweetApology;
