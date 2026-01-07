import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed bottom-6 right-6 z-40"
        >
          <div className="relative">
            {/* Expanded Menu */}
            <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-16 right-0 flex flex-col gap-3"
              >
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center gap-3 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-elevated hover:shadow-gold transition-shadow"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-heading font-medium text-sm whitespace-nowrap">Call Now</span>
                </a>
              </motion.div>
            )}
            </AnimatePresence>

            {/* Toggle Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={`p-4 rounded-full shadow-elevated transition-all duration-300 ${
                isExpanded
                  ? 'bg-muted text-foreground rotate-45'
                  : 'bg-secondary text-secondary-foreground animate-pulse hover:animate-none'
              }`}
            >
              {isExpanded ? (
                <X className="w-6 h-6" />
              ) : (
                <Phone className="w-6 h-6" />
              )}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
