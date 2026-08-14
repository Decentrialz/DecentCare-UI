import type { Metadata } from "next";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import TermsHero from "./TermsHero";
import TermsContent from "./TermsContent";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";

const isProduction = process.env.NEXT_PUBLIC_ENV === "production";

export const metadata: Metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl("/terms-of-service"),
  },
};

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <TermsHero />
      <TermsContent />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
