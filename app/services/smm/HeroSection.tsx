import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Breadcrumb from "@/app/components/Breadcrumb";
import arrow from "@/app/assets/arrow.svg";
import love from  "@/app/assets/love.svg";

const HeroSection = () => (
  <section className="pt-28 pb-06 lg:pt-36 lg:pb-12" style={{ background: "linear-gradient(to bottom, #EFF6FF 1%, #FFFFFF 100%)" }}>
    <div className="container mx-auto px-4 lg:px-8" style={{ maxWidth: "84rem" }}>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SMM" }
        ]}
        breadCrumbClass="mb-10"
      />
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 relative">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight text-center lg:text-left" style={{
                background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
            AI Healthcare Social Media Marketing
          </h1>
          <p className="text-base text-[#818584] max-w-xl relative text-center lg:text-left mx-auto lg:mx-0">
            Strategy, content, community,
            AI-assisted delivery managed by an in-house team with 15+ years in healthcare marketing.
          </p>
          
          {/* Mobile Video - Show only on mobile */}
          <div className="lg:hidden relative">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-2xl w-full"
              style={{ width: "100%", height: "auto", paddingBottom:'10px' }}
            >
              <source src="/SMMVideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex justify-center lg:justify-start">
            <a href="/contact">
              <Button variant="default" size="md" className="gap-2 mt-2">
                Book a Social Audit
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </div>
          {/* Heart icon floating near heading */}
          <Image src={love} alt="Heart icon" width={54} height={40} className="absolute left-[600px] top-[0px] z-10 hidden lg:block" />
          <Image src={arrow} alt="Arrow icon" width={54} height={40} className="absolute left-[500px] top-[250px] z-10 hidden lg:block" />
        </div>
        <div className="relative hidden lg:block">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="rounded-2xl w-full"
            style={{ width: "100%", height: "auto", paddingBottom:'10px' }}
          >
            <source src="/SMMVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
