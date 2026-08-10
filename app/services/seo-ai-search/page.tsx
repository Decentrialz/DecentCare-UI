import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import { seoPageSchema } from "@/lib/schemas/seoSchema";
import Navbar from "@/app/components/navbar";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/services/seo-ai-search'),
  },
};
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroSection from "./HeroSection";
import ProvenResultsSection from "./ProvenResultsSection";
import OurClientsSection from "./ourClients";
import WhatOurSEOServiceIncludesSection from "./WhatOurSEOServiceIncludesSection";
import AIBasedSEOLayerSection from "./AIBasedSEOLayerSection";
import HowThisAILayerSupportsSection from "./HowThisAILayerSupportsSection";
import HowWeWorkSection from "./HowWeWorkSection";
import DeliverablesSection from "./DeliverablesSection";
import WhoThisIsForSection from "./WhoThisIsForSection";
import FAQSection from "../FAQSection";
import CTASection from "@/app/about/CTASection";

const seoFaqs = [
  {
    question: "How is healthcare SEO different from regular SEO?",
    answer: "Healthcare requires higher trust, clearer intent mapping, and careful content practices to avoid misleading claims. Visibility is driven by accuracy, authority, and patient clarity.",
  },
  {
    question: "Do you work with multi-location hospitals and clinic chains?",
    answer: "Yes. We build scalable location and service SEO structures designed for expansion.",
  },
  {
    question: "Do you only do blogs?",
    answer: "No. Our core work is service, condition, doctor, and location architecture plus conversion-aligned pages. Content supports authority but is not the entire strategy.",
  },
  {
    question: "Do you optimize for AI search results too?",
    answer: "Yes. We treat AI as a primary discovery channel. Our SEO and LLM frameworks ensure your brand is cited accurately in AI summaries (like ChatGPT or Google Overviews), not just standard search.",
  },
  {
    question: "How do you measure success?",
    answer: "We track qualified discovery signals like patient-intent queries, priority page visibility, and appointment-ready actions, not only traffic.",
  },
];

const benefits = [
  "Increased organic traffic and patient enquiries",
  "Higher rankings for service-specific keywords",
  "Enhanced visibility in AI-powered search results",
  "Authority positioning in healthcare search",
  "Better ROI from organic channels",
  "Future-ready search strategy"
];

const SEOAISearchPage = () => {
  return (
    <>
      <script
        id="seo-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoPageSchema),
        }}
      />
      <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProvenResultsSection />
      <OurClientsSection />
      <WhatOurSEOServiceIncludesSection />
      <AIBasedSEOLayerSection />
      <HowThisAILayerSupportsSection />
      <HowWeWorkSection />
      <DeliverablesSection />
      <WhoThisIsForSection />
      <FAQSection faqs={seoFaqs} />
      
      <CTASection
        heading="Build Sustainable Healthcare Discoverability"
        description="If your goal is to grow with patient-intent search, improve trust, and stay visible in the AI era, this SEO system is built for long-term performance."
        buttonText="Book a Free Healthcare SEO Consultation"
      />

      <MobileStickyButtons />
      <Footer />
      </div>
    </>
  );
};

export default SEOAISearchPage;
