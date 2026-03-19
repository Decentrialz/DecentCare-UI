"use client"
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import HeroBanner from "../about/HeroBanner";
import CTASection from "../about/CTASection";
import HeroServices from "../assets/HeroServices.svg";
import Service from "./service";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
       <HeroBanner 
        heroImage={HeroServices}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Services" }
        ]}
        title="Our Services"
        description="Integrated Services for Smarter Healthcare Growth."
        subtitle="Strategic capabilities designed for modern healthcare organizations."
        variant="centered"
      />
      <Service />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Services;