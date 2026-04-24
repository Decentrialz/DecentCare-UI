import type { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

export interface RoleTaskCardProps {
  icon: LucideIcon;
  title: string;
  /** Single line/block of copy; one chevron is shown to the left of the whole text. */
  description: string;
}

export default function RoleTaskCard({ icon: Icon, title, description }: RoleTaskCardProps) {
  return (
    <article className="rounded-xl border border-gray-border bg-card px-5 py-10 h-full flex flex-col text-left shadow-[var(--card-shadow)]">
      <div
        className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-secondary-green shrink-0"
        aria-hidden
      >
        <Icon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-secondary-green" strokeWidth={1.75} />
      </div>
      <h3 className="mt-4 text-base font-bold text-foreground">{title}</h3>
      <div className="mt-3 flex gap-1 items-start flex-1">
        <ChevronRight
          className="w-3 h-3 shrink-0 text-secondary-green mt-0.5"
          strokeWidth={3}
          aria-hidden
        />
        <p className="text-[11px] md:text-sm text-gray-icon leading-tight">{description}</p>
      </div>
    </article>
  );
}
