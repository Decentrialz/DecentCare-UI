import { Bot, Layers, Shield, Users, TrendingUp, Link2, Sparkles, Cpu, Database, ChartLine, GitPullRequest, GitMerge, Workflow } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI Decision Engines",
    description: "Intelligent algorithms that understand patient intent and predict behavior.",
  },
  {
    icon: Layers,
    title: "Digital Twin Modeling",
    description: "Real-time journey simulation and optimization across all touchpoints.",
  },
  {
    icon: Shield,
    title: "Secure Data Flows",
    description: "HIPAA-compliant infrastructure with end-to-end encryption.",
  },
  {
    icon: Database,
    title: "CRM & Care Orchestration",
    description: "Unified patient data platform with intelligent workflow automation.",
  },
  {
    icon: ChartLine,
    title: "Analytics & Prediction",
    description: "Predictive models that surface insights before problems arise.",
  },
  {
    icon: Workflow,
    title: "Integration Layer",
    description: "Seamless connectivity with existing EHR, billing, and communication systems.",
  },
];

const layers = [
  { label: "Experience Layer — Patient Touchpoints", color: "bg-[#E0F2F1] text-[#0D5C94]" },
  { label: "Intelligence Layer — AI & Digital Twin", color: "bg-[#E0F2F1] text-[#0D5C94]" },
  { label: "Data Layer — Secure, Compliant Storage", color: "bg-[#F1F5F9] text-[#64748B]" },
  { label: "Integration Layer — EHR, Billing, Communications", color: "bg-[#F1F5F9] text-[#64748B]" },
];

const TechnologyPlatform = () => {
  return (
    <section className="py-12 lg:py-20 relative" style={{ backgroundColor: 'rgba(241, 245, 249, 0.3)' }}>

      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <Cpu className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary">Technology</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            Built like a healthcare platform.{" "}
            <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Not a marketing tool.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Enterprise-grade infrastructure designed from the ground up for healthcare compliance, security, and scale.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 max-w-[1100px] mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="rounded-2xl p-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
              }}
            >
              <div className="w-12 h-12 bg-[#3C83F6]/10 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#0D5C94]" />
              </div>
              <h3 className="text-lg font-semibold text-[#0F1729] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#818584]">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Layer Tags */}
        <div className="flex flex-wrap justify-center gap-3">
          {layers.map((layer, index) => (
            <span
              key={index}
              className="inline-block px-4 py-4 rounded-xl text-sm font-medium text-center"
              style={
                index === 0 
                  ? { background: 'linear-gradient(135deg, rgba(60, 131, 246, 0.2) 0%, rgba(60, 131, 246, 0.05) 100%)', color: '#0D5C94' }
                  : index === 1
                  ? { background: 'linear-gradient(135deg, rgba(42, 157, 144, 0.2) 0%, rgba(42, 157, 144, 0.05) 100%)', color: '#0D9488' }
                  : index === 2
                  ? { background: 'linear-gradient(135deg, rgba(15, 23, 41, 0.1) 0%, rgba(15, 23, 41, 0.05) 100%)', color: '#5E6160' }
                  : { background: 'linear-gradient(135deg, rgba(241, 245, 249, 1) 0%, rgba(241, 245, 249, 0.5) 100%)', color: '#818584' }
              }
            >
              {layer.label}
            </span>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default TechnologyPlatform;
