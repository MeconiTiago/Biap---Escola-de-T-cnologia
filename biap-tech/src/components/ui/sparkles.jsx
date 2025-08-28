import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Sparkles = ({ 
  density = 1200, 
  className = '', 
  color = '#FFC700',
  minSize = 1,
  maxSize = 3,
  speed = 1
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkle = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: Math.random() * 3000 + 1000,
    });

    const initialSparkles = Array.from({ length: Math.floor(density / 100) }, generateSparkle);
    setSparkles(initialSparkles);

    const interval = setInterval(() => {
      setSparkles(prev => {
        const newSparkles = prev.filter(sparkle => Date.now() - sparkle.createdAt < sparkle.duration);
        if (newSparkles.length < Math.floor(density / 100)) {
          newSparkles.push({ ...generateSparkle(), createdAt: Date.now() });
        }
        return newSparkles;
      });
    }, density / speed);

    return () => clearInterval(interval);
  }, [density, minSize, maxSize, speed]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: `${sparkle.size}px`,
            height: `${sparkle.size}px`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: sparkle.duration / 1000,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill={color}
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export { Sparkles };