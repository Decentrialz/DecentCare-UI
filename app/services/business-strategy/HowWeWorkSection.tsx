const phases = [
  {
    number: 1,
    title: "Discovery & Diagnostic",
    description:
      "In the initial days, we conduct a structured review of your hospital — financials, patient data, team structure, market position, and competitive landscape. This phase establishes an evidence-based foundation for everything that follows.",
  },
  {
    number: 2,
    title: "Strategy Design",
    description:
      "Based on the diagnostic findings, we develop a custom strategy specific to your context. Every recommendation is anchored in your data, market conditions, and defined objectives — not generic templates.",
  },
  {
    number: 3,
    title: "Alignment Workshop",
    description:
      "We present the strategy to your leadership team, incorporate feedback, and confirm alignment on priorities and approach before moving to execution.",
  },
  {
    number: 4,
    title: "Execution & Optimization",
    description:
      "We support implementation by tracking KPIs, addressing blockers as they arise, and refining the plan based on real-world performance data, reviewed at regular intervals.",
  },
  {
    number: 5,
    title: "Review & Handover",
    description:
      "At the conclusion of the engagement, we deliver a fully documented operational playbook your team can maintain independently. Outcomes are reviewed against projections, and next steps are defined.",
  },
];

const HowWeWorkSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F0F7FF]" style={{ background: "linear-gradient(135deg, #F0F7FF, #E6F7F6)",}}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: "#0D9488" }}
            >
              How We Work
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] max-w-3xl mx-auto">
              Every engagement follows a structured five-phase process, designed
              to move from diagnostic to delivery with clear accountability at
              each stage.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            {/* Circles and Lines */}
            <div className="relative flex justify-between items-center mb-12">
              {/* Connecting Line */}
              <div
                className="absolute top-1/2 left-0 right-0 h-0.5"
                style={{
                  background: "linear-gradient(90deg, #0D5C94 0%, #0D9488 100%)",
                  transform: "translateY(-50%)",
                  zIndex: 0,
                }}
              />

              {/* Circles */}
              {phases.map((phase) => (
                <div key={phase.number} className="relative z-10">
                  <div
                    className="w-16 h-16 rounded-full bg-white flex items-center justify-center"
                    style={{
                      border: "3px solid",
                      borderColor:
                        phase.number === 5 ? "#0D9488" : "#0D5C94",
                    }}
                  >
                    <span
                      className="text-lg font-bold"
                      style={{
                        color: phase.number === 5 ? "#0D9488" : "#0D5C94",
                      }}
                    >
                      {phase.number}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Below Circles */}
            <div className="grid grid-cols-5 gap-8">
              {phases.map((phase) => (
                <div key={phase.number} className="text-center">
                  <h3 className="text-base font-bold text-[#0F172A] mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-[#4D5567] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet Timeline */}
          <div className="lg:hidden space-y-8">
            {phases.map((phase, index) => (
              <div key={phase.number} className="flex gap-6">
                {/* Circle with Line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0"
                    style={{
                      border: "3px solid",
                      borderColor:
                        phase.number === 5 ? "#0D9488" : "#0D5C94",
                    }}
                  >
                    <span
                      className="text-xl font-bold"
                      style={{
                        color: phase.number === 5 ? "#0D9488" : "#0D5C94",
                      }}
                    >
                      {phase.number}
                    </span>
                  </div>
                  {index !== phases.length - 1 && (
                    <div
                      className="w-0.5 flex-1 mt-4"
                      style={{
                        background:
                          "linear-gradient(180deg, #0D5C94 0%, #0D9488 100%)",
                        minHeight: "60px",
                      }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
