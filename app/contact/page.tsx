import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/Footer";
import MobileStickyButtons from "@/app/components/MobileStickyButtons";
import HeroBanner from "../about/HeroBanner";
import HeroContact from "../assets/HeroContact.svg";
import HelpOptions from "./HelpOptions";
import ContactForm from "./ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
       <HeroBanner 
        heroImage={HeroContact}
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Contact Us" }
        ]}
        title="Contact Us"
        description="Whether you’re evaluating DecentCare for your practice, need help with the software, or have a general question, our team is here to help. Share a few details and we’ll connect you with the right person."
        // subtitle="We are here to help you with your healthcare needs."
        // variant="centered"
      />
      <HelpOptions />
      <ContactForm />
      <MobileStickyButtons />
      <Footer />
    </div>
  );
};

export default ContactPage;