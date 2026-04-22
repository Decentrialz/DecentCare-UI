import { Search, Layout, Mail, Activity, Edit, PencilLine, BookOpen } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Patient Intent",
    icon: Search,
  },
  {
    number: "02",
    title: "Campaigns",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Enquiry Capture",
    icon: Mail,
  },
  {
    number: "04",
    title: "Performance Reporting",
    icon: Activity,
  },
  {
    number: "05",
    title: "Optimisation",
    icon: PencilLine,
  },
];

const DecentCareWaySection = () => {
  return (
    <section className="py-12 lg:py-18 bg-[#F9FAFB]">
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
              Healthcare Paid Marketing, The DecentCare Way
            </h2>
            <p className="text-base text-[#4B5563] max-w-4xl mx-auto">
              Paid marketing works best when it is treated as a complete service rather than a set of disconnected ads. DecentCare runs paid media as a connected system:
            </p>
          </div>

          {/* Steps Grid */}
          <div className="flex flex-col md:flex-row mb-12 overflow-hidden rounded-xl border border-[#E5E7EB]">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 flex flex-col items-center text-center flex-1 ${
                  index < steps.length - 1 ? 'border-r border-[#E5E7EB]' : ''
                }`}
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: '#E8F3FB' }}
                >
                  <step.icon className="w-6 h-6" style={{ color: "#0D5C94" }} />
                </div>

                {/* Step Number */}
                <div className="text-xs font-bold mb-2" style={{ color: "#0D9488" }}>
                  STEP {step.number}
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[#334155]">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>

          {/* Bottom Description */}
          <div className="text-center">
            <p className="text-base text-[#4D5567] max-w-6xl mx-auto leading-relaxed">
              This approach helps healthcare teams build predictable patient enquiries while keeping decisions grounded in clear performance signals. In this competitive landscape, we focus on filling OPD slots and driving high value IPD admissions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecentCareWaySection;
