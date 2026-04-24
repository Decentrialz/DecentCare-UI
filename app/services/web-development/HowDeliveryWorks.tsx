const HowDeliveryWorks = () => {
  const phases = [
    {
      number: "01",
      letter: "P",
      title: "Plan",
      description: "Site structure, page templates, and enquiry goals are defined. Key flows are mapped for calls, WhatsApp, forms, booking, and directions.",
      color: "#0D5C94"
    },
    {
      number: "02",
      letter: "D",
      title: "Design",
      description: "Wireframes are created for the main page types, followed by a reusable UI kit so every page stays consistent in layout, spacing, and components.",
      color: "#1870B0"
    },
    {
      number: "03",
      letter: "B",
      title: "Build",
      description: "Development covers templates, responsive layouts, form logic, integrations, and tracking for key actions.",
      color: "#10B8A8"
    },
    {
      number: "04",
      letter: "L",
      title: "Launch",
      description: "Content migration is completed where needed, redirects are applied for old URLs, and the site is released with a stabilization window and handover documentation.",
      color: "#0D9488"
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: "#0D9488" }}>
              How delivery works
            </h2>
            <p className="text-base text-[#64748B] max-w-2xl mx-auto">
              A structured four-phase process with defined outputs at each stage.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Desktop View */}
            <div className="hidden md:block">
              {/* Phases Grid */}
              <div className="grid grid-cols-4 gap-8 relative">
                {phases.map((phase, index) => (
                  <div key={index} className="text-center relative">
                    {/* Connecting Line */}
                    {index < phases.length - 1 && (
                      <div 
                        className="absolute top-[72px] left-1/2 h-[3px] z-0"
                        style={{ 
                          width: 'calc(100% + 2rem)',
                          background: `linear-gradient(to right, ${phase.color}, ${phases[index + 1].color})`
                        }}
                      />
                    )}
                    
                    {/* Phase Number */}
                    <div className="text-xs font-semibold text-[#94A3B8] mb-4 tracking-wide">
                      PHASE {phase.number}
                    </div>
                    
                    {/* Circle with Letter */}
                    <div className="mb-6 relative z-10 flex justify-center">
                      <div className="w-[72px] h-[72px] rounded-full bg-[#E8F3FB] flex items-center justify-center">
                        <div 
                          className="w-[56px] h-[56px] rounded-full flex items-center justify-center text-white font-bold text-lg"
                          style={{ backgroundColor: phase.color }}
                        >
                          {phase.letter}
                        </div>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-[#0F172A] mb-3">
                      {phase.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-sm text-[#64748B] leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden space-y-12 max-w-md mx-auto">
              {phases.map((phase, index) => (
                <div key={index} className="relative text-center">
                  {/* Phase Number */}
                  <div className="text-xs font-semibold text-[#94A3B8] mb-4 tracking-wide">
                    PHASE {phase.number}
                  </div>
                  
                  {/* Circle with Letter */}
                  <div className="mb-4 flex justify-center">
                    <div className="w-[84px] h-[84px] rounded-full bg-[#E8F3FB] flex items-center justify-center">
                      <div 
                        className="w-[60px] h-[60px] rounded-full flex items-center justify-center text-white font-bold text-2xl"
                        style={{ backgroundColor: phase.color }}
                      >
                        {phase.letter}
                      </div>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1F2937] mb-3">
                    {phase.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {phase.description}
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

export default HowDeliveryWorks;
