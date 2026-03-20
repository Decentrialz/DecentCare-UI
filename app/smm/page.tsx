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
      <CTASection />
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;