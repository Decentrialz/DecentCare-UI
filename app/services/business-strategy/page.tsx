import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import ServicesSection from "./ServicesSection";
import WhyDecentCareSection from "./WhyDecentCareSection";
import HowWeWorkSection from "./HowWeWorkSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "@/app/about/CTASection";

const BusinessStrategyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <WhyDecentCareSection />
      <HowWeWorkSection />
      <WhoThisIsForSection />
      <TestimonialsSection />
      
      <CTASection
        heading="Ready to Start?"
        description="Book a free 45-minute strategy call. We will review your current position, identify the most significant lever in your situation, and outline whether and how we can contribute."
        subDescription="No obligation  |  No sales pitch  |  A straightforward conversation"
        buttonText="Book Your Free Strategy Call"
      />

      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default BusinessStrategyPage;
