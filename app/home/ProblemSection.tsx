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
    <section id="platform" className="bg-white py-16 md:py-20 lg:py-24">
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
              className="grid grid-cols-1 gap-y-5 border-t border-home-border py-8 last:border-b md:grid-cols-[auto_1fr_1fr] md:gap-x-16 md:gap-y-2 md:py-8"
            >
              <span className="font-mono text-lg font-normal text-home-eyebrow tabular-nums md:mt-1 md:pt-1 md:text-xs md:font-semibold">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="text-xl leading-[1.25] font-bold text-home-ink  lg:text-2xl">
                {problem.title}
              </h3>

              <p className="text-base leading-[1.6] text-home-body md:col-start-3 md:row-start-1 md:text-sm md:leading-relaxed lg:pr-16">
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
