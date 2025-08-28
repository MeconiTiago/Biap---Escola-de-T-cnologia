import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Meteors = ({ number = 20 }) => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const meteorArray = Array.from({ length: number }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDelay: Math.random() * 1000,
      animationDuration: Math.random() * 8000 + 2000,
    }));
    setMeteors(meteorArray);
  }, [number]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full shadow-lg"
          style={{
            left: `${meteor.left}%`,
            top: '-5px',
          }}
          animate={{
            y: ['0vh', '100vh'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: meteor.animationDuration / 1000,
            delay: meteor.animationDelay / 1000,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <div className="absolute inset-0 w-0.5 h-12 bg-gradient-to-b from-blue-400 to-transparent transform rotate-45" />
        </motion.div>
      ))}
    </div>
  );
};

export { Meteors };