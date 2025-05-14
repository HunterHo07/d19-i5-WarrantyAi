import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimatedText = ({
  text,
  className = '',
  once = true,
  type = 'words',
  duration = 0.5,
  staggerChildren = 0.03,
  delayChildren = 0,
  animation = 'fade-up',
  tag = 'h2',
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [isInView, controls, once]);

  const getAnimationVariants = () => {
    switch (animation) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 },
        };
      case 'fade-left':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        };
      case 'fade-right':
        return {
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 1, x: 0 },
        };
      case 'zoom-in':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'zoom-out':
        return {
          hidden: { opacity: 0, scale: 1.2 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'flip-up':
        return {
          hidden: { opacity: 0, rotateX: 90 },
          visible: { opacity: 1, rotateX: 0 },
        };
      case 'flip-down':
        return {
          hidden: { opacity: 0, rotateX: -90 },
          visible: { opacity: 1, rotateX: 0 },
        };
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };

  const itemVariants = getAnimationVariants();

  const renderContent = () => {
    if (type === 'chars') {
      return text.split('').map((char, index) => (
        <motion.span
          key={`char-${index}`}
          variants={itemVariants}
          transition={{ duration }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ));
    } else if (type === 'words') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={`word-${index}`}
          variants={itemVariants}
          transition={{ duration }}
          style={{ display: 'inline-block' }}
        >
          {word}
          {index !== text.split(' ').length - 1 && '\u00A0'}
        </motion.span>
      ));
    } else {
      return (
        <motion.span variants={itemVariants} transition={{ duration }}>
          {text}
        </motion.span>
      );
    }
  };

  const Tag = tag;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className={className}
    >
      <Tag className="inline-block">{renderContent()}</Tag>
    </motion.div>
  );
};

export default AnimatedText;
