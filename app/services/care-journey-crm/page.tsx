import type { Metadata } from "next";
import { getCanonicalUrl } from "@/lib/utils/siteConfig";
import { crmPageSchema } from "@/lib/schemas/crmSchema";
import Navbar from "@/app/components/navbar";

const isProduction = process.env.NEXT_PUBLIC_ENV === 'production';

export const metadata: Metadata = {
  robots: {
    index: isProduction,
    follow: isProduction,
  },
  alternates: {
    canonical: getCanonicalUrl('/services/care-journey-crm'),
  },
};
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import Breadcrumb from "@/app/components/Breadcrumb";
import CareJourneyHero from "./CareJourneyHero";
import CompletePatientJourneySection from "./CompletePatientJourneySection";
import EnquirySchedulingSection from "./EnquirySchedulingSection";
import JourneyStagesSection from "./JourneyStagesSection";
import RecommendationToORSection from "./RecommendationToORSection";
import RecoveryTrackedSection from "./RecoveryTrackedSection";
import SurgeryToDischargeSection from "./SurgeryToDischargeSection";
import EveryRoleNoGapsSection from "./EveryRoleNoGapsSection";
import InsightsActOnSection from "./InsightsActOnSection";
import InnovationPartnersTestimonialsSection from "./InnovationPartnersTestimonialsSection";
import CTASection from "@/app/about/CTASection";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

export default function CareJourneyCRMPage() {
  return (
    <>
      <script
        id="crm-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(crmPageSchema),
        }}
      />
      <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className={`${SECTION_PADDING} mt-16 sm:mt-18 pt-10 pb-[60px] md:pb-[120px]`}
        style={{ background: "var(--gradient-blue-wash-vertical)" }}
      >
        <div className={CONTENT_MAX}>
          <div className="mb-18">
            <Breadcrumb
              items={[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "AI-Enabled Care Journey CRM" },
              ]}
              breadCrumbClass="bg-secondary-green/4"
            />
          </div>

          <CareJourneyHero />
        </div>
      </section>

      <CompletePatientJourneySection />
      <EnquirySchedulingSection />
      <JourneyStagesSection />
      <RecommendationToORSection />
      <SurgeryToDischargeSection />
      <RecoveryTrackedSection />
      <EveryRoleNoGapsSection />
      <InsightsActOnSection />
      <InnovationPartnersTestimonialsSection />

      <CTASection
        heading="Stop managing patients across disconnected systems."
        description="AI-Enabled Care Journey CRM connects enquiry, scheduling, clinical workflows, surgery coordination, and recovery management into one structured system."
      />
      <MobileStickyButtons />
      <Footer />
      </div>
    </>
  );
}

