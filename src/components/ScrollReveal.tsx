import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
}

export function FadeUp({ children, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.1, 0, 1]
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

export function FadeIn({ children, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.1, 0, 1]
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

export function SlideIn({ children, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.1, 0, 1]
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}

export function ScaleIn({ children, width = "100%" }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 1,
        ease: [0.25, 0.1, 0, 1]
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
}