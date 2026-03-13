import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  if (!items || items.length === 0) {
    return null;
  }
  
  return (
    <div className="flex items-center gap-2 text-sm bg-white rounded-full px-4 py-2 shadow-sm">
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-accent hover:underline">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground font-medium">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-muted-foreground">›</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
