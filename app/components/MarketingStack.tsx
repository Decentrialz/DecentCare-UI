'use client';
import { Search, Target, Users, MessageSquare, TrendingUp, Sparkles,Rocket,Plus, ArrowRight, GitFork, Zap, MessageSquareHeart } from "lucide-react";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const features = [
  {
    number: "01",
    icon: Search,
    title: "SEO & Discovery Marketing",
    subtitle: "Get found when patients search",
    description: "Dominate Google, Maps, and social when patients actively search for care.",
    stat: "340%",
    statLabel: "increase in organic traffic",
    highlights: [
      "Local SEO optimisation for maximum visibility",
      "Content marketing that builds authority",
      "Google Ads & Meta campaigns with AI optimisation",
      "Social Media Presence & Patient Engagement",
    ],
    featured: false,
  },
  {
    number: "02",
    icon: Target,
    title: "AI-Powered Patient Acquisition",
    subtitle: "Target the right patients, lower costs",
    description: "Our AI identifies high-intent patients and optimises spend in real-time.",
    stat: "67%",
    statLabel: "reduction in cost per acquisition",
    highlights: [
      "Predictive audience targeting",
      "Automated bid optimisation",
      "Multi-channel attribution tracking",
    ],
    featured: false,
  },
  {
    number: "03",
    icon: GitFork,
    title: "Digital Twin Intelligence",
    subtitle: "Every journey, predicted and optimised",
    description: "Our proprietary Digital Twin technology mirrors each patient journey for unprecedented optimisation.",
    stat: "4.8x",
    statLabel: "improvement in conversion rates",
    highlights: [
      "Real-time behaviour prediction",
      "Drop-off risk identification",
      "Automated next-best-action recommendations",
      "Conversion optimisation at every touchpoint",
    ],
    featured: true,
  },
  {
    number: "04",
    icon: MessageSquareHeart,
    title: "Marketing Automation Platform",
    subtitle: "Nurture leads, book appointments",
    description: "Automated workflows that feel personal and convert prospects into patients.",
    stat: "85%",
    statLabel: "faster lead response time",
    highlights: [
      "Omnichannel lead nurturing",
      "Smart appointment scheduling",
      "WhatsApp, SMS & email automation",
      "CRM with patient intelligence",
    ],
    featured: false,
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Analytics & Growth Intelligence",
    subtitle: "Data-driven decisions, predictable growth",
    description: "Real-time dashboards and AI insights to continuously optimise performance.",
    stat: "23%",
    statLabel: "sustained year-over-year growth",
    highlights: [
      "Revenue attribution by channel",
      "Predictive performance modeling",
      "Custom executive dashboards",
      "Monthly strategy optimisation",
    ],
    featured: false,
  },
    {
    number: "06",
    icon: TrendingUp,
    title: "Analytics & Growth Intelligence",
    subtitle: "Data-driven decisions, predictable growth",
    description: "Real-time dashboards and AI insights to continuously optimise performance.",
    stat: "23%",
    statLabel: "sustained year-over-year growth",
    highlights: [
      "Revenue attribution by channel",
      "Predictive performance modeling",
      "Custom executive dashboards",
      "Monthly strategy optimisation",
    ],
    featured: false,
  },
];

