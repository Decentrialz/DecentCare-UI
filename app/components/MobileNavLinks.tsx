"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp, CircleChevronRight } from "lucide-react";
import { NAV } from "./HeaderNav";

/**
 * Mobile menu content, matching the "DC UI - Mobile" Figma frames:
 * Home, Solutions (accordion card), Success Stories, Resources, Who We Are,
 * then the "Not sure where to start?" card.
 * Uses the same NAV data as the desktop HeaderNav.
 */
export default function MobileNavLinks({ onNavigate }: { onNavigate: () => void }) {
  const [openId, setOpenId] = useState<string | null>(null);
  const pathname = usePathname();

  const rowBase =
    "flex w-full items-center justify-between rounded-xl px-4 py-3 text-[13px] font-medium transition-colors";
  const rowIdle = "text-foreground/80 hover:bg-[#E8F3F0] hover:text-[#3F8F82]";
  const rowActive = "bg-[#E8F3F0] text-[#3F8F82]";

  return (
    <div className="flex flex-col gap-2">
      <ul className="flex flex-col gap-1.5">
        {/* Home */}
        <li>
          <Link
            href="/"
            onClick={onNavigate}
            className={`${rowBase} ${pathname === "/" ? rowActive : rowIdle}`}
          >
            Home
          </Link>
        </li>

        {NAV.map((entry) => {
          if ("href" in entry) {
            return (
              <li key={entry.id}>
                <Link
                  href={entry.href}
                  onClick={onNavigate}
                  className={`${rowBase} ${pathname === entry.href ? rowActive : rowIdle}`}
                >
                  {entry.label}
                </Link>
              </li>
            );
          }

          const isOpen = openId === entry.id;
          const Chevron = isOpen ? ChevronUp : ChevronDown;

          return (
            <li key={entry.id}>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : entry.id)}
                className={`${rowBase} ${isOpen ? rowActive : rowIdle}`}
              >
                {entry.label}
                <Chevron size={14} />
              </button>

              {isOpen && (
                <div className="mt-2 rounded-2xl border border-[#EEF2F4] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
                  <ul className="flex flex-col gap-4">
                    {entry.items.map((item) => (
                      <li key={item.label}>
                        {item.comingSoon ? (
                          <div className="flex cursor-not-allowed items-center justify-between gap-3 text-[#8A94A6]">
                            <span className="flex items-center text-xs font-medium">
                              {item.label}
                              <span className="ml-2 rounded-full bg-[#DCEBE8] px-2 py-0.5 text-[10px] font-medium text-[#3F7F86]">
                                Coming Soon
                              </span>
                            </span>
                            <CircleChevronRight size={16} className="shrink-0" />
                          </div>
                        ) : (
                          <Link
                            href={item.href}
                            onClick={onNavigate}
                            className="group flex items-center justify-between gap-3"
                          >
                            <span>
                              <span className="block text-xs font-semibold text-[#1F2A44] group-hover:text-[#3F8F82]">
                                {item.label}
                              </span>
                              {item.description && (
                                <span className="mt-0.5 block text-[11px] leading-4 text-[#5B6577]">
                                  {item.description}
                                </span>
                              )}
                            </span>
                            <CircleChevronRight
                              size={16}
                              className="shrink-0 text-[#2B3A55] group-hover:text-[#3F8F82]"
                            />
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Not sure where to start? */}
      <div className="mt-6 rounded-xl bg-[#E9F2F0] p-4">
        <h3 className="text-[13px] font-medium text-[#1F2A44]">Not sure where to start?</h3>
        <p className="mt-2 text-[11px] leading-[18px] text-[#5B6577]">
          Get a free 30-min AI growth audit. We&apos;ll map your digital gaps and show you the fastest
          path to more patients.
        </p>
        <Link
          href="/contact"
          onClick={onNavigate}
          className="mt-4 flex items-center justify-between rounded-md bg-[#3F8F82] px-3.5 py-2.5 text-xs font-medium text-white transition-colors hover:bg-[#357a6f]"
        >
          Book a Free Audit
          <CircleChevronRight size={16} />
        </Link>
      </div>
    </div>
  );
}
