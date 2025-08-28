import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedCard - Um componente de cartão animado inspirado na Magic UI
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do cartão
 * @param {string} props.className - Classes adicionais para o cartão
 * @param {string} props.hoverColor - Cor de destaque ao passar o mouse (opcional)
 */
export const AnimatedCard = ({ 
  children, 
  className = "", 
  hoverColor = "primary",
  ...props 
}) => {
  // Mapeamento de cores para classes do Tailwind
  const colorMap = {
    primary: "hover:shadow-primary-400/20 hover:border-primary-400",
    blue: "hover:shadow-blue-400/20 hover:border-blue-400",
    green: "hover:shadow-green-400/20 hover:border-green-400",
    red: "hover:shadow-red-400/20 hover:border-red-400",
    purple: "hover:shadow-purple-400/20 hover:border-purple-400",
  };

  const hoverColorClass = colorMap[hoverColor] || colorMap.primary;

  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6
        dark:border-gray-800 dark:bg-gray-950
        transition-all duration-300 ease-in-out
        hover:shadow-xl ${hoverColorClass}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.2 }
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * AnimatedGradientBorder - Um componente com borda gradiente animada
 */
export const AnimatedGradientBorder = ({ 
  children, 
  className = "", 
  ...props 
}) => {
  return (
    <motion.div
      className={`
        relative overflow-hidden rounded-xl p-[1px]
        bg-gradient-to-r from-primary-400 via-blue-500 to-purple-600
        ${className}
      `}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-primary-400 via-blue-500 to-purple-600"
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        style={{
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative rounded-[11px] bg-white dark:bg-gray-950 p-6">
        {children}
      </div>
    </motion.div>
  );
};

/**
 * SpotlightCard - Um componente de cartão com efeito de spotlight
 */
export const SpotlightCard = ({ 
  children, 
  className = "", 
  ...props 
}) => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = React.useState(0);
  const cardRef = React.useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className={`
        relative overflow-hidden rounded-xl border border-gray-200 bg-white p-6
        dark:border-gray-800 dark:bg-gray-950
        transition-all duration-300 ease-in-out
        hover:shadow-xl hover:shadow-primary-400/10 hover:border-primary-400/50
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div 
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(225, 29, 72, 0.1), transparent 40%)`,
        }}
      />
      {children}
    </motion.div>
  );
};