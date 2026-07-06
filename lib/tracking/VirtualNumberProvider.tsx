"use client";

import React, { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { identityManager } from './identity';

interface VirtualNumberData {
  virtual_number: string;
  display_number: string;
  assignment_id: string;
  assignment_token: string;
  expires_at: string;
  grace_end_at: string;
  heartbeat_interval_sec: number;
  distribution_mode: 'unique' | 'fallback';
}

interface VirtualNumberContextValue {
  loading: boolean;
  error: string | null;
  virtualNumber: string | null;
  displayNumber: string | null;
  telHref: string | null;
  refresh: () => Promise<void>;
}

const VirtualNumberContext = createContext<VirtualNumberContextValue | null>(null);

async function getGeoData(): Promise<{ lat: number; lng: number; accuracy_m: number } | null> {
  if (typeof window === 'undefined' || !navigator.geolocation) {
    return null;
  }

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy_m: Math.round(position.coords.accuracy),
        });
      },
      () => resolve(null),
      { enableHighAccuracy: false, timeout: 5000, maximumAge: 60_000 }
    );
  });
}

export function VirtualNumberProvider({ children }: { children: React.ReactNode }) {
  const [assignment, setAssignment] = useState<VirtualNumberData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const assignmentRef = useRef<VirtualNumberData | null>(null);
  const heartbeatTimer = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopHeartbeat = () => {
    if (heartbeatTimer.current) {
      clearInterval(heartbeatTimer.current);
      heartbeatTimer.current = null;
    }
  };

  const sendHeartbeat = async (current: VirtualNumberData) => {
    if (document.hidden || !current.assignment_token) {
      return;
    }

    try {
      const identity = identityManager.getIdentity();
      await fetch('/api/virtual-numbers/heartbeat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          assignment_token: current.assignment_token,
          session_id: identity.session_id,
        }),
      });
    } catch {
      // Heartbeat is best-effort; assignment can be recovered with refresh.
    }
  };

  const startHeartbeat = (current: VirtualNumberData) => {
    stopHeartbeat();

    if (current.distribution_mode !== 'unique' || !current.assignment_token) {
      return;
    }

    const intervalMs = (current.heartbeat_interval_sec || 30) * 1000;
    heartbeatTimer.current = setInterval(() => {
      void sendHeartbeat(current);
    }, intervalMs);
  };

  const assignVirtualNumber = async () => {
    if (typeof window === 'undefined') {
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const identity = identityManager.initialize();
      const searchParams = new URLSearchParams(window.location.search);
      const geo = await getGeoData();

      const payload: Record<string, unknown> = {
        anonymous_id: identity.anonymous_id,
        session_id: identity.session_id,
        page_url: window.location.pathname,
        referrer: document.referrer || undefined,
        utm_source: searchParams.get('utm_source') || undefined,
        utm_medium: searchParams.get('utm_medium') || undefined,
        utm_campaign: searchParams.get('utm_campaign') || undefined,
      };

      if (geo) {
        payload.lat = geo.lat;
        payload.lng = geo.lng;
        payload.accuracy_m = geo.accuracy_m;
      }

      const response = await fetch('/api/virtual-numbers/assign', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const responseJson = await response.json();
      if (!response.ok) {
        throw new Error(responseJson?.detail || responseJson?.error || `Assign failed (${response.status})`);
      }

      const data = responseJson?.data as VirtualNumberData;
      if (!data?.virtual_number || !data?.display_number) {
        throw new Error('Assign returned invalid payload');
      }

      assignmentRef.current = data;
      setAssignment(data);
      startHeartbeat(data);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to assign virtual number';
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    void assignVirtualNumber();

    const handleVisibility = () => {
      const current = assignmentRef.current;
      if (!current) return;

      if (document.hidden) {
        stopHeartbeat();
      } else {
        startHeartbeat(current);
        void sendHeartbeat(current);
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stopHeartbeat();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const value = useMemo<VirtualNumberContextValue>(() => ({
    loading,
    error,
    virtualNumber: assignment?.virtual_number || null,
    displayNumber: assignment?.display_number || null,
    telHref: assignment?.virtual_number ? `tel:${assignment.virtual_number}` : null,
    refresh: assignVirtualNumber,
  }), [assignment, loading, error]);

  return (
    <VirtualNumberContext.Provider value={value}>
      {children}
    </VirtualNumberContext.Provider>
  );
}

export function useVirtualNumber() {
  const context = useContext(VirtualNumberContext);
  if (!context) {
    throw new Error('useVirtualNumber must be used inside VirtualNumberProvider');
  }
  return context;
}
