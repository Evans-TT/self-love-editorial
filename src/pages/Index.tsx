import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CollectionSection from "@/components/CollectionSection";
import BespokeGiftingSection from "@/components/BespokeGiftingSection";
import SocialSection from "@/components/SocialSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CollectionSection />
      <BespokeGiftingSection />
      <SocialSection />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
