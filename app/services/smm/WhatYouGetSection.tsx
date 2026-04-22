import { Search, Award, CalendarDays, MessageSquareMore, SearchCheck, ShieldUser, CalendarCheck2 } from "lucide-react";

const whatYouGet = [
  { icon: SearchCheck, title: "Social Search Visibility", description: "Be discoverable where people search for health answers and providers on social platforms." },
  { icon: ShieldUser, title: "Authority That Feels Human", description: "Doctor-led education and calm, credible messaging built to earn trust." },
  { icon: CalendarCheck2, title: "A Monthly Content Engine", description: "Series + templates + workflows that keep content consistent without last-minute chaos." },
  { icon: MessageSquareMore, title: "Engagement That Turns Into Enquiries", description: "Community handling that supports patient questions and drives the next step." },
];

const WhatYouGetSection = () => (
  <section className="py-20 lg:py-28 bg-[#FFFFFF]">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary text-center mb-14" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
        What You Get
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {whatYouGet.map((item, i) => (
          <div key={i} className="bg-[#FFFFFF] rounded-2xl p-8 card-elevated space-y-4" style={{border:'1px solid', borderColor:"#F1F5F9"}}>
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #0D5C94, #0A766D)' }}>
              <item.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
            <p className="text-base text-[#475569] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouGetSection;
