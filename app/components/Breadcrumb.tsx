import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  breadCrumbClass?: string;
}

const Breadcrumb = ({ items, breadCrumbClass }: BreadcrumbProps) => {
  if (!items || items.length === 0) {
    return null;
  }
  
  return (
    <div className={`inline-flex items-center gap-2 text-sm bg-background/85 rounded-full px-4 py-2 shadow-sm ${breadCrumbClass}`}>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          {item.href ? (
            <Link href={item.href} className="text-secondary-green hover:underline text-sm font-medium">
              {item.label}
            </Link>
          ) : (
            <span className="text-primary-blue font-semibold text-sm">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <ChevronRight className="w-3.5 h-3.5 text-secondary-green/50" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Breadcrumb;
