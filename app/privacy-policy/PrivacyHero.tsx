import Breadcrumb from "@/app/components/Breadcrumb";
import { Shield, Calendar, MapPin, Mail } from "lucide-react";

const PrivacyHero = () => {
  return (
    <section className="relative pt-12 lg:pt-18">
      {/* Gradient Background */}
      <div 
        className="relative min-h-[600px] md:min-h-[650px] overflow-hidden"
        style={{ background: 'linear-gradient(307.84deg, #0D9488 -4.55%, #0D5C94 100.49%)' }}
      >
        {/* Decorative Background Circles */}
        <div className="hidden xl:block pointer-events-none absolute inset-0 z-0">
          <div className="absolute -bottom-28 -left-20 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute left-[28%] top-[6%] h-[280px] w-[280px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-60 h-[700px] w-[700px] rounded-full border border-white/10" />
        </div>
        
        {/* Breadcrumb */}
        

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 min-h-[600px] md:min-h-[650px] pt-24 md:pt-40 pb-12 max-w-[1440px]">
        <div className="absolute top-10 left-4 md:left-8 lg:left-16 z-20">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy" }
          ]} />
        </div>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-8 lg:gap-4 items-start">
            
            {/* Left Content - Main Hero Text */}
            <div className="lg:col-span-4 space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                DecentCare Privacy Policy
              </h1>
              
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-2xl">
                We are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data when you visit our website.
              </p>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white border border-white/20">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Last Modified: 22 January 2026</span>
                </div>
                
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white border border-white/20">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Hyderabad, Telangana, India</span>
                </div>
              </div>

              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white border border-white/20 w-fit">
                <Mail className="w-4 h-4" />
                <span className="text-sm">support@decentcare.ai</span>
              </div>
            </div>

            {/* Right Content - Data Rights Card */}
            <div className="lg:col-span-3">
              <div className="bg-white/5 from-teal-600/30 to-teal-700/30 backdrop-blur-lg rounded-3xl p-8 border border-white/15">
                {/* Shield Icon - Top Left */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0D9488] backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content - Left Aligned */}
                <div className="space-y-3">
                  <p className="text-white/60 text-xs font-medium tracking-[0.1em] uppercase">
                    Your Data Rights
                  </p>
                  
                  <h3 className="text-2xl font-bold text-white leading-tight">
                    Protected under DPDPA
                  </h3>
                  
                  <p className="text-white/70 text-sm leading-relaxed pb-3">
                    India&apos;s Digital Personal Data Protection Act, 2023
                  </p>
                  
                  {/* Rights Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {['Access', 'Correction', 'Erasure', 'Consent', 'Grievance'].map((right) => (
                      <span 
                        key={right}
                        className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-lg text-white text-xs font-normal border border-white/20"
                      >
                        {right}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyHero;
