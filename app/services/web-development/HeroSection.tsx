"use client";

import { Button } from "@/app/components/ui/button";
import Breadcrumb from "@/app/components/Breadcrumb";
import service6dt from "@/app/assets/service6dt.png";
import service6praana from "@/app/assets/service6praana.png";
import service6lux from "@/app/assets/service6lux.png";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [service6praana, service6lux, service6dt];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
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
            { label: "Web Development with AI-Powered Personalisation" },
          ]}
        />

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center mt-16">
          {/* Left Content */}
          <div className="w-full">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left"
              style={{
                background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                 WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
              }}
            >
              Web Development for Hospitals and Clinics
            </h1>

            <p className="text-md md:text-base text-[#818584] mb-0 lg:mb-8 leading-relaxed max-w-xl text-center lg:text-left lg:mx-0 mx-auto">
              End-to-end builds, delivered with an AI-assisted workflow.
            </p>

            {/* Button - Desktop only */}
            <div className="hidden lg:block">
              <Button
                size="lg"
                className="gap-2 font-normal text-sm"
                style={{
                  background: "#0D5C94",
                  color: "white",
                }}
              >
                Request a Website Audit
              </Button>
            </div>
          </div>

          {/* Right Animated Images */}
          <div className="relative h-[300px] lg:h-[500px] w-full">
            <AnimatePresence>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Healthcare website preview ${currentIndex + 1}`}
                  fill
                  className="object-contain rounded-2xl"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Button - Mobile only (centered, after images) */}
          <div className="lg:hidden flex justify-center w-full">
            <Button
              size="lg"
              className="gap-2 font-normal text-sm"
              style={{
                background: "#0D5C94",
                color: "white",
              }}
            >
              Request a Website Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
