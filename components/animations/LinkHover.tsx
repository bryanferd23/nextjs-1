'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface LinkHoverProps {
  children: ReactNode;
  className?: string;
  underlineColor?: string;
}

export default function LinkHover({ 
  children, 
  className = "",
  underlineColor = "bg-blue-600"
}: LinkHoverProps) {
  return (
    <motion.span
      whileHover={{ color: "#2563eb" }}
      className={`relative inline-block cursor-pointer ${className}`}
    >
      {children}
      <motion.div
        className={`absolute bottom-0 left-0 h-0.5 ${underlineColor}`}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </motion.span>
  );
}