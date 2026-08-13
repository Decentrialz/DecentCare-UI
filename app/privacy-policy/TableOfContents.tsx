"use client";

import { useEffect, useState } from "react";

export interface TocItem {
  id: string;
  label: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  const activeIndex = items.findIndex((t) => t.id === activeId);
  const progress = activeIndex === -1 ? 0 : ((activeIndex + 1) / items.length) * 100;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const el = document.getElementById(id);
    if (!el) return;

    const offset = 100; // Adjust for fixed header
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="bg-white p-6 sticky top-24">
      <h2 className="text-sm font-semibold text-foreground mb-4">
        Table of Contents
      </h2>

      <div className="relative pl-5">
        {/* Background track */}
        <div className="absolute left-0 top-0 w-[4px] h-full bg-gray-background rounded" />

        {/* Progress bar */}
        <div
          className="absolute left-0 top-0 w-[4px] bg-secondary-green rounded transition-all duration-300"
          style={{ height: `${progress}%` }}
        />

        <ul className="space-y-5">
          {items.map((item) => {
            const isActive = activeId === item.id;

            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className={`block text-sm transition-colors ${
                    isActive
                      ? "text-secondary-green font-medium"
                      : "text-gray-icon hover:text-primary-blue"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
