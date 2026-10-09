'use client';
import { Button } from "@/app/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import headerLogo from "@/app/assets/logo_header.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import HeaderNav from "@/app/components/HeaderNav";
import MobileNavLinks from "@/app/components/MobileNavLinks";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // lock page scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border w-full" style={{ maxWidth: '100vw' }}>
      <div className="container mx-auto px-4 md:px-8 lg:px-16 py-2 max-w-[1440px]">
        <div className="w-full mx-auto">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <Link href="/"
              className="flex flex-col items-center gap-1 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="flex items-center">
                <Image src={headerLogo} alt="DecentCare Logo" width={50} height={40} />
              </div>
            </Link>
          </div>

          {/* Navigation Links (Solutions, Success Stories, Resources, Who We Are) */}
          <HeaderNav headerHeight={73} />

          {/* CTA Button */}
          <a href="tel:08065916085">
            <Button className="h-[36px] px-4 rounded-[6px] bg-[#0D5C94] text-white flex items-center gap-2 shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)] hover:bg-[#0B4F7F] transition-colors" style={{cursor: 'pointer'}}>
              <Phone className="w-5 h-5" />
              08065916085
            </Button>
          </a>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between h-12">
          <div className="flex items-center gap-3">
            {/* Hamburger Menu */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 -ml-2"
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-primary" />
            </button>

            {/* Logo */}
            <Link href="/"
              className="flex flex-col items-center gap-0.5 cursor-pointer"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <div className="flex items-center">
                <Image src={headerLogo} alt="DecentCare Logo" width={50} height={33} />
              </div>
            </Link>
          </div>

          {/* Call Button */}
          <a href="tel:08065916085">
            <Button className="h-[40px] px-4 rounded-full bg-[#0D5C94] text-white flex items-center justify-center gap-2 shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)] hover:bg-[#0B4F7F] transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call</span>
            </Button>
          </a>
        </div>

        </div>
      </div>
    </nav>

    {/* Mobile menu: full-screen, matches the "DC UI - Mobile" Figma frames */}
    <div
      className={`fixed inset-0 z-[60] bg-white md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      aria-hidden={!isSidebarOpen}
    >
      <div className="flex h-full flex-col">
        {/* Close button */}
        <div className="flex items-center justify-end px-5 py-4">
          <button onClick={() => setIsSidebarOpen(false)} className="p-2" aria-label="Close menu">
            <X className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Links (same menu as desktop) */}
        <div className="flex-1 overflow-y-auto px-5 pb-6">
          <MobileNavLinks onNavigate={() => setIsSidebarOpen(false)} />
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center border-t border-[#EEF2F4] py-6">
          <Image src={headerLogo} alt="DecentCare Logo" width={96} height={64} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
