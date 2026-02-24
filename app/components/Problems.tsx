import { UserX, GitFork, AlertCircle } from "lucide-react";

const problems = [
  {
    icon: UserX,
    iconBg: "bg-[#EF4343]/10",
    iconColor: "text-[#EF4343]",
    title: "Patients are treated like leads",
    description: "Generic funnels ignore the emotional journey of healthcare decisions.",
  },
  {
    icon: GitFork,
    iconBg: "bg-[#EF4343]/10",
    iconColor: "text-[#EF4343]",
    title: "Journeys are treated like funnels",
    description: "Linear thinking fails to capture the complexity of patient care.",
  },
  {
    icon: AlertCircle,
    iconBg: "bg-[#EF4343]/10",
    iconColor: "text-[#EF4343]",
    title: "Care is fragmented across systems",
    description: "Disconnected tools create gaps in the patient experience.",
  },
];

const Problems = () => {
  return (
    <section className="py-12 lg:py-20 bg-[#FBFCFD] relative">

      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto lg:max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2020] mb-4">
            Healthcare is personal.<br className="lg:hidden" /> <span style={{ background: 'linear-gradient(135deg, #0D9488, #0D5C94)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Growth systems are<br className="lg:hidden" /> not.</span>
          </h2>
          <p className="text-base lg:text-lg text-[#818584] max-w-2xl mx-auto">
            What healthcare needs is not louder marketing. It needs intelligence with empathy.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 max-w-sm mx-auto"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 10px 40px 0 rgba(60, 131, 246, 0.08), 0 1px 3px 0 rgba(15, 23, 41, 0.05)'
              }}
            >
              <div className={`w-14 h-14 ${problem.iconBg} rounded-xl flex items-center justify-center mb-6`}>
                <problem.icon className={`w-7 h-7 ${problem.iconColor}`} />
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Problems;
