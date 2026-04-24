import { Button } from "@/app/components/ui/button";
import Image from "next/image";
import service5hero from "@/app/assets/service5hero.png";
import Breadcrumb from "@/app/components/Breadcrumb";

const stats = [
  {
    value: "150",
    suffix: "+",
    label: "Hospitals Served across tier-1, 2 & 3 cities",
  },
  {
    value: "28",
    suffix: "%",
    label: "Average Revenue Uplift delivered per engagement",
  },
  {
    value: "22",
    suffix: "+",
    label: "Cities Covered nationwide",
  },
];

const HeroSection = () => {
  return (
    <>
      <section
        className="pt-32 pb-12 lg:pb-16"
        style={{
          background: "linear-gradient(to bottom, #EFF6FF 1%, #FFFFFF 100%)",
        }}
      >
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Business Strategy & Growth Consulting with AI-Driven Forecasting" },
            ]}
          />

          <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start mt-32">
            {/* Left Content */}
            <div>
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-center lg:text-left"
                style={{
                  background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                DecentCare<br />Strategy & Consultation
              </h1>

              <p className="text-sm md:text-base text-[#818584] mb-8 leading-relaxed max-w-xl text-center lg:text-left">
                DecentCare provides focused consulting across these three areas,
                helping healthcare organisations define the problem clearly and
                work toward structured resolution.
              </p>

              <div className="flex justify-center lg:justify-start">
                <Button
                  size="lg"
                  className="gap-2 font-normal text-sm"
                  style={{
                    background: "#0D5C94",
                    color: "white",
                  }}
                >
                  Book Free Strategy Call
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <Image
                src={service5hero}
                alt="Business Strategy Consultation"
                className="w-full h-auto rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
