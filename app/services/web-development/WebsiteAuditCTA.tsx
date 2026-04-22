import { ArrowRight } from "lucide-react";

const WebsiteAuditCTA = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-r from-[#0D5C94] to-[#0A7A6F]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="text-white max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Request a Website Audit
              </h2>
              <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                A structured review of site structure, page consistency, and enquiry journeys, with a clear build plan.
              </p>
            </div>

            {/* Right Button */}
            <div className="flex-shrink-0">
              <button className="bg-white text-[#0D5C94] px-8 py-4 rounded-lg font-semibold text-sm md:text-base flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-lg">
                Request a Website Audit
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteAuditCTA;
