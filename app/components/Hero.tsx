'use client';
import { Button } from "@/app/components/ui/button";
import { ContactFormFields } from "@/app/contact/ContactForm";
import { ArrowRight, Play, Users, TrendingUp, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import HeroH1 from "@/app/assets/HeroH1.svg";
import HeroH2 from "@/app/assets/HeroH2.svg";
import HeroH3 from "@/app/assets/HeroH3.svg";
import HeroH4 from "@/app/assets/HeroH4.svg";
import Image from "next/image";
import Link from "next/link";



const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);
  const heroImages = [HeroH1, HeroH2, HeroH3, HeroH4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 hero-gradient overflow-hidden w-full">
    <div className="absolute rounded-full" style={{ right: '-5%', top: '40%', width: '500px', height: '500px', backgroundColor: 'rgba(60, 131, 246, 0.1)', opacity: '1', filter: 'blur(64px)' }} />
      <div className="absolute rounded-full" style={{ left: '-5%', top: '43%', width: '400px', height: '400px', backgroundColor: 'rgba(42, 157, 144, 0.1)', opacity: '1', filter: 'blur(64px)' }} />
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-32 lg:pb-40">
          {/* Left Content */}
          <div className="space-y-8 max-w-lg mx-auto lg:mx-0">
            {/* Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] rounded-full mx-auto lg:mx-0 w-fit">
              <Sparkles className="w-4 h-4 text-[#0D5C94]" />
              <span className="text-xs lg:text-sm font-medium text-primary">AI-Powered Healthcare Marketing Platform</span>
            </div>

            {/* Mobile Video - Show on mobile only */}
            <div className="lg:hidden relative flex items-center justify-center">
              <div className="relative z-10 w-full max-w-xs overflow-hidden rounded-full aspect-square mx-auto">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover scale-102"
                  style={{ objectPosition: 'center center' }}
                >
                  <source src="/hero-gradient-circle-vid.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-4 text-center lg:text-left">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] leading-tight">
                The AI-Powered Growth<br className="lg:hidden" /> Engine for<br className="lg:hidden" />{" "}
                <span className="text-[#0D5C94]">Hospitals & Clinics</span>
              </h1>
              <p className="text-md text-[#818584] max-w-xl">
                DecentCare combines AI-powered patient acquisition, Digital Twin technology, and empathetic automation to help healthcare providers attract more patients and scale sustainably.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                className="h-[45px] px-6 py-[10px] rounded-lg bg-[#0D5C94] text-white flex items-center gap-[10px] shadow-[0_4px_20px_-2px_rgba(60,131,246,0.08)] hover:bg-[#0B4F7F] transition-all"
                style={{ cursor: 'pointer' }}
                onClick={() => setShowModal(true)}
              >
                Get Your Growth Strategy
                <ArrowRight className="w-5 h-5" />
              </Button>

           {/* <Button
  variant="outline"
  className="
    h-[45px]
    px-16 lg:px-6 py-[10px]
    rounded-lg
    bg-white
    border
    border-[rgba(60,131,246,0.10)]
    flex items-center gap-[10px]
    shadow-[0_4px_20px_-2px_rgba(60,131,246,0.08)]
    hover:bg-[#F5FAFF]
    transition-all
  "
>
  <Play className="w-5 h-5" />
  Watch Demo
</Button> */}

            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-10 lg:gap-16 pt-4 justify-center lg:justify-start">
              <div className="text-center lg:text-left max-w-[90px] lg:max-w-none">
                <div className="text-3xl font-bold text-[#0D9488]">500+</div>
                <div className="text-sm text-[#5E6160]">Healthcare Providers</div>
              </div>
              <div className="text-center lg:text-left max-w-[90px] lg:max-w-none">
                <div className="text-3xl font-bold text-[#0D5C94]">₹100Cr+</div>
                <div className="text-sm text-[#5E6160]">Revenue Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-[#0D9488]">3.2x</div>
                <div className="text-sm text-[#5E6160]">Average ROI</div>
              </div>
            </div>

            <p className="text-sm text-[#5E6160] mt-[-15px] text-center lg:text-left">
              Trusted by leading healthcare providers across India
            </p>
          </div>

          {/* Right Content - Hero Video & Dashboard */}
          <div className="relative hidden lg:flex items-center justify-center -ml-16 lg:-ml-24">
            {/* Main Video */}
            <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-full aspect-square">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover scale-102"
                style={{ objectPosition: 'center center' }}
              >
                <source src="/hero-gradient-circle-vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
              {/* Modal for ContactFormFields */}
          </div>
        </div>
        {/* Modal for ContactFormFields */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                onClick={() => setShowModal(false)}
                aria-label="Close"
              >
                ×
              </button>
              <ContactFormFields 
                heading="Book a Free Demo"
                subheading="Submit your details and a member of the DecentCare team will be in touch."
              />
            </div>
          </div>
        )}
        <div className="relative -mt-24 lg:-mt-12">
          <div className="w-full mx-auto">
            <div className="max-w-4xl mx-auto relative h-[250px] lg:h-[500px]">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                  style={{
                    opacity: currentImageIndex === index ? 1 : 0,
                    zIndex: currentImageIndex === index ? 1 : 0,
                  }}
                >
                  <Image
                    src={image}
                    alt={`Hero showcase ${index + 1}`}
                    fill
                    className="object-contain"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
