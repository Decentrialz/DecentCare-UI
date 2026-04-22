import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import servicesHero3 from "@/app/assets/ServicesHero3.png";
import Breadcrumb from "@/app/components/Breadcrumb";

const stats = [
  {
    value: "15",
    suffix: "+",
    title: "Years",
    description: "Healthcare Marketing Mastery",
  },
  {
    value: "3,000",
    suffix: "+",
    title: "Campaigns Managed",
    description: "Search, Social, Video & Retargeting",
  },
  {
    value: "40",
    suffix: "+",
    title: "Service Lines",
    description: "From Elective Surgery to Primary Care",
  },
  {
    value: "1M",
    suffix: "+",
    title: "Patient Intent Interactions Influenced",
    description: "Driven via Calls, WhatsApp, and Form Enquiries",
  },
  {
    value: "30%",
    suffix: "+",
    title: "Improvement",
    description: "Lower CPL, Higher Patient Quality",
  },
];

const HeroSection = () => {
  return (
    <>
      <section className="pt-32 pb-12 lg:pb-16" style={{ background: "linear-gradient(to bottom, #EFF6FF 1%, #FFFFFF 100%)" }}>
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Paid Advertising with AI-Driven Optimization" },
            ]}
          />
          
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 items-center mt-8">
            {/* Left Content */}
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{
                background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                AI-Powered Paid Marketing For Healthcare
              </h1>

              <p className="text-sm md:text-base text-[#818584] mb-8 leading-relaxed max-w-xl">
                Scale your patient volume with AI-powered precision. We manage your strategy, campaigns, and reporting to drive predictable growth.
              </p>

              <Button
                size="lg"
                className="gap-2 font-normal text-sm"
                style={{
                  background: "#0D5C94",
                  color: "white",
                }}
              >
                Get A Free Paid Marketing Audit <ArrowRight className="w-4 h-4" />
              </Button>
            </div>

            {/* Right Image */}
            <div className="relative -mr-8 lg:-mr-16">
              <Image
                src={servicesHero3}
                alt="AI-Powered Paid Marketing Dashboard"
                className="w-[120%] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-4 lg:py-8">
        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-5 max-w-full">
            {stats.map((stat, index) => (
              <div key={index} className="py-6 relative px-6 md:px-8">
                <div className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "#0D5C94" }}>
                  {stat.value}<span className="text-2xl">{stat.suffix}</span>
                </div>
                <div className="text-[13px] font-normal text-[#64748B] mb-1">{stat.title}</div>
                <p className="text-[11px] text-[#334155]">{stat.description}</p>
                {index < stats.length - 1 && (
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-16 w-px bg-[#E5E7EB]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
