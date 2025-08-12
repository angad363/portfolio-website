import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const texts = ['Software Engineer', 'Backend Engineer', 'Frontend Engineer', 'AI Enthusiast'];

export default function CyclingText() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={currentIndex}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
        className="block"
      >
        {texts[currentIndex]}
      </motion.span>
    </AnimatePresence>
  );
}
