import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import PropertiesSection from '@/components/PropertiesSection';
import LocationSection from '@/components/LocationSection';
import GallerySection from '@/components/GallerySection';
import PricingSection from '@/components/PricingSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import RunningBull from '@/components/RunningBull';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <PropertiesSection />
      <LocationSection />
      <GallerySection />
      <PricingSection />
      <ContactSection />
      <Footer />
      <FloatingCTA />
      <RunningBull />
    </main>
  );
};

export default Index;
