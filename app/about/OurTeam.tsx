"use client"
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import vamshiColor from "@/app/assets/vamshi-color.svg";
import ashokColor from "@/app/assets/ashok-color.svg";

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const team = [
    { name: "Vamshi", role: "Digital Marketing Manager", image: vamshiColor },
    { name: "Ashok", role: "Fullstack Developer", image: ashokColor },
    { name: "Vamshi", role: "Digital Marketing Manager", image: vamshiColor },
    { name: "Ashok", role: "Fullstack Developer", image: ashokColor },
    { name: "Vamshi", role: "Digital Marketing Manager", image: vamshiColor },
    { name: "Ashok", role: "Fullstack Developer", image: ashokColor },
    { name: "Vamshi", role: "Digital Marketing Manager", image: vamshiColor },
    { name: "Ashok", role: "Fullstack Developer", image: ashokColor },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleScroll = () => {
      const scrollLeft = carousel.scrollLeft;
      const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
      const scrollPercentage = scrollLeft / scrollWidth;
      const newIndex = Math.round(scrollPercentage);
      setActiveIndex(newIndex);
    };

    carousel.addEventListener('scroll', handleScroll);
    return () => carousel.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Our Team</h2>
        <p className="text-[#5E6160] mb-12">
          DecentCare is used by healthcare providers managing active patient journeys and coordinated care delivery.
        </p>

        <div className="relative">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide scroll-smooth" 
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            id="team-carousel"
          >
            {team.map((member, i) => (
              <div key={i} className="relative rounded-xl overflow-hidden group flex-shrink-0 snap-center" style={{ width: 'calc((100% - 4.5rem) / 4)' }}>
                <Image
                  src={member.image}
                  alt={member.name}
                  className="w-54 h-62 object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute bottom-2 left-2">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded text-left w-[170px]">
                   <p className="font-semibold text-black text-sm mb-1">{member.name}</p>
                    <p className="text-xs text-gray-600">{member.role}</p> 
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center gap-1 mt-6">
            <div className={`h-1 w-16 rounded-full transition-all duration-300 ${activeIndex === 0 ? 'bg-gradient-to-r from-[#0D9488] to-[#0D5C94]' : 'bg-gray-300'}`}></div>
            <div className={`h-1 w-16 rounded-full transition-all duration-300 ${activeIndex === 1 ? 'bg-gradient-to-r from-[#0D9488] to-[#0D5C94]' : 'bg-gray-300'}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
