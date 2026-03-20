import RecommendationWorkflowCard from "./RecommendationWorkflowCard";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const WORKFLOW_STEPS = [
  {
    stepNumber: "01",
    title: "Financial & Insurance",
    description:
      "Financial discussions and insurance coordination stay in the same patient record. No separate spreadsheet, no information loss.",
  },
  {
    stepNumber: "02",
    title: "Surgery Scheduling",
    description:
      "OR slots, pre-op requirements, and scheduling confirmations handled in one place, keeping all departments aligned.",
  },
  {
    stepNumber: "03",
    title: "Auto Follow-Up on Discharge",
    description:
      "Day-1, Week-1, and Month-1 follow-up tasks are created automatically on discharge. No manual action needed.",
  },
] as const;

export default function RecommendationToORSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-white`}>
      <div className={CONTENT_MAX}>
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
            From recommendation to OR — one workflow
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-icon leading-relaxed">
            Counsellors, doctors, and coordinators work within one system instead of shifting between tools.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {WORKFLOW_STEPS.map((step) => (
            <RecommendationWorkflowCard
              key={step.stepNumber}
              stepNumber={step.stepNumber}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
