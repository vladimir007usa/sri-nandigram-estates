import { motion, useScroll, useTransform } from 'framer-motion';
import runningBull from '@/assets/running-bull.png';

const RunningBull = () => {
  const { scrollYProgress } = useScroll();
  
  // Move bull from left to right as user scrolls through the entire page
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '85vw']);
  
  // Bouncing effect while running
  const y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    [0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0, -12, 0]
  );

  return (
    <motion.div
      className="fixed bottom-6 z-50 pointer-events-none"
      style={{ 
        x, 
        y,
        left: 0,
      }}
    >
      <motion.div className="relative">
        {/* Realistic Bull Image */}
        <motion.img
          src={runningBull}
          alt="Sacred Nandi Bull"
          className="w-28 h-auto drop-shadow-2xl"
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Dust cloud effect */}
        <motion.div
          className="absolute -left-6 bottom-0 flex gap-1"
          animate={{ opacity: [0.7, 0.2, 0.7] }}
          transition={{ duration: 0.25, repeat: Infinity }}
        >
          <div className="w-4 h-4 rounded-full bg-amber-300/50 blur-sm" />
          <div className="w-3 h-3 rounded-full bg-amber-200/40 mt-1 blur-sm" />
          <div className="w-2 h-2 rounded-full bg-amber-100/30 mt-2 blur-sm" />
        </motion.div>
        
        {/* Additional dust particles */}
        <motion.div
          className="absolute -left-8 bottom-2 flex gap-2"
          animate={{ 
            opacity: [0.5, 0.1, 0.5],
            x: [-5, -15, -5]
          }}
          transition={{ duration: 0.4, repeat: Infinity }}
        >
          <div className="w-2 h-2 rounded-full bg-amber-200/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-100/40" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RunningBull;
