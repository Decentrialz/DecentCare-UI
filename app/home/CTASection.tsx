import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "./Container";

const CTASection = () => {
  return (
    <section className="home-cta-gradient relative isolate overflow-hidden py-16 text-white md:py-20 lg:py-24">
      {/* Decorative rings */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full border border-white/10" />
        <div className="absolute -right-32 -bottom-52 h-[520px] w-[520px] rounded-full border border-white/10" />
      </div>

      <Container className="text-center">
        <h2 className="mx-auto max-w-2xl text-2xl leading-tight font-bold sm:text-3xl md:text-[36px]">
          See it on your own patient data.
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
          Hospitals join on the first call, just a walkthrough of how OmniLens,
          OmniJourney, and OmniCare would work for your hospital.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-white px-6 text-sm font-semibold text-home-heading transition-colors hover:bg-white/90 sm:w-auto"
          >
            Request a Demo
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/services"
            className="inline-flex h-12 w-full items-center justify-center rounded-lg border border-white/40 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Explore the Platform
          </Link>
        </div>

        <p className="mt-8 text-xs text-white/60">
          Designed for clinics, hospitals, and healthcare teams managing real-world patient
          flows.
        </p>
      </Container>
    </section>
  );
};

export default CTASection;
