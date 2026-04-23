import { Home, Heart, Shield, Globe, Monitor } from "lucide-react";

const targetAudiences = [
  {
    icon: Home,
    title: "Hospitals and health systems"
  },
  {
    icon: Heart,
    title: "Multi-specialty and specialty clinics"
  },
  {
    icon: Shield,
    title: "Super-specialty and procedure-focused practices"
  },
  {
    icon: Globe,
    title: "Healthcare brands scaling locations and service lines"
  },
  {
    icon: Monitor,
    title: "Healthcare platforms that need trust and discoverability"
  }
];

const WhoThisIsForSection = () => {
  return (
    <section className="py-14 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{
              color: "#0D9488",
              paddingBottom: "0.15em",
              lineHeight: 1.15,
            }}>
              Who This Is For
            </h2>
            <p className="text-base text-[#4B5563]">
              Built for healthcare organizations that lead with trust
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {targetAudiences.map((item, index) => (
              <div 
                key={index}
                className="rounded-2xl p-10 flex flex-col items-center text-center gap-4 hover:shadow-md transition-shadow bg-[#FFFFFF] border border-[#E5E7EB]"
              >
                {/* Icon Circle */}
                <div 
                  className="w-13 h-13 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: '#E6F7F6'}}
                >
                  <item.icon className="w-5 h-5" style={{ color: '#0D5C94' }} strokeWidth={1.5} />
                </div>
                
                {/* Title */}
                <p className="text-sm text-[#083050] leading-relaxed font-semibold">
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

export default WhoThisIsForSection;
