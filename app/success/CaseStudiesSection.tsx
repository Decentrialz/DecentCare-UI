import { Button } from "../components/ui/button";
import { ArrowRight, AlertCircle, Lightbulb, TrendingUp, TargetIcon, Target } from "lucide-react";
import Image from "next/image";
import arjunReddy from "@/app/assets/Dr. Arjun Reddy.svg";
import kavithaReddy from "@/app/assets/Dr. Kavitha Iyer.svg";
import meeraPatel from "@/app/assets/Dr. Meera Patel.svg";

interface CaseStudy {
  name: string;
  role: string;
  org: string;
  type: string;
  quote: string;
  stat: string;
  statLabel: string;
  challenge: string;
  solution: string;
  outcome: string;
}

interface Props {
  caseStudies: CaseStudy[];
}

const CaseStudiesSection = ({ caseStudies }: Props) => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6" style={{ background: 'rgba(13, 148, 136, 0.10)' }}>
          <span className="text-sm font-medium text-[#0D9488]">Case Studies</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0D5C94] mb-4">
          Transforming Healthcare Operations
        </h2>
        <p className="text-[#737B8C] max-w-4xl mx-auto">
          Explore detailed success stories from healthcare providers who revolutionized their patient care journey
        </p>
      </div>
      <div className="space-y-8 max-w-6xl mx-auto">
        {caseStudies.map((cs, i) => (
          <div key={i} className="bg-background border border-border rounded-2xl overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-[350px_1fr] gap-0">
              <div className="text-primary-foreground p-6 flex flex-col justify-between" style={{ background: 'linear-gradient(135deg, #0D5C94 0%, #0D9488 100%)' }}>
                <div className="flex items-center gap-3 mb-4">
                  <Image
                    src={
                      cs.name.includes("Meera") ? meeraPatel :
                      cs.name.includes("Arjun") ? arjunReddy :
                      cs.name.includes("Kavitha") ? kavithaReddy :
                      meeraPatel
                    }
                    alt={cs.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{cs.name}</h4>
                    <p className="text-xs text-[#FFFFFF]/80">{cs.role}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-sm">{cs.org}</p>
                  <p className="text-xs text-[#FFFFFF]/70">{cs.type}</p>
                </div>
                <p className="text-xs italic text-[#FFFFFF]/90 mb-10">{cs.quote}</p>
                <div className="pt-6" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.30)' }}>
                  <p className="text-4xl font-bold">{cs.stat}</p>
                  <p className="text-xs text-[#FFFFFF]/80">{cs.statLabel}</p>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-between">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-[#EF4444]" />
                      <h5 className="font-semibold text-[#EF4444] text-sm">Challenge</h5>
                    </div>
                    <p className="text-xs text-[#737B8C]">{cs.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Lightbulb className="w-4 h-4 text-[#1F938A]" />
                      <h5 className="font-semibold text-[#1F938A] text-sm">Solution</h5>
                    </div>
                    <p className="text-xs text-[#737B8C]">{cs.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-[#2EB873]" />
                      <h5 className="font-semibold text-[#2EB873] text-sm">Outcome</h5>
                    </div>
                    <p className="text-xs text-[#737B8C]">{cs.outcome}</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <Button variant="default" size="md" className="gap-1 bg-[#0D5C94] text-[#FFFFFF]" style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)' }}>
                    Read More <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
