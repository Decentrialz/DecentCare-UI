
import { FileText, DollarSign, AlertCircle, CircleDollarSign, Settings, Map } from "lucide-react";

const problems = [
  {
    icon: Map,
    title: "No Structured Framework",
    description:
      "Strategic decisions are made without a consulting framework, leading to unfocused market entries and missed opportunities for growth.",
  },
  {
    icon: CircleDollarSign,
    title: "Revenue Gaps Undiagnosed",
    description:
      "Most healthcare providers have revenue potential that remains unrealized due to underperforming departments and suboptimal payer mix.",
  },
  {
    icon: Settings,
    title: "Operational Inefficiencies Persist",
    description:
      "Long wait times, billing errors, high readmission rates, and inconsistent patient experience directly affect clinical outcomes and financial performance.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-16 lg:py-20"  style={{
              background: "linear-gradient(135deg, #F0F7FF 0%, #F1F5F9 100%)",
          }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className="rounded-3xl p-8 lg:p-12"
            style={{
              background: "linear-gradient(135deg, #0F172A 0%, #0A3058 100%)",
            }}
          >
            {/* Header */}
            <div className="mb-10">
              <h3 className="text-2xl font-bold text-[#0D9488] mb-3 text-center lg:text-left">
                The Problem We Solve
              </h3>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center lg:text-left">
                Three critical gaps holding healthcare organisations back
              </h2>
              <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-6xl text-center lg:text-left">
                Healthcare providers pursuing market entry, revenue growth, or
                operational improvement often lack a structured consulting
                framework to approach these areas effectively. Strategic
                decisions are made without adequate market intelligence, revenue
                gaps go undiagnosed, and operational inefficiencies remain
                unaddressed.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <div
                  key={index}
                  className="rounded-2xl p-6 border border-white/10"
                  style={{
                    backgroundColor: "rgba(13, 148, 136, 0.05)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                    style={{
                      backgroundColor: "rgba(13, 148, 136, 0.2)",
                    }}
                  >
                    <problem.icon className="w-6 h-6 text-[#0D9488]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-white mb-3">
                    {problem.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
