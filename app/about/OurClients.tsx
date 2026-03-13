
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import gutCare from "@/app/assets/gut  care.svg";
import dt from "@/app/assets/DT.png";
import CHirag from "@/app/assets/CHirag.png";
import Drgowds from "@/app/assets/Dr.Gowds.png";

const OurClients = () => {
  const logos = [
    { img: lux, name: "LUX Hospitals" },
    { img: vaidya, name: "Praana Vaidya" },
    { img: gutCare, name: "GutCare" },
    { img: Drgowds, name: "Dr. Gowds Dental" },
    { img: dt, name: "DecentTrialz" },
    { img: CHirag, name: "CHIRAD" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FBFCFD]">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-accent mb-4" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Our Clients</h2>
        <p className="text-muted-foreground mb-12 max-w-6xl mx-auto">
          DecentCare is trusted by healthcare providers who require reliable, intelligent systems for patient acquisition, journey management, and operational coordination. Our platform currently supports
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 justify-items-center items-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={logo.img.src} alt={logo.name} className="h-10 lg:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>

        <p className="text-sm text-muted-foreground mt-24 max-w-5xl mx-auto">
          Collectively, our platform has supported over 500 healthcare providers, generated ₹50 crore in revenue for our partners, and delivered an average ROI of 3.2× across campaigns and care operations.
        </p>
      </div>
    </section>
  );
};

export default OurClients;
