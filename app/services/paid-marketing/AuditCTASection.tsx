import { Target, Activity, LayoutGrid, Mail, Search, BookOpen } from "lucide-react";

const auditDeliverables = [
  {
    icon: Search,
    title: "Intent & Channel Opportunity Map",
  },
  {
    icon: Activity,
    title: "Current Campaign & Tracking Review",
  },
  {
    icon: BookOpen,
    title: "Service Line Campaign Structure Recommendation",
  },
  {
    icon: Mail,
    title: "Enquiry Path Improvement Plan",
  },
];

const AuditCTASection = () => {
  return (
    <section className="py-12 lg:py-20"   
          style={{
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
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Side - Text & CTA */}
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight text-center lg:text-left">
                  Start With A Paid Marketing Audit
                </h2>
                <p className=" text-sm md:text-base text-white/60 mb-6 lg:mb-8 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
                  An audit is the fastest way to identify opportunity gaps and
                  practical next steps.
                </p>
                <button
                  className="px-6 py-3 text-sm rounded-xl font-semibold text-white transition-all hover:shadow-lg"
                  style={{
                    backgroundColor: "#0D9488",
                    boxShadow: "0px 4px 20px 0px rgba(13, 148, 136, 0.4)",
                  }}
                >
                  ✓ Get A Free Paid Marketing Audit
                </button>
              </div>

              {/* Right Side - Deliverables */}
              <div className="grid gap-4">
                {auditDeliverables.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-xl p-4 border border-white/10 flex items-center gap-4"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.07)",
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(13, 148, 136, 0.2)" }}
                    >
                      <item.icon className="w-4 h-4 text-[#6EE7E0]" />
                    </div>

                    {/* Title */}
                    <p className="text-sm font-medium text-white/90">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditCTASection;
