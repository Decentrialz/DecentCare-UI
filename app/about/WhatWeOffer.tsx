const WhatWeOffer = () => {
  const offerings = [
    { num: "01", title: "SEO with AI Search Intelligence", desc: "Future-ready organic visibility strategies combining AI-enhanced SEO, AIO, GEO, and AEO to ensure providers are found, across traditional search and generative AI responses alike." },
    { num: "02", title: "Social Media Marketing with AI Insights & Automation", desc: "AI-driven audience segmentation, sentiment analysis, and predictive creative optimisation that enables personalised, high-impact engagement across the platforms patients prefer." },
    { num: "03", title: "Paid Advertising with AI-Driven Optimisation", desc: "Intelligent bidding, conversion propensity modelling, and real-time budget reallocation that continuously refine campaign performance to attract high-value patient enquiries." },
    { num: "04", title: "AI-Enabled Care Journey CRM", desc: "Intelligent automation and predictive patient scoring that streamline follow-ups, optimise communication timing, improve appointment adherence, and reduce no-shows." },
    { num: "05", title: "Business Strategy & Growth Consulting", desc: "AI-powered forecasting and scenario modelling that support smarter strategic decisions, from market positioning and competitive mapping to investment impact simulations." },
    { num: "06", title: "Web Development with AI-Powered Personalisation", desc: "Adaptive, high-converting websites built with conversational AI, behaviour-based journeys, and symptom-guided pathways that reduce friction and accelerate appointment conversions." },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4"  style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>What We Offer</h2>
          <p className="text-[#5E6160]">DecentCare delivers a full-stack growth and operations platform across six integrated capability areas</p>
        </div>

        <div className="space-y-4">
          {offerings.map((item) => (
            <div
              key={item.num}
              className="bg-white rounded-xl p-0 flex border border-white/30 shadow-[0_10px_40px_0_rgba(60,131,246,0.15),0_1px_3px_0_rgba(15,23,41,0.05)] overflow-hidden"
              style={{
                borderWidth: '1px',
                borderColor: 'rgba(255,255,255,0.3)',
              }}
            >
              <div className="flex flex-col items-center justify-center min-w-[90px] px-2 bg-transparent">
                <span className="text-3xl font-bold text-[#CCD2D1]">{item.num}</span>
              </div>
              <div className="flex-1 py-6 pr-6">
                <h3 className="font-semibold text-[#0D9488] mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-[#5E6160] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
