import { CheckCircle2, Navigation } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Patient-Intent Keyword and Topic Research",
    description: "We build keyword clusters based on patient-intent language, covering awareness, discovery, evaluation, treatment terms, provider selection process, and location-based intent.",
    includes: [
      "Keyword clustering by care journey stage",
      "Service and specialty opportunity mapping",
      "Competitive gap analysis across local and state-wide brands"
    ],
    clusters: {
      title: "TYPICAL KEYWORD CLUSTERS",
      items: [
        { label: "Condition and symptom intent", example: '"food pain specialist" "thyroid symptoms"' },
        { label: "Treatment and procedure intent", example: '"total replacement recovery" "total knee surgery for..."' },
        { label: "Provider selection intent", example: '"best cardiologist in [city]" "top orthopedic doctor near me"' },
        { label: "Location and access intent", example: '"clinic near [area]" "24/7 emergency hospital"' }
      ]
    }
  },
  {
    number: "02",
    title: "SEO Information Architecture",
    description: "We design scalable healthcare site structures that support growth across departments, specialties, and locations.",
    includes: [
      "Service line and department page hierarchy",
      "Condition and treatment hubs",
      "Doctor profile structure that supports discoverability",
      "Location page strategy for single or multi-branch networks"
    ]
  },
  {
    number: "03",
    title: "On-Page SEO for Services, Conditions, Doctors, and Locations",
    description: "We optimize priority pages to improve SERP performance and patient-friendly language while keeping language medically responsible.",
    includes: [
      "Title and heading structure aligned to intent",
      "Section-level semantic coverage for medical topics",
      "Trust signals built on expertise, clarity, and patient guidance",
      "Conversion-aligned focused on appointment readiness"
    ]
  },
  {
    number: "04",
    title: "Technical SEO",
    description: "We remove technical barriers that limit visibility and ensure you site is fast, accessible, and indexable.",
    includes: [
      "Indexing and crawl diagnostics",
      "Page speed and Core Web Vitals improvements",
      "Canonicals, duplication, and thin-content cleanup",
      "Structured data readiness and implementation guidance"
    ]
  },
  {
    number: "05",
    title: "Entity SEO for Healthcare",
    description: "Search engines and AI systems interpret entities, not just keywords. We build authority around the entities that represent your care services.",
    includes: [
      "Entity mapping across conditions, treatments, specialties, providers, and locations",
      "Internal linking strategy to strengthen topical authority",
      "Schema recommendations to improve interpretability"
    ]
  }
];

const WhatOurSEOServiceIncludesSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{
            color: "#0D9488",
            paddingBottom: "0.15em",
            lineHeight: 1.15,
          }}>
            What Our SEO Service Includes
          </h2>
          <p className="text-base text-[#4B5563]">
            Five pillars of patient-centric search visibility
          </p>
        </div>

        <div className="max-w-7xl mx-auto space-y-8">
          {services.map((service, index) => (
            <div key={index} className="grid lg:grid-cols-[350px_1fr] gap-0 rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid #E5E7EB' }}>
              {/* Left Side - Number, Title, Description */}
              <div className="p-8 flex flex-col justify-start relative" style={{ 
                background: 'linear-gradient(180deg, #E6F7F6 0%, #E6F6F5 100%)'
              }}>
                {/* Radial gradient overlay */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(160px 160px at bottom right, rgba(13, 92, 148, 0.3) 0%, transparent 40%)'
                }}></div>
                
                <div className="text-[72px] font-bold text-[#0D5C94]/10 leading-none mb-4 relative z-10">
                  {service.number}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F172A] mb-4 leading-snug relative z-10">
                  {service.title}
                </h3>
                <p className="text-sm text-[#4D5567] leading-relaxed relative z-10">
                  {service.description}
                </p>
              </div>

              {/* Right Side - Includes & Clusters */}
              <div className="bg-white p-8 space-y-6">
                {/* Includes */}
                <div>
                  <h4 className="text-xs font-bold text-[#0D5C94] mb-4 tracking-wider uppercase">
                    Includes
                  </h4>
                  <ul className="space-y-3">
                    {service.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ backgroundColor: '#DCFCE7' }}>
                          <Navigation className="w-3 h-3 text-[#0D9488]" />
                        </div>
                        <span className="text-sm text-[#334155]">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Typical Keyword Clusters (if exists) */}
                {service.clusters && (
                  <div>
                    <h4 className="text-xs font-bold text-[#0D5C94] mb-4 tracking-wider uppercase">
                      {service.clusters.title}
                    </h4>
                    <ul className="space-y-4">
                      {service.clusters.items.map((cluster, idx) => (
                        <li key={idx} className="flex items-start gap-3 bg-[#F2F7FB] p-4 rounded-lg border border-[#E2E8F0]">
                          <span className="w-2 h-2 rounded-full bg-[#0D5C94] shrink-0 mt-2" />
                          <div className="text-sm text-[#475569]">
                            <span className="font-semibold text-[#334155]">{cluster.label}</span> — {cluster.example}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatOurSEOServiceIncludesSection;
