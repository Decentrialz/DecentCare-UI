import { BarChart3, UserRound } from "lucide-react";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

/** Timeline node diameter — connector line is centered with `calc(var(--journey-step-node-size) / 2)`. */
const JOURNEY_STEP_NODE_SIZE = "3.5rem"; /* = Tailwind `w-14` / `h-14`; e.g. `4rem` for `w-16` */

const JOURNEY_STEPS = [
  {
    number: "01",
    title: "Enquiry",
    subtitle: "Call / WhatsApp / walk-in",
  },
  {
    number: "02",
    title: "Appointment",
    subtitle: "Scheduled → Confirmed → Checked In",
  },
  {
    number: "03",
    title: "Consultation",
    subtitle: "Clinical notes · Diagnostics · Care direction",
  },
  {
    number: "04",
    title: "Procedure Suggested",
    subtitle: "Financial · Insurance · OR scheduling",
  },
  {
    number: "05",
    title: "Procedure Done",
    subtitle: "Recovery · Discharge · Documentation",
  },
  {
    number: "06",
    title: "Post-op Follow-up",
    subtitle: "Day-1 · Week-1 · Month-1 · Escalation",
  },
  {
    number: "07",
    title: "Episode Closed",
    subtitle: "Record retained · Lifetime continuity",
  },
] as const;

function JourneyInsightCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-border bg-card p-6 sm:p-8 shadow-[var(--card-shadow)] text-left h-full flex flex-col">
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 bg-primary-blue/10 text-secondary-green"
        aria-hidden
      >
        <Icon className="w-5.5 h-5.5"/>
      </div>
      <h3 className="mt-4 text-sm sm:text-base font-bold text-foreground">{title}</h3>
      <p className="mt-2 text-xs sm:text-sm text-gray-icon leading-relaxed flex-1">{description}</p>
    </article>
  );
}

function StepNumber({ value }: { value: string }) {
  return (
    <span
      className="text-lg sm:text-xl font-dm-serif-display font-normal tabular-nums text-primary-blue"
      aria-hidden
    >
      {value}
    </span>
  );
}

export default function CompletePatientJourneySection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-destructive-foreground`}>
      <div className={CONTENT_MAX}>
        <header className="text-center max-w-4xl mx-auto">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
            The complete patient journey, in one system
          </h2>
          <p className="mt-4 text-sm sm:text-base text-gray-icon leading-relaxed">
            Most hospitals manage patient journeys across WhatsApp threads, spreadsheets, and verbal handoffs.{" "}
            <strong className="font-semibold text-foreground">Care Journey CRM</strong> collapses that into one
            structured system built around how care actually moves inside hospitals and clinics.
          </p>
        </header>

        {/* Horizontal timeline: scroll on small screens, full width on lg+ */}
        <div className="mt-10 md:mt-12 overflow-x-auto lg:overflow-visible scrollbar-hide -mx-4 px-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:px-0">
          <div className="min-w-[920px] lg:min-w-0">
            <div
              className="relative px-1"
              style={{ "--journey-step-node-size": JOURNEY_STEP_NODE_SIZE } as React.CSSProperties}
            >
              {/* Connector: primary blue, 2px — vertically centered on nodes via --journey-step-node-size */}
              <div
                className="pointer-events-none absolute left-[6%] right-[6%] top-[calc(var(--journey-step-node-size)/2)] h-[2px] -translate-y-1/2 bg-primary-blue z-0"
                aria-hidden
              />
              <ol className="grid grid-cols-7 gap-1 sm:gap-2 xl:gap-3 list-none m-0 p-0">
                {JOURNEY_STEPS.map((step) => (
                  <li key={step.number} className="text-center min-w-0">
                    <div
                      className="mx-auto box-border rounded-full bg-soft-blue border-3 border-white flex items-center justify-center relative z-[1] shadow-[0px_2px_6px_0px_rgb(0_0_0_/_0.06),0px_4px_16px_0px_hsl(var(--primary-blue)_/_0.12)] w-[var(--journey-step-node-size)] h-[var(--journey-step-node-size)]"
                    >
                      <StepNumber value={step.number} />
                    </div>
                    <p className="mt-3 text-[10px] sm:text-[11px] xl:text-xs font-bold text-foreground leading-snug px-0.5">
                      {step.title}
                    </p>
                    <p className="mt-1 text-[9px] sm:text-[10px] xl:text-[11px] text-gray-icon leading-relaxed px-0.5">
                      {step.subtitle}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <JourneyInsightCard
            icon={BarChart3}
            title="Stage Visibility"
            description="View patient distribution across stages in real time. Understand where movement flows and where it slows."
          />
          <JourneyInsightCard
            icon={UserRound}
            title="Unified Patient Profiles"
            description="One record per patient: contact details, assigned doctor, department, stage status, communication history, and care notes."
          />
        </div>
      </div>
    </section>
  );
}
