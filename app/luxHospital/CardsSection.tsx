"use client";

import React from 'react';
import Image from 'next/image';

export default function CardsSection() {
  const cards = [
    {
      id: 1,
      title: 'Book an Appointment',
      bgColor: 'bg-gradient-to-br from-green-200 to-green-300',
      image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=600&q=80',
      link: '#appointment',
      iconColor: 'bg-indigo-900',
      trackEvent: 'card_clicked_appointment'
    },
    {
      id: 2,
      title: 'Cost Estimation',
      bgColor: 'bg-gradient-to-br from-yellow-200 to-yellow-300',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
      link: '#cost',
      iconColor: 'bg-indigo-900',
      trackEvent: 'card_clicked_cost'
    },
    {
      id: 3,
      title: 'Piles Severity Score',
      bgColor: 'bg-gradient-to-br from-purple-200 to-purple-300',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
      link: '#severity',
      iconColor: 'bg-indigo-900',
      trackEvent: 'card_clicked_severity'
    },
    {
      id: 4,
      title: 'Insurance Coverage',
      bgColor: 'bg-gradient-to-br from-blue-200 to-blue-300',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
      link: '#insurance',
      iconColor: 'bg-indigo-900',
      trackEvent: 'card_clicked_insurance'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <a
              key={card.id}
              href={card.link}
              data-track={card.trackEvent}
              data-track-card-title={card.title}
              data-track-location="cards_section"
              className={`${card.bgColor} rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {card.title}
                </h3>
                <div className={`${card.iconColor} rounded-full p-3 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <svg 
                    className="w-5 h-5 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
