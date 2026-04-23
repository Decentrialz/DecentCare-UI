const comparisonData = [
  {
    area: "APPROACH",
    decentcare:
      "Structured engagement with defined phases, from diagnostic to implementation",
    others: "Frameworks delivered as standalone reports",
  },
  {
    area: "TURNAROUND",
    decentcare: "Initial diagnostic completed in the opening phase of engagement",
    others: "Extended discovery periods before recommendations",
  },
  {
    area: "MARKET CONTEXT",
    decentcare:
      "Healthcare-specific strategies aligned to Indian market conditions",
    others: "Generic frameworks applied across sectors",
  },
  {
    area: "IMPLEMENTATION",
    decentcare: "Advisory support continues through the execution phase",
    others: "Engagement ends at report delivery",
  },
  {
    area: "SCOPE",
    decentcare: "Strategy and digital marketing systems addressed together",
    others: "Services delivered in silos",
  },
  {
    area: "TRANSPARENCY",
    decentcare:
      "Progress tracked against defined KPIs throughout the engagement",
    others: "Limited visibility into methodology and progress",
  },
];

const WhyDecentCareSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: "#0D9488" }}
            >
              Why DecentCare?
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] max-w-6xl mx-auto">
              DecentCare provides structured, healthcare-specific consulting that
              integrates strategic development with implementation support. Our
              work is grounded in sector knowledge, defined processes, and
              measurable outcomes.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-[#F8FAFC] rounded-2xl overflow-hidden border border-[#E2E8F0] max-w-6xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[200px_1.8fr_1.8fr]">
              <div className="bg-[#F1F5F9] p-2 md:p-4 font-bold text-[10px] md:text-sm text-[#4D5567]">
                Area
              </div>
              <div
                className="p-2 md:p-4 font-bold text-[10px] md:text-sm text-white"
                style={{
                  background: "#0D5C94",
                }}
              >
                DecentCare
              </div>
              <div className="bg-[#F1F5F9] p-2 md:p-4 font-bold text-[10px] md:text-sm text-[#083050]">
                Others
              </div>
            </div>

            {/* Table Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={index}
                className="grid grid-cols-[80px_1fr_1fr] md:grid-cols-[200px_1.8fr_1.8fr]"
              >
                {/* Area Column */}
                <div
                  className="p-2 md:p-4 font-bold text-[9px] md:text-xs text-[#083050] bg-[#F1F5F9] flex items-center break-words"
                >
                  {row.area}
                </div>

                {/* DecentCare Column */}
                <div
                  className={`p-2 md:p-4 text-[10px] md:text-sm text-[#083050] border-[#E2E8F0] leading-relaxed break-words ${
                    index !== comparisonData.length - 1 ? "border-b" : ""
                  }`}
                >
                  {row.decentcare}
                </div>

                {/* Others Column */}
                <div
                  className={`p-2 md:p-4 text-[10px] md:text-sm text-[#083050] bg-white leading-relaxed break-words ${
                    index !== comparisonData.length - 1
                      ? "border-b border-[#E2E8F0]"
                      : ""
                  }`}
                >
                  {row.others}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDecentCareSection;
