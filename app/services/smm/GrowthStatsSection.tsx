import Image from "next/image";
import { TrendingUp } from "lucide-react";
import smmPhoneMockup from "@/app/assets/smmPhone.svg";
import phoneBg from "@/app/assets/phoneBg.svg";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "15+ years", label: "In healthcare marketing" },
  { value: "2M+", label: "Organic impressions generated" },
  { value: "500K+", label: "Organic video views generated" },
  { value: "100K+", label: "Followers and subscribers managed across clients" },
];

const GrowthStatsSection = () => (
  <section className="py-14 lg:py-28 bg-background relative">
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={phoneBg}
        alt="Background pattern"
        fill
        className="object-cover"
        style={{ objectPosition: "center" }}
      />
    </div>
    <div className="container mx-auto px-4 lg:px-8 relative z-10">
      <h2 className="text-2xl font-extrabold text-primary text-center mb-8 lg:mb-16 max-w-3xl mx-auto break-words" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
        Social Media Growth You Can Measure
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 items-center max-w-5xl mx-auto">
        {/* Left stats */}
        <div className="space-y-4 lg:space-y-6 w-full lg:max-w-[250px] lg:mx-auto">
          {stats.slice(0, 2).map((stat, i) => (
            <div key={i} className="rounded-2xl p-4 lg:p-6 space-y-2 w-full" style={{ backgroundColor: 'rgba(13, 92, 148, 0.06)', border: '1px solid rgba(255, 255, 255, 0.4)', minHeight: '160px', display: 'flex', flexDirection: 'column' }}>
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}>
                <TrendingUp className="w-5 h-5 text-[#FFFFFF]" />
              </div>
              <p className="text-xl lg:text-3xl font-bold text-[#1F2020]">{stat.value}</p>
              <p className="text-xs lg:text-base text-[#1F2020] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
        {/* Center phone */}
        <div className="hidden lg:flex justify-center">
          <Image
            src={smmPhoneMockup}
            alt="Healthcare social media marketing on phone"
            style={{ maxHeight: 420 }}
            priority
          />
        </div>
        {/* Right stats */}
        <div className="space-y-4 lg:space-y-6 w-full lg:max-w-[250px] lg:mx-auto">
          {stats.slice(2).map((stat, i) => (
            <div key={i} className="rounded-2xl p-4 lg:p-6 space-y-2 w-full" style={{ backgroundColor: 'rgba(13, 92, 148, 0.06)', border: '1px solid rgba(255, 255, 255, 0.4)', minHeight: '160px', display: 'flex', flexDirection: 'column' }}>
              <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}>
                <TrendingUp className="w-5 h-5 text-[#FFFFFF]" />
              </div>
              <p className="text-xl lg:text-3xl font-bold text-[#1F2020]">{stat.value}</p>
              <p className="text-xs lg:text-base text-[#1F2020] leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default GrowthStatsSection;
