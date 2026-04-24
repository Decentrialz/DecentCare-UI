"use client"
import Image from "next/image";
import { useState } from "react";
import smmSocialIcons from "@/app/assets/smmSocialIcons.svg";
import arrow1 from "@/app/assets/arrow1.svg";

const contentFormats = [
  "Reels / Shorts", "Explainers", "Awareness Campaigns",
  "Carousels", "Patient Education", "Trust and Credibility",
  "Stories", "Aftercare and Recovery", "FAQs / Q and A",
  "Doctor-Led Videos", "Myth vs Fact", "Clinic / Hospital Updates",
];

const FormatsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const totalSlides = 2;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
    if (isRightSwipe && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="w-full">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-primary mb-6 text-center lg:text-left" style={{
                  background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  paddingBottom: "0.15em",
                  lineHeight: 1.15,
                }}>
              Every Format. Every Platform.Built for Healthcare.
            </h2>
            
            {/* Mobile Image - Show before content on mobile */}
            <div className="lg:hidden flex justify-center mb-10">
              <Image
                src={smmSocialIcons}
                alt="Social media platforms"
                className="rounded-2xl object-cover"
                style={{ maxHeight: 300 }}
                priority
              />
            </div>

            {/* Desktop Grid - Always visible on desktop */}
            <div className="hidden lg:grid grid-cols-3 gap-3">
              {contentFormats.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-[#5E6160]">
                  <Image src={arrow1} alt="" width={20} height={20} className="shrink-0" />
                  {f}
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden">
              <div 
                className="overflow-hidden cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {/* Slide 1 - First 8 items */}
                  <div className="w-full flex-shrink-0 select-none">
                    <div className="grid grid-cols-2 gap-3">
                      {contentFormats.slice(0, 8).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#5E6160]">
                          <Image src={arrow1} alt="" width={20} height={20} className="shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Slide 2 - Last 4 items */}
                  <div className="w-full flex-shrink-0 select-none">
                    <div className="grid grid-cols-2 gap-3">
                      {contentFormats.slice(8).map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#5E6160]">
                          <Image src={arrow1} alt="" width={20} height={20} className="shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentSlide(index);
                    }}
                    className="h-2 rounded-full transition-all cursor-pointer border-0 outline-none focus:outline-none"
                    style={{
                      background: currentSlide === index 
                        ? 'linear-gradient(135deg, #0D9488, #0D5C94)' 
                        : '#D1D5DB',
                      width: currentSlide === index ? '24px' : '8px',
                    }}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Desktop Image - Show on right side on desktop */}
          <div className="hidden lg:flex justify-center">
            <Image
              src={smmSocialIcons}
              alt="Social media platforms"
              className="rounded-2xl object-cover"
              style={{ maxHeight: 350 }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormatsSection;
