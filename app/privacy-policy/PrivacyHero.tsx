import Breadcrumb from "@/app/components/Breadcrumb";
import { Shield, Calendar, MapPin, Mail } from "lucide-react";

const PrivacyHero = () => {
  return (
    <section className="relative pt-12 lg:pt-18">
      {/* Gradient Background */}
      <div 
        className="relative overflow-hidden"
        style={{ background: 'linear-gradient(307.84deg, #0D9488 -4.55%, #0D5C94 100.49%)' }}
      >
        {/* Decorative Background Circles */}
        <div className="md:hidden pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-44 top-80 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -right-36 top-56 h-[460px] w-[460px] rounded-full border border-white/10" />
        </div>

        <div className="hidden xl:block pointer-events-none absolute inset-0 z-0">
          <div className="absolute -bottom-60 left-10 h-[500px] w-[500px] rounded-full border border-white/10" />
          <div className="absolute left-[28%] top-[6%] h-[280px] w-[280px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-60 h-[700px] w-[700px] rounded-full border border-white/10" />
        </div>
        
        {/* Breadcrumb */}
        

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 py-16 md:pt-12 md:pb-12 max-w-[1440px]">
          <div className="mb-8 md:mb-10 hidden md:block">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Privacy Policy" }
            ]} />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 lg:gap-4 items-start">
            
            {/* Left Content - Main Hero Text */}
            <div className="lg:col-span-4 space-y-4 text-center md:text-left">
              <h1 className="text-3xl leading-[1.15] md:text-4xl lg:text-5xl font-bold text-white">
                DecentCare Privacy Policy
              </h1>
              
              <p className="text-white/90 text-[19px] md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                We are committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data when you visit our website.
              </p>

              {/* Meta Information */}
              <div className="flex flex-col items-center gap-2.5 pt-2 md:pt-4 md:flex-row md:flex-wrap md:items-start md:gap-4">
                <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                  <Calendar className="w-4 h-4" />
                  <span className="text-[15px] md:text-sm">Last Modified: 22 January 2026</span>
                </div>
                
                <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                  <MapPin className="w-4 h-4" />
                  <span className="text-[15px] md:text-sm">Hyderabad, Telangana, India</span>
                </div>

                <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                  <Mail className="w-4 h-4" />
                  <span className="text-[15px] md:text-sm">support@decentcare.ai</span>
                </div>
              </div>
            </div>

            {/* Right Content - Data Rights Card */}
            <div className="lg:col-span-3">
              <div className="bg-white/7 md:bg-white/5 backdrop-blur-lg rounded-[28px] md:rounded-3xl p-8 border border-white/20 md:border-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] md:shadow-none">
                {/* Shield Icon - Top Left */}
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#0D9488] rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(13,148,136,0.28)] md:shadow-none">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                </div>
                
                {/* Content - Left Aligned */}
                <div className="space-y-3">
                  <p className="text-white/60 text-[13px] md:text-xs font-semibold md:font-medium tracking-[0.14em] md:tracking-[0.1em] uppercase">
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
                        className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-full md:rounded-lg text-white text-sm md:text-xs font-normal border border-white/20"
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
