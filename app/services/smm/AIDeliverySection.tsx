import { Search, CalendarDays, MessageSquareMore, Award, TrendingUp, SearchCheck, CalendarCheck, FolderOpen, ShieldCheck } from "lucide-react";

const aiDeliveryFeatures = [
  { icon: SearchCheck, title: "Topic discovery", description: "high-interest themes and seasonal patient questions" },
  { icon: CalendarCheck, title: "Planning support", description: "series planning and monthly calendars" },
  { icon: FolderOpen, title: "Draft acceleration", description: "first drafts for scripts, captions, and carousel outlines" },
  { icon: ShieldCheck, title: "Quality checks", description: "clarity, repetition, and risky or over-claim language checks" },
  { icon: TrendingUp, title: "Performance summaries", description: "what to scale and what to refine next" },
];

const resultItems = [
  "faster turnaround", "consistent output", "cleaner iteration", "stronger optimisation direction"
];

const AIDeliverySection = () => (
  <section className=" relative py-08 lg:py-14 bg-[#FFFFFF]">
     <div className="absolute rounded-full" style={{ left: '85px', top: '310px', width: '1242.95px', height: '280.53px', background: 'linear-gradient(135deg, #0D5C94, #0B887D)', opacity: '0.12', filter: 'blur(64px)', transform: 'rotate(-8.36deg)', borderRadius: '8677.69px' }} />
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-md md:text-xl lg:text-2xl font-extrabold text-primary mb-3" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>AI-Assisted Delivery</h2>
      <p className="text-[#1F2020] mb-10 mt-[-10px]">Faster production. More consistency. Better monthly improvement.</p>
      <p className="text-lg text-[#1F2020] max-w-4xl mx-auto mb-12">
        AI supports our workflow so your social media runs smoother and improves faster month after month.
      </p>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {aiDeliveryFeatures.map((f, i) => (
          <div key={i} className={`rounded-xl p-5 text-left flex items-start gap-4 ${i === 4 ? "md:col-span-2" : ""}`} style={{ backgroundColor: 'rgba(13, 92, 148, 0.06)', border: '1px solid rgba(255, 255, 255, 0.6)' }}>
            <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #0D5C94, #0A766D)' }}>
              <f.icon className="w-4 h-4 text-[#FFFFFF]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#0D5C94]">{f.title}</h4>
              <p className="text-base text-[#1F2020] mt-1">{f.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Result bar */}
      <div className="mt-10 bg-accent/10 rounded-2xl p-5 max-w-3xl mx-auto" style={{ background: "linear-gradient(135deg, rgba(13, 92, 148, 0.1), rgba(13, 148, 136, 0.1))" }}>
        <h4 className="text-accent font-bold mb-2" style={{
                background: "linear-gradient(135deg, #0D9488, #0D5C94)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                paddingBottom: "0.15em",
                lineHeight: 1.15,
              }}>Result</h4>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          {resultItems.map((r, i) => (
            <span key={i} className="flex items-center gap-2">
              {r}
              {i < resultItems.length - 1 && <span className="w-1.5 h-1.5 rounded-full" style={{ background: "linear-gradient(135deg, #0D9488, #0D5C94)" }} />}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AIDeliverySection;
