import RecommendationWorkflowCard from "./RecommendationWorkflowCard";
import AutomaticTransitionFeaturedCard from "./AutomaticTransitionFeaturedCard";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const SURGERY_CARDS = [
  {
    stepNumber: "01",
    title: "Procedure Done Oversight",
    description:
      "The surgical episode is a connected stage, not an isolated event. Documentation, recovery, and discharge all live in the same record.",
  },
  {
    stepNumber: "02",
    title: "Discharge Summary",
    description:
      "When discharge is completed, the episode status updates and post-operative follow-up tasks are triggered automatically.",
  },
] as const;

export default function SurgeryToDischargeSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-white`}>
      <div className={CONTENT_MAX}>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
            Surgery to discharge — one connected record
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-icon leading-relaxed">
            Clinical documentation, recovery monitoring, and discharge summaries stay tied to the
            patient&apos;s overall journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-4 md:mb-6">
          {SURGERY_CARDS.map((card) => (
            <RecommendationWorkflowCard
              key={card.stepNumber}
              stepNumber={card.stepNumber}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <AutomaticTransitionFeaturedCard />
      </div>
    </section>
  );
}
