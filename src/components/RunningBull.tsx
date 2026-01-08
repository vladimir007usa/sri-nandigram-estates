import { motion, useScroll, useTransform } from 'framer-motion';

const RunningBull = () => {
  const { scrollYProgress } = useScroll();
  
  // Move bull from left to right as user scrolls through the entire page
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '85vw']);
  
  // Bouncing effect while running
  const y = useTransform(
    scrollYProgress,
    [0, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 1],
    [0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0, -15, 0]
  );

  return (
    <motion.div
      className="fixed bottom-12 z-50 pointer-events-none"
      style={{ 
        x, 
        y,
        left: 0,
      }}
    >
      <motion.div className="relative">
        {/* Bull SVG - Sacred Nandi */}
        <svg
          width="120"
          height="90"
          viewBox="0 0 120 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-xl"
        >
          {/* Body */}
          <ellipse cx="60" cy="50" rx="35" ry="22" fill="#8B5A2B" />
          
          {/* Hump */}
          <ellipse cx="42" cy="32" rx="12" ry="10" fill="#7A4A1B" />
          
          {/* Head */}
          <ellipse cx="95" cy="40" rx="15" ry="12" fill="#8B5A2B" />
          
          {/* Snout */}
          <ellipse cx="108" cy="45" rx="8" ry="6" fill="#6B4423" />
          
          {/* Horns */}
          <path
            d="M100 30 Q110 15 105 5"
            stroke="#D4A657"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M88 30 Q78 15 83 5"
            stroke="#D4A657"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Ears */}
          <ellipse cx="85" cy="30" rx="5" ry="8" fill="#6B4423" />
          <ellipse cx="102" cy="32" rx="4" ry="6" fill="#6B4423" />
          
          {/* Eye */}
          <circle cx="98" cy="38" r="3" fill="#1a1a1a" />
          <circle cx="99" cy="37" r="1" fill="white" />
          
          {/* Nose */}
          <ellipse cx="112" cy="46" rx="2" ry="1.5" fill="#4a3520" />
          <ellipse cx="115" cy="46" rx="2" ry="1.5" fill="#4a3520" />
          
          {/* Decorative necklace */}
          <path
            d="M75 55 Q85 62 95 55"
            stroke="#D4A657"
            strokeWidth="3"
            fill="none"
          />
          <circle cx="85" cy="60" r="4" fill="#D4A657" />
          
          {/* Tail */}
          <motion.path
            d="M25 50 Q15 55 12 65 Q10 75 18 80"
            stroke="#7A4A1B"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            animate={{ 
              d: [
                "M25 50 Q15 55 12 65 Q10 75 18 80",
                "M25 50 Q18 52 16 62 Q14 72 22 77",
                "M25 50 Q15 55 12 65 Q10 75 18 80"
              ]
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
          
          {/* Tail tuft */}
          <motion.ellipse 
            cx="18" 
            cy="80" 
            rx="6" 
            ry="4" 
            fill="#5a3a15"
            animate={{
              cx: [18, 22, 18],
              cy: [80, 77, 80]
            }}
            transition={{ duration: 0.3, repeat: Infinity }}
          />
          
          {/* Front legs with running animation */}
          <motion.rect
            x="72"
            y="62"
            width="8"
            height="22"
            rx="4"
            fill="#7A4A1B"
            animate={{
              rotate: [20, -20, 20],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "76px", originY: "62px", transformBox: "fill-box" }}
          />
          
          <motion.rect
            x="82"
            y="62"
            width="8"
            height="22"
            rx="4"
            fill="#8B5A2B"
            animate={{
              rotate: [-20, 20, -20],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "86px", originY: "62px", transformBox: "fill-box" }}
          />
          
          {/* Back legs with running animation */}
          <motion.rect
            x="35"
            y="62"
            width="8"
            height="22"
            rx="4"
            fill="#7A4A1B"
            animate={{
              rotate: [-20, 20, -20],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "39px", originY: "62px", transformBox: "fill-box" }}
          />
          
          <motion.rect
            x="48"
            y="62"
            width="8"
            height="22"
            rx="4"
            fill="#8B5A2B"
            animate={{
              rotate: [20, -20, 20],
            }}
            transition={{
              duration: 0.25,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ originX: "52px", originY: "62px", transformBox: "fill-box" }}
          />
          
          {/* Hooves */}
          <motion.ellipse cx="76" cy="84" rx="5" ry="3" fill="#4a3520" 
            animate={{ cy: [84, 82, 84] }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />
          <motion.ellipse cx="86" cy="84" rx="5" ry="3" fill="#4a3520"
            animate={{ cy: [82, 84, 82] }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />
          <motion.ellipse cx="39" cy="84" rx="5" ry="3" fill="#4a3520"
            animate={{ cy: [82, 84, 82] }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />
          <motion.ellipse cx="52" cy="84" rx="5" ry="3" fill="#4a3520"
            animate={{ cy: [84, 82, 84] }}
            transition={{ duration: 0.25, repeat: Infinity }}
          />
        </svg>
        
        {/* Dust cloud effect */}
        <motion.div
          className="absolute -left-4 bottom-0 flex gap-1"
          animate={{ opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 0.3, repeat: Infinity }}
        >
          <div className="w-3 h-3 rounded-full bg-amber-200/60" />
          <div className="w-2 h-2 rounded-full bg-amber-200/40 mt-1" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-200/30 mt-2" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default RunningBull;
