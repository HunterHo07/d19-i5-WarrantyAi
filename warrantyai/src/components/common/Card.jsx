import { motion } from 'framer-motion';

const Card = ({
  children,
  className = '',
  variant = 'default',
  hover = 'scale',
  onClick,
  delay = 0,
}) => {
  const variantClasses = {
    default: 'bg-white dark:bg-gray-800 shadow-md rounded-xl',
    glass: 'glass-card',
    outline: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl',
    flat: 'bg-gray-50 dark:bg-gray-900 rounded-xl',
    primary: 'bg-primary-50 dark:bg-primary-900/20 rounded-xl',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20 rounded-xl',
    accent: 'bg-accent-50 dark:bg-accent-900/20 rounded-xl',
  };

  const hoverEffects = {
    none: {},
    scale: {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.98 },
    },
    lift: {
      whileHover: { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' },
      whileTap: { y: -2 },
    },
    glow: {
      whileHover: { boxShadow: '0 0 15px rgba(66, 153, 225, 0.5)' },
    },
  };

  const cardClasses = `overflow-hidden transition-all duration-300 ${variantClasses[variant]} ${className}`;
  const hoverEffect = hoverEffects[hover];

  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      onClick={onClick}
      {...hoverEffect}
    >
      {children}
    </motion.div>
  );
};

export default Card;
