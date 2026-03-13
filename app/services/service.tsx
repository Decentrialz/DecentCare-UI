
import { Activity, BarChart3, BarChart, Cpu, Sparkles, Globe, ArrowRight, ChartLine, ChartColumn, Workflow } from "lucide-react";

const services = [
  {
    icon: Activity,
    title: "SEO with AI Search Intelligence",
    description:
      "Boost organic visibility and attract patients with a future-ready search strategy that blends AI-enhanced SEO with AIO (AI-driven optimisation), GEO (visibility in generative AI responses), and AEO (positioning your content as direct AI answers).",
    cta: "Boost Visibility",
  },
  {
    icon: ChartLine,
    title: "Social Media Marketing with AI Insights & Automation",
    description:
      "Drive engagement and loyalty with social campaigns enhanced by AI-driven audience segmentation, sentiment insight, and predictive creative optimisation, enabling personalised messaging that resonates on the platforms patients prefer.",
    cta: "Grow Engagement",
  },
  {
    icon: ChartColumn,
    title: "Paid Advertising with AI-Driven Optimization",
    description:
      "Maximise ROI through AI-powered bidding, conversion propensity models, and real-time budget reallocation that continuously refine campaign performance across channels based on what is most likely to convert high-value patient enquiries.",
    cta: "Drive Leads",
  },
  {
    icon: Workflow,
    title: "AI-Enabled Care Journey CRM",
    description:
      "Use intelligent automation and predictive patient scoring to streamline outreach, from auto sequencing follow-ups to adjusting communication timing based on predicted appointment adherence and reducing no-shows.",
    cta: "Automate Your Workflow",
  },
  {
    icon: Sparkles,
    title: "Business Strategy & Growth Consulting with AI-Driven Forecasting",
    description:
      "Enhance strategic planning with AI insights that model future scenarios, from market trend forecasting and competitive mapping to operational simulations that reveal the impact of key investment decisions.",
    cta: "Book a Consultation",
  },
  {
    icon: Globe,
    title: "Web Development with AI-Powered Personalisation",
    description:
      "Build adaptive websites leveraging AI personalisation, conversational AI assistants, and behaviour-based journeys, tailoring content and navigation to individual patient needs, reducing friction, and accelerating appointment conversions with on-site support and symptom-guided pathways.",
    cta: "Build Your Platform",
  },
];

const Service = () => {
  return (
      <section className="pb-20 lg:pb- maz-w-6xl mx-auto px-24 lg:px-28">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 card-elevated flex flex-col border border-[#E5E7EB]"
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}>
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-[#1F2020] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#4A5565] text-sm leading-relaxed mb-6 flex-1">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D5C94] hover:text-accent transition-colors"
                >
                  {service.cta}
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Service;
