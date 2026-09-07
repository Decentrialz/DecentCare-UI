"use client";

import { ContactFormFields } from "@/app/contact/ContactForm";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const DemoModal = ({ onClose }: { onClose: () => void }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/10 p-4 backdrop-blur-sm">
      <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-lg overflow-y-auto rounded-2xl bg-white p-6 text-[#1F2020] shadow-xl">
        <button
          className="absolute right-4 top-4 text-xl font-bold text-gray-500 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>
        <ContactFormFields
          heading="Book a Free Demo"
          subheading="Submit your details and a member of the DecentCare team will be in touch."
        />
      </div>
    </div>,
    document.body,
  );
};

export default DemoModal;