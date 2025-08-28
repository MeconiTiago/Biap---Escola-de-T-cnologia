import React from 'react';
import { motion } from 'framer-motion';

/**
 * AnimatedText - Um componente de texto animado inspirado na Magic UI
 * 
 * @param {Object} props - Propriedades do componente
 * @param {React.ReactNode} props.children - Conteúdo do texto
 * @param {string} props.className - Classes adicionais para o texto
 * @param {string} props.variant - Variante da animação (fade, slide, typewriter)
 */
export const AnimatedText = ({ 
  children, 
  className = "", 
  variant = "fade",
  ...props 
}) => {
  const variants = {
    fade: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 }
    },
    slide: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.5 }
    },
    typewriter: {
      initial: { width: 0 },
      animate: { width: "100%" },
      transition: { duration: 1.5, ease: "easeInOut" }
    }
  };

  const selectedVariant = variants[variant] || variants.fade;

  if (variant === "typewriter") {
    return (
      <div className={`overflow-hidden ${className}`} {...props}>
        <motion.div
          initial={selectedVariant.initial}
          animate={selectedVariant.animate}
          transition={selectedVariant.transition}
          className="whitespace-nowrap"
        >
          {children}
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={selectedVariant.initial}
      animate={selectedVariant.animate}
      transition={selectedVariant.transition}
      {...props}
    >
      {children}
    </motion.div>
  );
};

/**
 * GradientText - Um componente de texto com gradiente
 */
export const GradientText = ({ 
  children, 
  className = "", 
  gradient = "primary",
  ...props 
}) => {
  const gradients = {
    primary: "from-primary-600 to-blue-600",
    blue: "from-blue-600 to-cyan-600",
    green: "from-green-600 to-emerald-600",
    purple: "from-purple-600 to-pink-600",
    sunset: "from-orange-600 to-red-600",
    rainbow: "from-red-600 via-yellow-600 via-green-600 via-blue-600 to-purple-600"
  };

  const selectedGradient = gradients[gradient] || gradients.primary;

  return (
    <motion.span
      className={`bg-gradient-to-r ${selectedGradient} inline-block text-transparent bg-clip-text ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.span>
  );
};

/**
 * AnimatedCharacters - Um componente que anima cada caractere individualmente
 */
export const AnimatedCharacters = ({ 
  text, 
  className = "", 
  ...props 
}) => {
  // Dividir o texto em caracteres
  const characters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      {...props}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
};