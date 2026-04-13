import { TrendingUp, IndianRupee, Target, Users, ChartNoAxesColumnIncreasing } from "lucide-react";
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import gutCare from "@/app/assets/gut  care.svg";
import dt from "@/app/assets/DT.png";
import CHirag from "@/app/assets/CHirag.png";
import Drgowds from "@/app/assets/Dr.Gowds.png";

const stats = [
  {
    icon: TrendingUp,
    value: "320%",
    label: "Average ROI",
    sublabel: "Return on marketing investment",
  },
  {
    icon: IndianRupee,
    value: "100Cr+",
    label: "Revenue Generated",
    sublabel: "For our healthcare partners",
  },
  {
    icon: Target,
    value: "67%",
    label: "Lower CPL",
    sublabel: "Cost per lead reduction",
  },
  {
    icon: Users,
    value: "2M+",
    label: "Patients Reached",
    sublabel: "Across all campaigns",
  },
];

const logos = [
  {
    name: "LUX HOSPITALS",
    img: lux,
  },
  {
    name: "Praana Vaidya",
    img: vaidya,
  },
  {
    name: "GutCare",
    img: gutCare,
  },
    {
    name: "Dr.Gowds",
    img: Drgowds,
  },
  {
    name: "DT",
    img: dt,
  },
  {
    name: "CHirag",
    img: CHirag,
  },
];

const Results = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#FBFCFD] relative">
       <div className="absolute rounded-full" style={{ left: '25%', top: '10%', width: '384px', height: '384px', backgroundColor: 'rgba(42, 157, 144, 0.1)', opacity: '0.8', filter: 'blur(64px)' }} />
       <div className="absolute rounded-full" style={{ right: '25%', top: '50%', width: '384px', height: '384px', backgroundColor: 'rgba(60, 131, 246, 0.1)', opacity: '0.6', filter: 'blur(64px)' }} />
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-xl rounded-full mb-6 border border-gray-200/50">
            <ChartNoAxesColumnIncreasing className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-[#818584]">Proven Business Results</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F1729] mb-4" style={{fontFamily: 'Plus Jakarta Sans, sans-serif'}}>
            Real Impact, Real<br className="lg:hidden" /> <span className="text-[#0D5C94]" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Numbers</span>
          </h2>
          <p className="text-sm lg:text-lg text-[#818584] max-w-md lg:max-w-3xl mx-auto">
            We don't just run campaigns, we drive measurable business growth for healthcare providers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-20 mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 lg:p-8 text-center"
              style={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
              }}
            >
              <div className="w-10 h-10 lg:w-14 lg:h-14 mx-auto rounded-xl flex items-center justify-center mb-3 lg:mb-4" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)' }}>
                <stat.icon className="w-5 h-5 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="text-2xl lg:text-4xl font-bold mb-1 lg:mb-2" style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{stat.value}</div>
              <div className="text-sm lg:text-base font-semibold text-[#1F2020] mb-1">{stat.label}</div>
              <div className="text-xs lg:text-sm text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Logo Bar */}
        <div className="text-center">
          <p
            className="mb-8 font-bold text-sm lg:text-[18px] leading-[1] tracking-[0px] text-center flex items-center justify-center"
            style={{
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              background: 'linear-gradient(90deg, #0D9488, #0D5C94)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              alignItems: 'center',
              verticalAlign: 'middle',
              paddingBottom: '20px',
            }}
          >
            Trusted by leading healthcare institutions
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-20 justify-items-center items-center" style={{ maxWidth: '1100px', margin: '0 auto' }}>
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <img src={logo.img.src} alt={logo.name} className="h-10 lg:h-14 w-auto object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Results;
