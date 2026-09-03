import Container from "./Container";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    title: "Patients are treated like leads",
    description:
      "Patients become paperwork, not people — a booking form can't capture the weight of a healthcare decision, or why someone hesitated before calling.",
  },
  {
    title: "Journeys get squeezed into linear funnels",
    description:
      "Real care doesn't move in a straight line — patients pause, seek second opinions, and come back weeks later. Linear tracking misses all of it.",
  },
  {
    title: "Care fractures across disconnected systems",
    description:
      "Disconnected HIMS, CRM, and ad platforms create blind spots at every handoff.",
  },
];

const ProblemSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="The Problem"
          title="Healthcare is personal. Growth systems are not."
          description="What healthcare needs isn't louder marketing. It's intelligence with empathy and a single source of truth between discovery and care."
        />

        <ul className="mx-auto mt-10 md:mt-14">
          {problems.map((problem, index) => (
            <li
              key={problem.title}
              className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 border-t border-home-border py-6 last:border-b md:grid-cols-[auto_1fr_1fr] md:gap-x-16 md:py-8"
            >
              <span className="pt-1 text-xs font-semibold text-home-eyebrow tabular-nums mt-1">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-base font-bold text-home-ink md:text-lg lg:text-2xl">
                {problem.title}
              </h3>

              <p className="col-start-2 text-sm leading-relaxed text-home-body md:col-start-3 md:row-start-1 lg:pr-16">
                {problem.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProblemSection;
