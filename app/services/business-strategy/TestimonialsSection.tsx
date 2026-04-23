'use client';
import { Star } from "lucide-react";
import Image from "next/image";
import apost from "@/app/assets/apost.png";
import { linearGradient } from "framer-motion/client";
import { useState, useRef, useEffect } from "react";

const testimonials = [
  {
    stars: 5,
    text: "We were preparing to enter two new regional markets with no clear roadmap. DecentCare gave us a structured strategy that identified the right entry points and flagged risks we hadn't considered. We launched on time and within budget.",
    author: {
      initials: "RK",
      name: "Dr. Rajesh Kumar",
      title: "CEO, Multi-Specialty Hospital, Hyderabad",
      bgColor: "#0D5C94",
    },
  },
  {
    stars: 5,
    text: "Our billing team had been leaving revenue on the table for years without realising it. Within 60 days of working with DecentCare, we identified over ₹42 lakh in recoverable revenue. The payer mix analysis alone changed how we approach contracting.",
    author: {
      initials: "PA",
      name: "Priya Anand",
      title: "COO, Surgical Specialty Group, Bengaluru",
      bgColor: "#0D5C94",
    },
  },
  {
    stars: 5,
    text: "Readmission rates and inconsistent patient flow were hurting both our outcomes and our reputation. DecentCare came in, diagnosed the root causes quickly, and helped us implement changes that actually stuck. Our team finally has a process that works.",
    author: {
      initials: "SM",
      name: "Suresh Mehta",
      title: "Director, 350-bed Hospital, Chennai",
      bgColor: "#0D9488",
    },
  },
];

const TestimonialsSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? scrollLeft / maxScroll : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  const getActiveDot = () => {
    if (scrollProgress < 0.33) return 0;
    if (scrollProgress < 0.66) return 1;
    return 2;
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
              style={{ color: "#0D9488" }}
            >
              Testimonials
            </h2>
            <p className="text-sm text-[#64748B]">What our clients say</p>
          </div>

          {/* Mobile: Horizontal Scroll Carousel */}
          <div className="lg:hidden">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-8 scrollbar-hide"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              <div className="flex gap-4 px-4" style={{ width: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 border border-[#E2E8F0] flex flex-col relative w-[320px]"
                  >
                    {/* Quote Image - Top Right */}
                    <div className="absolute top-6 right-6 opacity-80">
                      <Image
                        src={apost}
                        alt="Quote"
                        width={40}
                        height={40}
                        className="w-6 h-6"
                      />
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#FFA500] text-[#FFA500]"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-sm text-[#083050] leading-relaxed mb-6 flex-1">
                      {testimonial.text}
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {/* Avatar */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundImage: "linear-gradient(135deg, #0D5C94, #0D9488)" }}
                      >
                        <span className="text-sm font-bold text-white">
                          {testimonial.author.initials}
                        </span>
                      </div>

                      {/* Author Info */}
                      <div>
                        <p className="text-sm font-bold text-[#0F172A]">
                          {testimonial.author.name}
                        </p>
                        <p className="text-xs text-[#94A3B8]">
                          {testimonial.author.title}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scroll Progress Indicator */}
            <div className="flex justify-center gap-2 mt-4">
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
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] flex flex-col relative"
              >
                {/* Quote Image - Top Right */}
                <div className="absolute top-6 right-6 opacity-80">
                  <Image
                    src={apost}
                    alt="Quote"
                    width={40}
                    height={40}
                    className="w-6 h-6 lg:w-8 lg:h-8"
                  />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#FFA500] text-[#FFA500]"
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-sm text-[#083050] leading-relaxed mb-6 flex-1">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundImage: "linear-gradient(135deg, #0D5C94, #0D9488)" }}
                  >
                    <span className="text-sm font-bold text-white">
                      {testimonial.author.initials}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div>
                    <p className="text-sm font-bold text-[#0F172A]">
                      {testimonial.author.name}
                    </p>
                    <p className="text-xs text-[#94A3B8]">
                      {testimonial.author.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
