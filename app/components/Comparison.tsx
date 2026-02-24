import { Check, X, Sparkles, Bot, Users, Target, BarChart3, Layers, Zap, Brain, GitFork, Network, Workflow } from "lucide-react";

const comparisons = [
  { feature: "Healthcare-specific AI models", decentcare: true, traditional: false },
  { feature: "Digital Twin journey optimization", decentcare: true, traditional: false },
  { feature: "Revenue-linked attribution", decentcare: true, traditional: false },
  { feature: "Predictive no-show prevention", decentcare: true, traditional: false },
  { feature: "Performance-based pricing option", decentcare: true, traditional: false },
  { feature: "Dedicated healthcare strategist", decentcare: true, traditional: false },
];

const features = [
  {
    icon: Brain,
    title: "Healthcare-First AI",
    description: "Purpose-built algorithms trained on healthcare data, not retrofitted from generic marketing tools.",
  },
  {
    icon: Network,
    title: "Digital Twin Technology",
    description: "Proprietary tech that mirrors patient journeys for real-time optimization and prediction.",
  },
  {
    icon: Target,
    title: "Performance Guaranteed",
    description: "We're so confident, we tie our fees to your results. No growth, no cost.",
  },
  {
    icon: BarChart3,
    title: "Full-Funnel Attribution",
    description: "See exactly which channels, campaigns, and touchpoints drive revenue—not just leads.",
  },
  {
    icon: Workflow,
    title: "Integrated Stack",
    description: "One platform for ads, SEO, automation, CRM, and analytics. No more tool juggling.",
  },
];

const Comparison = () => {
  return (
    <section className="py-12 lg:py-20 bg-background relative">
      <div className="absolute rounded-full" style={{ left: '0%', top: '27%', width: '500px', height: '500px', backgroundColor: 'rgba(60, 131, 246, 0.1)', opacity: '0.7', filter: 'blur(64px)' }} />
       <div className="absolute rounded-full" style={{ right: '2%', top: '38%', width: '500px', height: '500px', backgroundColor: 'rgba(42, 157, 144, 0.1)', opacity: '0.6', filter: 'blur(64px)' }} />
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto lg:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary">The DecentCare Difference</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F1729] mb-4">
            Why <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>500+ Providers</span><br className="lg:hidden" /> Choose Us
          </h2>
          <p className="text-sm lg:text-base text-muted-foreground max-w-2xl mx-auto">
            We're not another marketing agency. We're your technology-powered growth partner.
          </p>
        </div>

        {/* Comparison Table - Outer Box */}
        <div 
          className="max-w-4xl mx-auto mb-16 bg-card rounded-2xl p-4 md:p-8 relative overflow-hidden"
          style={{
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)',
            borderTop: '4px solid',
            borderImage: 'linear-gradient(90deg, #0D9488, #0D5C94) 1',
            borderImageSlice: '1 0 0 0'
          }}
        >
          {/* Heading inside the box */}
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl font-bold text-[#1F2020]">DecentCare vs. Traditional Marketing</h3>
          </div>

          {/* Header */}
          <div className="grid grid-cols-3 bg-[#FFFFFF] p-2 md:p-4 border-b border-border items-center">
            <div className="text-xs md:text-sm font-medium text-[#818584] text-left md:text-left pl-0 md:pl-0">Capability</div>
            <div className="text-center flex justify-center">
              <span className="px-2 md:px-4 py-1 rounded-full text-xs md:text-sm font-semibold text-[#0D9488]" style={{ backgroundColor: 'rgba(42, 157, 144, 0.1)' }}>DecentCare</span>
            </div>
            <div className="text-center flex justify-center">
              <span className="text-xs md:text-sm font-medium text-[#818584]">Traditional<br className="md:hidden" /> Agencies</span>
            </div>
          </div>

          {/* Rows */}
          {comparisons.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-3 p-2 md:p-4 items-center gap-2 ${
                index !== comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-xs md:text-sm text-[#1F2020]">{item.feature}</div>
              <div className="flex justify-center">
                {item.decentcare ? (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#0D9488] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                  </div>
                ) : (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="flex justify-center">
                {item.traditional ? (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 md:w-5 md:h-5 text-accent-foreground" />
                  </div>
                ) : (
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-[#F1F5F9] rounded-full flex items-center justify-center">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 card-elevated">
              <div className="w-12 h-12 bg-[#0D9488]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#0D9488]" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Comparison;
