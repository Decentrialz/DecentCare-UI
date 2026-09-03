import { Eye, Brain, Zap, RefreshCw } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const nodes = [
  {
    key: "see",
    label: "See",
    caption: "Every signal captured",
    icon: Eye,
    color: "text-home-heading",
    position: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    key: "understand",
    label: "Understand",
    caption: "Intent and stage scored",
    icon: Brain,
    color: "text-home-success",
    position: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2",
  },
  {
    key: "act",
    label: "Act",
    caption: "Right action, right moment",
    icon: Zap,
    color: "text-home-amber",
    position: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2",
  },
  {
    key: "learn",
    label: "Learn",
    caption: "Outcomes feed back in",
    icon: RefreshCw,
    color: "text-home-heading",
    position: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2",
  },
];

const ClosedLoopSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Closed Loop"
          title="A hospital that understands patients, not just diagnoses."
          description="Every module feeds the next: nothing about a patient's journey is lost between discovery and care."
        />

        <div className="mt-12 grid grid-cols-1 items-center gap-12 lg:mt-16 lg:grid-cols-2 lg:gap-16">
          {/* Loop diagram */}
          <div className="mx-auto w-full max-w-[380px] px-10 sm:max-w-[440px]">
            <div className="relative aspect-square">
              {/* Ring */}
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full -rotate-90"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="closed-loop-ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--home-heading))" />
                    <stop offset="50%" stopColor="hsl(var(--home-success))" />
                    <stop offset="100%" stopColor="hsl(var(--home-amber))" />
                  </linearGradient>
                </defs>
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="url(#closed-loop-ring)"
                  strokeWidth="1.5"
                  strokeDasharray="6 3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Centre badge */}
              <div className="absolute top-1/2 left-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-primary-blue text-center text-white shadow-[0_18px_40px_-18px_hsl(var(--home-heading)/0.9)] sm:h-28 sm:w-28">
                <RefreshCw className="h-5 w-5" />
                <span className="mt-1.5 text-[11px] leading-tight font-semibold">
                  Closed
                  <br />
                  Loop
                </span>
              </div>

              {/* Nodes */}
              {nodes.map(({ key, label, caption, icon: Icon, color, position }) => (
                <div
                  key={key}
                  className={`absolute flex w-28 flex-col items-center text-center sm:w-32 ${position}`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-home-border bg-white shadow-[0_10px_24px_-14px_hsl(var(--home-heading)/0.8)]">
                    <Icon className={`h-5 w-5 ${color}`} />
                  </span>
                  <span className="mt-2 text-xs font-semibold text-home-ink">{label}</span>
                  <span className="mt-0.5 text-[10px] leading-snug text-home-muted">
                    {caption}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Explanation */}
          <div className="max-w-lg">
            <h3 className="text-lg font-bold text-home-ink md:text-xl">
              Clinical systems capture medical history. DecentCare captures decision
              history.
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-home-body md:text-base">
              Four interconnected modules forming an unbroken loop — each one making the
              next smarter about every patient, every time.
            </p>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              {nodes.map(({ key, label, color }) => (
                <li key={key} className="flex items-center gap-2">
                  <span className={`text-xs ${color}`}>●</span>
                  <span className="text-xs font-medium text-home-body">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClosedLoopSection;
