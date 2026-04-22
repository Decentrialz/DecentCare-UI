import { ArrowRight } from "lucide-react";

const aiBasedSEOItems = [
  {
    label: "AEO",
    title: "Answer Engine Optimization",
    description: "We structure content so it can be selected, quoted, and summarized correctly.",
    whatWeDo: [
      "Build question-first content blocks aligned to patient intent",
      "Create concise answerable sections across symptoms, services and conditions",
      "Improve snippet eligibility with clean formatting and headings",
      "Implement FAQ patterns and structured data for services and conditions",
      "Add internal signals that help systems select accurate answers"
    ],
    outputs: [
      "Answer-ready page templates for service and condition pages",
      "FAQ and Q&A block recommendations",
      "Snippet-targeting recommendations for priority pages"
    ]
  },
  {
    label: "SIO",
    title: "Search Interface Optimization",
    description: "Patients choose providers across maps, voice assistants, and health apps. Not just Blue Links.",
    whatWeDo: [
      "Improve consistency across provider discovery surfaces",
      "Standardize service, specialty, and location data for clarity",
      "Strengthen provider and location representation where patients search",
      "Align naming conventions to services and specialties match how patients search"
    ],
    outputs: [
      "Service and specialty naming framework",
      "Location and provider consistency checklist",
      "Interface visibility recommendations for multi-location brands"
    ]
  },
  {
    label: "LLMO",
    title: "Large Language Model Optimization",
    description: "This focuses on how AI systems interpret your brand, services, and medical intent.",
    whatWeDo: [
      "Strengthen entity clarity for conditions, treatments, specialties, providers, and locations",
      "Reduce ambiguity and medical language that causes misinterpretation",
      "Harmonize definitions and naming conventions across sections regarding your services",
      "Improve citation readiness by making key facts easy to locate and verify on-page",
      "Structure content for accurate summarization without removing information"
    ],
    outputs: [
      "Entity consistency map for key service lines and conditions",
      "Simplified descriptions for services and locations to prevent drift",
      "Page-level guidance for clarity, context, and AI-interpretability"
    ]
  },
  {
    label: "AIO",
    title: "AI-Driven Optimization",
    description: "This is an operational layer that uses AI workflows to improve SEO faster and at scale.",
    whatWeDo: [
      "Detect content gaps across services, conditions, and locations",
      "Cluster keywords by intent and recommend page coverage",
      "Identify pages that reach underfit due to performance decay",
      "Generate draft recommendations based on priority relationships",
      "Monitor changes in query patterns and surface new opportunities"
    ],
    outputs: [
      "Gap target sheets with priority gaps",
      "Refresh and expansion recommendation sets",
      "Internal link recommendation reports at scale",
      "Monthly insights focused on case-intent visibility, not vanity traffic"
    ]
  }
];

const AIBasedSEOLayerSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{
            color: "#0D9488",
            paddingBottom: "0.15em",
            lineHeight: 1.15,
          }}>
            AI-Based SEO Layer
          </h2>
          <p className="text-base text-[#4B5563] max-w-4xl mx-auto">
            SEO is the foundation. This layer ensures your content performs in modern discovery environments where patients get answers through AI summaries, assistant responses, and healthcare search interfaces.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {aiBasedSEOItems.map((item, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden shadow-lg bg-white"
            >
              {/* Gradient Top Section */}
              <div 
                className="p-6"
                style={{ 
                  background: 'linear-gradient(135deg, #0D5C94, #0D9488)',
                }}
              >
                <div className="text-xs font-bold text-white mb-2 tracking-wider uppercase">
                  {item.label}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* White Bottom Section */}
              <div className="p-6 space-y-6">
                {/* What We Do */}
                <div>
                  <h4 className="text-xs font-bold text-[#94A3B8] mb-3 tracking-wider uppercase">
                    What We Do
                  </h4>
                  <ul className="space-y-2">
                    {item.whatWeDo.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-[#334155]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] shrink-0 mt-2"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outputs */}
                <div>
                  <div className="bg-[#F1F5F9] rounded-xl p-4 space-y-3">
                              <h4 className="text-xs font-bold text-[#94A3B8] mb-3 tracking-wider uppercase">
                                  Outputs
                              </h4>
                    {item.outputs.map((output, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-xs text-[#4D5567]">
                        <ArrowRight className="w-3 h-5 text-[#0D5C94] shrink-0 mt-0.5" />
                        <span>{output}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIBasedSEOLayerSection;
