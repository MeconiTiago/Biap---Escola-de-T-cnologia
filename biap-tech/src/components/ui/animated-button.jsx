import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedButton - Um componente de botão animado inspirado na Magic UI
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do botão
 * @param {string} props.className - Classes adicionais para o botão
 * @param {string} props.variant - Variante do botão (default, outline, ghost)
 * @param {string} props.color - Cor do botão (primary, blue, green, red, purple)
 * @param {function} props.onClick - Função de clique
 */
export const AnimatedButton = ({ 
  children, 
  className = "", 
  variant = "default",
  color = "primary",
  onClick,
  ...props 
}) => {
  // Mapeamento de cores para classes do Tailwind
  const colorVariants = {
    primary: {
      default: "bg-primary-600 hover:bg-primary-700 text-white",
      outline: "border-primary-600 text-primary-600 hover:bg-primary-600/10",
      ghost: "text-primary-600 hover:bg-primary-600/10"
    },
    blue: {
      default: "bg-blue-600 hover:bg-blue-700 text-white",
      outline: "border-blue-600 text-blue-600 hover:bg-blue-600/10",
      ghost: "text-blue-600 hover:bg-blue-600/10"
    },
    green: {
      default: "bg-green-600 hover:bg-green-700 text-white",
      outline: "border-green-600 text-green-600 hover:bg-green-600/10",
      ghost: "text-green-600 hover:bg-green-600/10"
    },
    red: {
      default: "bg-red-600 hover:bg-red-700 text-white",
      outline: "border-red-600 text-red-600 hover:bg-red-600/10",
      ghost: "text-red-600 hover:bg-red-600/10"
    },
    purple: {
      default: "bg-purple-600 hover:bg-purple-700 text-white",
      outline: "border-purple-600 text-purple-600 hover:bg-purple-600/10",
      ghost: "text-purple-600 hover:bg-purple-600/10"
    },
  };

  const variantClasses = {
    default: "shadow-lg",
    outline: "border-2 bg-transparent",
    ghost: "bg-transparent"
  };

  const colorClass = colorVariants[color]?.[variant] || colorVariants.primary.default;
  const variantClass = variantClasses[variant] || variantClasses.default;

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-md font-medium py-2 px-4
        transition-all duration-300 ease-in-out
        ${colorClass} ${variantClass} ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white/20 opacity-0"
        initial={{ opacity: 0, scale: 0 }}
        whileHover={{ 
          opacity: 1, 
          scale: 1.5,
          transition: { duration: 0.4 }
        }}
        style={{ 
          borderRadius: '100%',
          transformOrigin: 'center',
        }}
      />
      {children}
    </motion.button>
  );
};

/**
 * GradientButton - Um botão com gradiente animado
 */
export const GradientButton = ({ 
  children, 
  className = "", 
  onClick,
  ...props 
}) => {
  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-md font-medium py-2 px-4 text-white
        bg-gradient-to-r from-primary-600 via-blue-600 to-purple-600
        transition-all duration-300 ease-in-out shadow-lg
        ${className}
      `}
      style={{
        backgroundSize: '200% 100%',
        backgroundPosition: '0% 0%',
      }}
      whileHover={{ 
        scale: 1.05,
        backgroundPosition: '100% 0%',
        transition: { duration: 0.8 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      {children}
    </motion.button>
  );
};

/**
 * PulseButton - Um botão com efeito de pulso
 */
export const PulseButton = ({ 
  children, 
  className = "", 
  color = "primary",
  onClick,
  ...props 
}) => {
  const colorClasses = {
    primary: "bg-primary-600 hover:bg-primary-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-600 hover:bg-red-700",
    purple: "bg-purple-600 hover:bg-purple-700",
  };

  const colorClass = colorClasses[color] || colorClasses.primary;

  return (
    <motion.button
      className={`
        relative overflow-hidden rounded-md font-medium py-2 px-4 text-white
        transition-all duration-300 ease-in-out shadow-lg
        ${colorClass} ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...props}
    >
      <motion.span
        className="absolute inset-0 bg-white/30 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: [0, 0.5, 0],
          scale: [0, 1.5, 2],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'loop',
        }}
        style={{ 
          transformOrigin: 'center',
        }}
      />
      {children}
    </motion.button>
  );
};