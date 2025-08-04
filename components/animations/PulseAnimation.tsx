'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PulseAnimationProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  scale?: number;
}

export default function PulseAnimation({ 
  children, 
  className = "",
  duration = 2,
  scale = 1.05
}: PulseAnimationProps) {
  return (
    <motion.div
      animate={{
        scale: [1, scale, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}