import { ChevronRight, ArrowRight, ChevronsRight } from "lucide-react";
import Image from "next/image";
import performance_dashboard from "@/app/assets/performance_dashboard.svg";

const steps = [
  {
    number: 1,
    title: "Patient Intent Mapping",
    description:
      "We translate patient behavior into intent clusters by service line. We distinguish between urgent care needs and planned elective procedures.",
    color: "#0D5C94",
  },
  {
    number: 2,
    title: "Service Line Campaign Architecture",
    description:
      "We organize paid marketing by specialties so optimization stays focused and budgets are not cannibalized.",
    color: "#0D9488",
  },
  {
    number: 3,
    title: "Enquiry Path Design",
    description: "We align the best action to each service line:",
    actions: [
      { text: "Direct WhatsApp Enquiries", color: "#0D5C94" },
      { text: "Instant Click to Call", color: "#0D5C94" },
      { text: "Appointment Request Forms", color: "#0D5C94" },
    ],
    color: "#D97706",
  },
  {
    number: 4,
    title: "Weekly Optimisation Rhythm",
    description:
      "Performance improves through disciplined iteration across search terms, audience refinement, and messaging variants.",
    color: "#7C3AED",
  },
];


const systemSteps = [
  "Patient Intent",
  "Campaigns",
  "Enquiry Capture",
  "Performance Reporting",
  "Optimisation",
];

const HowWeBuildSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#FFFFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold mb-4 text-center lg:text-left"
              style={{
                color: "#0D9488",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}
            >
              How We Build High-Performing Healthcare Paid Marketing
            </h2>
            <p className="text-base text-[#4B5563] max-w-2xl text-center lg:text-left mx-auto lg:mx-0">
              Whether you're scaling an established hospital system or launching a new facility,
              our paid marketing framework adapts to your growth stage.
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  {/* Number Circle */}
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-[#0F172A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#4D5567] leading-relaxed mb-2">
                      {step.description}
                    </p>

                    {/* Actions */}
                    {step.actions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {step.actions.map((action, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold"
                            style={{
                              backgroundColor: "#E8F3FB",
                              color: action.color,
                            }}
                          >
                            <ArrowRight className="w-4 h-4" /> {action.text}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Performance Dashboard */}
            <div className="relative -mt-8">
              <Image
                src={performance_dashboard}
                alt="Performance Dashboard"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>

          {/* Bottom Flow */}
          <div className="mt-12 text-center">
            <p className="text-base text-[#4B5563] mb-4">This keeps the system active:</p>
            <div className="flex items-center justify-center flex-wrap gap-3">
              {systemSteps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-base font-medium text-[#4B5563]">{step}</span>
                  {index < systemSteps.length - 1 && (
                    <ChevronsRight className="w-6 h-6 text-[#0D9488]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildSection;
