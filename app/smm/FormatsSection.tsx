import Image from "next/image";
import smmSocialIcons from "@/app/assets/smmSocialIcons.svg";
import arrow1 from "@/app/assets/arrow1.svg";

const contentFormats = [
  "Reels / Shorts", "Explainers", "Awareness Campaigns",
  "Carousels", "Patient Education", "Trust and Credibility",
  "Stories", "Aftercare and Recovery", "FAQs / Q and A",
  "Doctor-Led Videos", "Myth vs Fact", "Clinic / Hospital Updates",
];

const FormatsSection = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div className="w-full">
          <h2 className="text-2xl md:text-3xl font-extrabold text-primary mb-6" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
            Every Format. Every Platform.Built for Healthcare.
          </h2>
          {/* <h3 className="text-lg font-semibold text-foreground mb-4">Content Formats (Healthcare)</h3> */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {contentFormats.map((f, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#5E6160]">
                <Image src={arrow1} alt="" width={20} height={20} className="shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={smmSocialIcons}
            alt="Social media platforms"
            className="rounded-2xl object-cover"
            style={{ maxHeight: 350 }}
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default FormatsSection;
