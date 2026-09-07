import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroSection from "@/app/home/HeroSection";
import TrustBar from "@/app/home/TrustBar";
import ProblemSection from "@/app/home/ProblemSection";
import GrowthLeakSection from "@/app/home/GrowthLeakSection";
import StackSection from "@/app/home/StackSection";
import ClosedLoopSection from "@/app/home/ClosedLoopSection";
import JourneySection from "@/app/home/JourneySection";
import AttributionSection from "@/app/home/AttributionSection";
import SecuritySection from "@/app/home/SecuritySection";
import WhoItsForSection from "@/app/home/WhoItsForSection";
import TestimonialsSection from "@/app/home/TestimonialsSection";
import CTASection from "@/app/about/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <GrowthLeakSection />
      <StackSection />
      <ClosedLoopSection />
      <JourneySection />
      <AttributionSection />
      <SecuritySection />
      <WhoItsForSection />
      <TestimonialsSection />
      <CTASection
        heading="See it on your own patient data."
        description="No pricing talk on the first call, just a walkthrough of how OmniLens, OmniJourney, and Omnicare would work for your hospital."
        subDescription="Designed for clinics, hospitals, and healthcare teams managing real-world care workflows."
        descriptionClassName="mx-auto max-w-3xl text-center mt-6"
      />
      <Footer />
      <MobileStickyButtons />
    </div>
  );
};

export default Index;
