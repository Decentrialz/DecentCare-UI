import Link from "next/link";
import { ArrowRight, BrainCircuit, Eye, Zap } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const modules = [
  {
    step: "See",
    name: "OmniLens",
    description:
      "Captures every signal a patient gives across web, calls, WhatsApp, and visits into one behavioral timeline.",
    chips: ["Treatment interest", "Intent strength", "Source attribution", "Drop-offs"],
    icon: Eye,
  },
  {
    step: "Understand",
    name: "OmniJourney",
    description:
      "Reads those signals to know each patient's intent, stage, and next step before your team has to guess.",
    chips: ["Intent scoring", "Drop-off prediction", "Readiness segments"],
    icon: BrainCircuit,
  },
  {
    step: "Act",
    name: "OmniCare",
    description:
      "Puts it in your team's hands, so the right action happens every time - leads, appointments, follow-ups, retention.",
    chips: ["Leads", "Appointments", "Follow-ups", "Retention"],
    icon: Zap,
  },
];

const StackSection = () => {
  return (
    <section className="bg-[#F7FBFD] py-16 md:py-20 lg:py-24">
      <Container className="max-w-[1160px]">
        <SectionHeading
          eyebrow="The DecentCare Stack"
          title="One intelligence stack. See, understand, act."
          description="Not a CRM. Not an agency. DecentCare sits between your HIMS and your front-line teams three modules, one closed loop."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {modules.map((module, index) => (
            <article
              key={module.name}
              className="flex min-h-[336px] flex-col rounded-[22px] border-2 border-[#D8E7F0] bg-white p-7 transition-shadow duration-300 hover:shadow-[0_24px_60px_-38px_hsl(var(--home-heading)/0.8)] md:p-7"
            >
              <p className={`w-fit rounded-lg  ${index % 2 === 0 ?"bg-home-heading/10 text-home-heading" : "bg-home-success/10 text-home-success"} px-3 py-1 text-xs font-bold text-home-heading uppercase`}>
                {module.step}
              </p>

              <div className="mt-4 flex items-center gap-4">
                <span className={`grid size-11 place-items-center rounded-xl ${index % 2 === 0 ?"bg-home-heading/10 text-home-heading" : "bg-home-success/10 text-home-success"}`}>
                  <module.icon className="size-5" strokeWidth={2.5} />
                </span>
                <h3 className="text-lg font-extrabold text-home-ink md:text-xl">{module.name}</h3>
              </div>

              <p className="mt-4 flex-1 text-base leading-[1.7] text-home-body">
                {module.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {module.chips.map((chip) => (
                  <li
                    key={chip}
                    className="rounded-xl border border-[#d6e9f1] bg-[#edf8fc] px-3 py-1 text-xs font-medium text-home-muted"
                  >
                    {chip}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-home-heading transition-colors hover:text-home-success"
          >
            See how it works
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div> */}
      </Container>
    </section>
  );
};

export default StackSection;
