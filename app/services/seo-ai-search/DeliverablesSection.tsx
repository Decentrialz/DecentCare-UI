import { FileText, ClipboardList, FileSearch, FileCode, Database, Sparkles, BarChart3, SquareCheckBig, Search, Layers, Mail, ChartNoAxesColumn, Zap } from "lucide-react";

const deliverables = [
  {
    icon: SquareCheckBig,
    title: "Technical SEO audit and priority roadmap"
  },
  {
    icon: Search,
    title: "Keyword and intent cluster map by services, conditions, and locations"
  },
  {
    icon: Layers,
    title: "Entity map for medical topics"
  },
  {
    icon: FileText,
    title: "Templates for service, condition, doctor, and location pages"
  },
  {
    icon: Mail,
    title: "Structured data and schema recommendations"
  },
  {
    icon: Zap,
    title: "Content briefs designed for trust and AI readability"
  },
  {
    icon: ChartNoAxesColumn,
    title: "Monthly reporting focused on care-intent visibility and conversions"
  }
];

const DeliverablesSection = () => {
  return (
    <section className="py-20 lg:py-28" style={{ background: 'radial-gradient(circle at top right, rgba(13, 148, 136, 0.2) 0%, rgba(13, 148, 136, 0.08) 12%, transparent 25%), linear-gradient(180deg, #EFF6FF 50%, #FFFFFF 100%)' }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-[450px_1fr] gap-12 max-w-7xl mx-auto items-center">
          {/* Left Side - Title and Description */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{
              color: "#0D9488",
              paddingBottom: "0.15em",
              lineHeight: 1.15,
            }}>
              Deliverables
            </h2>
            <p className="text-base text-[#4B5563] leading-relaxed">
              Every engagement comes with clear, actionable deliverables, not just reports. Each output is designed to drive visibility and patient intent discovery.
            </p>
          </div>

          {/* Right Side - Deliverables Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deliverables.map((item, index) => (
              <div 
                key={index}
                className="rounded-xl p-6 flex flex-col items-start gap-4 hover:shadow-md transition-shadow"
                style={{ backgroundColor: 'rgba(13, 148, 136, 0.06)', border: '1px solid rgba(0, 0, 0, 0.1)' }}
              >
                {/* Icon Circle */}
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(13, 148, 136, 0.2)' }}
                >
                  <item.icon className="w-6 h-6 text-[#0D9488]" />
                </div>
                
                {/* Title */}
                <p className="text-sm text-[#000000]/90 leading-relaxed font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverablesSection;
