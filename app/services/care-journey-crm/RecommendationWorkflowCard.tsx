import { cn } from "@/app/components/lib/utils";

export interface RecommendationWorkflowCardProps {
  stepNumber: string;
  title: string;
  description: string;
  /** `insights`: gradient-1 top bar, ~16px radius, generous padding (insights grid). */
  variant?: "default" | "insights";
  /** Override step numeral color (default: gray-border, or bluish-gray for insights). */
  stepNumberClassName?: string;
}

export default function RecommendationWorkflowCard({
  stepNumber,
  title,
  description,
  variant = "default",
  stepNumberClassName,
}: RecommendationWorkflowCardProps) {
  const isInsights = variant === "insights";

  const stepClasses = cn(
    "leading-none select-none",
    isInsights ? "text-sm font-bold" : "font-dm-serif-display text-3xl sm:text-4xl",
    stepNumberClassName ?? "text-gray-border"
  );

  const body = (
    <>
      <span className={stepClasses} aria-hidden>
        {stepNumber}
      </span>
      <h3
        className={cn(
          "font-bold text-foreground",
          isInsights ? "mt-3 text-base sm:text-lg" : "mt-2 text-base"
        )}
      >
        {title}
      </h3>
      <p
        className={cn(
          "text-gray-icon leading-relaxed flex-1",
          isInsights ? "mt-3 text-sm sm:text-[15px]" : "mt-3 text-sm"
        )}
      >
        {description}
      </p>
    </>
  );

  if (isInsights) {
    return (
      <article className="rounded-2xl border border-gray-border bg-card overflow-hidden h-full flex flex-col shadow-[var(--card-shadow)] text-left">
        <div
          className="h-1 shrink-0"
          style={{ background: "var(--gradient-1)" }}
          aria-hidden
        />
        <div className="p-6 sm:p-8 flex flex-col flex-1">{body}</div>
      </article>
    );
  }

  return (
    <div className="rounded sm:rounded-lg border border-gray-border bg-destructive-foreground p-6 text-left h-full flex flex-col">
      {body}
    </div>
  );
}
