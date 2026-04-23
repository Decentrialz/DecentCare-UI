const developmentItems = [
  {
    number: 1,
    question: "How do you structure a healthcare site so it stays clean over time?",
    answer:
      "A clear page hierarchy and repeatable templates, so new services, doctors, and branches fit the same structure.",
  },
  {
    number: 2,
    question: "How do you keep pages consistent as more people update the site?",
    answer:
      "Reusable sections and a layout system that keeps spacing, typography, and page flow consistent across updates.",
  },
  {
    number: 3,
    question: "What makes an enquiry journey feel simple?",
    answer:
      "Clear next step, visible action buttons, short forms, and routing that aligns with front desk workflows.",
  },
  {
    number: 4,
    question: "How do multi-location websites stay clear for patients?",
    answer:
      "Each branch follows a consistent pattern for address, timings, directions, contact routes, and service availability.",
  },
  {
    number: 5,
    question: "What does performance mean in real use?",
    answer:
      "Fast interaction during key actions, including navigation, page transitions, and form completion.",
  },
  {
    number: 6,
    question: "How do landing pages work for campaigns?",
    answer:
      "Single-goal layouts with clear CTAs, trust sections, and tracking tied to enquiries and booking actions.",
  },
];

const WhatIncludesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl lg:text-3xl font-bold"
              style={{ color: "#0D9488" }}
            >
              What healthcare web development includes
            </h2>
          </div>

          {/* Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {developmentItems.map((item) => (
              <div key={item.number} className="flex gap-4 bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg transition-shadow p-8">
                {/* Number Badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "#0D5C94",
                  }}
                >
                  <span className="text-md font-bold text-white">
                    {item.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base font-bold text-[#0F172A] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-sm text-[#64748B] leading-relaxed">
                    {item.answer}
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

export default WhatIncludesSection;
