interface LegalSectionHeaderProps {
  index: number;
  eyebrow: string;
  title: string;
}

const LegalSectionHeader = ({ index, eyebrow, title }: LegalSectionHeaderProps) => {
  return (
    <div className="mb-8 flex items-start gap-4">
      <span className="mt-0.5 flex items-center justify-center w-10 h-10 bg-primary-blue text-white rounded-xl text-base font-bold shadow-[0_8px_20px_rgba(13,92,148,0.28)]">
        {index}
      </span>
      <div>
        <p className="text-[11px] font-semibold text-secondary-green tracking-[0.14em] uppercase mb-1">{eyebrow}</p>
        <h2 className="text-xl md:text-2xl font-bold text-foreground font-['Plus_Jakarta_Sans',sans-serif]">{title}</h2>
      </div>
    </div>
  );
};

export default LegalSectionHeader;
