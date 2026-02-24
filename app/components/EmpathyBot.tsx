import { Bot, Sparkles, Send, BotIcon } from "lucide-react";

const EmpathyBot = () => {
  return (
    <section className="py-08 lg:py-12 bg-[#FFFFFF] relative">
      
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto lg:max-w-7xl">
        <div className="bg-card rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
                <BotIcon className="w-4 h-4 text-[#0D9488]" />
                <span className="text-sm font-medium text-[#5E6160]">AI - Powered</span>
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D2630]">Empathy Bot.</h2>
                <h3 className="text-3xl md:text-4xl font-bold leading-normal" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', paddingBottom: '0.1em' }}>Your Digital Partner in Care.</h3>
              </div>

              <p className="text-sm lg:text-lg text-[#627384] mt-[-20px]">
                Our AI understands healthcare nuances and helps you create personalised patient experiences at scale.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#3C83F6]/10 rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl font-bold text-accent" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>95%</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Response Accuracy</div>
                </div>
                <div className="bg-[#3C83F6]/10 rounded-xl p-4">
                  <div className="text-2xl lg:text-3xl font-bold text-primary" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>24/7</div>
                  <div className="text-xs lg:text-sm text-muted-foreground">Always Available</div>
                </div>
              </div>
            </div>

            {/* Right Content - Chat Interface */}
            <div className="relative overflow-hidden rounded-2xl -mx-6 lg:mx-0" style={{ lineHeight: 0 }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto"
                style={{padding: "4px"}}
              >
                <source src="/empathybot-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default EmpathyBot;
