import { Phone } from "lucide-react";

interface SharedLegalContactSectionProps {
  id?: string;
  className?: string;
  sectionNumber?: number;
  eyebrow?: string;
  heading?: string;
  description1?: string;
  description2?: string;
}

const SharedLegalContactSection = ({
  id = "contact-us",
  className = "",
  sectionNumber = 9,
  eyebrow = "GET IN TOUCH",
  heading = "Contact Us",
  description1 = "If you have questions or requests about this Privacy Policy or our data practices, contact:",
  description2 = "We're here to help with any privacy questions or data requests you may have. Reach out anytime.",
}: SharedLegalContactSectionProps) => {
  return (
    <div id={id} className={`scroll-mt-24 mb-16 md:mb-24 ${className}`}>
      <div className="mb-8 flex items-start gap-4">
        <span className="mt-0.5 flex items-center justify-center w-10 h-10 text-white rounded-xl text-base font-bold shadow-[0_8px_20px_rgba(13,148,136,0.32)] bg-gradient-to-r from-[#0D9488] to-[#14B8A6]">{sectionNumber}</span>
        <div>
          <p className="text-[11px] font-semibold text-secondary-green tracking-[0.14em] uppercase mb-1">{eyebrow}</p>
          <h2 className="text-xl md:text-2xl font-bold text-foreground font-['Plus_Jakarta_Sans',sans-serif]">{heading}</h2>
        </div>
      </div>

      <p className="text-primary-blue leading-relaxed font-['DM_Sans',sans-serif] mb-8">{description1}</p>

      <div
        className="rounded-[22px] p-6 md:p-9"
        style={{ background: "linear-gradient(135deg, #0E4A79 0%, #125A8A 45%, #1A6D92 100%)" }}
      >
        <h3 className="text-3xl font-bold text-white mb-2 font-['Plus_Jakarta_Sans',sans-serif]">DecentCare</h3>
        <p className="text-white/85 leading-relaxed mb-7 font-['DM_Sans',sans-serif]">{description2}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 min-h-[132px]">
            <p className="text-[11px] font-semibold text-white/60 tracking-[0.14em] uppercase mb-2">Website</p>
            <p className="text-white font-semibold">www.decentcare.ai</p>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 min-h-[132px]">
            <p className="text-[11px] font-semibold text-white/60 tracking-[0.14em] uppercase mb-2">Email</p>
            <a href="mailto:support@decentcare.ai" className="text-white font-semibold hover:underline break-all">support@decentcare.ai</a>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 min-h-[132px]">
            <p className="text-[11px] font-semibold text-white/60 tracking-[0.14em] uppercase mb-2">Address</p>
            <p className="text-white/90 leading-relaxed">
              Plot No 1/C, Sy No 83/1,
              <br />
              Raidurgam, Knowledge City Rd,
              <br />
              Panmaktha, Hyderabad,
              <br />
              Serilingampalle (M), Telangana
              500032, India
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/15 bg-white/10 p-4 md:p-5 flex gap-3 md:gap-4">
          <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0D9488] text-white">
            <Phone className="h-4 w-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-white/60 tracking-[0.14em] uppercase mb-1">Grievance</p>
            <p className="text-white/90 leading-relaxed">
              Please email <a href="mailto:support@decentcare.ai" className="font-semibold text-white hover:underline">support@decentcare.ai</a> with the subject line <span className="font-semibold text-white">&quot;Privacy Grievance&quot;</span>. We will review and respond within a reasonable time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharedLegalContactSection;
