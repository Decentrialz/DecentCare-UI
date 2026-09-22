import { Star } from "lucide-react";
import drGowds from "@/app/assets/Dr.Gowds.png";
import lux from "@/app/assets/lux.svg";
import vaidya from "@/app/assets/vaidya.svg";
import Container from "./Container";
import SectionHeading from "./SectionHeading";

const featured = {
  quote:
    "Managing patient journeys across multiple dental specialities used to be chaotic. With Care Journey CRM, every appointment, follow-up, and case step is tracked automatically. Nothing falls through the cracks anymore.",
  name: "Prof. Dr. Snigdha Gowd",
  role: "Chairperson & CEO — Dr. Gowds Dental Hospitals, Hyderabad",
  avatar: drGowds,
  initials: "SG"
};

const reviews = [
  {
    quote:
      "We finally see which departments are pulling enquiries and which need attention. The channel-level view changed how we plan our spend each month.",
    name: "Lux Hospitals",
    role: "Multi-speciality hospital, Hyderabad",
    logo: lux,
    initials:"LH"
  },
  {
    quote:
      "Follow-ups used to depend on whoever was on shift. Now every patient gets nudged on time, and our repeat visits have become predictable rather than lucky.",
    name: "Pranavaidya",
    role: "Speciality care practice",
    logo: vaidya,
    initials: "PV"
  },
];

const Stars = () => (
  <div className="flex items-center gap-2" aria-label="5 out of 5 stars">
    {Array.from({ length: 5 }).map((_, index) => (
      <Star key={index} className="h-3 w-3 fill-home-amber text-home-amber" />
    ))}
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="home-section-gradient py-16 md:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What They Say About Us?"
          description="Real stories from real people."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:mt-14 lg:grid-cols-2 lg:gap-6 px-0 md:px-20">
          {/* Featured testimonial */}
          <article
            className="flex flex-col justify-between rounded-2xl p-7 text-white md:p-9"
            style={{
              background: "linear-gradient(163.7deg, #1E7FC4 0%, #0D5C94 42%, #0A4A78 100%)",
            }}
          >
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.16em] uppercase backdrop-blur">
                <Star className="h-2.5 w-2.5 fill-white/80 text-white" />
                Featured
              </span>

              <span aria-hidden="true" className="mt-4 block font-extrabold text-5xl leading-none text-white/50">
               "
              </span>

              <p className="mt-4 text-base leading-relaxed font-medium md:text-lg">
                {featured.quote}
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3 border-t border-white/20 pt-6">
             <div className="rounded-full h-11 w-11 bg-white/15 text-white text-base font-bold flex items-center justify-center leading-none">
                {featured.initials}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-bold">{featured.name}</p>
                <p className="mt-0.5 text-xs leading-snug text-white/70">
                  {featured.role}
                </p>
              </div>
            </div>
          </article>

          {/* Supporting reviews */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="flex flex-1 flex-col justify-between rounded-2xl border border-home-border bg-white p-6 md:p-7"
              >
                <div>
                  <span aria-hidden="true" className="block font-extrabold text-5xl leading-none text-home-success">
                    "
                  </span>
                  <p className="mt-4 text-sm leading-relaxed text-home-body md:text-base">
                    {review.quote}
                  </p>
                </div>

                <div className="mt-6">
                  <Stars />

                  <div className="mt-4 flex items-center gap-3 border-t border-home-border pt-4">
                    <div className="rounded-full h-11 w-11 bg-home-heading/10 text-home-heading text-base font-bold flex items-center justify-center leading-none">
                        {review.initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-home-ink">{review.name}</p>
                      <p className="mt-0.5 text-xs text-home-muted">{review.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;
