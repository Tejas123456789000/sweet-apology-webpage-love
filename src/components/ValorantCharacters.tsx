
import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: "Jett",
    image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png",
    color: "#00ffff"
  },
  {
    name: "Phoenix",
    image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt26fcf1b5752514ee/5eb7cdbfc1dc88298d5d3799/V_AGENTS_587x900_Phx.png",
    color: "#ff9d00"
  },
  {
    name: "Sage",
    image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png",
    color: "#00ff85"
  }
];

const floatAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const ValorantCharacters: React.FC = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {characters.map((char, index) => (
        <motion.div
          key={char.name}
          className="absolute"
          style={{
            top: `${10 + (index * 20)}%`,
            [index % 2 === 0 ? 'left' : 'right']: '-50px',
            opacity: 0.4
          }}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ 
            opacity: 0.4, 
            x: index % 2 === 0 ? 0 : -20,
            ...floatAnimation.animate
          }}
          transition={{ 
            duration: 1, 
            delay: index * 0.4,
          }}
        >
          <img 
            src={char.image} 
            alt={char.name}
            className="h-56 md:h-64 lg:h-80 filter drop-shadow-lg"
            style={{ filter: `drop-shadow(0 0 10px ${char.color})` }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ValorantCharacters;
