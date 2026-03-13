interface SectionTitleWithCountProps {
  title: string;
  countLabel: string;
  className?: string;
}

export default function SectionTitleWithCount({
  title,
  countLabel,
  className = "",
}: SectionTitleWithCountProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className="w-1.5 rounded-full shrink-0 self-stretch"
        style={{ background: "var(--gradient-2)" }}
        aria-hidden
      />
      <div>
        <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
          {title}
          <span className="text-base text-gray-icon font-normal">
            ( {countLabel} )
          </span>
        </h2>
      </div>
    </div>
  );
}
