import { motion, useScroll, useTransform } from 'framer-motion';

const RunningBull = () => {
  const { scrollYProgress } = useScroll();
  
  // Move bull from left to right as user scrolls
  const x = useTransform(scrollYProgress, [0, 1], ['-100%', '100vw']);
  
  // Slight bounce effect
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [0, -10, 0, -10, 0, -10, 0, -10, 0, -10, 0]
  );

  return (
    <motion.div
      className="fixed bottom-8 left-0 z-40 pointer-events-none"
      style={{ x, y }}
    >
      <motion.div
        animate={{ 
          scaleX: [1, 1, 1],
        }}
        transition={{
          duration: 0.3,
          repeat: Infinity,
        }}
      >
        {/* Bull SVG */}
        <svg
          width="80"
          height="60"
          viewBox="0 0 100 75"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          {/* Body */}
          <ellipse cx="50" cy="45" rx="30" ry="20" fill="hsl(var(--primary))" />
          
          {/* Head */}
          <ellipse cx="82" cy="35" rx="12" ry="10" fill="hsl(var(--primary))" />
          
          {/* Horns */}
          <path
            d="M88 28 Q95 15 92 10"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M78 28 Q71 15 74 10"
            stroke="hsl(var(--secondary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Eye */}
          <circle cx="86" cy="33" r="2" fill="hsl(var(--background))" />
          
          {/* Nose ring */}
          <circle cx="90" cy="40" r="3" stroke="hsl(var(--secondary))" strokeWidth="1.5" fill="none" />
          
          {/* Ear */}
          <ellipse cx="75" cy="28" rx="4" ry="6" fill="hsl(var(--primary-dark))" />
          
          {/* Hump */}
          <ellipse cx="35" cy="30" rx="10" ry="8" fill="hsl(var(--primary))" />
          
          {/* Tail */}
          <motion.path
            d="M20 45 Q10 50 8 60 Q6 65 10 68"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            animate={{ 
              d: [
                "M20 45 Q10 50 8 60 Q6 65 10 68",
                "M20 45 Q12 48 10 58 Q8 63 14 66",
                "M20 45 Q10 50 8 60 Q6 65 10 68"
              ]
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
          
          {/* Tail tuft */}
          <motion.ellipse 
            cx="10" 
            cy="68" 
            rx="4" 
            ry="3" 
            fill="hsl(var(--primary-dark))"
            animate={{
              cx: [10, 14, 10],
              cy: [68, 66, 68]
            }}
            transition={{ duration: 0.4, repeat: Infinity }}
          />
          
          {/* Front legs with running animation */}
          <motion.g
            animate={{
              rotate: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "65px", originY: "55px" }}
          >
            <rect x="62" y="55" width="6" height="18" rx="3" fill="hsl(var(--primary-dark))" />
          </motion.g>
          
          <motion.g
            animate={{
              rotate: [0, -30, 0, 30, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "72px", originY: "55px" }}
          >
            <rect x="69" y="55" width="6" height="18" rx="3" fill="hsl(var(--primary))" />
          </motion.g>
          
          {/* Back legs with running animation */}
          <motion.g
            animate={{
              rotate: [0, -30, 0, 30, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "32px", originY: "55px" }}
          >
            <rect x="29" y="55" width="6" height="18" rx="3" fill="hsl(var(--primary-dark))" />
          </motion.g>
          
          <motion.g
            animate={{
              rotate: [0, 30, 0, -30, 0],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "42px", originY: "55px" }}
          >
            <rect x="39" y="55" width="6" height="18" rx="3" fill="hsl(var(--primary))" />
          </motion.g>
          
          {/* Dust particles */}
          <motion.g
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.3, repeat: Infinity }}
          >
            <circle cx="15" cy="70" r="2" fill="hsl(var(--muted))" opacity="0.6" />
            <circle cx="8" cy="68" r="1.5" fill="hsl(var(--muted))" opacity="0.4" />
            <circle cx="12" cy="65" r="1" fill="hsl(var(--muted))" opacity="0.3" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
};

export default RunningBull;
