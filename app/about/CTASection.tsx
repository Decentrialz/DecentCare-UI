"use client" 
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { ContactFormFields } from "@/app/contact/ContactForm";
import { useState, useEffect } from "react";
import Link from "next/link";

const CTASection = ({ heading, description, subDescription }: { heading: string, description: string, subDescription?: string }) => {
  const [showModal, setShowModal] = useState(false);
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showModal]);
  return (
    <section className="py-16 lg:py-20 text-white" style={{ background: 'linear-gradient(135deg, #0D5C94, #0D9488)' }}>
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
        <p className="text-[#FFFFFF] mb-8">{description}</p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <Button
            variant="outline"
            className="border-primary-foreground/30 text-[#1F2020] bg-[#ffffff] hover:bg-primary-foreground/10 gap-2"
            style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)', cursor: 'pointer' }}
            onClick={() => setShowModal(true)}
          >
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-sm text-[#FFFFFF] mb-2">
          {subDescription}
        </p>
      </div>
         {/* Modal for ContactFormFields */}
                      {showModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
                          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative text-[#1F2020]">
                            <button
                              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl font-bold"
                              onClick={() => setShowModal(false)}
                              aria-label="Close"
                            >
                              ×
                            </button>
                            <ContactFormFields 
                              heading="Book a Free Demo"
                              subheading="Submit your details and a member of the DecentCare team will be in touch."
                            />
                          </div>
                        </div>
                      )}
    </section>
  );
};

export default CTASection;
