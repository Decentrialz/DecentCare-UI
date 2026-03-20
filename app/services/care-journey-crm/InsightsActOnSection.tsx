import RecommendationWorkflowCard from "./RecommendationWorkflowCard";


const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const INSIGHT_CARDS = [
  {
    stepNumber: "01",
    title: "Stage Drop-Off Detection",
    description:
      "See which patients are stalling between Consultation and Procedure Suggested — and which coordinator is responsible.",
  },
  {
    stepNumber: "02",
    title: "No-Show Rate by Doctor",
    description:
      "Identify which doctors or slots see the highest no-show rates and flag patterns before they compound.",
  },
  {
    stepNumber: "03",
    title: "Department Workload",
    description:
      "Understand where patient volume is concentrated and where capacity is underused.",
  },
  {
    stepNumber: "04",
    title: "Follow-Up Compliance",
    description:
      "Monitor whether post-op milestones are being completed on schedule — or quietly skipped.",
  },
  {
    stepNumber: "05",
    title: "Journey Overview Dashboard",
    description:
      "See patient distribution across all 7 stages in real time. Understand where movement flows and where it stalls.",
  },
  {
    stepNumber: "06",
    title: "Doctor & Department View",
    description:
      "Workload distribution and stage flow patterns at department and individual doctor level.",
  },
] as const;

export default function InsightsActOnSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-journey-bg`}>
      <div className={CONTENT_MAX}>
        <header className="text-center max-w-4xl mx-auto mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-green leading-tight">
            Insights you can act on
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-icon leading-relaxed">
            Care Journey CRM surfaces information that changes how teams operate — not a wall of metrics
            that needs a data analyst to interpret.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {INSIGHT_CARDS.map((card) => (
            <RecommendationWorkflowCard
              key={card.stepNumber}
              variant="insights"
              stepNumber={card.stepNumber}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
