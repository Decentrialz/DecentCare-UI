"use client";

import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 overflow-hidden">
      {/* Hero Container */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80"
              alt="Doctor with patient"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Right Side - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Best Piles Laser Treatment in Hyderabad
            </h1>

            <ul className="space-y-4 text-base md:text-lg lg:text-xl">
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>Top Doctor for Piles Laser Treatment</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>Laser + Harmonic Treatment for Quick Relief</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>15-Min Daycare Procedure, No Cuts</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>No Pain. No Recurrence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>100% Cure with Advanced Laser</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>All Insurances Accepted (Cashless)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-white text-2xl">°</span>
                <span>0% EMI | 10,000+ Patients Treated</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fixed Side Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-0">
        <a
          href="https://wa.me/917969084448"
          target="_blank"
          rel="noopener noreferrer"
          data-track="whatsapp_clicked"
          data-track-location="hero_sidebar"
          data-track-phone="917969084448"
          className="bg-purple-300 hover:bg-purple-400 text-purple-900 px-4 py-6 flex flex-col items-center justify-center transition-colors border-b border-purple-400"
        >
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        
        <a
          href="#appointment"
          data-track="appointment_clicked"
          data-track-location="hero_sidebar"
          className="bg-purple-300 hover:bg-purple-400 text-purple-900 px-4 py-6 flex flex-col items-center justify-center transition-colors border-b border-purple-400"
        >
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-medium">Appointment</span>
        </a>
        
        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          data-track="maps_clicked"
          data-track-location="hero_sidebar"
          className="bg-purple-300 hover:bg-purple-400 text-purple-900 px-4 py-6 flex flex-col items-center justify-center transition-colors"
        >
          <svg className="w-6 h-6 mb-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 5.697 7.597 16.403 7.597 16.403s7.597-10.706 7.597-16.403C19.597 3.399 16.198 0 12 0zm0 11.5a3.903 3.903 0 110-7.806 3.903 3.903 0 010 7.806z"/>
          </svg>
          <span className="text-xs font-medium">Google Maps</span>
        </a>
      </div>
    </section>
  );
}
