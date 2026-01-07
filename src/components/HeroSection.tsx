import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import heroBanner from '@/assets/hero-banner.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="Sri NandiGram luxury villa community in Mayapur"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/60 via-brown-dark/40 to-brown-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-secondary/20 backdrop-blur-sm border border-secondary/30 rounded-full px-4 py-2 mb-8"
          >
            <MapPin className="w-4 h-4 text-secondary" />
            <span className="text-cream/90 font-body text-sm">Mayapur, West Bengal, India</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-cream mb-6 leading-tight"
          >
            Live in Serenity at{' '}
            <span className="text-gradient-gold">Sri NandiGram</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-cream/80 font-body mb-12 max-w-2xl mx-auto"
          >
            Luxury Villas, Plots & Land in Mayapur — Where Spirituality Meets Modern Living
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex justify-center"
          >
            <a href="#properties" className="btn-secondary group">
              Explore Properties
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-secondary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
