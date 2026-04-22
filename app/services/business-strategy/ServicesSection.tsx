import { Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Market Entry Strategy",
    subtitle: "Build informed growth before you expand",
    bgColor: "linear-gradient(135deg, #0D9488 0%, #0A7A6F 100%)",
    iconColor: "#0D9488",
    circleBgColor: "#E6F7F6",
    description:
      "Entering a new geography, launching a specialty, or opening a second location requires rigorous market intelligence. Our Market Entry practice provides the analysis, positioning, and go-to-market framework to support well-informed decisions.",
    offerings: [
      "Location feasibility and catchment analysis",
      "Competitor landscape assessment (direct + indirect)",
      "Positioning and differentiation strategy",
      "Specialty gap mapping against target market demand",
      "Patient persona development and demand estimation",
      "Financial projection model with defined assumptions",
    ],
  },
  {
    number: "02",
    title: "Revenue Growth Strategy",
    subtitle: "Unfreeze the financial potential of revenue opportunities",
    bgColor: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
    iconColor: "#7C3AED",
    circleBgColor: "#F0F7FF",
    description:
      "Most healthcare providers have revenue potential that remains unrealized due to underperforming departments, suboptimal payer mix, or weak referral structures. We diagnose these gaps and develop a structured plan to address them.",
    offerings: [
      "Revenue leakage audit across departments and billing processes",
      "Referral doctor mapping and engagement program design",
      "Package pricing and service bundling strategy",
      "Patient retention and recall program design",
      "Department-wise profitability analysis",
      "Payer mix optimization (insurance, corporate, self-pay)",
      "High-revenue speciality identification and activation",
      "Marketing ROI tracking framework",
    ],
  },
  {
    number: "03",
    title: "Hospital Operations Consulting",
    subtitle: "Process-level improvements that support sustainable performance",
    bgColor: "linear-gradient(135deg, #0D5C94 0%, #1A73B5 100%)",
    iconColor: "#0D5C94",
    circleBgColor: "#E8F3FB",
    description:
      "Operational inefficiencies: long wait times, billing errors, high readmission rates, and inconsistent patient experience, directly affect both clinical outcomes and financial performance. We assess the full patient journey and implement structured, process-level improvements.",
    offerings: [
      "Full patient journey mapping (OPD, IPD, emergency, discharge)",
      "Nursing and staff productivity framework",
      "Patient experience audit and improvement program",
      "Supply chain and pharmacy cost reduction",
      "OPD flow optimization and wait time reduction",
      "SOP design and implementation for key clinical workflows",
      "Bed management and occupancy optimization",
      "Quality accreditation readiness (NABH, JCI, pre-assessment)",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-4"
              style={{ color: "#0D9488" }}
            >
              Our Strategy & Consultation Services
            </h2>
            <p className="text-sm md:text-base text-[#4B5563] max-w-3xl mx-auto">
              We offer three focused practice areas built around the strategic,
              revenue, and operational challenges that healthcare providers face.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden"
                style={{ boxShadow: "0px 2px 16px 0px rgba(0, 0, 0, 0.04)" }}
              >
                {/* Service Header */}
                <div className="p-6 lg:p-8">
                  <div className="flex items-start gap-4 mb-4 pb-4" style={{ borderBottom: "1px solid #F1F5F9" }}>
                    {/* Number Badge */}
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundImage: service.bgColor }}
                    >
                      <span className="text-sm font-bold text-white">
                        {service.number}
                      </span>
                    </div>

                    {/* Title and Subtitle */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-extrabold text-[#0F172A] mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#94A3B8]">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#4B5567] leading-relaxed mb-6 mt-8">
                    {service.description}
                  </p>

                  {/* What You Get */}
                  <div>
                    <h4 className="text-xs font-bold text-[#0D9488] uppercase tracking-wider mb-4" style={{ color: service.iconColor }}>
                      WHAT YOU GET
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {service.offerings.map((offering, offeringIndex) => (
                        <div
                          key={offeringIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: service.circleBgColor }}
                          >
                            <Check
                              className="w-3 h-3"
                              style={{ color: service.iconColor }}
                            />
                          </div>
                          <span className="text-sm text-[#083050] leading-relaxed">
                            {offering}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
