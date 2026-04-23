import Image from "next/image";
import { ArrowRight } from "lucide-react";
import vector1 from "@/app/assets/Vector1.svg";

const howWeWork = [
  { step: "01", title: "Audit and Direction", items: ["Brand voice", "gaps", "competitor scan", "quick wins"] },
  { step: "02", title: "Build the System", items: ["Pillars", "series templates", "approvals", "production plan"] },
  { step: "03", title: "Produce and Publish", items: ["Batch creation", "calendar execution", "daily monitoring"] },
  { step: "04", title: "Improve Monthly", items: ["Scale winners", "refresh topics", "optimise formats and series"] },
];

const HowWeWorkSection = () => (
  <section className="py-12 lg:py-28 bg-[#FBFCFD]">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-2xl font-bold text-primary mb-3" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>How We Work</h2>
      <p className="text-[#1F2020] mt-[-10px] mb-14">A proven 4-step process to transform your social media presence</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-18 max-w-[200px] md:max-w-5xl mx-auto">
        {howWeWork.map((step, i) => (
          <div key={i} className="relative">
            <div className="relative text-left rounded-2xl p-6 pt-10" style={{ backgroundColor: 'rgba(13, 92, 148, 0.06)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
              <div className="absolute -top-4 left-[-16] md:left-[-20] w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ background: "linear-gradient(135deg, #0D9488, #0D5C94)" }}>
                {step.step}
              </div>
              <h4 className="font-bold text-[#0D5C94] text-base mb-3">{step.title}</h4>
              <ul className="space-y-0 text-sm text-[#1F2020]">
                {step.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
            
            {/* Arrow between cards */}
            {i < 3 && (
              <>
                {/* Mobile vertical arrow */}
                <Image src={vector1} alt="" width={20} height={20} className="md:hidden mx-auto my-4 rotate-90" />
                {/* Desktop horizontal arrow */}
                <Image src={vector1} alt="" width={20} height={20} className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-12" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowWeWorkSection;
