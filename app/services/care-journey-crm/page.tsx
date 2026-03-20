import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import CareJourneyHero from "./CareJourneyHero";
import PatientOverviewCard from "./PatientOverviewCard";
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
    <div className="min-h-screen bg-background">
      <Navbar />

      <section
        className={`${SECTION_PADDING} mt-16 sm:mt-18 pt-10 pb-[120px]`}
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <CareJourneyHero />
            <div className="lg:pl-4">
              <PatientOverviewCard />
            </div>
          </div>
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
      <Footer />
    </div>
  );
}

