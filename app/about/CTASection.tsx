import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const CTASection = () => {
  return (
    <section className="py-16 lg:py-20 text-white" style={{ background: 'linear-gradient(135deg, #0D5C94, #0D9488)' }}>
      <div className="container mx-auto px-4 lg:px-8 text-center max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn More About DecentCare</h2>
        <p className="text-[#FFFFFF] mb-8">
         If you are exploring ways to improve patient acquisition, care journey management, or the operational effectiveness of your healthcare practice, we would welcome the opportunity to connect.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mb-6">
            <Link href="/contact"> 
          <Button variant="outline" className="border-primary-foreground/30 text-[#1F2020] bg-[#ffffff] hover:bg-primary-foreground/10 gap-2" style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)', cursor:'pointer'}}>
            Request a Demo <ArrowRight className="w-4 h-4" />
          </Button>
            </Link>
                <Link href="/contact">
          <Button className="bg-transparent text-white border border-white hover:bg-white/10" style={{ boxShadow: '0 4px 20px -2px rgba(60, 131, 246, 0.08)', cursor:'pointer'}}>Contact our Team</Button> </Link>
        </div>
        <p className="text-sm text-[#FFFFFF] mb-2">
          Designed for clinics, hospitals, and healthcare teams managing real-world care workflows.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
