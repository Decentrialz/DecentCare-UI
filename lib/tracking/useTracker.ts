"use client";

/**
 * React Hook for Event Tracking
 */

import { useEffect, useCallback, useRef } from 'react';
import { identityManager } from './identity';
import { tracker } from './tracker';

export function useTracker() {
  const identity = useRef(identityManager.getIdentity());

  // Initialize identity on mount
  useEffect(() => {
    identity.current = identityManager.initialize();
  }, []);

  // Track function
  const track = useCallback((eventName: string, properties?: Record<string, any>) => {
    tracker.track(eventName, properties);
  }, []);

  // Page view tracking
  const trackPage = useCallback((name?: string, properties?: Record<string, any>) => {
    tracker.page(name, properties);
  }, []);

  // Patient identification
  const identifyPatient = useCallback((patientId: string, traits?: Record<string, any>) => {
    tracker.identify(patientId, traits);
  }, []);

  return {
    track,
    trackPage,
    identifyPatient,
    anonymousId: identity.current.anonymous_id,
    sessionId: identity.current.session_id,
    patientId: identity.current.patient_id,
  };
}
