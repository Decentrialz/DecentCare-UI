"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { trackPhoneClick } from '@/lib/tracking';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Reviews', href: '#reviews' },
    { name: "FAQ's", href: '#faqs' },
    { name: 'Contact Us', href: '#contact' }
  ];

  const handlePhoneClick = (location: string) => {
    trackPhoneClick('07969084448', location);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {/* Hospital Logo */}
              <div className="flex items-center gap-2">
                <div 
                  className="text-purple-600 text-2xl font-bold flex items-center gap-1 cursor-pointer"
                  data-track="logo_clicked"
                  data-track-location="header"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-1 11h-4v4h-4v-4H6v-4h4V6h4v4h4v4z"/>
                  </svg>
                  <span className="text-xl font-bold">LUX HOSPITALS</span>
                </div>
              </div>

              {/* Badge Icons */}
              <div className="hidden lg:flex items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-yellow-100 border-2 border-yellow-400 flex items-center justify-center">
                  <span className="text-yellow-700 font-bold text-xs">ISO</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-green-100 border-2 border-green-400 flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                data-track="nav_link_clicked"
                data-track-link={link.name}
                data-track-location="header_desktop"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors text-base"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Phone Number Button */}
          <div className="hidden lg:flex">
            <a
              href="tel:07969084448"
              onClick={() => handlePhoneClick('header_desktop')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              07969084448
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-track="mobile_menu_toggled"
            data-track-location="header_mobile"
            data-track-action={isMobileMenuOpen ? 'close' : 'open'}
            className="lg:hidden p-2 text-gray-700 hover:text-purple-600"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                data-track="nav_link_clicked"
                data-track-link={link.name}
                data-track-location="header_mobile"
                className="text-gray-700 hover:text-purple-600 font-medium transition-colors py-2"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:07969084448"
              onClick={() => handlePhoneClick('header_mobile')}
              className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg mt-2"
            >
              <Phone className="w-5 h-5" />
              07969084448
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
