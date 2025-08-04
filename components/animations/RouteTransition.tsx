'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';

interface RouteTransitionProps {
  children: ReactNode;
}

const routeVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
};

const routeTransition = {
  type: 'tween' as const,
  ease: [0.21, 0.47, 0.32, 0.98] as const,
  duration: 0.4,
};

// Loading bar animation
const loadingBarVariants = {
  initial: { scaleX: 0, originX: 0 },
  loading: { scaleX: 1, originX: 0 },
  complete: { scaleX: 1, originX: 1 },
};

export default function RouteTransition({ children }: RouteTransitionProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-600 z-50"
        variants={loadingBarVariants}
        initial="initial"
        animate={isLoading ? "loading" : "complete"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
      
      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="initial"
          animate="in"
          exit="out"
          variants={routeVariants}
          transition={routeTransition}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}