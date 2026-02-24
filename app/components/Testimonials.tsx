"use client"
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import testimonialDoctor from "@/app/assets/testi1.gif";
import testimonialDoctor2 from "@/app/assets/testi2.gif";
import quotes from "@/app/assets/Quotes.svg";
import qotes from "@/app/assets/Qotes.svg";

const testimonials = [
  {
    id: 1,
    name: "Dr. Samhitha Reddy",
    credentials: "MBBS, MS, FISCP, FMAS, DMAS",
    hospital: "Lux Hospitals",
    image: testimonialDoctor,
    quote: "Lorem ipsum dolor sit amet, consectetur. Consequat auctor consectetur nunc vitae dolor blandit. Et enim massa etiam neque laoreet lorem sed. Vitae eu accumsan ultricies neque blandit proin elit ac. In turpis felis urna et aliquet sed lacus.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Arun Kumar",
    credentials: "MBBS, MD, DNB Cardiology",
    hospital: "Metro Heart Center",
    image: testimonialDoctor2,
    quote: "DecentCare transformed our patient acquisition completely. We saw a 180% increase in consultations within just 6 months. Their AI-powered approach truly understands healthcare.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-12 lg:py-20 bg-background">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto lg:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <ThumbsUp className="w-4 h-4 text-[#0D5C94]" />
            <span className="text-sm font-medium text-primary">Testimonials</span>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            What They Say <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>About<br className="lg:hidden" /> Us?</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground">
            Real stories from real people.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative flex items-center gap-8">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className={`absolute left-0 -translate-x-2 lg:-translate-x-3 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors z-10 ${
                currentIndex === 0
                  ? 'bg-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-[#0D9488] hover:bg-[#0D9488]'
              }`}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4 lg:w-6 lg:h-6 text-[#FFFFFF]" />
            </button>

            {/* Main Content - Desktop */}
            <div className="hidden lg:flex items-stretch gap-0 w-full max-w-[620px] h-auto lg:h-[350px] mx-auto overflow-hidden shadow-lg">
              {/* Section 1 - What They Say About Us */}
              <div 
                className="flex-shrink-0 w-44 p-4 flex flex-col justify-between text-white"
                style={{ background: '#0D5C94'}}
              >
                <div style={{marginTop:"7%", marginLeft:"7%"}}>
                  <p className="text-[14px] font-semibold mb-0.5">WHAT THEY SAY</p>
                  <p className="text-[14px] font-semibold">ABOUT US?</p>
                </div>
                <div>
                  <Image 
                    src={quotes} 
                    alt="Quotes" 
                    width={80} 
                    height={80} 
                    className="mb-2 opacity-10 mb-[20px] ml-[10px]"
                  />
                  <h4 className="font-bold text-sm mb-0.5">{current.name}</h4>
                  <p className="text-[10px] opacity-90 mb-0.5">{current.credentials}</p>
                  <p className="text-[10px] font-normal">-{current.hospital}</p>
                </div>
              </div>

              {/* Section 2 - GIF/Image */}
              <div className="flex-shrink-0 w-60">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={240}
                  height={350}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Section 3 - Quote Content */}
              <div className="flex-1 p-8 flex flex-col justify-center bg-white relative overflow-hidden">
                {/* Background Quote Image */}
                <div className="absolute top-4 right-4 opacity-100">
                  <Image 
                    src={qotes} 
                    alt="Quotes background" 
                    width={120} 
                    height={120} 
                  />
                </div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                  <p className="text-[#64748B] leading-relaxed text-xs mb-6 max-w-2xl">
                    {current.quote}
                  </p>
                  
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Mobile */}
            <div className="flex lg:hidden flex-col w-full max-w-[280px] mx-auto overflow-hidden shadow-lg bg-white">
              {/* GIF/Image */}
              <div className="w-full">
                <Image
                  src={current.image}
                  alt={current.name}
                  width={280}
                  height={350}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Doctor Details */}
              <div 
                className="w-full p-4 text-white"
                style={{ background: '#0D5C94'}}
              >
                <h4 className="font-bold text-base mb-1">{current.name}</h4>
                <p className="text-sm opacity-90 mb-1">{current.credentials}</p>
                <p className="text-sm font-normal">-{current.hospital}</p>
              </div>

              {/* Quote Content */}
              <div className="p-6 flex flex-col items-center text-center">
                <p className="text-[#64748B] leading-relaxed text-xs mb-4">
                  {current.quote}
                </p>
                
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
              </div>
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
              className={`absolute right-0 translate-x-2 lg:translate-x-3 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors z-10 ${
                currentIndex === testimonials.length - 1
                  ? 'bg-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-[#0D9488] hover:bg-[#0D9488]'
              }`}
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-4 h-4 lg:w-6 lg:h-6 text-[#FFFFFF]" />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-muted"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Testimonials;
