import Image from "next/image";
import smmLeadEngine from "@/app/assets/SocialLeadEngine.svg";
import { MessageCircle, Building2, Monitor, Link2, MessageCircleQuestionMark, CalendarPlus2, Workflow } from "lucide-react";

const leadEngineFeatures = [
  { icon: MessageCircleQuestionMark, text: "Message and enquiry handling with structured response flows", bgColor: "rgba(13, 92, 148, 0.08)", iconColor: "#0D5C94" },
  { icon: CalendarPlus2, text: "Story and profile actions that push patients to booking", bgColor: "rgba(13, 148, 136, 0.08)", iconColor: "#0D9488" },
  { icon: Monitor, text: "Service-wise navigation (highlights, profile structure, pinned content)", bgColor: "rgba(13, 92, 148, 0.08)", iconColor: "#0D5C94" },
  { icon: Workflow, text: "Front desk handoff and follow-up workflow (Care Journey ready)", bgColor: "rgba(13, 148, 136, 0.08)", iconColor: "#0D9488" },
];

const trackedMetrics = [
  "Enquiries", "profile actions", "response time", "service-wise demand", "missed enquiries"
];

const SocialLeadEngineSection = () => (
  <section className="py-12 lg:py-14 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <Image
          src={smmLeadEngine}
          alt="Social Lead Engine dashboard"
        //   className="rounded-2xl shadow-lg w-full"
          style={{ width: "100%", height: "auto" }}
          priority
        />
        <div className="space-y-6">
          <h2 className="text-2xl font-extrabold text-primary text-center lg:text-left" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Social Lead Engine</h2>
          <p className="text-[#818584] text-sm mt-[-15px] text-center lg:text-left">Built to convert patient interest into booked appointments.</p>
          <div className="space-y-4">
            {leadEngineFeatures.map((f, i) => (
              <div key={i} className="flex items-center gap-4 bg-[#FFFFFF] rounded-xl p-4" style={{ border: '1px solid #E5E7EB'}}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: f.bgColor }}>
                  <f.icon className="w-5 h-5" style={{ color: f.iconColor }} />
                </div>
                <p className="text-sm text-[#1F2020] font-semibold">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tracked bar */}
      <div className="mt-12 rounded-2xl p-6 text-center max-w-6xl mx-auto" style={{ background: "linear-gradient(135deg, rgba(13, 92, 148, 0.1), rgba(13, 148, 136, 0.1))" }}>
        <h4 className="text-accent font-bold text-lg mb-3" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Tracked</h4>
        <div className="flex flex-wrap justify-center gap-2 lg:gap-4 text-xs lg:text-sm text-muted-foreground">
          {trackedMetrics.map((m, i) => (
            <span key={i} className="flex items-center gap-2 lg:gap-4 text-[#5E6160]">
              {m}
              {i < trackedMetrics.length - 1 && <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, #0D9488, #0D5C94)" }} />}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SocialLeadEngineSection;
