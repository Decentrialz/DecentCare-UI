import { Phone, Mail, MapPin, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import dcLogo from "@/app/assets/dcLogo.svg";
import Image from "next/image";
import vector from "@/app/assets/Vector.svg";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-[#0F1729] text-primary-foreground pb-24 md:pb-0">
      <div className="px-4 md:px-8 lg:px-16 xl:px-20 py-4">
        <div className="w-full mx-auto lg:max-w-7xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 lg:min-w-[300px]">
            <div className="flex flex-col gap-1">
            <div className="flex items-center">
              <Image src={dcLogo} alt="DecentCare Logo" width={60} height={40} />
            </div>
            <span className="text-xs font-semibold text-[#FFFFFF]">Decent<span className="text-accent">Care</span></span>
          </div>
            <p className="text-sm text-[#FBFCFD]/60 ">
              DecentCare is an AI-enabled Care Journey CRM designed to help healthcare teams streamline patient journeys, appointments, and operational coordination with greater clarity and efficiency.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-[10%]">
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Image src={vector} alt="Twitter" width={16} height={16} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-3 text-sm text-[#FBFCFD]/60">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Patient Journey Management</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Appointment & Scheduling</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Care Team Coordination</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Reports & Insights</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Digital Marketing & Growth</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#FBFCFD]/60">
              <li>
                <Link href="/services" className="hover:text-primary-foreground transition-colors">Service</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-foreground transition-colors">About</Link>
              </li>
              <li>
                <Link href="/success" className="hover:text-primary-foreground transition-colors">Success Stories</Link>
              </li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <ul className="space-y-4 text-sm text-[#FBFCFD]/60">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 text-[#FBFCFD]/60" />
                <span>+1 877 705 1914</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 mt-0.5 text-[#FBFCFD]/60" />
                <span>support@decentcariz.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-8 h-8 mt-0.5 text-[#FBFCFD]/60" />
                <span>
                  India HQ:<br />
                  T-Hub Foundation, I/C, 8(A), Raimaktha, Raidurgam, Hyderabad, Telangana 500032, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/50">
              © 2025 DecentCare. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/50">
              AI-powered growth, built responsibly for healthcare.
            </p>
            <div className="flex gap-4 text-sm text-primary-foreground/50">
              <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
