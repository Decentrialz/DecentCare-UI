import Image from "next/image";
import ourSrtory from "@/app/assets/ourStory.svg";

const OurStory = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Our Story Image */}
          <div className="flex justify-center">
            <Image src={ourSrtory} alt="Our Story" className="w-110 h-110 md:w-124 md:h-124 object-contain" />
          </div>

          {/* Story text */}
          <div className="space-y-5 max-w-xl mx-auto lg:mx-0">
            <h2
              className="text-4xl md:text-5xl font-bold text-accent leading-tight md:leading-[1.15]"
              style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}
            >
              Our Story
            </h2>
            <p className="text-[#818584] leading-relaxed">
              DecentCare was built through years of close, hands-on engagement with healthcare providers and a rigorous understanding of how care is delivered in real clinical environments.
            </p>
            <p className="text-[#818584] leading-relaxed">
              Across clinics and hospitals, care teams routinely depend on disconnected tools to manage patients, appointments, communication, and follow-ups. This fragmentation creates operational gaps, unnecessary manual effort, and critical breaks in the continuity of care — challenges that remain invisible until their consequences become difficult to reverse. At the same time, providers lacked a coherent, technology-driven system to attract, engage, and retain patients in an increasingly competitive landscape.
            </p>
            <p className="text-[#818584] leading-relaxed">
              DecentCare was created to address both dimensions, treating the patient journey as a unified whole, and delivering the intelligence, automation, and strategic infrastructure that healthcare providers need to grow with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