interface FeatureCardProps {
  feature: typeof features[0];
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, i, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="mb-8 lg:mb-0 lg:h-[40vh] flex items-center justify-center lg:sticky lg:top-40"
      style={{ zIndex: i }}
    >
      <motion.div
        style={{
          scale: typeof window !== 'undefined' && window.innerWidth >= 1024 ? scale : 1,
          top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `calc(-5vh + ${i * 20}px)` : 0,
        }}
        className="relative w-full max-w-6xl mx-auto origin-top"
      >
        <div
          className="rounded-2xl p-6 lg:p-8 relative bg-white"
          style={{
            background: `
              linear-gradient(
                135deg,
                rgba(13, 148, 136, 0.06) 0%,
                rgba(13, 148, 136, 0.03) 25%,
                rgba(255, 255, 255, 1) 55%,
                rgba(255, 255, 255, 1) 100%
              ),
              white
            `,
            boxShadow: `
              0 20px 60px rgba(15, 23, 42, 0.08),
              0 2px 6px rgba(15, 23, 42, 0.04)
            `,
            border: '1px solid rgba(255, 255, 255, 0.6)',
            backgroundColor: 'white',
          }}
        >
          {feature.featured && (
            <div className="absolute left-6" style={{ top: '-12px' }}>
              <div 
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full"
                style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}
              >
                <Zap className="w-3 h-3 text-white" />
                <span className="text-xs font-medium text-white">Proprietary Technology</span>
              </div>
            </div>
          )}
          
          {/* Mobile Layout */}
          <div className="lg:hidden space-y-6">
            {/* Header with number and icon */}
            <div className="flex items-start gap-4">
              <span className="text-5xl font-bold text-muted-foreground/20">
                {feature.number}
              </span>
              <div 
             className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      feature.featured ? '' : 'bg-[#0D5C94]/10'
                    }`}
                    style={feature.featured ? { background: 'linear-gradient(135deg, #0D9488, #0D5C94)' } : undefined}
              >
                <feature.icon className={`w-6 h-6 ${feature.featured ? 'text-white' : 'text-[#0D5C94]'}`} />
              </div>
            </div>
            
            {/* Title and subtitle */}
            <div>
              <h3 className="text-xl font-bold mb-1 text-[#0F1729]">{feature.title}</h3>
              <p className="text-[#0D9488] font-semibold text-base">{feature.subtitle}</p>
            </div>
            
            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            
            {/* Stat box */}
            <div className="bg-[#E0F2F1] rounded-xl p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-[#0D9488]">{feature.stat}</span>
                <span className="text-sm text-muted-foreground">{feature.statLabel}</span>
              </div>
            </div>
            
            {/* Highlights */}
            <div className="space-y-3">
              {feature.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0D9488]/10">
                    <ArrowRight className="w-4 h-4 text-[#0D9488]" />
                  </div>
                  <span className="text-muted-foreground text-sm flex-1">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-start">
            {/* Left */}
            <div className="space-y-4">
              <div className="flex items-center gap-30">
                <div className="flex flex-col items-center gap-2">
                  <span className="text-4xl lg:text-5xl font-bold text-muted-foreground/30">
                    {feature.number}
                  </span>
                  <div 
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      feature.featured ? '' : 'bg-[#0D5C94]/10'
                    }`}
                    style={feature.featured ? { background: 'linear-gradient(135deg, #0D9488, #0D5C94)' } : undefined}
                  >
                    <feature.icon className={`w-6 h-6 ${feature.featured ? 'text-white' : 'text-[#0D5C94]'}`} />
                  </div>
                </div>
                <div className="flex-1 max-w-sm">
                  <h3 className="text-xl font-bold mb-2 text-[#0F1729]">{feature.title}</h3>
                  <p className="text-[#0D9488] font-medium mb-2 text-lg" style={{ marginTop: '-4px' }}>{feature.subtitle}</p>
                  <p className="text-muted-foreground mt-[10px]">{feature.description}</p>
                  
                  <div 
                    className={`inline-flex items-center mt-[30px] gap-2 mt-4 px-4 py-2 rounded-lg ${
                      feature.featured ? '' : 'bg-accent/10'
                    }`}
                    style={feature.featured ? { backgroundColor: 'rgba(255, 255, 255, 0.3)' } : undefined}
                  >
                    <span className="text-3xl font-bold text-[#0D9488]">{feature.stat}</span>
                    <span className="text-sm text-muted-foreground">{feature.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Highlights */}
            <div className="space-y-3 mt-8">
              {feature.highlights.map((highlight, hIndex) => (
                <div key={hIndex} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#0D9488]/10">
                    <ArrowRight className="w-4 h-4 text-[#0D9488]" />
                  </div>
                  <span className="text-muted-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const MarketingStack = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={container} className="pt-16 pb-16 lg:py-20 bg-[#FFFFFF] relative">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="w-full mx-auto lg:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 max-w-4xl mx-auto relative z-50">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <Rocket className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary">Full-Stack Growth Engine</span>
          </div>
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            The Complete Healthcare<br />
            <span className="text-accent" style={{background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text'}}>Marketing Stack</span>
          </h2>
          <p className="text-base lg:text-base text-muted-foreground max-w-3xl mx-auto">
            From first impression to lifelong patient, our integrated platform handles every step with AI precision and human empathy.
          </p>
        </div>

        {/* Features with Stacking Animation */}
        <div className="lg:h-[300vh]">
          {features.map((feature, i) => {
            const targetScale = 1 - (features.length - i) * 0.05;
            return (
              <FeatureCard
                key={`feature_${i}`}
                feature={feature}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.16, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
};

export default MarketingStack;
