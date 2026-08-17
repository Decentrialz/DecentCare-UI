import Breadcrumb from "@/app/components/Breadcrumb";
import { Calendar, MapPin, Mail } from "lucide-react";

const TermsHero = () => {
  return (
    <section className="relative pt-12 lg:pt-18">
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(307.84deg, #0D9488 -4.55%, #0D5C94 100.49%)" }}
      >
        <div className="md:hidden pointer-events-none absolute inset-0 z-0">
          <div className="absolute -left-44 top-72 h-[420px] w-[420px] rounded-full border border-white/10" />
          <div className="absolute -right-36 top-56 h-[460px] w-[460px] rounded-full border border-white/10" />
        </div>

        <div className="hidden xl:block pointer-events-none absolute inset-0 z-0">
          <div className="absolute -bottom-40 left-10 h-[480px] w-[480px] rounded-full border border-white/10" />
          <div className="absolute left-[35%] top-4 h-[180px] w-[180px] rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-16 h-[420px] w-[420px] rounded-full border border-white/10" />
        </div>

        <div className="relative z-10 container mx-auto px-4 md:px-8 lg:px-16 max-w-[1440px] pt-10 pb-10 md:pt-12 md:pb-12">
          <div className="mb-8 md:mb-10 hidden md:block">
            <Breadcrumb
              items={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
              breadCrumbClass="bg-white/85 text-white border border-white/20"
            />
          </div>

          <div className="space-y-4 text-center md:text-left py-10 md:py-12 lg:py-16">
            <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold text-white leading-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Terms of Service
            </h1>

            <p className="text-white/90 text-[19px] md:text-base leading-relaxed max-w-[680px] mx-auto md:mx-0">
              Please read these terms carefully. By accessing or using the DecentCare website, you agree to be bound by the following Terms of Service.
            </p>

            <div className="flex flex-col items-center gap-2.5 pt-2 md:pt-4 md:flex-row md:flex-wrap md:items-start md:gap-3">
              <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 md:bg-white/12 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 md:px-3.5 md:py-2 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                <Calendar className="w-4 h-4" />
                <span className="text-[15px] md:text-sm">Last Modified: 22 January 2026</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 md:bg-white/12 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 md:px-3.5 md:py-2 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                <MapPin className="w-4 h-4" />
                <span className="text-[15px] md:text-sm">Hyderabad, Telangana, India</span>
              </div>

              <div className="flex items-center justify-center md:justify-start gap-2 bg-white/10 md:bg-white/12 backdrop-blur-sm rounded-xl md:rounded-lg px-4 py-2.5 md:px-3.5 md:py-2 text-white border border-white/20 min-h-11 md:min-h-0 w-full max-w-[292px] md:w-auto md:max-w-none">
                <Mail className="w-4 h-4" />
                <span className="text-[15px] md:text-sm">support@decentcare.ai</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsHero;
