const steps = [
  {
    number: 1,
    title: "Paid Marketing Strategy and Channel Plan",
    bgColor: "linear-gradient(135deg, #0D5C94 0%, #1A73B5 100%)",
  },
  {
    number: 2,
    title: "NMC Compliant Ad Creatives and Copy",
   bgColor: "linear-gradient(135deg, #0D9488 0%, #0A7A6F 100%)",
  },
  {
    number: 3,
    title: "Targeting and Audience Architecture by Service Line",
   bgColor: "linear-gradient(135deg, #D97706 0%, #B45309 100%)",
  },
  {
    number: 4,
    title: "AI Assisted Optimisation Workflow",
   bgColor: "linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)",
  },
  {
    number: 5,
    title: "Performance Reporting Built for Growth Decisions",
   bgColor: "linear-gradient(135deg, #DB2777 0%, #9D174D 100%)",
  },
];

const WhatYouGetSection = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl font-bold"
              style={{
                color: "#0D9488",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}
            >
              What You Get With DecentCare Paid Marketing
            </h2>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col items-center text-center border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                {/* Numbered Circle */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                  style={{ 
                    backgroundImage: step.bgColor.startsWith('linear-gradient') 
                      ? step.bgColor 
                      : undefined,
                    backgroundColor: !step.bgColor.startsWith('linear-gradient') 
                      ? step.bgColor 
                      : undefined
                  }}
                >
                  <span className="text-md font-bold text-white">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-sm font-semibold text-[#334155] leading-snug px-2">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGetSection;
