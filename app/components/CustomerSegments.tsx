'use client';
import { Stethoscope, Building2, Hospital, TrendingUp, Clock, IndianRupee, Plus, UsersRound, Building, Users } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const segments = [
  {
    icon: Stethoscope,
    title: "Doctors",
    subtitle: "Solo practitioners & specialists",
    stats: [
      { icon: Users, value: "2.4x", label: "More patients" },
      { icon: Clock, value: "45%", label: "Time saved" },
    ],
    benefits: [
      "Build trust-driven personal brands",
      "Reduce no-shows significantly",
      "Spend more time on patient care",
    ],
    testimonial: '"Dr. Sharma increased consultations by 180% in 6 months"',
  },
  {
    icon: Building2,
    title: "Clinics",
    subtitle: "Multi-specialty & diagnostic centers",
    stats: [
      { icon: TrendingUp, value: "67%", label: "OPD growth" },
      { icon: IndianRupee, value: "3.1x", label: "ROI achieved" },
    ],
    benefits: [
      "Increase OPD utilisation",
      "Improve repeat visit rates",
      "Reduce staff workload with automation",
    ],
    testimonial: '"WellVisit Clinic reduced no-shows from 28% to 8%"',
  },
  {
    icon: Building,
    title: "Hospitals",
    subtitle: "Multi-location healthcare systems",
    stats: [
      { icon: Users, value: "52%", label: "Patient LTV up" },
      { icon: TrendingUp, value: "₹4.2Cr", label: "Revenue added" },
    ],
    benefits: [
      "Optimise department-wise growth",
      "Centralise patient intelligence",
      "Improve lifetime patient value",
    ],
    testimonial: '"Metro Hospital saw 340% increase in online appointments"',
  },
];

const CustomerSegments = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const getActiveDot = () => {
    if (scrollProgress < 0.33) return 0;
    if (scrollProgress < 0.66) return 1;
    return 2;
  };

  return (
    <section id="who-we-serve" className="py-12 lg:py-22 bg-[#FBFCFD]">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <UsersRound className="w-4 h-4 text-[#0D5C94]" />
            <span className="text-sm font-medium text-primary">Who We Serve</span>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            Designed for healthcare providers{" "}
            <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>who care</span>
          </h2>
          <p className="text-base lg:text-base text-muted-foreground max-w-3xl mx-auto">
            From individual practitioners to large hospital networks, our platform scales with your growth.
          </p>
        </div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden mb-8">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide"
            onScroll={(e) => {
              const scrollLeft = e.currentTarget.scrollLeft;
              const maxScroll = e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
              const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
              setScrollProgress(progress);
            }}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex gap-4 px-4 pb-4" style={{ width: 'max-content' }}>
              {segments.map((segment, index) => (
                <div
                  key={index}
                  className="w-[300px] rounded-2xl p-6 flex-shrink-0"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(24px)',
                    boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
                  }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}
                      >
                        <segment.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#1F2020]">{segment.title}</h3>
                    </div>
                    <p className="text-sm text-[#64748B]">{segment.subtitle}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {segment.stats.map((stat, sIndex) => (
                      <div key={sIndex} className="bg-[#2A9D90]/[0.05] rounded-xl p-4 text-center">
                        <stat.icon className="w-5 h-5 text-[#0D9488] mb-2 mx-auto" />
                        <div className="text-xl font-bold text-[#0D9488] mb-1">{stat.value}</div>
                        <div className="text-xs text-[#64748B]">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Benefits */}
                  <div className="space-y-3 mb-6">
                    {segment.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 flex-shrink-0"></div>
                        <span className="text-xs text-[#64748B]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {/* Testimonial */}
                  <p className="text-xs text-[#0D5C94] italic font-medium border-t border-border pt-4">{segment.testimonial}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Progress Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((dot) => (
              <div
                key={dot}
                className={`h-2 rounded-full transition-all ${
                  dot === getActiveDot() ? 'w-8 bg-[#0D5C94]' : 'w-2 bg-[#0D5C94]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-[1054px] mx-auto">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 lg:p-8"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
              }}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}
                  >
                    <segment.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1F2020]">{segment.title}</h3>
                </div>
                <p className="text-sm text-[#64748B]">{segment.subtitle}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {segment.stats.map((stat, sIndex) => (
                  <div key={sIndex} className="bg-[#2A9D90]/[0.05] rounded-xl p-4 text-center">
                    <stat.icon className="w-5 h-5 text-[#0D9488] mb-2 mx-auto" />
                    <div className="text-xl font-bold text-[#0D9488] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#64748B]">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="space-y-3 mb-6">
                {segment.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#0D9488] mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-[#64748B]">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <p className="text-xs text-[#0D5C94] italic font-medium border-t border-border pt-4">{segment.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default CustomerSegments;
