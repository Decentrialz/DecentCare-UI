'use client';
import { Button } from "@/app/components/ui/button";
import { Menu, X, Send } from "lucide-react";
import dcLogo from "@/app/assets/dcLogo.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border w-full" style={{ maxWidth: '100vw' }}>
      <div className="w-full px-4 md:px-8 lg:px-16 xl:px-20 py-2">
        <div className="w-full mx-auto lg:max-w-7xl">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center">
              <Image src={dcLogo} alt="DecentCare Logo" width={60} height={40} />
            </div>
            <span className="text-xs font-semibold text-primary">DecentCare</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              About
            </a>
            <a href="#success-stories" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Success Stories
            </a>
            <a href="#blog" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              Blogs
            </a>
          </div>

          {/* CTA Button */}
          <Button className="h-[36px] px-4 rounded-[6px] bg-[#0D5C94] text-white flex items-center gap-2 shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)] hover:bg-[#0B4F7F] transition-colors">
            Let's Connect
          </Button>
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
            <div className="flex flex-col items-center gap-0.5">
              <div className="flex items-center">
                <Image src={dcLogo} alt="DecentCare Logo" width={50} height={33} />
              </div>
              <span className="text-[10px] font-semibold text-primary whitespace-nowrap">DecentCare</span>
            </div>
          </div>

          {/* Send Button */}
          <Button className="h-[40px] w-[40px] p-0 rounded-full bg-[#0D5C94] text-white flex items-center justify-center shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)] hover:bg-[#0B4F7F] transition-colors">
            <Send className="w-5 h-5" />
          </Button>
        </div>

        </div>
      </div>
    </nav>

    {/* Mobile Sidebar */}
    <div 
      className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setIsSidebarOpen(false)}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div 
        className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-end p-4 border-b">
            <button onClick={() => setIsSidebarOpen(false)} className="p-2" aria-label="Close menu">
              <X className="w-6 h-6 text-primary" />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 p-6">
            <a href="#home" className="block px-4 py-3 mb-2 text-sm font-medium text-primary bg-[#0D5C94]/10 rounded-lg" onClick={() => setIsSidebarOpen(false)}>
              Home
            </a>
            <a href="#services" className="block px-4 py-3 mb-2 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg transition-colors" onClick={() => setIsSidebarOpen(false)}>
              Services
            </a>
            <a href="#about" className="block px-4 py-3 mb-2 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg transition-colors" onClick={() => setIsSidebarOpen(false)}>
              About
            </a>
            <a href="#success-stories" className="block px-4 py-3 mb-2 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg transition-colors" onClick={() => setIsSidebarOpen(false)}>
              Success Stories
            </a>
            <a href="#blog" className="block px-4 py-3 mb-2 text-sm font-medium text-foreground/80 hover:bg-muted rounded-lg transition-colors" onClick={() => setIsSidebarOpen(false)}>
              Blogs
            </a>
          </div>

          {/* Sidebar Footer */}
          <div className="p-6 border-t">
            <div className="flex items-center justify-center">
              <Image src={dcLogo} alt="DecentCare Logo" width={80} height={53} />
            </div>
            <p className="text-center text-sm font-semibold text-primary mt-2">DecentCare</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;