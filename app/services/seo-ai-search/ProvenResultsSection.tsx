const stats = [
  {
    value: "3.5M+",
    title: "Organic Search Impressions",
    subtitle: "Across all healthcare clients"
  },
  {
    value: "1.2M+",
    title: "Patient-intent organic sessions generated",
    subtitle: "Qualified discovery traffic"
  },
  {
    value: "420%",
    title: "Organic growth on priority pages",
    subtitle: "180% to 420% range across clients"
  },
  {
    value: "2.4x",
    title: "Increase in appointment-ready actions",
    subtitle: "Conversion-aligned outcomes"
  },
  {
    value: "60%+",
    title: "Reduction in low-intent traffic through intent filtering",
    subtitle: "Quality over quantity"
  },
  {
    value: "1,000+",
    title: "Healthcare Pages optimized",
    subtitle: "Services, conditions, doctors, locations"
  }
];

const ProvenResultsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-xl md:text-xl lg:text-2xl font-bold mb-4" style={{
            color: "#0D9488",
            paddingBottom: "0.15em",
            lineHeight: 1.15,
          }}>
            Proven Results
          </h2>
          <p className="text-base text-[#4B5563]">
            Selected outcomes from our healthcare SEO work over 15+ years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative bg-[#F8FAFC] rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              style={{ border: '1px solid #E2E8F0' }}
            >
              {/* Gradient top border */}
              <div 
                className="absolute top-0 left-0 right-0 h-1" 
                style={{ background: 'linear-gradient(90deg, #0D5C94, #0D9488)' }}
              />
              
              <div className="pt-2">
                <div className="text-2xl lg:text-3xl font-extrabold mb-3" style={{
                  color: index % 2 === 0 ? "#0D5C94" : "#0D9488"
                }}>
                  {stat.value}
                </div>
                <h3 className="text-base font-semibold text-[#334155] mb-2 leading-snug">
                  {stat.title}
                </h3>
                <p className="text-xs text-[#94A3B8]">
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvenResultsSection;
