'use client';

import { motion } from 'framer-motion';
import React, { ReactNode } from 'react';

interface AnimatedElementProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  duration?: number;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  isVisible,
  delay = 0,
  direction = 'up',
  className = '',
  duration = 0.5,
}) => {
  const directionVariants = {
    up: { y: 46, opacity: 0 },
    down: { y: -46, opacity: 0 },
    left: { x: 38, opacity: 0 },
    right: { x: -38, opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      animate={
        isVisible ? { x: 0, y: 0, opacity: 1 } : directionVariants[direction]
      }
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={isVisible ? { y: -4 } : undefined}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollTextProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
}

export const ScrollText: React.FC<ScrollTextProps> = ({
  children,
  isVisible,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxTextProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
}

export const ParallaxText: React.FC<ParallaxTextProps> = ({
  children,
  isVisible,
  delay = 0,
  className = '',
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 30, opacity: 0 }}
      animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </motion.div>
  );
};
