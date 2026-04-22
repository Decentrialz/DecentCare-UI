import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import HeroSection from "./HeroSection";
import SystemThinkingSection from "./SystemThinkingSection";
import WhatWeFocusOnSection from "./WhatWeFocusOnSection";
import WhatIncludesSection from "./WhatIncludesSection";
import AiChatBot from "./AiChatBot";
import FAQSection from "../FAQSection";
import CTASection from "@/app/about/CTASection";
import HowDeliveryWorks from "./HowDeliveryWorks";
import WebsiteAuditCTA from "./WebsiteAuditCTA";

const webDevelopmentFaqs = [
  {
    question: "Do you build new websites and improve existing ones?",
    answer: "Yes. Work can start with an audit and improvements, then move into a full rebuild when required.",
  },
  {
    question: "Do you support multi-branch websites?",
    answer: "Yes. Location structure is part of the core build.",
  },
  {
    question: "Do you integrate appointment booking tools?",
    answer: "Yes. Existing booking flows can be integrated, and appointment request flows can be built when needed.",
  },
  {
    question: "Can AI chat be added later?",
    answer: "Yes. Chat can be implemented after the core structure is in place.",
  },
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SystemThinkingSection />
      <WhatWeFocusOnSection />
      <WhatIncludesSection />
      <AiChatBot />
      <HowDeliveryWorks />
      <WebsiteAuditCTA />
      <FAQSection faqs={webDevelopmentFaqs} />
      <Footer />
    </div>
  );
};

export default WebDevelopmentPage;
