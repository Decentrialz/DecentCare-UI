import { Route, TrendingUp, Handshake, ChartLine } from "lucide-react";

const OurApproach = () => {
  const approaches = [
    {
      icon: Route,
      title: "Built Around Real Patient Journeys",
      desc: "Our approach is grounded in a deep understanding of patient journeys, the operational constraints care teams face daily, and the coordination dynamics that define real clinical environments. Rather than retrofitting generic marketing or CRM tools for healthcare, we build systems that reflect how care is actually delivered, and how patients actually make decisions.",
    },
    {
      icon: ChartLine,
      title: "Capabilities Designed With Providers",
      desc: "Every capability within the platform, from AI-enhanced SEO and paid acquisition to care journey automation and Digital Twin intelligence, is developed in close partnership with healthcare providers, refined through real-world feedback, and measured against outcomes that matter: patient volume, retention, revenue, and care quality.",
    },
    {
      icon: Handshake,
      title: "A Partner in Everyday Care Delivery",
      desc: "This commitment to working alongside those on the ground allows DecentCare to remain practical, adaptable, and consistently aligned with the evolving needs of the providers we serve.",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FBFCFD]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4"  style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Our Approach</h2>
          <p className="text-[#5E6160]">We design DecentCare around the realities of how healthcare teams actually operate.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {approaches.map((item, i) => (
            <div key={i} className="bg-card rounded-xl border p-6 space-y-4" style={{ borderColor: '#F1F5F9' }}>
              <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'rgba(13, 92, 148, 0.15)' }}>
                <span className="w-6 h-6 inline-block" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', display: 'inline-block' }}>
                  <item.icon className="w-6 h-6" />
                </span>
              </div>
              <h3 className="font-bold text-[#0F172B]">{item.title}</h3>
              <p className="text-base text-[#818584] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
