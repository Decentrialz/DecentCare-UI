import { Calendar, HelpCircle, Headphones, Headset } from "lucide-react";

const helpOptions = [
  {
    icon: Calendar,
    title: "Request a Demo / Sales Inquiry",
    description: "For doctors, clinics, and hospitals exploring DecentCare.",
  },
  {
    icon: HelpCircle,
    title: "General Question",
    description: "For general information or non-sales inquiries.",
  },
  {
    icon: Headset,
    title: "Help with DecentCare Software",
    description: "For existing users who need assistance with the DecentCare platform.",
  },
];

const HelpOptions = () => (
  <section className="pt-16 pb-16 lg:pt-24 bg-[#FBFCFD]">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-12" style={{background: 'linear-gradient(135deg, #0D5C94, #076C63)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>
        How can we help you?
      </h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {helpOptions.map((opt, i) => (
          <div key={i} className="bg-card rounded-xl p-6 text-left card-elevated border pt-8 pb-12" style={{ borderColor: '#f1f5f9', borderWidth: 1 }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(13,92,148,0.15)' }}>
                <opt.icon className="w-6 h-6 text-[#0D5C94]" />
              </div>
              <h3 className="font-bold text-[#0F172B] text-md">{opt.title}</h3>
            </div>
            <p className="text-[#818584] text-base">{opt.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HelpOptions;
