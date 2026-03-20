import { CircleFadingPlus } from "lucide-react";


export default function AutomaticTransitionFeaturedCard() {
  return (
    <article className="rounded-xl sm:rounded-2xl border border-secondary-green/50 bg-destructive-foreground p-5 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
        <div
          className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center text-secondary-green"
          aria-hidden
        >
          <CircleFadingPlus className="w-4 h-4 sm:w-5.5 sm:h-5.5 text-secondary-green" />
        </div>
        <div className="min-w-0 flex-1 text-left">
          <h3 className="text-sm sm:text-base font-bold text-foreground">
            Automatic Transition to Follow-Up
          </h3>
          <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-gray-icon leading-relaxed">
            Once discharge is completed, Day-1, Week-1, and Month-1 follow-up tasks are created
            automatically. No coordinator action required.
          </p>
        </div>
      </div>
    </article>
  );
}
