const steps = [
  {
    number: "1",
    title: "Baseline audit and priority mapping",
    filled: true
  },
  {
    number: "2",
    title: "Keyword and entity plan aligned to services and locations",
    filled: false
  },
  {
    number: "3",
    title: "On-page and technical implementation roadmap",
    filled: false
  },
  {
    number: "4",
    title: "Authority expansion through structured content and internal linking",
    filled: false
  },
  {
    number: "5",
    title: "Continuous monitoring, refresh cycles, and improvements",
    filled: true
  }
];

const HowWeWorkSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{
            color: "#0D9488",
            paddingBottom: "0.15em",
            lineHeight: 1.15,
          }}>
            How We Work
          </h2>
          <p className="text-base text-[#4B5563]">
            A proven methodology for healthcare SEO growth
          </p>
        </div>

        {/* Desktop View - Horizontal */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0D5C94] to-[#0D9488]" style={{ left: '10%', right: '10%' }}></div>
            
            {/* Steps */}
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 relative z-10 ${
                      step.filled 
                        ? 'text-white' 
                        : 'bg-white text-[#0D5C94]'
                    }`}
                    style={step.filled ? {
                      background: index === 0 ? '#0D5C94' : '#0D9488'
                    } : {
                      border: '2px solid #0D5C94'
                    }}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  
                  {/* Title */}
                  <p className="text-sm text-[#083050] leading-relaxed max-w-[200px]">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Vertical */}
        <div className="lg:hidden max-w-md mx-auto">
          <div className="relative">
            {/* Steps */}
            <div className="space-y-8 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  {/* Circle */}
                  <div 
                    className={`w-16 h-16 rounded-full flex items-center justify-center shrink-0 relative z-10 ${
                      step.filled 
                        ? 'text-white' 
                        : 'bg-white text-[#0D5C94]'
                    }`}
                    style={step.filled ? {
                      background: index === 0 ? '#0D5C94' : 'linear-gradient(135deg, #0D9488, #0D5C94)'
                    } : {
                      border: '2px solid #0D5C94'
                    }}
                  >
                    <span className="text-xl font-bold">{step.number}</span>
                  </div>
                  
                  {/* Title */}
                  <p className="text-sm text-[#1E293B] leading-relaxed pt-4 max-w-[280px]">
                    {step.title}
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

export default HowWeWorkSection;
