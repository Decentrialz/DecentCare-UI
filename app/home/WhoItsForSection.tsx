import { User, Building2, Network, Hospital } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const segments = [
  {
    audience: "Individual practitioners",
    description:
     "Be found, convert more enquiries, and keep patients coming back — without hiring a marketing team.",
     icon: User,
  },
  {
    audience: "Clinics",
    description:
      "Lift OPD utilisation and repeat visits while automation cuts your team's manual workload.",    icon: Building2,
  },
  {
    audience: "Hospitals",
    description:
     "Department-wise visibility, centralised patient intelligence, and higher lifetime value across locations.",
         icon: Hospital,
    
  },
];

const WhoItsForSection = () => {
  return (
    <section className="bg-[#F3F7FB] py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Who It's For"
          title={
            <>
              Tailored to your practice from solo
              <br className="hidden md:block" /> clinic to hospital network.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 md:grid-cols-3 lg:gap-6">
          {segments.map((segment) => (
            <article
              key={segment.audience}
              className="h-full rounded-2xl border border-home-border bg-home-card p-6 lg:px-7 lg:py-9"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-home-heading/10 text-home-heading">
                <segment.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-5 text-xs font-bold tracking-[0.10em] text-home-success uppercase">
                {segment.audience}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-home-body">
                {segment.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoItsForSection;
