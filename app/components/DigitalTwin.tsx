import { Eye, TrendingDown, Target, RefreshCw, Sparkles, ArrowDown, Brain, Cpu, Database, Network, BarChart, GitBranch, ChartLine, Zap } from "lucide-react";

const journeySteps = [
  { number: 1, title: "Search", subtitle: "Intent captured", stat: "85% accuracy" },
  { number: 2, title: "Enquiry", subtitle: "Lead scored", stat: "Quality: A+" },
  { number: 3, title: "Booking", subtitle: "Scheduled", stat: "94% show rate" },
  { number: 4, title: "Visit", subtitle: "Care delivered", stat: "NPS: 72" },
  { number: 5, title: "Follow-up", subtitle: "Engaged", stat: "92% retention" },
  { number: 6, title: "Advocacy", subtitle: "Referrals", stat: "2.3x LTV" },
];

const capabilities = [
  {
    icon: Eye,
    title: "Predict",
    subtitle: "Appointment no-shows",
    stat: "62%",
    statLabel: "reduction in missed visits",
  },
  {
    icon: TrendingDown,
    title: "Identify",
    subtitle: "Drop-off risk signals",
    stat: "3.2x",
    statLabel: "better lead retention",
  },
  {
    icon: Target,
    title: "Recommend",
    subtitle: "Next best action",
    stat: "89%",
    statLabel: "action accuracy rate",
  },
  {
    icon: RefreshCw,
    title: "Optimize",
    subtitle: "Campaign performance",
    stat: "24/7",
    statLabel: "real-time learning",
  },
];

const tags = [
  { icon: Cpu, label: "AI Processing" },
  { icon: Database, label: "Data Lake" },
  { icon: GitBranch, label: "ML Models" },
  { icon: ChartLine, label: "Analytics" },
];

const DigitalTwin = () => {
  return (
    <section 
      className="py-12 lg:py-20 relative"
      style={{ background: 'linear-gradient(180deg, rgba(241, 245, 249, 0.3) 0%, rgba(251, 252, 253, 1) 100%)' }}
    >


      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <Brain className="w-4 h-4 text-[#0D5C94]" />
            <span className="text-sm font-medium text-primary">Proprietary Technology</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            Every Patient Journey Has a{" "}
            <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Digital Twin</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our AI creates a real-time mirror of each patient journey, predicting behaviour, identifying risks, and optimising outcomes before they happen.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#0D5C94]/10 rounded-full text-sm font-semibold text-[#0D5C94] border border-border"
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center text-[#0D5C94]">
                  <tag.icon className="w-4 h-4 text-[#0D5C94]" />
                </div>
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        {/* Journey Steps */}
        <div 
          className="rounded-2xl p-6 lg:p-8 mb-12"
          style={{
            background: 'linear-gradient(135deg, rgba(42, 157, 144, 0.05) 5%, rgba(60, 131, 246, 0.1) 10%, rgba(42, 157, 144, 0.05) 5%)',
            opacity: 0.8,
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journeySteps.map((step, index) => (
              <div key={index} className="relative">
                <div 
                  className="text-center space-y-3 rounded-2xl px-6 py-8"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  {/* Number circle */}
                  <div 
                    className="w-12 h-12 mx-auto rounded-full flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}
                  >
                    <span className="text-lg font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Title & Subtitle */}
                  <div>
                    <div className="font-bold text-[#1F2020]">{step.title}</div>
                    <div className="text-sm text-muted-foreground">{step.subtitle}</div>
                  </div>

                  {/* Stat Badge */}
                  <div className="inline-block px-7 py-1 bg-[#0D5C94]/10 rounded-full">
                    <span className="text-xs font-medium text-[#0D5C94]">{step.stat}</span>
                  </div>
                </div>
                
                {/* Arrow */}
                <div className="flex justify-center mt-6">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ border: '1px dashed #3C83F6' }}>
                    <Zap className="w-4 h-4 text-[#0D5C94]" />
                  </div>
                </div>
                
                {/* Connecting Line */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-[48%] -right-4 w-4 h-[2px] bg-[#0D5C94]" style={{ transform: 'translateY(-50%)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* What Digital Twin Enables */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground">What the Digital Twin Enables</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 max-w-[1100px] mx-auto">
          {capabilities.map((cap, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 text-center card-elevated">
              <div className="w-14 h-14 mx-auto bg-primary rounded-xl flex items-center justify-center mb-4" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}>
                <cap.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-1">{cap.title}</h4>
              <p className="text-sm text-muted-foreground mb-4">{cap.subtitle}</p>
              <div className="text-2xl font-bold text-[#0D9488] border-t border-border pt-2">{cap.stat}</div>
              <p className="text-xs text-muted-foreground">{cap.statLabel}</p>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-4 bg-card rounded-xl px-6 py-4 card-elevated">
            <div className="w-12 h-12 bg-[#0D5C94] rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0D5C94]">4.8x</span>
              <p className="text-sm text-muted-foreground">Higher conversion than industry average</p>
            </div>
          </div>
        </div>
      </div>      </div>    </section>
  );
};

export default DigitalTwin;
