
import { ArrowRight, Play, Calendar, FileCheck, Map, Clock, Zap, TrendingUp, Sparkle, Sparkles, CircleCheck, CircleCheckBig } from "lucide-react";
import Image from "next/image";
import teamImage from "@/app/assets/CTAImage.png";
import { Button } from "./ui/button";


const CTA = () => {
  return (
    <section className="py-12 lg:py-20 bg-background relative">
        <div className="absolute rounded-full" style={{ left: '0%', top: '10%', width: '600px', height: '600px', backgroundColor: 'rgba(60, 131, 246, 0.1)', opacity: '0.7', filter: 'blur(64px)' }} />
       <div className="absolute rounded-full" style={{ right: '2%', top: '18%', width: '600px', height: '600px', backgroundColor: 'rgba(42, 157, 144, 0.1)', opacity: '0.7', filter: 'blur(64px)' }} />
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="w-full max-w-[462px] h-[477px] mx-auto ml-[20%]">
            <Image
              src={teamImage}
              alt="Healthcare team"
              width={462}
              height={477}
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            />
          </div>

          {/* Right - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
              <Zap className="w-4 h-4 text-[#0D5C94]" />
              <span className="text-sm font-medium text-primary">Ready to Scale?</span>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Start Growing Your Practice{" "}
                <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Today</span>
              </h2>
              <p className="text-base text-[#818584]">
                Join 500+ healthcare providers who've transformed their growth with DecentCare's AI-powered platform.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-primary" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>500+</div>
                <div className="text-sm text-muted-foreground">Healthcare Providers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>₹50Cr+</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>3.2x</div>
                <div className="text-sm text-muted-foreground">Average ROI</div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-accent" />
                </div>
                30-min strategy call
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-accent" />
                </div>
                Free growth audit
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-accent" />
                </div>
                Custom roadmap
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2 bg-[#0D5C94]">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="gap-2 text-[#5E6160]">
                <Play className="w-5 h-5" />
                Talk to Sales
              </Button>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CircleCheckBig className="w-4 h-4 text-accent" />
              24/7 Support
            </div>

            <p className="text-sm text-[#5E6160]">
              No pressure. No obligation. Just a conversation about your growth goals.
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default CTA;
