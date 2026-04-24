import { Shield, Settings, Target, Users, CircleCheck, Badge, Award } from "lucide-react";
import Image from "next/image";
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import gutCare from "@/app/assets/gut  care.svg";
import gowda from "@/app/assets/Dr.Gowds.png";
import decentrializ from "@/app/assets/DT.png";
import chirag from "@/app/assets/CHirag.png";

const WhyTrustUsSection = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6 mx-auto lg:mx-0" style={{ background: 'rgba(13, 148, 136, 0.10)' }}>
              <span className="text-sm font-medium text-[#0D9488]">Why Healthcare Providers Trust Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D5C94] mb-6">
              Purpose-Built for Healthcare Excellence
            </h2>
            <p className="text-[#737B8C] mb-8">
              Built around how hospitals actually function, aligning teams, simplifying workflows, and creating clarity across every stage of growth and patient engagement.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { title: "Healthcare-First Design", desc: "Built specifically for healthcare with systems that reflect real clinical coordination, enquiry handling and operational workflows.", icon: Shield },
              { title: "Unified Growth Approach", desc: "Marketing, technology, and coordination work together—not in silos.", icon: Award },
              { title: "Operational Efficiency Gains", desc: "Clear workflows and structured systems reduce missed follow-ups, manual dependency, and internal coordination gaps.", icon: CircleCheck },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-[#0D5C94]/10" >
                  <Icon className="w-5 h-5 text-[#0D5C94]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1B2232]">{item.title}</h4>
                  <p className="text-sm text-[#737B8C]">{item.desc}</p>
                </div>
              </div>
            );
            })}
          </div>
        </div>
        <div className="bg-[#EDF0F2]/50 rounded-2xl p-8">
          <h3 className="text-center font-semibold text-[#737B8C] mb-8 mt-4">Trusted by Healthcare Leaders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
            {[
              { name: "LUX HOSPITALS", image: lux },
              { name: "Praana Vaidya", image: vaidya },
              { name: "GutCare", image: gutCare },
              { name: "Dr. Gowda", image: gowda },
              { name: "Decentraliz", image: decentrializ },
              { name: "Dr. Chirag", image: chirag },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={50}
                  className="object-contain h-12 w-auto"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 pt-8" style={{ borderTop: '1px solid rgba(0, 0, 0, 0.08)' }}>
            <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold" style={{ background: '#F9FAFB', color: '#1B2232', border: '1px solid', borderColor:'#DAE0E7' }}>
              <Shield className="w-4 h-4 text-[#1F938A]" /> Data Secure
            </div>
            <div className="flex items-center gap-2 text-sm px-4 py-2 rounded-full font-semibold" style={{ background: '#F9FAFB', color: '#1B2232', border: '1px solid', borderColor:'#DAE0E7' }}>
              <Users className="w-4 h-4 text-[#1F938A]" /> Healthcare Focused
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyTrustUsSection;
