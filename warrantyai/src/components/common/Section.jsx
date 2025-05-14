import { motion } from 'framer-motion';

const Section = ({
  children,
  className = '',
  id,
  fullWidth = false,
  animate = true,
  background = 'default',
  padding = 'default',
}) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-primary-50 dark:bg-primary-900/20',
    secondary: 'bg-secondary-50 dark:bg-secondary-900/20',
    accent: 'bg-accent-50 dark:bg-accent-900/20',
    gradient: 'bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white',
    aurora: 'aurora-bg',
    transparent: 'bg-transparent',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-8',
    default: 'py-16 md:py-24',
    lg: 'py-24 md:py-32',
    xl: 'py-32 md:py-40',
  };

  const sectionClasses = `${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`;

  const contentClasses = fullWidth
    ? 'w-full'
    : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  if (animate) {
    return (
      <section id={id} className={sectionClasses}>
        <motion.div
          className={contentClasses}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          {children}
        </motion.div>
      </section>
    );
  }

  return (
    <section id={id} className={sectionClasses}>
      <div className={contentClasses}>{children}</div>
    </section>
  );
};

export default Section;
