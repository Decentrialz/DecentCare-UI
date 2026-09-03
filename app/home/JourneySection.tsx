import { Eye, CalendarCheck, CalendarClock, RotateCcw, Trophy } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Seen first",
    description: "Treatment interest, intent level, and source visible on screen before the call connects.",
    icon: Eye,
  },
  {
    title: "Booked",
    description: "Telecaller leads with exactly what the patient needs. Booked on the same call.",
    icon: CalendarCheck,
  },
  {
    title: "Shows up",
    description: "Automated reminders and nudges cut the no-show before it happens.",
    icon: CalendarClock,
  },
  {
    title: "Comes back",
    description: "Day 1, 3, 7 follow-ups prompted automatically — no manual tracking.",
    icon: RotateCcw,
  },
  {
    title: "Won",
    description: "Patient retained, journey logged end-to-end in OmniCare.",
    icon: Trophy,
  },
];

const JourneySection = () => {
  return (
    <section className="bg-[#F7FBFD] py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="With OmniCare"
          title="Same call. Now your telecaller sees everything."
        />

        <ol className="relative mx-auto mt-10 max-w-4xl space-y-3 md:mt-14 md:space-y-4">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-7 w-px bg-[#d4e8f1]"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative z-10 flex items-start gap-3 md:gap-5"
            >
              <span
                className="mt-1 flex size-14 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-[0_10px_20px_-10px_hsl(var(--home-heading)/0.75)]"
                style={{ background: "linear-gradient(135deg, #0D5C94 0%, #0D9488 100%)" }}
              >
                {index + 1}
              </span>

              <div className="flex flex-1 items-start gap-3 rounded-xl border border-home-border bg-white p-4 shadow-[0_10px_30px_-26px_hsl(var(--home-heading)/0.9)] md:gap-4 md:p-6">
               <div className="bg-home-success/10 h-10 w-10 rounded-xl flex items-center justify-center">
                <step.icon className="h-5 w-5 shrink-0 text-home-success" />
               </div>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-home-ink md:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-home-body md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center text-sm lg:text-base italic text-home-muted">
          Same staff. Same ads. No bookings, and no comes back.{" "}
          <span className="font-semibold text-home-heading">
            Leads don&apos;t pay bills patients do.
          </span>
        </p>
      </Container>
    </section>
  );
};

export default JourneySection;
