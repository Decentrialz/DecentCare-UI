import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import PrivacyHero from "./PrivacyHero";
import PrivacyContent from "./PrivacyContent";
// import { privacyPolicySchema } from "@/lib/schemas/privacyPolicySchema";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import type { Metadata } from "next";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
   robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/privacy-policy'),
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      {/* <script
        id="privacy-policy-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(privacyPolicySchema),
        }}
      /> */}
      <div className="min-h-screen bg-background">
        <Navbar />
        <PrivacyHero />
        <PrivacyContent />
        <MobileStickyButtons />
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicyPage;
