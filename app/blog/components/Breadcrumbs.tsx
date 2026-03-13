import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  className?: string;
}

export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-gray-icon ${className}`}>
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <ChevronRight className="w-4 h-4 text-gray-400 shrink-0" />}
            {item.href ? (
              <Link href={item.href} className="hover:text-primary-blue transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground font-medium line-clamp-1">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
