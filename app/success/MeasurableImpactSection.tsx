interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  sub: string;
}

interface Props {
  stats: Stat[];
}

const MeasurableImpactSection = ({ stats }: Props) => (
  <section className="py-20" style={{ background: 'linear-gradient(135deg, #0D5C94 0%, #0D9488 100%)' }} >
    <div className="container mx-auto px-4 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#FFFFFF] mb-4">
          Measurable Impact Across Healthcare
        </h2>
        <p className="text-[#FFFFFF]/80">
          Real numbers from real healthcare providers using DecentCare
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#FFFFFF]/10 backdrop-blur rounded-2xl p-6 text-center border border-[#FFFFFF]/20">
            <div className="w-12 h-12 mx-auto mb-4 bg-[#FFFFFF]/20 rounded-xl flex items-center justify-center">
              <s.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-4xl font-bold text-primary-foreground mb-4">{s.value}</p>
            <p className="font-semibold text-primary-foreground text-base mb-1">{s.label}</p>
            <p className="text-sm text-primary-foreground/70 pb-2">{s.sub}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MeasurableImpactSection;
