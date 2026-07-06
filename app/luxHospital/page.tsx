import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import VideoSection from './VideoSection';
import CardsSection from './CardsSection';
import LocationSection from './LocationSection';
import { TrackingProvider, VirtualNumberProvider } from '@/lib/tracking';

export default function LuxHospitalPage() {
  return (
    <TrackingProvider
      enableAutoTracking={true}
      enableScrollTracking={true}
      enableClickTracking={true}
    >
      <VirtualNumberProvider>
        <div className="min-h-screen bg-white">
          <Header />
          <div className="pt-20">
            <HeroSection />
            <VideoSection />
            <CardsSection />
            <LocationSection />
          </div>
        </div>
      </VirtualNumberProvider>
    </TrackingProvider>
  );
}
