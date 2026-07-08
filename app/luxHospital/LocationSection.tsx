"use client";

import React from 'react';
import Image from 'next/image';
import { trackPhoneClick, useVirtualNumber } from '@/lib/tracking';

export default function LocationSection() {
  const { telHref, displayNumber, virtualNumber, loading, error } = useVirtualNumber();

  const isNumberReady = Boolean(telHref && displayNumber);
  const showStaticFallback = Boolean(error) && !isNumberReady;
  const isNumberLoading = loading && !isNumberReady && !showStaticFallback;
  const callHref = isNumberReady ? telHref! : (showStaticFallback ? 'tel:07969084448' : undefined);
  const callLabel = isNumberReady ? displayNumber! : (showStaticFallback ? '07969084448' : 'Loading...');
  const dialedNumber = isNumberReady ? (virtualNumber || displayNumber || '') : (showStaticFallback ? '07969084448' : '');
  const callLabelNode = isNumberLoading
    ? <span className="inline-block h-5 w-28 rounded bg-purple-200 animate-pulse" aria-label="Loading call number" />
    : callLabel;

  const handlePhoneClick = () => {
    if (!dialedNumber) return;
    trackPhoneClick(dialedNumber, 'location_section');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-900 mb-12">
          Our Hospital Location
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map - Left Side */}
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0973284893234!2d78.39024631487755!3d17.445904288047436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f2b2e731%3A0x4d2fbd28e24f5db4!2sHitech%20City%20Main%20Rd%2C%20HITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          {/* Details - Right Side */}
          <div className="space-y-6">
            {/* Hospital Name & Description */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                LUX Hospitals – Piles Treatment | Laser Therapy | Hemorrhoids Care | Minimally Invasive Experts
              </h3>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-gray-900">4.8</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-6 h-6 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-lg text-gray-600">847 Google Reviews</span>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg text-gray-700 leading-relaxed">
                Plot no: 116, Lumbini Enclave Hitech city main road, Landmark: near IKEA, 
                Gachibowli, Hyderabad, Telangana 500081
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                data-track="get_direction_clicked"
                data-track-location="location_section"
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C7.802 0 4.403 3.399 4.403 7.597c0 5.697 7.597 16.403 7.597 16.403s7.597-10.706 7.597-16.403C19.597 3.399 16.198 0 12 0zm0 11.5a3.903 3.903 0 110-7.806 3.903 3.903 0 010 7.806z"/>
                </svg>
                Get Direction
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=LUX+Hospitals+Hyderabad"
                target="_blank"
                rel="noopener noreferrer"
                data-track="reviews_clicked"
                data-track-location="location_section"
                className="flex-1 bg-white hover:bg-gray-50 text-gray-900 font-semibold py-4 px-6 rounded-lg flex items-center justify-center gap-3 transition-colors shadow-md border-2 border-gray-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                Reviews
              </a>
            </div>

            {/* Contact Information */}
            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-200">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                </svg>
                <a 
                  href={callHref}
                  onClick={handlePhoneClick}
                  aria-disabled={!callHref}
                  className={`text-xl font-semibold ${callHref ? 'text-purple-900 hover:text-purple-700' : 'text-purple-600 cursor-not-allowed'}`}
                >
                  {callLabelNode}
                </a>
              </div>
              <p className="text-gray-600">
                Call us for appointments, inquiries, or emergency consultations
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
