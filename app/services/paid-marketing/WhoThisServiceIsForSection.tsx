import { Building2, Activity, Sparkles, User, House, Layers, Briefcase } from "lucide-react";

const targetAudiences = [
  {
    icon: House,
    title: "Multi-Specialty Hospitals",
    description: "Centralized marketing for diverse departments.",
  },
  {
    icon: Activity,
    title: "Specialist Clinics",
    description: "Scaling high-value treatments (Orthopedics, Fertility, etc.).",
  },
  {
    icon: Layers,
    title: "New Facility Launches",
    description: "Building instant patient volume for new branches.",
  },
  {
    icon: Briefcase,
    title: "Private Practices",
    description: "Transitioning from word-of-mouth to digital acquisition.",
  },
];

const WhoThisServiceIsForSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-white">
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
              Who This Service is For
            </h2>
            <p className="text-base text-[#4B5563] max-w-3xl mx-auto">
              Whether you're scaling an established hospital system or launching a new facility, our paid marketing framework adapts to your growth stage.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white border border-[#E2E8F0] rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div
                  className="w-13 h-13 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: index % 2 === 0 ? "#E8F3FB" : "#E6F7F6" }}
                >
                  <audience.icon className="w-6 h-6" style={{ color: index % 2 === 0 ? "#0D5C94" : "#0D9488" }} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-2">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisServiceIsForSection;
