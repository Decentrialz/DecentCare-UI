import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroBanner from "../about/HeroBanner";
import CTASection from "../about/CTASection";
import HeroServices from "../assets/HeroServices.svg";
import Service from "./service";
import { servicesPageSchema } from "@/lib/schemas/servicesSchema";
import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  title: "Hospital Growth Platform & Marketing Services | DecentCare",
  description: "One flat fee: OmniLens, OmniJourney and OmniCare plus SEO, AI search, paid ads and social, run by a dedicated team. Live in 48 hours.",
  keywords: [
    "digital marketing for hospitals",
    "healthcare digital marketing",
    "healthcare marketing agency",
    "hospital management software",
  ],
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/services'),
  },
};

const Services = () => {
  return (
    <>
      <script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesPageSchema),
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <h1 className="sr-only">One stack. See, understand, act.</h1>
        <HeroBanner 
        heroImage={HeroServices}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
        title="One Services"
        description="Integrated Services for Smarter Healthcare Growth."
        subtitle="Strategic capabilities designed for modern healthcare organizations."
        variant="centered"
      />
        <Service />
        <CTASection heading="Learn More About DecentCare" description="If you are exploring ways to improve patient acquisition, care journey management, or the operational effectiveness of your healthcare practice, we would welcome the opportunity to connect." subDescription="Designed for clinics, hospitals, and healthcare teams managing real-world care workflows."/>
        <MobileStickyButtons />
        <Footer />
      </div>
    </>
  );
};

export default Services;