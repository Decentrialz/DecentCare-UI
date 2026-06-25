"use client";

import React, { useRef } from 'react';
import { useTracker } from '@/lib/tracking/useTracker';

export default function VideoSection() {
  const { track } = useTracker();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    track('video_started', {
      location: 'luxHospital',
      video_url: videoRef.current?.currentSrc || 'dummy_video',
    });
  };

  const handlePause = () => {
    track('video_stopped', {
      location: 'luxHospital',
      video_url: videoRef.current?.currentSrc || 'dummy_video',
      time: videoRef.current?.currentTime || 0,
    });
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-indigo-900 mb-12">
          Take a Tour
        </h2>
        <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl">
          <video
            ref={videoRef}
            className="w-full h-auto"
            controls
            onPlay={handlePlay}
            onPause={handlePause}
            preload="metadata"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
