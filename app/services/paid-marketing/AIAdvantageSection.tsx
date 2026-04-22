import { Lightbulb, DollarSign, LayoutGrid, Eye, CircleDollarSign, LayoutTemplate } from "lucide-react";

const aiAdvantages = [
  {
    icon: Lightbulb,
    title: "Predictive Intent",
    description: "Identifying high-value search patterns before the competition.",
  },
  {
    icon: CircleDollarSign,
    title: "Smart Bidding",
    description: "Real-time budget shifts to the highest-performing service lines.",
  },
  {
    icon: LayoutTemplate,
    title: "Creative Iteration",
    description: "Rapidly testing ad variants to see which messaging resonates with patients.",
  },
  {
    icon: Eye,
    title: "Anomaly Detection",
    description: "24/7 monitoring to prevent budget spikes and detect tracking errors instantly.",
  },
];

const AIAdvantageSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{
                color: "#0D9488",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}
            >
              The AI Advantage: Precision at Scale
            </h2>
            <p className="text-base text-[#4B5563]">
              We don't use AI to replace strategy; we use it to eliminate waste.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {aiAdvantages.map((advantage, index) => (
              <div
                key={index}
                className="rounded-2xl p-8 border border-[#000000]/10"
               style={{ backgroundColor: "rgba(13, 148, 136, 0.06)" }}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: "rgba(13, 148, 136, 0.15)" }}
                >
                  <advantage.icon className="w-6 h-6" style={{ color: "#0D9488" }} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-extrabold text-[#000000] mb-2">
                  {advantage.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#323232] leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAdvantageSection;
