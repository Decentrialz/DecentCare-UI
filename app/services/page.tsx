import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
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
      <CTASection heading="Learn More About DecentCare" description="If you are exploring ways to improve patient acquisition, care journey management, or the operational effectiveness of your healthcare practice, we would welcome the opportunity to connect." subDescription="Designed for clinics, hospitals, and healthcare teams managing real-world care workflows."/>
      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default Services;