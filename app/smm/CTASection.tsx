import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

const ctaPoints = [
  "What to prioritise across platforms for your services",
  "The content formats and series to run based on patient intent",
  "How to structure enquiries from social (DMs, booking actions, front desk routing)",
  "A clear 30-60 day execution direction",
];

const CTASection = () => (
  <section className="py-20 lg:py-28 bg-gradient-to-br from-primary to-accent">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
        Get a Social Media Strategy Call
      </h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-10">
        A focused session to align your goals, channels, content direction, and enquiry flow. Then we recommend the right monthly plan.
      </p>
      <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10">
        {ctaPoints.map((point, i) => (
          <div key={i} className="bg-primary-foreground/10 rounded-xl p-4 flex items-start gap-3 text-left">
            <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-accent-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-primary-foreground">{point}</span>
          </div>
        ))}
      </div>
      <a href="/contact">
        <Button variant="outline" size="lg" className="gap-2 bg-primary-foreground text-primary border-none hover:bg-primary-foreground/90 hover:text-primary">
          Schedule a Strategy Call
          <ArrowRight className="w-4 h-4" />
        </Button>
      </a>
    </div>
  </section>
);

export default CTASection;
