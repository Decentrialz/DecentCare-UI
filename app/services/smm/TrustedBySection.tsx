
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import gutCare from "@/app/assets/gut  care.svg";
import dt from "@/app/assets/DT.png";
import CHirag from "@/app/assets/CHirag.png";
import Drgowds from "@/app/assets/Dr.Gowds.png";

  const logos = [
    { img: lux, name: "LUX Hospitals" },
    { img: vaidya, name: "Praana Vaidya" },
    { img: gutCare, name: "GutCare" },
    { img: Drgowds, name: "Dr. Gowds Dental" },
    { img: dt, name: "DecentTrialz" },
    { img: CHirag, name: "CHIRAD" },
  ];

const TrustedBySection = () => (
  <section className="py-16 bg-[#FBFCFD]">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h3 className="text-2xl font-bold text-primary-foreground mb-8" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
        Trusted by leading healthcare institutions
      </h3>
     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 justify-items-center items-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={logo.img.src} alt={logo.name} className="h-10 lg:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
    </div>
  </section>
);

export default TrustedBySection;
