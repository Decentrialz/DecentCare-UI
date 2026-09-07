interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
  titleClassName?: string;
}

const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
  titleClassName = "",
}: SectionHeadingProps) => {
  const isCentered = align === "center";

  return (
    <div
      className={`${isCentered ? "mx-auto text-center" : "text-left"} ${className}`}
    >
      <p className="inline-flex rounded-full bg-[#0D9488]/10 px-3 py-1.5 text-sm font-medium text-home-success md:px-6 md:py-1.5 md:text-lg text-center">
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-2xl leading-[1.25] font-extrabold text-home-heading sm:text-[28px] md:text-[32px] lg:text-[36px] ${titleClassName}`}
      >
        {title}
      </h2>

      {description ? (
        <p
          className={`mt-4 text-sm leading-relaxed text-home-body md:text-base ${isCentered ? "mx-auto max-w-2xl" : ""}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
