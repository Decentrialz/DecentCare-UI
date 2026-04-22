import Breadcrumb from "@/app/components/Breadcrumb";
import { Button } from "@/app/components/ui/button";
import { CheckCircle2, MapPin, RefreshCw, Clock, Target, Zap, Shield, FileText, Calendar, Cloud, CircleCheck } from "lucide-react";
import Image from "next/image";
import seoHeroImage from "@/app/assets/seoHeroImage.png";

const heroFeatures = [
  { icon: CheckCircle2, text: "High-intent patient discovery" },
  { icon: MapPin, text: "Multi-location visibility" },
  { icon: Cloud, text: "AI-era search readiness" }
];

const trustFeatures = [
  { icon: Clock, title: "15+ years of healthcare marketing execution" },
  { icon: CircleCheck, title: "Healthcare-first SEO frameworks focused on patient intent and trust" },
  { icon: Zap, title: "AI-ready optimisation using AEO, LLMO, and AIO" },
  { icon: Shield, title: "Compliance-aware content practices that avoid misleading claims" }
];

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-28 pb-12 lg:pt-36 lg:pb-16" style={{ background: "linear-gradient(to bottom, #EFF6FF 1%, #FFFFFF 100%)" }}>
        <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "84rem" }}>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "SEO with AI Search Intelligence" }
            ]}
            breadCrumbClass="mb-10"
          />
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight" style={{
                background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
                Future-Proof Healthcare SEO: Dominate Google & AI Search
              </h1>
              
              <p className="text-sm text-[#475569] leading-relaxed">
                Capture high-intent patient searches across Google, AI answer engines, and healthcare discovery platforms
              </p>
              
              <p className="text-sm text-[#475569] leading-relaxed">
                DecentCare provides healthcare SEO as a growth system for hospitals, clinics, and healthcare brands where trust, accuracy, and outcomes matter. We combine modern SEO with AI-era optimisation so your services remain visible as search evolves.
              </p>
              
              <a href="/contact">
                <Button variant="default" size="lg" className="gap-2 mt-4 text-sm">
                  <Calendar className="w-5 h-5" />
                  Request a Free SEO Strategy Consultation
                </Button>
              </a>
              
              {/* Hero Features */}
              <div className="flex flex-wrap gap-6 pt-8">
                {heroFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-5 h-5  flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-[#0D9488]" />
                    </div>
                    <span className="text-xs text-[#4D5567]">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Image */}
            <div className="flex justify-center items-start -mt-12">
              <Image
                src={seoHeroImage}
                alt="SEO Performance Overview"
                className="rounded-2xl w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust Features Section */}
      <section className="py-7 bg-[#0D5C94]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto divide-x divide-white/20">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 px-6 first:pl-0 last:pr-0">
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-white leading-relaxed">{feature.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
