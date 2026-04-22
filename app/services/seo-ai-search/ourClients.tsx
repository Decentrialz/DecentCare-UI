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

const OurClientsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-xl md:text-2xl font-bold text-center mb-14" style={{
          color: "#0D9488",
          paddingBottom: "0.15em",
          lineHeight: 1.15,
        }}>
          Our Clients
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center items-center max-w-6xl mx-auto">
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <img 
                src={logo.img.src} 
                alt={logo.name} 
                className="h-12 lg:h-16 w-auto object-contain opacity-100 hover:opacity-120 transition-opacity" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
