"use client"
import { useState } from "react";
import { ArrowLeft, ArrowRight, Star, ThumbsUp } from "lucide-react";
import Image from "next/image";
import quotes from "@/app/assets/Quotes.svg";

const testimonials = [
  {
    id: 1,
    name: "Prof. Dr. Snigdha Gowd",
    credentials: "Chairperson & CEO",
    hospital: "Dr. Gowds Dental Hospital, Hyderabad, Telangana",
    quote: "Managing patient journeys across multiple dental specialties used to be chaotic. With Care Journey CRM, every appointment, follow-up, and care step is tracked automatically. Nothing falls through the cracks anymore.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Rajashekar MR",
    credentials: "MBBS, MS, Founder & Chief Proctologist",
    hospital: "Chirag Global Hospital, Bangalore, Karnataka",
    quote: "Running a surgical hospital means managing complex care journeys for every patient. Care Journey CRM brought everything into one place. Our teams now coordinate faster and patients never fall through the cracks.",
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
        <div className="w-full mx-auto">
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
              className={`absolute left-0 -translate-x-2 lg:-translate-x-16 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors z-10 ${
                currentIndex === 0
                  ? 'bg-gray-200 cursor-not-allowed opacity-50'
                  : 'bg-[#0D9488] hover:bg-[#0D9488]'
              }`}
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-4 h-4 lg:w-6 lg:h-6 text-[#FFFFFF]" />
            </button>

            {/* Main Content - Two Column Layout */}
            <div className="w-full mx-auto overflow-hidden rounded-2xl shadow-lg">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left Section - Blue Background */}
                <div 
                  className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between text-white"
                  style={{ background: '#0D5C94'}}
                >
                  <div>
                    <p className="text-sm lg:text-base font-semibold">WHAT THEY SAY</p>
                    <p className="text-sm lg:text-base font-semibold mb-8">ABOUT US?</p>
                  </div>
                  
                  <div className="flex-1 flex items-center justify-start my-8">
                    <Image 
                      src={quotes} 
                      alt="Quotes" 
                      width={120} 
                      height={120} 
                      className="opacity-20"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-base lg:text-lg mb-2">{current.name}</h4>
                    <p className="text-xs lg:text-sm opacity-90 mb-1">{current.credentials}</p>
                    <p className="text-xs lg:text-sm">-{current.hospital}</p>
                  </div>
                </div>

                {/* Right Section - White Background with Quote */}
                <div className="lg:w-[55%] p-8 lg:p-10 bg-white flex flex-col justify-center items-center text-center">


                  {/* Quote Text */}
                  <p className="text-[#000000] leading-relaxed text-sm lg:text-base mb-6 max-w-[250px]">
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

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              disabled={currentIndex === testimonials.length - 1}
              className={`absolute right-0 translate-x-2 lg:translate-x-16 w-8 h-8 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-colors z-10 ${
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
