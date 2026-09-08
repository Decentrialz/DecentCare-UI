import { Layers, Server, Lock, KeyRound } from "lucide-react";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const safeguards = [
  {
    title: "Tenant isolation",
    description: "Per-hospital data separation, verified by an automated test on every release.",
    icon: Layers,
  },
  {
    title: "AWS Mumbai hosting",
    description: "All platform data stays within India.",
    icon: Server,
  },
  {
    title: "Encryption everywhere",
    description: "At rest, in transit, and in the field level for sensitive fields.",
    icon: Lock,
  },
  {
    title: "Role-based access + MFA",
    description: "Granular, scoped access with 6 configurable roles.",
    icon: KeyRound,
  },
];

const SecuritySection = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Security & Compliance"
          title="Built for Indian healthcare data, by design."
          description="Not retrofitted from a US compliance checklist — built around DPDP, ABDM, and how Indian hospitals actually operate."
        />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:mt-14 md:grid-cols-2 md:gap-5">
          {safeguards.map((item) => (
            <article
              key={item.title}
              className="flex h-full items-start gap-4 rounded-xl border border-[#E6E2DA] bg-white px-5 py-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[linear-gradient(135deg,#0D5C94_0%,#0D9488_100%)] text-white">
                <item.icon className="h-5 w-5" />
              </span>

              <div className="min-w-0">
                <h3 className=" font-bold text-home-ink text-base">
                  {item.title}
                </h3>
                <p className="mt-1.5 leading-relaxed text-home-body md:text-[13px]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SecuritySection;
