import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const RippleEffect = ({ 
  className = '',
  rippleColor = 'rgba(59, 130, 246, 0.3)',
  duration = 2000,
  size = 300
}) => {
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const createRipple = () => {
      const newRipple = {
        id: Date.now() + Math.random(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, duration);
    };

    const interval = setInterval(createRipple, 3000);
    createRipple(); // Create initial ripple

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="absolute rounded-full border-2"
          style={{
            left: `${ripple.x}%`,
            top: `${ripple.y}%`,
            borderColor: rippleColor,
            width: `${size}px`,
            height: `${size}px`,
            marginLeft: `-${size / 2}px`,
            marginTop: `-${size / 2}px`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{
            duration: duration / 1000,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
};

export { RippleEffect };