'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  shadowEffect?: boolean;
}

export default function HoverCard({ 
  children, 
  className = "",
  hoverScale = 1.03,
  shadowEffect = true
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{ 
        scale: hoverScale,
        y: -5,
        ...(shadowEffect && {
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
        })
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}