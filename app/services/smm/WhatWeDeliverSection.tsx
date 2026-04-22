import { BarChart3, Settings2, Monitor, Users, Palette, RotateCcw, ChessKnight, Sparkles, Gauge, LayoutDashboard, Boxes } from "lucide-react";

const whatWeDeliver = [
  { icon: ChessKnight, title: "Strategy and Planning", description: "Patient-intent mapping • content pillars • brand voice • monthly calendar" },
  { icon: Boxes, title: "In-House Content Studio", description: "Reels/Shorts scripts • carousels • stories • explainers • design templates" },
  { icon: LayoutDashboard, title: "Platform Management", description: "Instagram • Facebook • LinkedIn • YouTube (and other relevant channels)" },
  { icon: Users, title: "Community and Moderation", description: "Reply playbook • escalation rules • misinformation handling • review prompts" },
  { icon: Sparkles, title: "Creative Direction", description: "Series formats • visual style • tone consistency • storytelling guidelines" },
  { icon: Gauge, title: "Performance and Optimisation", description: "Monthly insights • what to scale • what to stop • what to improve next" },
];

const WhatWeDeliverSection = () => (
  <section className="py-20 lg:py-28 bg-[#FFFFFF]">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-lg md:text-xl lg:text-2xl font-extrabold text-primary text-center mb-14" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
        What We Deliver
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {whatWeDeliver.map((item, i) => (
          <div key={i} className="rounded-2xl p-6 space-y-3" style={{ background: 'linear-gradient(135deg, #F8FAFC, #FFFFFF)', border: '1px solid #F1F5F9'}}>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(13, 92, 148, 0.1), rgba(13, 148, 136, 0.1))" }}>
              <item.icon className="w-5 h-5 text-[#0D5C94]" />
            </div>
            <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
            <p className="text-sm text-[#475569] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDeliverSection;
