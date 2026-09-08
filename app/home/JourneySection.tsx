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
    <section className="bg-white py-16 md:bg-[#F7FBFD] md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="With OmniCare"
          title="Same call. Now your telecaller sees everything."
          className="mx-auto max-w-[460px] [&>p]:hidden md:[&>p]:inline-flex"
          titleClassName="text-[28px] leading-[1.18] md:text-[32px] lg:text-[36px]"
        />

        <ol className="relative mx-auto mt-12 max-w-4xl space-y-6 md:mt-14 md:space-y-4">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-[#d4e8f1] md:left-7 md:translate-x-0"
          />
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative z-10 flex flex-col items-center gap-3 md:flex-row md:items-start md:gap-5"
            >
              <span
                className="flex size-16 shrink-0 items-center justify-center rounded-[18px] text-2xl font-bold text-white shadow-[0_10px_20px_-10px_hsl(var(--home-heading)/0.75)] md:mt-1 md:size-14 md:rounded-2xl md:text-lg"
                style={{ background: "linear-gradient(135deg, #0D5C94 0%, #0D9488 100%)" }}
              >
                {index + 1}
              </span>

              <div className="flex w-full flex-1 items-start gap-5 rounded-[18px] border-2 border-[#d8eaf3] bg-white p-7 shadow-[0_10px_30px_-26px_hsl(var(--home-heading)/0.9)] md:gap-4 md:rounded-xl md:border md:border-home-border md:p-6">
               <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-home-success/10 md:h-10 md:w-10 md:rounded-xl">
                <step.icon className="h-7 w-7 shrink-0 text-home-success md:h-5 md:w-5" />
               </div>
                <div className="min-w-0">
                  <h3 className="font-bold leading-tight text-home-ink text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 leading-[1.65] text-home-body md:mt-1 text-base md:leading-relaxed">
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
