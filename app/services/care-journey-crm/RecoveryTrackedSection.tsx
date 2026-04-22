import type { CSSProperties } from "react";
import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronRight,
  Circle,
  Infinity as InfinityIcon,
} from "lucide-react";
import { cn } from "@/app/components/lib/utils";

const SECTION_PADDING = "px-4 md:px-8 lg:px-16 xl:px-20";
const CONTENT_MAX = "w-full mx-auto lg:max-w-7xl";

/** Timeline node diameter — connector centered on icons */
const TIMELINE_NODE_SIZE = "2.5rem"; /* w-10 / h-10 */

/** Vertical gap between steps (must match list `gap`) */
const TIMELINE_STEP_GAP = "2rem";


const LEFT_FEATURES = [
  {
    title: "Escalation Visibility",
    description:
      "See when follow-ups slip past due dates and who should act — before patients go quiet.",
    icon: AlertTriangle,
  },
  {
    title: "Lifetime Continuity",
    description:
      "Episode closure keeps the record intact so future visits reconnect to the same journey.",
    icon: InfinityIcon,
  },
] as const;

type TimelineStatus = "completed" | "active" | "pending";

const TIMELINE_STEPS: {
  title: string;
  subtitle: string;
  badge: string;
  badgeVariant: "completed" | "soft";
  status: TimelineStatus;
}[] = [
  {
    title: "Day 1",
    subtitle: "Post-discharge check · Pain & medication review",
    badge: "Completed",
    badgeVariant: "completed",
    status: "completed",
  },
  {
    title: "Week 1",
    subtitle: "Wound check · Recovery progress assessment",
    badge: "Completed",
    badgeVariant: "completed",
    status: "completed",
  },
  {
    title: "Month 1",
    subtitle: "Full recovery review · Patient feedback",
    badge: "Upcoming",
    badgeVariant: "soft",
    status: "active",
  },
  {
    title: "Episode Closed",
    subtitle: "Record retained · Lifetime continuity",
    badge: "Awaiting",
    badgeVariant: "soft",
    status: "pending",
  },
];

function TimelineIcon({ status }: { status: TimelineStatus }) {
  const nodeClass =
    "rounded-full flex items-center justify-center shrink-0 relative z-[1] w-[var(--timeline-node-size)] h-[var(--timeline-node-size)]";

  if (status === "completed") {
    return (
      <div
        className={`${nodeClass} border-2 border-secondary-green bg-[#DCFCE7]`}
      >
        <Check className="w-3 h-3 text-gray-icon" strokeWidth={2.5} aria-hidden />
      </div>
    );
  }
  if (status === "active") {
    return (
      <div
        className={`${nodeClass} border-2 border-primary-blue bg-primary-blue text-white`}
      >
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden />
      </div>
    );
  }
  return (
    <div
      className={`${nodeClass} border-2 border-gray-300 bg-soft-blue/60`}
      aria-hidden
    >
      <Circle className="w-4 h-4 text-gray-300" strokeWidth={2.5} aria-hidden />
    </div>
  );
}

function StatusBadge({
  label,
  variant,
}: {
  label: string;
  variant: "completed" | "soft";
}) {
  return (
    <span className={cn("inline-flex mt-2 rounded-full px-2.5 py-1 text-xs font-semibold bg-soft-blue", variant === "completed" ? "text-secondary-green" : "text-gray-400")}>
      {label}
    </span>
  );
}

const connectorVariant: Record<TimelineStatus, string> = {
  completed: "secondary-primary-soft-vertical-bg",
  active: "bg-primary-blue/15",
  pending: "",
}

export default function RecoveryTrackedSection() {
  return (
    <section className={`${SECTION_PADDING} py-16 md:py-20 bg-destructive-foreground`}>
      <div className={CONTENT_MAX}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left column */}
          <div className="max-w-xl lg:max-w-none">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
              Recovery tracked.
            </h2>
            <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-secondary-green leading-tight">
              Nothing missed.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-icon leading-relaxed">
              Structured follow-ups mean Day-1, Week-1, and Month-1 tasks stay visible to everyone
              responsible — not buried in chats or forgotten after discharge.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:gap-8">
              {LEFT_FEATURES.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex gap-4 items-start">
                    <div
                      className={`w-11 h-11 rounded-xl bg-primary-blue/10 flex items-center justify-center shrink-0 text-secondary-green`}
                      aria-hidden
                    >
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-foreground">{f.title}</p>
                      <p className="mt-1 text-xs sm:text-sm text-gray-icon leading-relaxed">
                        {f.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right column — vertical timeline */}
          <div className="relative lg:pl-4 flex flex-col min-h-0 h-full">
            <div
              className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto flex-1 flex flex-col min-h-0 w-full"
              style={
                {
                  "--timeline-node-size": TIMELINE_NODE_SIZE,
                  "--timeline-step-gap": TIMELINE_STEP_GAP,
                } as CSSProperties
              }
            >
              <ul className="flex flex-col gap-[var(--timeline-step-gap)] list-none m-0 p-0 relative z-[1]">
                {TIMELINE_STEPS.map((step, index) => {
                  const isLast = index === TIMELINE_STEPS.length - 1;
                  return (
                    <li key={step.title} className="flex gap-5 items-stretch min-h-0">
                      <div
                        className={`flex flex-col items-center shrink-0 w-[var(--timeline-node-size)] min-h-0 ${
                          isLast ? "self-start" : "self-stretch"
                        }`}
                      >
                        <TimelineIcon status={step.status} />
                        {step.status !== "pending" && (
                          <div
                            className={cn("w-0.5 min-h-0 flex-1", connectorVariant[step.status])}
                            aria-hidden
                          />
                        )}
                      </div>
                      <div className="min-w-0 pt-0.5 text-left">
                        <p className="text-base font-bold text-foreground">{step.title}</p>
                        <p className="mt-1 text-sm text-gray-icon leading-relaxed">{step.subtitle}</p>
                        <StatusBadge label={step.badge} variant={step.badgeVariant} />
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
