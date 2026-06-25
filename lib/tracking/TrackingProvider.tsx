"use client";

/**
 * Auto-instrumentation Tracking Provider
 * Automatically tracks clicks, scrolls, and page views
 */

import React, { useEffect, useRef } from 'react';
import { identityManager } from './identity';
import { tracker } from './tracker';

interface TrackingProviderProps {
  children: React.ReactNode;
  enableAutoTracking?: boolean;
  enableScrollTracking?: boolean;
  enableClickTracking?: boolean;
  scrollThreshold?: number; // Track scroll every X%
}

export function TrackingProvider({
  children,
  enableAutoTracking = true,
  enableScrollTracking = true,
  enableClickTracking = true,
  scrollThreshold = 25,
}: TrackingProviderProps) {
  const scrollTracked = useRef<Set<number>>(new Set());
  const lastScrollTime = useRef<number>(0);

  useEffect(() => {
    if (!enableAutoTracking) return;

    // Initialize identity
    identityManager.initialize();

    // Track initial page view
    tracker.page();

    // Auto-track clicks with data-track attribute
    if (enableClickTracking) {
      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        
        // Find closest element with data-track attribute
        const trackElement = target.closest('[data-track]') as HTMLElement;
        
        if (trackElement) {
          tracker.trackClick(trackElement);
        } else {
          // Track all clicks with basic info
          tracker.trackClick(target);
        }
      };

      document.addEventListener('click', handleClick);

      return () => {
        document.removeEventListener('click', handleClick);
      };
    }
  }, [enableAutoTracking, enableClickTracking]);

  // Track scroll depth
  useEffect(() => {
    if (!enableAutoTracking || !enableScrollTracking) return;

    const handleScroll = () => {
      const now = Date.now();
      
      // Throttle scroll events to once per second
      if (now - lastScrollTime.current < 1000) return;
      lastScrollTime.current = now;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      // Track at threshold intervals (25%, 50%, 75%, 100%)
      const thresholds = [25, 50, 75, 100];
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !scrollTracked.current.has(threshold)) {
          scrollTracked.current.add(threshold);
          tracker.track('scroll_depth', {
            depth_percent: threshold,
            pixels: scrollTop,
            page_height: docHeight,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [enableAutoTracking, enableScrollTracking, scrollThreshold]);

  // Track page navigation (for SPAs)
  useEffect(() => {
    if (!enableAutoTracking) return;

    // Track page changes in Next.js
    const handleRouteChange = () => {
      // Reset scroll tracking for new page
      scrollTracked.current.clear();
      tracker.page();
    };

    // Listen for Next.js route changes
    if (typeof window !== 'undefined') {
      window.addEventListener('popstate', handleRouteChange);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('popstate', handleRouteChange);
      }
    };
  }, [enableAutoTracking]);

  // Track page visibility changes
  useEffect(() => {
    if (!enableAutoTracking) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        tracker.track('page_hidden', {
          timestamp: new Date().toISOString(),
        });
      } else {
        tracker.track('page_visible', {
          timestamp: new Date().toISOString(),
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [enableAutoTracking]);

  // Track page unload
  useEffect(() => {
    if (!enableAutoTracking) return;

    const handleBeforeUnload = () => {
      tracker.track('page_exit', {
        timestamp: new Date().toISOString(),
        time_on_page: Date.now() - performance.timing.navigationStart,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [enableAutoTracking]);

  return <>{children}</>;
}
