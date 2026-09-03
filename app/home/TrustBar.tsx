import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import gutCare from "@/app/assets/gut  care.svg";
import drGowds from "@/app/assets/Dr.Gowds.png";
import dt from "@/app/assets/DT.png";
import chirag from "@/app/assets/CHirag.png";
import Container from "./Container";

const logos = [
  { src: lux, alt: "LUX Hospitals" },
  { src: vaidya, alt: "Praana Vaidya" },
  { src: gutCare, alt: "GutCare" },
  { src: drGowds, alt: "Dr. Gowds Dental" },
  { src: dt, alt: "DecentTrialz" },
  { src: chirag, alt: "CHIRAG" },
];

const TrustBar = () => {
  return (
    <section className="relative border-y border-home-border bg-white/80 backdrop-blur">
      <Container className="py-5 md:py-6">
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-10">
          <div className="flex shrink-0 items-center gap-2 text-center lg:text-left">
            <ShieldCheck className="h-5 w-5 text-home-success" />
            <p className="text-xs leading-snug font-medium text-home-muted">
              Used by hospitals
              <br className="hidden lg:block" /> and clinics across India
            </p>
          </div>

          <div className="h-px w-full bg-home-border lg:h-10 lg:w-px" />

          <div className="grid w-full grid-cols-3 items-center gap-x-6 gap-y-5 sm:grid-cols-6 lg:gap-x-10">
            {logos.map(({ src, alt }) => (
              <div key={alt} className="flex items-center justify-center">
                <Image
                  src={src}
                  alt={alt}
                  className="h-6 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 md:h-8"
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
