import { Eye, Brain, Zap, RefreshCw } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const nodes = [
  {
    key: "see",
    label: "See",
    product: "OmniLens",
    caption: "Behavioral signals captured",
    icon: Eye,
    ring: "#17B8C5",
    chip: "border-[#17B8C5] bg-white",
    textColor: "text-[#17B8C5]",
    position: "left-1/2 top-0 -translate-x-1/2",
    cardClass: "w-[170px]",
  },
  {
    key: "understand",
    label: "Understand",
    product: "OmniJourney",
    caption: "Intent and readiness scored",
    icon: Brain,
    ring: "#7C3AED",
    chip: "border-[#7C3AED] bg-white",
    textColor: "text-[#7C3AED]",
    position: "-right-1/4 top-9/17 -translate-y-1/2",
    cardClass: "w-[180px]",
    layout: "right",
  },
  {
    key: "act",
    label: "Act",
    product: "Omnicare",
    caption: "Right action, right moment",
    icon: Zap,
    ring: "#1756D1",
    chip: "border-[#1756D1] bg-white",
    textColor: "text-[#1756D1]",
    position: "left-1/2 -bottom-1/6 -translate-x-1/2",
    cardClass: "w-[180px]",
  },
  {
    key: "learn",
    label: "Learn",
    product: "Outcomes",
    caption: "Feeds back into OmniLens",
    icon: RefreshCw,
    ring: "#D97706",
    chip: "border-[#D97706] bg-white",
    textColor: "text-[#D97706]",
    position: "-left-1/4 top-9/17 -translate-y-1/2",
    cardClass: "w-[170px]",
    layout: "left",
  },
];

const ClosedLoopSection = () => {
  return (
    <section className="bg-white py-10 md:py-14 lg:pt-16 lg:pb-30">
      <Container>
        <SectionHeading
          eyebrow="The Closed Loop"
          title="A hospital that understands patients, not just diagnoses."
          description="Every module feeds the next nothing about a patient’s journey is lost between discovery and care."
          className="mb-10"
        />

        <div className="grid grid-cols-1 items-center gap-24 xl:grid-cols-2 md:gap-32 xl:gap-40 xl:pl-24">
          <div className="mx-auto w-full max-w-[460px]">
            <div className="relative mx-auto aspect-square w-full max-w-[460px]">
              <svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M 50 7 A 43 43 0 0 1 93 50"
                  fill="none"
                  stroke="#17B8C5"
                  strokeWidth="0.75"
                />
                <path
                  d="M 93 50 A 43 43 0 0 1 50 93"
                  fill="none"
                  stroke="#7C3AED"
                  strokeWidth="0.75"
                />
                <path
                  d="M 50 93 A 43 43 0 0 1 7 50"
                  fill="none"
                  stroke="#1756D1"
                  strokeWidth="0.75"
                />
                <path
                  d="M 7 50 A 43 43 0 0 1 50 7"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="0.75"
                />
              </svg>

              <div className="absolute left-1/2 top-1/2 flex h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-[linear-gradient(135deg,#1756D1_0%,#0F3FA0_100%)] text-center text-white shadow-[0_12px_40px_0_#1756D159] md:h-[112px] md:w-[112px]">
                <RefreshCw className="h-6 w-8 md:h-7 md:w-7" />
                <span className="mt-2 text-xs font-semibold leading-[1.1]">
                  Closed Loop
                </span>
              </div>

              {nodes.map(({ key, label, product, caption, icon: Icon, ring, chip, textColor, position, cardClass, layout }) => (
                <div
                  key={key}
                  className={`absolute flex flex-col items-center text-center ${cardClass} ${position}`}
                >
                  <div className={`flex items-center gap-3 ${layout === "left" ? "flex-row-reverse" : layout === "right" ? "flex-row" : "flex-col"}`}>
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] border-2 bg-white shadow-[0_10px_20px_-12px_rgba(13,92,148,0.9)] md:h-14 md:w-14 ${chip}`}
                    >
                      <Icon className="h-5 w-5 md:h-6 md:w-6" style={{ color: ring }} />
                    </span>

                    <div className={`${layout ? "flex-1" : "mt-1"} flex flex-col items-center`}>
                      <span className="text-sm font-bold leading-none text-[#101828]">
                        {label}
                      </span>
                      <span className={`mt-1 text-xs font-semibold leading-none ${textColor}`}>
                        {product}
                      </span>
                      <span className="mt-1.5 text-xs leading-[1.2] text-home-muted">
                        {caption}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`mt-2 inline-block h-2.5 w-2.5 rounded-full`}
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-[640px] xl:w-full text-center md:text-left">
            <h3 className="text-2xl font-bold text-home-ink">
              Clinical systems capture medical history. DecentCare captures decision
              history.
            </h3>

            <p className="mt-5 text-baseleading-[1.75] text-home-body">
             Four interconnected modules forming an unbroken loop each one making the next smarter about every patient, every time.
            </p>

            <ul className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              {nodes.map(({ key, label, ring, textColor }) => (
                <li key={key} className="flex items-center gap-2">
                  <span
                    className="inline-block h-2 w-2 rounded-full"
                    style={{ backgroundColor: ring }}
                  />
                  <span className={`text-sm font-semibold ${textColor}`}>{label}</span>
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
