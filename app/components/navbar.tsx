import { Button } from "@/app/components/ui/button";
import { ArrowRight } from "lucide-react";
import dcLogo from "@/app/assets/dcLogo.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-2">
        <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-12 lg:h-14">
          {/* Logo */}
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center">
              <Image src={dcLogo} alt="DecentCare Logo" width={60} height={40} />
            </div>
            <span className="text-xs font-semibold text-primary">DecentCare</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
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
            <Button
              className="
    h-[36px]
    px-4
    rounded-[6px]
    bg-[#0D5C94]
    text-white
    flex items-center gap-2
    shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)]
    hover:bg-[#0B4F7F]
    transition-colors
  "
            >
              Let's Connect
            </Button>

        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;