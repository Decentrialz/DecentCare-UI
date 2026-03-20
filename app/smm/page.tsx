import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./HeroSection";
import GrowthStatsSection from "./GrowthStatsSection";
import TrustedBySection from "./TrustedBySection";
import WhatYouGetSection from "./WhatYouGetSection";
import WhatWeDeliverSection from "./WhatWeDeliverSection";
import SocialLeadEngineSection from "./SocialLeadEngineSection";
import AIDeliverySection from "./AIDeliverySection";
import FormatsSection from "./FormatsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import ReportingSection from "./ReportingSection";
import FAQSection from "./FAQSection";
import CTASection from "../about/CTASection";



const SocialMediaMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <GrowthStatsSection />
      <TrustedBySection />
      <WhatYouGetSection />
      <WhatWeDeliverSection />
      <SocialLeadEngineSection />
      <AIDeliverySection />
      <FormatsSection />
      <HowWeWorkSection />
      <ReportingSection />
      <FAQSection />
      <CTASection
        heading="Get a Social Media Strategy Call"
        description="A focused session to align your goals, channels, content direction, and enquiry flow. Then we recommend the right monthly plan."
        buttonText="Schedule a Strategy Call"
        cards={[
          "What to prioritise across platforms for your services",
          "The content formats and series to run based on patient intent",
          "How to structure enquiries from social DMs, booking actions, front desk routing",
          "A clear 30-60 day execution direction",
        ]}
      />
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;