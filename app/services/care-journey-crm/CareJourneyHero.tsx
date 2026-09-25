import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import PatientOverviewCard from "./PatientOverviewCard";

export default function CareJourneyHero() {
  const features = [
    "7 Journey Stages",
    "5 Care Roles",
    "1 Connected System",
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6 text-gradient-heading-1 text-center lg:text-left" style={{
                  background: "linear-gradient(135deg, #0D5C94, #0D9488)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  paddingBottom: "0.15em",
                  lineHeight: 1.15,
                }}>
          Every patient.<br /> Every stage.<br /> Connected.
        </h1>

        {/* Mobile PatientOverviewCard - Show only on mobile */}
        <div className="lg:hidden mb-8">
          <PatientOverviewCard />
        </div>

        <div className="flex flex-nowrap gap-2 lg:gap-3 mb-8 justify-center lg:justify-start overflow-x-auto">
          <Button asChild className="rounded-lg py-2.5 px-4 lg:px-6 font-normal h-12 text-xs lg:text-sm whitespace-nowrap">
            <Link href="/contact">
              Request a Demo <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
          <Button asChild variant="whiteBackground" className="rounded-lg border border-border py-2.5 px-4 lg:px-6 font-normal h-12 text-xs lg:text-sm whitespace-nowrap">
            <Link href="#how-it-works">See How It Works</Link>
          </Button>
        </div>
        <div className="flex flex-wrap items-center gap-8 text-sm text-gray-text justify-center lg:justify-start">
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
      
      {/* Desktop PatientOverviewCard - Show only on desktop */}
      <div className="hidden lg:block lg:pl-4">
        <PatientOverviewCard />
      </div>
    </div>
  );
}
