import Image from "next/image";
import { ShieldPlus } from "lucide-react";
import luxHospital from "@/app/assets/luxHospital.png";
import pranaVaidya from "@/app/assets/pranaVaidya.png";
import gutCare from "@/app/assets/gutCare.png";
import gowdsHospital from "@/app/assets/gowdsHospital.png";
import chiragHospital from "@/app/assets/chiragHospital.png";
import Container from "./Container";

const logos = [
  { src: luxHospital, alt: "LUX Hospitals" },
  { src: pranaVaidya, alt: "Praana Vaidya" },
  { src: gutCare, alt: "GutCare" },
  { src: gowdsHospital, alt: "Dr. Gowds Dental" },
  { src: chiragHospital, alt: "CHIRAG" },
];

const TrustBar = () => {
  return (
    <section className="relative z-10 scroll-mt-24 -mt-2 md:-mt-3 lg:-mt-2">
      <Container className="py-5 md:py-6">
        <div
          className="flex flex-col items-center rounded-3xl border border-white/40 bg-white/25 px-6 py-6 shadow-[0_20px_60px_rgba(15,63,160,0.12)] lg:flex-row lg:justify-between lg:gap-40 lg:px-10"
          style={{ backdropFilter: "blur(40px)", WebkitBackdropFilter: "blur(40px)" }}
        >
          <div className="flex shrink-0 items-center gap-2 text-center lg:text-left">
            <ShieldPlus className="h-6 w-6 text-home-success" />
            <p className="text-sm leading-snug font-medium text-[#5E6160]">
              Used by hospitals
              <br className="hidden lg:block" /> and clinics across India
            </p>
          </div>


          <div className="grid w-full grid-cols-3 items-center gap-x-4 gap-y-5 sm:grid-cols-5 lg:w-auto lg:flex-1 lg:gap-x-6">
            {logos.map(({ src, alt }) => (
              <div key={alt} className="flex items-center justify-center lg:border-r lg:border-home-border lg:last:border-r-0">
                <Image
                  src={src}
                  alt={alt}
                  className="h-6 w-auto object-contain  transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;
