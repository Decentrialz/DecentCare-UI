import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/Hero";
import Results from "@/app/components/Results";
import Problems from "@/app/components/Problems";
import EmpathyBot from "@/app/components/EmpathyBot";
import EmpathyFirst from "@/app/components/EmpathyFirst";
import MarketingStack from "@/app/components/MarketingStack";
import DigitalTwin from "@/app/components/DigitalTwin";
import CustomerSegments from "@/app/components/CustomerSegments";
import TechnologyPlatform from "@/app/components/TechnologyPlatform";
import Comparison from "@/app/components/Comparison";
import Testimonials from "@/app/components/Testimonials";
import CTA from "@/app/components/CTA";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Results />
      <Problems />
      <EmpathyBot />
      <EmpathyFirst />
      <MarketingStack />
      <DigitalTwin />
      <CustomerSegments />
      <TechnologyPlatform />
      <Comparison />
      <Testimonials />
      <CTA />
      <Footer />
      <MobileStickyButtons />
    </div>
  );
};

export default Index;