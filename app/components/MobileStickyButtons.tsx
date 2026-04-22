'use client';
import { Button } from "@/app/components/ui/button";
import { Send, Phone, PhoneCall } from "lucide-react";

const MobileStickyButtons = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-border shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.08)] p-3" style={{ maxWidth: '100vw' }}>
      <div className="grid grid-cols-2 gap-3">
        {/* Let's Connect Button */}
        <Button className="h-[48px] rounded-[40px] bg-[#0D5C94] text-white flex items-center justify-center gap-2 shadow-[0_4px_20px_-2px_rgba(13,92,148,0.08)] hover:bg-[#0B4F7F] transition-colors">
          <Send className="w-5 h-5" />
          <span className="font-medium">Let's Connect</span>
        </Button>

        {/* Call Now Button */}
        <Button variant="outline" className="h-[48px] rounded-[40px] border-2 border-[#0D5C94] text-[#0D5C94] flex items-center justify-center gap-2 hover:bg-[#0D5C94]/5 transition-colors">
          <Phone className="w-5 h-5" />
          <span className="font-medium">+91 8065916085</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileStickyButtons;
