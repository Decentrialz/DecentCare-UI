import { Button } from "../components/ui/button";
import { ArrowRight } from "lucide-react";

const SuccessCTASection = () => (
  <section className="py-20 bg-[#FFFFFF]/30">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="max-w-7xl mx-auto border border-[#E5E7EB] rounded-3xl overflow-hidden shadow-sm">
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Card - Ready to Transform */}
          <div className="bg-white p-10">
            <h3 className="text-4xl font-bold text-[#0D5C94] mb-6">
              Ready to Transform Your Patient Care Journey?
            </h3>
            <p className="text-[#737B8C] text-base leading-relaxed">
              Join 50+ healthcare providers who have revolutionized their operations with DecentCare. See how we can help your clinic or hospital achieve similar results.
            </p>
          </div>

          {/* Right Card - Have Questions */}
          <div className="bg-[#EDF9F7]/80 p-10 flex flex-col justify-center items-center h-full">
            <div className="w-full max-w-md flex flex-col items-center">
              <div className="flex items-start justify-between mb-4 mt-10 w-full">
                <h4 className="font-semibold text-[#1B2232] text-lg">Have Questions?</h4>
              </div>
              <p className="text-sm text-[#737B8C] w-full">
                Our team is ready to show you how DecentCare can work for your specific needs.
              </p>
              <a href="/contact" className="mt-6 w-full">
                <Button className="w-full gap-2 h-[45px] bg-[#0D5C94] hover:bg-[#0B4F7F] text-white rounded-lg">
                  Let's Connect <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SuccessCTASection;
