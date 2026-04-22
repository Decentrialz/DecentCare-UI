import { Building2, Heart, Users, TrendingUp, Hotel, SlidersVertical } from "lucide-react";

const audiences = [
  {
    icon: Hotel,
    iconBgColor: "#E8F3FB",
    iconColor: "#0D5C94",
    title: "Hospitals & Health Systems",
    description:
      "Hospitals across tier-1, tier-2, and tier-3 cities looking to grow patient volume, differentiate their offering, or address operational inefficiencies.",
  },
  {
    icon: Heart,
    iconBgColor: "#E6F7F6",
    iconColor: "#0D9488",
    title: "Specialty Clinics",
    description:
      "Established single-specialty or multi-specialty clinics aiming to increase patient acquisition, improve operational performance, or expand their footprint.",
  },
  {
    icon: SlidersVertical,
    iconBgColor: "#E6F7F6",
    iconColor: "#F59E0B",
    title: "New Hospital Launches",
    description:
      "Promoters, doctors, or investors planning a new facility who require a structured, data-informed strategy before committing capital.",
  },
  {
    icon: TrendingUp,
    iconBgColor: "#F0F7FF",
    iconColor: "#7C3AED",
    title: "Underperforming Units",
    description:
      "Hospital groups with units that are not meeting occupancy, revenue, or profitability benchmarks and require focused intervention.",
  },
];

const WhoThisIsForSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: "#0D9488" }}
            >
              Who This Is For
            </h2>
            <p className="text-sm md:text-base text-[#4B5563]">
              Built for every stage of healthcare growth.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow flex gap-4"
              >
                {/* Icon */}
                <div
                  className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: audience.iconBgColor }}
                >
                  <audience.icon
                    className="w-6 h-6"
                    style={{ color: audience.iconColor }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-base font-bold text-[#0F172A] mb-3">
                    {audience.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#4D5567] leading-relaxed mt-[-2]">
                    {audience.description}
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

export default WhoThisIsForSection;
