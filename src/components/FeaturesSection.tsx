import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Sprout, Leaf, GraduationCap, BookOpen, Flame, Baby, 
  TreePine, HandHeart, Building, Hotel, Shield, Wifi, 
  Droplets, Sun
} from 'lucide-react';
import organicGarden from '@/assets/organic-garden.jpg';
import beekeeping from '@/assets/beekeeping.jpg';
import gauSanctuary from '@/assets/gau-sanctuary.jpg';
import temple from '@/assets/temple.jpg';
import playground from '@/assets/children-playground.jpg';
import mangoGrove from '@/assets/mango-grove.jpg';
import yogaArea from '@/assets/yoga-area.jpg';
import varnashramCollege from '@/assets/varnashram-college.jpg';
import vaishnavInstitute from '@/assets/vaishnav-institute.jpg';
import gitaPathshala from '@/assets/gita-pathshala.jpg';
import yajnaSala from '@/assets/yajna-sala.jpg';
import guestHouse from '@/assets/guest-house.jpg';
import securityGate from '@/assets/security-gate.jpg';
import internetFacility from '@/assets/internet-facility.jpg';
import waterTreatment from '@/assets/water-treatment.jpg';

const features = [
  {
    icon: Sprout,
    title: 'Organic Vegetable Garden',
    description: 'Fresh, chemical-free vegetables grown with love right in our community.',
    image: organicGarden,
  },
  {
    icon: Leaf,
    title: 'Bee Keeping',
    description: 'Sustainable beekeeping for fresh honey and supporting pollinators.',
    image: beekeeping,
  },
  {
    icon: GraduationCap,
    title: 'Varnashram College',
    description: 'Traditional education integrating spiritual wisdom with practical skills.',
    image: varnashramCollege,
  },
  {
    icon: BookOpen,
    title: 'Vaishnav Research Institute',
    description: 'Dedicated to preserving and advancing Vaishnava philosophy and culture.',
    image: vaishnavInstitute,
  },
  {
    icon: BookOpen,
    title: 'Gita Pathshala',
    description: 'Learn the timeless wisdom of Bhagavad Gita in a nurturing environment.',
    image: gitaPathshala,
  },
  {
    icon: Flame,
    title: 'Goura Yajna Sala',
    description: 'Sacred space for performing Vedic yajnas and spiritual ceremonies.',
    image: yajnaSala,
  },
  {
    icon: Baby,
    title: 'Children Playing Area',
    description: 'Safe, engaging play spaces for children to grow and explore.',
    image: playground,
  },
  {
    icon: TreePine,
    title: 'Mango Grove & Banana Farm',
    description: 'Lush orchards providing fresh fruits and serene walking paths.',
    image: mangoGrove,
  },
  {
    icon: HandHeart,
    title: 'Gau-Nandi Sanctuary',
    description: 'Sacred cow sanctuary where cows are loved and protected.',
    image: gauSanctuary,
  },
  {
    icon: Building,
    title: 'Sri Sri Krishna Balaram Temple',
    description: 'Beautiful temple for daily darshan and spiritual programs.',
    image: temple,
  },
  {
    icon: Hotel,
    title: 'Srivas Bhavan Guest House',
    description: 'Comfortable staying facilities for residents and visiting guests.',
    image: guestHouse,
  },
  {
    icon: Shield,
    title: 'Secured Gated Community',
    description: '24/7 security with CCTV cameras for complete peace of mind.',
    image: securityGate,
  },
  {
    icon: Wifi,
    title: 'Dedicated Internet Facilities',
    description: 'High-speed connectivity to stay connected with the world.',
    image: internetFacility,
  },
  {
    icon: Droplets,
    title: 'Water Treatment Plant',
    description: 'Pure, treated water supply for all community needs.',
    image: waterTreatment,
  },
  {
    icon: Sun,
    title: 'Yoga & Vrinda Kunj',
    description: 'Serene spaces for yoga, meditation, and spiritual practices.',
    image: yogaArea,
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="section-padding bg-muted/30" ref={ref}>
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-heading font-semibold text-sm uppercase tracking-wider">
            What Makes Us Special
          </span>
          <h2 className="section-title mt-4 mb-6">
            Life at <span className="text-gradient-gold">Sri NandiGram</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Experience a unique blend of spiritual living, sustainable practices, and modern amenities.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="card-elevated group"
            >
              {feature.image && (
                <div className="h-40 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
