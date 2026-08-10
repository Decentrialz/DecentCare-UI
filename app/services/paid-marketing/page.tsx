import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import { paidMarketingPageSchema } from "@/lib/schemas/paidMarketingSchema";
import Navbar from "@/app/components/navbar";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/services/paid-marketing'),
  },
};
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroSection from "./HeroSection";
import DecentCareWaySection from "./DecentCareWaySection";
import WhoThisServiceIsForSection from "./WhoThisServiceIsForSection";
import WhatOurServiceIncludesSection from "./WhatOurServiceIncludesSection";
import HowWeBuildSection from "./HowWeBuildSection";
import AIAdvantageSection from "./AIAdvantageSection";
import WhatYouGetSection from "./WhatYouGetSection";
import AuditCTASection from "./AuditCTASection";
import FAQSection from "../FAQSection";
import CTASection from "@/app/about/CTASection";

const paidMarketingFaqs = [
  {
    question: "Do You Manage Google Ads For Healthcare?",
    answer: "Yes. We manage Google Ads for search, YouTube, and remarketing, aligned to patient intent and service-line goals.",
  },
  {
    question: "Do You Run Meta Ads For Clinics And Hospitals?",
    answer: "Yes. We run Meta Ads across Facebook and Instagram for awareness, consideration, retargeting, and enquiry-focused campaigns.",
  },
  {
    question: "What Conversion Actions Do You Track?",
    answer: "Typically calls, WhatsApp enquiries, form submissions, and appointment requests, based on what fits your enquiry flow.",
  },
  {
    question: "Do You Provide Reporting That Leadership Can Use?",
    answer: "Yes. Reporting is structured to support decision-making by showing channel performance, service-line performance, conversion actions, and enquiry sources.",
  },
  {
    question: "How do you handle healthcare ad restrictions?",
    answer: "We are experts in platform policies (Google/Meta). We ensure your ads are compliant while still being persuasive, avoiding common pitfalls that lead to account suspensions.",
  },
  {
    question: "Do we own the data?",
    answer: "Yes. You own all account assets and data. We provide the expertise and the AI layer to manage it.",
  },
];

const PaidMarketingPage = () => {
  return (
    <>
      <script
        id="paid-marketing-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(paidMarketingPageSchema),
        }}
      />
      <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <DecentCareWaySection />
      <WhoThisServiceIsForSection />
      <WhatOurServiceIncludesSection />
      <HowWeBuildSection />
      <AIAdvantageSection />
      <WhatYouGetSection />
      <AuditCTASection />
      <FAQSection faqs={paidMarketingFaqs} />
      <MobileStickyButtons />
      <Footer />
      </div>
    </>
  );
};

export default PaidMarketingPage;
