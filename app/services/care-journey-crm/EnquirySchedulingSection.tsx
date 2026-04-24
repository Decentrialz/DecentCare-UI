import Image from "next/image";
import { CalendarCheck2 , Target  } from "lucide-react";
import crmFirstContact from "@/app/assets/crm-first-contact.png";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    title: "Unified Enquiry Handling",
    description:
      "Manage lead qualification, assign responsibilities, and move patients forward. All enquiry sources in one view.",
    icon: Target ,
  },
  {
    title: "Calendar-Based Scheduling",
    description:
      "Access doctor schedules and department calendars in daily and weekly views built for operational teams.",
    icon: CalendarCheck2 ,
  },
];

export default function EnquirySchedulingSection() {
  return (
    <section className={"bg-background"}>
      <div className={`${CONTENT_MAX} ${SECTION_PADDING} py-10 md:py-20`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-bold text-secondary-green leading-tight text-center lg:text-left">
              From first contact to checked in
            </h2>
            <p className="mt-3 text-sm sm:text-base text-gray-icon leading-relaxed text-center lg:text-left">
              Capture enquiries from calls, walk-ins, WhatsApp, and digital campaigns — all routed into one system without manual re-entry.
            </p>

            <div className="mt-8 space-y-8">
              {DEFAULT_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 bg-primary-blue/8"
                    >
                      <Icon className="w-5 h-5 text-primary-blue" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-foreground">
                        {f.title}
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-gray-icon leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={crmFirstContact}
              alt="Enquiry and scheduling UI"
              className="w-full max-w-[760px] h-auto"
              sizes="(max-width: 1024px) 100vw, 760px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

