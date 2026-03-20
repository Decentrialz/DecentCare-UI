import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";

export default function CareJourneyHero() {
  const features = [
    "7 Journey Stages",
    "5 Care Roles",
    "1 Connected System",
  ];

  return (
    <div className="flex flex-col justify-center">
      <p className="text-sm font-bold uppercase tracking-wide text-secondary-green mb-4">
        AI-ENABLED CARE JOURNEY CRM
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-gradient-heading-1">
        Every patient.<br /> Every stage.<br /> Connected.
      </h1>
      <div className="flex flex-wrap gap-3 mb-8">
        <Button asChild className="rounded-lg py-2.5 px-6 font-normal h-12">
          <Link href="/contact">
            Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </Button>
        <Button asChild variant="whiteBackground" className="rounded-lg border border-border py-2.5 px-6 font-normal h-12">
          <Link href="#how-it-works">See How It Works</Link>
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-8 text-sm text-gray-text">
        {features.map((item, i) => (
          <span key={item} className="flex items-center gap-2">
            
              <span
                className="w-2 h-2 rounded-full bg-secondary-green shrink-0"
                aria-hidden
              />
            <span className="text-sm text-gray-text">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
