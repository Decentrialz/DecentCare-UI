import { Eye, UserPlus, Heart, MessageCircle, Share2, TrendingUp } from "lucide-react";
import PerfOvw from "@/app/assets/PerfOvw.svg";
import Image from "next/image";

const reportingBullets = [
  "Watch time and retention", "Top topics by specialty",
  "Saves and shares", "Enquiry signals",
  "Profile actions", "Month over month improvements",
];

const performanceMetrics = [
  { icon: Eye, label: "Reach", value: "125K", change: "+45%" },
  { icon: UserPlus, label: "Followers", value: "8,432", change: "+23%" },
  { icon: Heart, label: "Engagement", value: "15.8%", change: "+12%" },
  { icon: MessageCircle, label: "Comments", value: "2,341", change: "+67%" },
  { icon: Share2, label: "Shares", value: "892", change: "+34%" },
  { icon: TrendingUp, label: "Leads", value: "432", change: "+89%" },
];

const ReportingSection = () => (
  <section className="py-08 lg:py-14 bg-[#FFFFFF]">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-primary mb-4" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>
            Comprehensive Reporting & Analytics
          </h2>
          <p className="text-[#1F2020] mb-6">
            Track your social media performance with detailed insights and actionable recommendations delivered weekly.
          </p>
          <div className="grid grid-cols-2 gap-3">
            {reportingBullets.map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#475569] rounded-xl p-4" style={{ border: '1px solid #F1F5F9' }}>
                <span className="w-2 h-2 rounded-full bg-[#0D5C94] shrink-0" />
                {b}
              </div>
            ))}
          </div>
        </div>
        {/* Performance Overview Card */}
        <div className="flex justify-center">
          <Image
            src={PerfOvw}
            alt="Performance Overview"
            className="rounded-2xl w-full"
            style={{ maxWidth: "100%", height: "auto" }}
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default ReportingSection;
