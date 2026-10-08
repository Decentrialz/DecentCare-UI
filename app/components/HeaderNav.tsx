"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, CircleChevronRight } from "lucide-react";

type Item = {
  label: string;
  href: string;
  description?: string;
  comingSoon?: boolean;
};

type NavEntry =
  | { id: string; label: string; href: string }
  | { id: string; label: string; variant: "mega" | "list"; items: Item[] };

const NAV: NavEntry[] = [
  {
    id: "solutions",
    label: "Solutions",
    variant: "mega",
    items: [
      { label: "AI Search Engine Optimisation", description: "Search intelligence for healthcare visibility", href: "/services/seo-ai-search" },
      { label: "AI Social Media Marketing", description: "AI insights & automation for patient engagement", href: "/services/smm" },
      { label: "AI Paid Advertising", description: "AI-driven optimisation for maximum ROI", href: "/services/paid-marketing" },
      { label: "AI-Enabled Care Journey CRM", description: "AI-enabled patient lifecycle management", href: "/services/care-journey-crm" },
      { label: "AI Growth Consulting", description: "Strategy & AI-driven forecasting for scale", href: "/services/business-strategy" },
      { label: "AI Web Development", description: "AI-powered personalisation & conversion", href: "/services/web-development" },
    ],
  },
  { id: "success", label: "Success Stories", href: "/success" },
  {
    id: "resources",
    label: "Resources",
    variant: "list",
    items: [
      { label: "Blogs", href: "/blog" },
      { label: "Case Studies", href: "#", comingSoon: true },
      { label: "Events", href: "#", comingSoon: true },
    ],
  },
  {
    id: "who",
    label: "Who We Are",
    variant: "list",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "News & Press", href: "#", comingSoon: true },
    ],
  },
];

const TEAL = "#3F8F82";

function ComingSoon() {
  return (
    <span className="ml-2 rounded-full bg-[#DCEBE8] px-2 py-0.5 text-[10px] font-medium text-[#3F7F86]">
      Coming Soon
    </span>
  );
}

export default function HeaderNav({ headerHeight = 73 }: { headerHeight?: number }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const wrapRef = useRef<HTMLUListElement>(null);
  const pathname = usePathname();

  useEffect(() => setOpenId(null), [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const inNav = wrapRef.current?.contains(target);
      const inMega = (target as HTMLElement).closest?.("[data-mega-menu]");
      if (!inNav && !inMega) setOpenId(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenId(null);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const toggle = (id: string) => setOpenId((cur) => (cur === id ? null : id));

  return (
    <ul ref={wrapRef} className="flex items-center gap-2">
      {NAV.map((entry) => {
        if ("href" in entry) {
          return (
            <li key={entry.id}>
              <Link
                href={entry.href}
                className="block rounded-md px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-[#E8F3F0] hover:text-[#3F8F82]"
              >
                {entry.label}
              </Link>
            </li>
          );
        }

        const isOpen = openId === entry.id;
        const Chevron = isOpen ? ChevronUp : ChevronDown;

        return (
          <li key={entry.id} className={entry.variant === "list" ? "relative" : ""}>
            <button
              type="button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={() => toggle(entry.id)}
              style={isOpen ? { color: TEAL } : undefined}
              className={`flex items-center gap-1 rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                isOpen ? "bg-[#E8F3F0]" : "text-foreground/80 hover:bg-[#E8F3F0] hover:text-[#3F8F82]"
              }`}
            >
              {entry.label}
              <Chevron size={14} />
            </button>

            {isOpen && entry.variant === "list" && (
              <div className="absolute left-0 top-[calc(100%+28px)] w-[272px] rounded-2xl bg-white p-8 shadow-xl">
                <ul className="flex flex-col gap-9">
                  {entry.items.map((item) => (
                    <li key={item.label}>
                      {item.comingSoon ? (
                        <div className="flex cursor-not-allowed items-center justify-between text-[13px] text-[#8A94A6]">
                          <span className="flex items-center">
                            {item.label}
                            <ComingSoon />
                          </span>
                          <CircleChevronRight size={16} />
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="group -mx-3 -my-2 flex items-center justify-between rounded-lg px-3 py-2 text-[13px] font-medium text-[#1F2A44] transition-colors hover:bg-[#E8F3F0] hover:text-[#3F8F82]"
                        >
                          {item.label}
                          <CircleChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {isOpen && entry.variant === "mega" && (
              <div
                data-mega-menu
                style={{ top: headerHeight + 12 }}
                className="fixed inset-x-3 z-50 mx-auto grid max-w-[1400px] grid-cols-[1fr_240px] gap-x-6 rounded-2xl bg-white p-6 shadow-xl"
              >
                <ul className="grid grid-cols-2 gap-x-6 gap-y-3 py-3 pl-6 pr-3">
                  {entry.items.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href} className="group -mx-3 flex items-center justify-between gap-4 rounded-lg px-3 py-2.5 transition-colors hover:bg-[#EEF6F4]">
                        <span>
                          <span className="block text-[13px] font-medium text-[#1F2A44] group-hover:text-[#3F8F82]">
                            {item.label}
                          </span>
                          <span className="block text-xs text-[#5B6577]">{item.description}</span>
                        </span>
                        <CircleChevronRight size={16} className="shrink-0 text-[#2B3A55] transition-transform group-hover:translate-x-0.5 group-hover:text-[#3F8F82]" />
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col justify-between rounded-xl bg-[#E9F2F0] p-[18px]">
                  <div>
                    <h3 className="text-[15px] font-medium text-[#1F2A44]">Not sure where to start?</h3>
                    <p className="mt-3 text-xs leading-[19px] text-[#5B6577]">
                      Get a free 30-min AI growth audit. We&apos;ll map your digital gaps and show you the
                      fastest path to more patients.
                    </p>
                  </div>
                  <Link
                    href="/contact"
                    className="group mt-4 flex items-center justify-between rounded-md bg-[#3F8F82] px-3.5 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#357a6f]"
                  >
                    Book a Free Audit
                    <CircleChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
