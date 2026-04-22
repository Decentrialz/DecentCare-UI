const AiChatBot = () => {
  const checklistItems = [
    "Guided questions to route users to the right department, doctor type, or branch",
    "FAQ support based on approved site content",
    "Handoff to call, WhatsApp, or a form at the right moment"
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-b from-[#E8F3FB] to-[#F1F5F9]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#0D9488" }}>
                AI bot chat integration
              </h2>
              <p className="text-base text-[#4B5563] leading-relaxed mb-6 max-w-lg">
                Chat is added when it improves enquiry handling and supports faster routing.
              </p>
              
              {/* Checklist */}
              <div className="space-y-4">
                {checklistItems.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-lg bg-[#0D9488] flex items-center justify-center mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-base text-[#334155] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Video Placeholder */}
             <div className="relative overflow-hidden rounded-2xl -mx-6 lg:mx-0" style={{ lineHeight: 0 }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                style={{
                  padding: "4px",
                  background: 'linear-gradient(to bottom, #E8F3FB, #F1F5F9)',
                  borderRadius: '1rem',
                  boxShadow: '0 8px 10px -6px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                }}
              >
                <source src="/empvideo5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiChatBot;
