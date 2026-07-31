import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroBanner from "./HeroBanner";
import OurStory from "./OurStory";
import OurApproach from "./OurApproach";
import WhatWeOffer from "./WhatWeOffer";
import OurClients from "./OurClients";
import FoundersStory from "./FoundersStory";
import OurTeam from "./OurTeam";
import CTASection from "./CTASection";
import Hero from "../assets/Hero.svg";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: 'index, follow',
  alternates: {
    canonical: getCanonicalUrl('/about'),
  },
};

const About = () => {
  console.log("Hero import:", Hero); // Debug log
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroBanner 
        heroImage={Hero}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "About" }
        ]}
        title="About DecentCare"
        description="DecentCare is an AI-powered healthcare technology platform built to help hospitals, clinics, and medical practitioners attract more patients, manage care journeys, and grow sustainably."
        highlightedText="We combine AI-driven patient acquisition, Digital Twin technology, and intelligent care journey automation into a single, integrated platform, purpose-built for the unique demands of healthcare providers. From the first patient touchpoint to long-term retention, DecentCare supports every stage of the journey with precision, empathy, and measurable results."
      />
      <OurStory />
      <OurApproach />
      <WhatWeOffer />
      <OurClients />
      <FoundersStory />
      {/* <OurTeam /> */}
      <CTASection heading="Learn More About DecentCare" 
        description="If you are exploring ways to improve patient acquisition, care journey management, or the operational effectiveness of your healthcare practice, we would welcome the opportunity to connect."
        subDescription="Designed for clinics, hospitals, and healthcare teams managing real-world care workflows."
        />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default About;