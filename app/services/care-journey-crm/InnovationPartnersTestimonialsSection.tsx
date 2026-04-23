const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

const TESTIMONIALS = [
  {
    quote:
      "Before Care Journey CRM, our front desk was chasing surgery confirmations over WhatsApp. Now the counsellor, coordinator, and surgeon all see the same status — no one’s waiting on a message.",
    name: "Prof. Dr. Snigdha Gowd",
    title: "Chairperson & CEO",
    location: "Dr. Gowds Dental Hospital, Hyderabad, Telangana",
  },
  {
    quote:
      "The post-op follow-up module changed how our nursing team works. Day-1 tasks are there automatically after discharge — we stopped missing calls we didn’t know we needed to make.",
    name: "Dr. Yuvrajsingh Gehlot",
    title: "Laparoscopic Surgeon, General Surgeon, Proctologist",
    location: "GutCare Clinics, Bangalore, India",
  },
] as const;

function TestimonialCard({
  quote,
  name,
  title,
  location,
}: {
  quote: string;
  name: string;
  title: string;
  location: string;
}) {
  return (
    <article className="bg-white rounded-[20px] p-8 sm:p-9 shadow-[var(--card-shadow)] flex flex-col h-full text-left">
      <div
        className="text-4xl sm:text-6xl text-secondary-green/14 select-none font-normal [font-family:Georgia,serif]"
        aria-hidden
      >
        "
      </div>
      <blockquote className="flex-1 mb-8">
        <p className="text-sm sm:text-base text-gray-text italic leading-relaxed">"{quote}"</p>
      </blockquote>
      <footer className="space-y-1 border-t border-gray-border pt-4">
        <p className="font-bold text-secondary-green text-sm">{name}</p>
        <p className="font-bold text-foreground text-xs leading-snug">{title}</p>
        <p className="text-xs text-gray-icon leading-snug mt-1">{location}</p>
      </footer>
    </article>
  );
}

export default function InnovationPartnersTestimonialsSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 innovation-partners-section-bg`}>
      <div className={CONTENT_MAX}>
        <h2 className="text-center font-bold text-secondary-green text-2xl md:text-3xl mb-10 md:mb-12 leading-tight max-w-4xl mx-auto">
          Trusted by our innovation partners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mx-auto">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard
              key={t.name}
              quote={t.quote}
              name={t.name}
              title={t.title}
              location={t.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
