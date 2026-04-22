import { Check } from "lucide-react";

const requirements = [
  "Keeps language medically responsible and avoids misleading claims",
  "Improves accuracy in how services are summarized and compared",
  "Strengthens trust signals through clarity and consistency",
  "Supports multi-location scale without content duplication issues"
];

const HowThisAILayerSupportsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 lg:px-8">
        <div 
          className="rounded-3xl p-8 lg:p-12 max-w-5xl mx-auto"
          style={{ 
            background: 'linear-gradient(135deg, #0D5C94, #1A6FA8, #0D9488)',
          }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Title and Description */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                How This AI Layer Supports Healthcare Requirements
              </h2>
              <p className="text-md text-white/90 leading-relaxed">
                Built to meet the unique demands of medical content, accuracy, trust, and patient clarity at scale.
              </p>
            </div>

            {/* Right Side - Requirements List */}
            <div className="space-y-4">
              {requirements.map((requirement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-sm text-white leading-relaxed">
                    {requirement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowThisAILayerSupportsSection;
