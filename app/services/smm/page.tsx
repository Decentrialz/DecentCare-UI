import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import Navbar from "@/app/components/navbar";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/services/smm'),
  },
};
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
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
import FAQSection from "../FAQSection";
import CTASection from "../../about/CTASection";

const smmFaqs = [
  { question: "Do you handle everything end-to-end?", answer: "Yes. Strategy, content production, publishing, community, and monthly optimisation." },
  { question: "Do doctors need to be on camera?", answer: "Not mandatory. Voiceovers, explainers, and hybrid formats are supported." },
  { question: "Do you support all major platforms?", answer: "Yes. Platform mix is aligned to your audience, specialty, and services." },
  { question: "How do you keep content healthcare-safe?", answer: "Structured review workflows and responsible language standards are followed." },
  { question: "How soon can we start?", answer: "Start with an audit, then move into monthly production and execution." },
];



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
      <FAQSection faqs={smmFaqs} variant="gradient-border" backgroundColor="#FFFFFF" />
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
      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default SocialMediaMarketing;