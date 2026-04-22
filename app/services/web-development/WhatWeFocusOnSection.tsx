import { Hospital, Phone, Smartphone, Zap, Lock, BarChart3, ClipboardClock, FastForward } from "lucide-react";

const features = [
  {
    icon: Hospital,
    title: "Clear structure so patients reach the right specialty, doctor, or branch quickly.",
    description:
      "Every page type and navigation pattern is designed around how real patients seek care, not generic website conventions.",
  },
  {
    icon: ClipboardClock,
    title: "Appointment and enquiry journeys built around actions.",
    description:
      "Call, WhatsApp, form, booking, and directions — all routed through deliberate, low-friction paths on every relevant page.",
  },
  {
    icon: Smartphone,
    title: "Mobile-first experience focused on real browsing and enquiry behavior.",
    description:
      "Designed for the way patients actually use their phones: thumb-friendly, fast-loading, action-forward.",
  },
  {
    icon: FastForward,
    title: "Fast, responsive interaction across navigation, forms, and key pages.",
    description:
      "Performance is treated as a functional requirement, not an afterthought. Every transition and input responds instantly.",
  },
  {
    icon: Lock,
    title: "Secure form handling for responsible data capture.",
    description:
      "Patient information is treated with appropriate care, validated, encrypted, and routed only through approved channels.",
  },
  {
    icon: BarChart3,
    title: "Measurement is tied to outcomes so performance is tracked through enquiries and bookings.",
    description:
      "Analytics are configured around real conversion actions, not just traffic, so you know what's actually working.",
  },
];

const WhatWeFocusOnSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#0D5C94]/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold"
              style={{ color: "#0D9488" }}
            >
              What we focus on
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 lg:p-8 border border-[#E2E8F0] hover:shadow-lg transition-shadow"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#E8F3FB" }}
                >
                  <feature.icon className="w-6 h-6" style={{ color: "#0D9488" }} />
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-[#0F172A] mb-3 leading-snug">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#64748B] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeFocusOnSection;
