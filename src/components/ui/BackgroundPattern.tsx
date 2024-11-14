'use client'

import { motion } from 'framer-motion';

interface BackgroundPatternProps {
  className?: string;
  fade?: 'up' | 'down' | 'none';
}

export const BackgroundPattern: React.FC<BackgroundPatternProps> = ({ 
  className = "", 
  fade = 'up' 
}) => {
  const maskImage = fade === 'up' 
    ? 'linear-gradient(0deg, transparent, black)'
    : fade === 'down'
    ? 'linear-gradient(180deg, transparent, black)'
    : 'none';

  return (
    <motion.div 
      className={`absolute inset-0 opacity-50 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ duration: 1 }}
      style={{
        backgroundImage: 'url("/grid-pattern.svg")',
        backgroundPosition: 'center',
        maskImage,
        WebkitMaskImage: maskImage,
      }}
    />
  );
};