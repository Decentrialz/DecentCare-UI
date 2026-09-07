import { Search, PhoneCall, IndianRupee, Receipt } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const cards = [
  {
    title: "Source attribution",
    description:
      "Know which channel actually brought each patient — Google, Meta, referral or walk-in.",
    icon: Search,
  },
  {
    title: "Call intelligence",
    description:
      "Every call understood, scored, and transcribed across Indian languages.",
    icon: PhoneCall,
  },
  {
    title: "Revenue per channel",
    description: "See what each source earned, in rupees — not cost-per-click.",
    icon: IndianRupee,
  },
  {
    title: "True cost per patient",
    description:
      "Cost per booked patient — so you know what the the OT and cath lab actually saw.",
    icon: Receipt,
  },
];

const AttributionSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Attribution Intelligence"
          title="Every rupee traced to a real patient not a click."
          description="DecentCare ties every patient to the exact channel that brought them, and closes the loop from the first ad click to the procedure billed."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-4 lg:gap-6">
          {cards.map((card) => (
            <article
              key={card.title}
              className="h-full rounded-2xl border border-home-border bg-home-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-home-heading/10 text-home-heading">
                <card.icon className="h-5 w-5" />
              </span>

              <h3 className="mt-5 text-sm font-bold text-home-ink md:text-base">
                {card.title}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-home-body md:text-[13px]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center text-xl font-bold text-home-ink md:text-2xl lg:text-[28px]">
          Stop paying for clicks that{" "}
          <span className="text-home-success underline decoration-[#6fc7c0] underline-offset-5">never walk in.</span>
        </p>
      </Container>
    </section>
  );
};

export default AttributionSection;
