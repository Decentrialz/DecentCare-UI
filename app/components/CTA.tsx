
"use client"
import { ArrowRight, Play, Calendar, FileCheck, Map, Clock, Zap, TrendingUp, Sparkle, Sparkles, CircleCheck, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import teamImage from "@/app/assets/CTAImage.png";
import { Button } from "./ui/button";
import { ContactFormFields } from "@/app/contact/ContactForm";
import { useState, useEffect } from "react";
import Link from "next/link";


const CTA = () => {
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
  return (
    <section className="py-12 lg:py-20 bg-background relative">
        <svg width="0" height="0" style={{ position: 'absolute' }}>
          <defs>
            <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#0D9488', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#0D5C94', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute rounded-full" style={{ left: '0%', top: '10%', width: '600px', height: '600px', backgroundColor: 'rgba(60, 131, 246, 0.1)', opacity: '0.7', filter: 'blur(64px)' }} />
       <div className="absolute rounded-full" style={{ right: '2%', top: '18%', width: '600px', height: '600px', backgroundColor: 'rgba(42, 157, 144, 0.1)', opacity: '0.7', filter: 'blur(64px)', pointerEvents:'none' }} />
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="w-full max-w-[462px] h-[385px] lg:h-[477px] mx-auto xl:ml-[20%]">
            <Image
              src={teamImage}
              alt="Healthcare team"
              width={462}
              height={477}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6 flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
              <Zap className="w-4 h-4 text-[#0D5C94]" />
              <span className="text-sm font-medium text-primary">Ready to Scale?</span>
            </div>

            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                Start Growing Your<br className="lg:hidden" /> Practice{" "}
                <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Today</span>
              </h2>
              <p className="text-base lg:text-base text-[#818584]">
                Join 500+ healthcare providers who've transformed their growth with DecentCare's AI-powered platform.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>500+</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Healthcare Providers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹100Cr+</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-accent" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3.2x</div>
                <div className="text-xs lg:text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2A9D90]/10 flex items-center justify-center">
                  <Clock className="w-4 h-4" style={{ stroke: 'url(#icon-gradient)' }}/>
                </div>
                30-min strategy call
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2A9D90]/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4" style={{ stroke: 'url(#icon-gradient)' }}/>
                </div>
                Free growth audit
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#2A9D90]/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4" style={{ stroke: 'url(#icon-gradient)' }}/>
                </div>
                Custom roadmap
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* Only keep modal-opening button */}
                                <Button
                                  size="lg"
                                  className="gap-2 bg-[#0D5C94]"
                                  style={{ cursor: "pointer" }}
                                  onClick={() => setShowModal(true)}
                                >
                                  Book Free Strategy Call
                                  <ArrowRight className="w-5 h-5" />
                                </Button>
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
                {/* <Button variant="outline" size="lg" className="gap-2 text-[#5E6160] px-18 lg:px-6" style={{cursor:'pointer'}}>
                  <Play className="w-5 h-5" />
                  Talk to Sales
                </Button> */}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground justify-center lg:justify-start">
              <CircleCheckBig className="w-4 h-4 text-accent" />
              24/7 Support
            </div>

            <p className="text-sm text-[#5E6160] text-center lg:text-left">
              No pressure. No obligation. Just a conversation about your growth goals.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CTA;
