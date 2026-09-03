import Link from "next/link";
import { ArrowRight, CalendarCheck, TrendingUp, UserPlus, Activity } from "lucide-react";
import Container from "./Container";

const floatingStats = [
  {
    label: "New Leads Today",
    value: "128",
    icon: UserPlus,
    className: "left-[6%] top-[16%] md:left-[30%] md:top-[14%] lg:left-[33%] lg:top-[16%]",
  },
  {
    label: "High Intent Patients",
    value: "248",
    icon: Activity,
    className: "right-[6%] top-[26%] md:right-[16%] md:top-[20%] lg:right-[20%] lg:top-[22%]",
  },
];

const inlineStats = [
  { label: "Conversion Rate", value: "24.6%", icon: TrendingUp },
  { label: "Appointments Booked", value: "36%", icon: CalendarCheck },
];

const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden pt-16 lg:pt-20">
      {/* Photographic backdrop with a clinical gradient fallback */}
      <div className="absolute inset-0 -z-20 home-hero-gradient" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/home-hero.jpg')" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-white via-white/85 to-white/20 md:from-white md:via-white/70 md:to-transparent"
        aria-hidden="true"
      />

      {/* Ghosted wordmark */}
      <div className="pointer-events-none absolute inset-x-0 top-6 -z-10 select-none overflow-hidden md:top-2">
        <p className="home-hero-wordmark text-center text-[22vw] leading-none font-extrabold tracking-tight">
          Patients
        </p>
      </div>

      <Container className="relative py-14 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left column — headline + CTAs */}
          <div className="lg:col-span-6">
            <p className="max-w-[18rem] text-[11px] leading-relaxed font-semibold tracking-[0.16em] text-home-eyebrow uppercase">
              Behavioral intelligence for Indian healthcare
            </p>

            <h1 className="mt-4 text-[34px] leading-[1.1] font-bold text-home-ink sm:text-[42px] md:text-[52px] lg:text-[56px]">
              Understand your
              <br className="hidden sm:block" /> patients.
              <span className="block text-home-heading">Grow your revenue.</span>
            </h1>

            {/* Inline metric chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {inlineStats.map(({ label, value, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-xl border border-home-border bg-white/90 px-4 py-3 shadow-[0_8px_24px_-12px_hsl(var(--home-heading)/0.35)] backdrop-blur-sm"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-home-chip text-home-heading">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="block text-[11px] text-home-muted">{label}</span>
                    <span className="block text-lg leading-tight font-bold text-home-success">
                      {value}
                    </span>
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary-blue px-6 text-sm font-semibold text-white transition-colors hover:bg-home-heading/90"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-home-border bg-white px-6 text-sm font-semibold text-home-heading transition-colors hover:bg-home-chip"
              >
                See the Platform
              </Link>
            </div>
          </div>

          {/* Right column — supporting copy */}
          <div className="lg:col-span-6 lg:pl-8">
            <p className="max-w-md text-sm leading-relaxed text-home-body md:text-base lg:ml-auto">
              DecentCare shows what every patient is doing, identifies who is ready to
              move forward, and helps your team take timely action. It connects your
              hospital records with your front desk and call team, so no patient is
              overlooked or lost.
            </p>
          </div>
        </div>

        {/* Floating KPI cards */}
        {floatingStats.map(({ label, value, icon: Icon, className }) => (
          <div
            key={label}
            className={`pointer-events-none absolute z-10 hidden items-center gap-3 rounded-xl border border-home-border bg-white/95 px-4 py-3 shadow-[0_14px_40px_-18px_hsl(var(--home-heading)/0.45)] backdrop-blur sm:flex ${className}`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-home-chip text-home-heading">
              <Icon className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[11px] text-home-muted">{label}</span>
              <span className="block text-xl leading-tight font-bold text-home-ink">{value}</span>
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default HeroSection;
