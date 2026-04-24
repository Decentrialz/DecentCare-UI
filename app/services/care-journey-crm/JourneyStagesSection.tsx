const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface JourneyCard {
  title: string;
  description: string;
  primary?: boolean;
}

const JOURNEY_CARDS: JourneyCard[] = [
  {
    title: "Procedure Suggested Path",
    description:
      "Financial discussions, insurance coordination, and OR scheduling stay in the same workflow. Counsellors, doctors, and coordinators work in one system.",
    primary: true,
  },
  {
    title: "Conservative Management Path",
    description:
      "Diagnostic tracking, follow-up scheduling, and continued care notes stay connected within the same structured flow.",
  },
  {
    title: "Consultation Workflow",
    description:
      "Record clinical notes, track diagnostics, and determine care direction without toggling between tools.",
  },
  {
    title: "Diagnostic Tracking",
    description:
      "When diagnostics are ordered, reports, follow-ups, and next steps stay within the same flow.",
  },
];

export default function JourneyStagesSection() {
  return (
    <section
      className={`${SECTION_PADDING} py-16 md:py-20 bg-journey-bg`}
    >
      <div className={CONTENT_MAX}>
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
            Two paths from every consultation — both tracked
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-icon leading-relaxed">
            Patients move toward Procedure Suggested or remain under Conservative Management. Both pathways stay organised
            without losing continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {JOURNEY_CARDS.map((card) => (
            <div
              key={card.title}
              className={`rounded-3xl border text-left p-6 sm:p-9 transition-colors ${
                card.primary
                  ? "bg-primary-blue text-primary-blue-foreground border-transparent shadow-lg"
                  : "bg-card text-foreground border-gray-border"
              }`}
            >
              <h3 className="text-base sm:text-lg font-bold mb-2">
                {card.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  card.primary
                    ? "text-primary-blue-foreground/90"
                    : "text-gray-icon"
                }`}
              >
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

