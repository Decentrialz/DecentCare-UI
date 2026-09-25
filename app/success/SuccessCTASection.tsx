"use client"
import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";
import { ContactFormFields } from "@/app/contact/ContactForm";
import { useState, useEffect } from "react";

const SuccessCTASection = () => {
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
    <section className="py-8 md:py-20 bg-[#FFFFFF]/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-sm">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Card - Ready to Transform */}
            <div className="bg-white p-10">
              <h3 className="text-2xl md:text-4xl font-bold text-[#0D5C94] mb-6 text-center md:text-left">
                Ready to Transform Your Patient Care Journey?
              </h3>
              <p className="text-[#737B8C] text-base leading-relaxed">
                Join 50+ healthcare providers who have revolutionized their operations with DecentCare. See how we can help your clinic or hospital achieve similar results.
              </p>
            </div>

            {/* Right Card - Have Questions */}
            <div
              className="p-10 flex flex-col justify-center items-center h-full"
              style={{ background: 'linear-gradient(135deg, rgba(13, 148, 136, 0.05) 0%, rgba(13, 92, 148, 0.05) 100%)' }}
            >
              <div className="w-full max-w-md flex flex-col items-center">
                <div className="flex items-start justify-between mb-4 mt-10 w-full">
                  <h4 className="font-semibold text-[#1B2232] text-lg">Have Questions?</h4>
                </div>
                <p className="text-sm text-[#737B8C] w-full">
                  Our team is ready to show you how DecentCare can work for your specific needs.
                </p>
                <a className="mt-6 w-full">
                  <Button
                    className="w-full gap-2 h-[45px] bg-[#0D5C94] hover:bg-[#0B4F7F] text-white rounded-lg"
                    onClick={() => setShowModal(true)}
                  >
                    Let's Connect <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Modal for ContactFormFields */}
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl p-6 max-w-lg w-full relative">
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
      </div>
    </section>
  );
};

export default SuccessCTASection;
