/**
 * Enhanced Phone Call Tracking
 * Tracks phone clicks and infers call behavior based on page visibility
 */

import { tracker } from './tracker';

interface PhoneCallSession {
  phone: string;
  location: string;
  clickedAt: number;
  leftPageAt: number | null;
  returnedAt: number | null;
}

let currentPhoneSession: PhoneCallSession | null = null;
let visibilityListenerAdded = false;

/**
 * Track enhanced phone click with automatic follow-up tracking
 */
export function trackPhoneClick(phoneNumber: string, location: string, additionalProps?: Record<string, any>) {
  const clickTime = Date.now();
  
  // Track the initial click
  tracker.track('phone_clicked', {
    phone_number: phoneNumber,
    location: location,
    device_type: getDeviceType(),
    ...additionalProps
  });

  // Store session for follow-up tracking
  currentPhoneSession = {
    phone: phoneNumber,
    location: location,
    clickedAt: clickTime,
    leftPageAt: null,
    returnedAt: null
  };

  // Set up visibility tracking if not already done
  if (!visibilityListenerAdded) {
    setupVisibilityTracking();
    visibilityListenerAdded = true;
  }

  // Set a timeout to check if user left the page (indicating dialer opened)
  setTimeout(() => {
    if (currentPhoneSession && currentPhoneSession.leftPageAt === null) {
      // User didn't leave the page - might have cancelled or copied number
      tracker.track('phone_call_cancelled', {
        dialed_number: phoneNumber,
        location: location,
        reason: 'no_page_leave',
        time_since_click: Date.now() - clickTime
      });
      currentPhoneSession = null;
    }
  }, 3000); // 3 second grace period
}

function setupVisibilityTracking() {
  document.addEventListener('visibilitychange', () => {
    if (!currentPhoneSession) return;

    if (document.hidden && currentPhoneSession.leftPageAt === null) {
      // User left the page (likely opened dialer)
      currentPhoneSession.leftPageAt = Date.now();
      
      const timeToLeave = currentPhoneSession.leftPageAt - currentPhoneSession.clickedAt;
      
      tracker.track('phone_dialer_opened', {
        dialed_number: currentPhoneSession.phone,
        location: currentPhoneSession.location,
        time_to_leave: timeToLeave
      });
      
    } else if (!document.hidden && currentPhoneSession.leftPageAt !== null && currentPhoneSession.returnedAt === null) {
      // User returned to the page
      currentPhoneSession.returnedAt = Date.now();
      
      const timeAway = currentPhoneSession.returnedAt - currentPhoneSession.leftPageAt;
      const totalTime = currentPhoneSession.returnedAt - currentPhoneSession.clickedAt;
      
      // Infer call status based on time away
      const callStatus = inferCallStatus(timeAway);
      
      tracker.track('phone_session_completed', {
        dialed_number: currentPhoneSession.phone,
        location: currentPhoneSession.location,
        time_away_ms: timeAway,
        time_away_seconds: Math.round(timeAway / 1000),
        total_time_ms: totalTime,
        inferred_status: callStatus.status,
        inferred_reason: callStatus.reason,
        likely_called: callStatus.likelyCalled
      });
      
      // Clear the session
      currentPhoneSession = null;
    }
  });
}

/**
 * Infer what happened based on how long they were away
 */
function inferCallStatus(timeAwayMs: number): {
  status: string;
  reason: string;
  likelyCalled: boolean;
} {
  const seconds = timeAwayMs / 1000;
  
  if (seconds < 2) {
    return {
      status: 'cancelled_immediately',
      reason: 'Returned in less than 2 seconds',
      likelyCalled: false
    };
  } else if (seconds < 5) {
    return {
      status: 'cancelled_in_dialer',
      reason: 'Returned quickly without dialing',
      likelyCalled: false
    };
  } else if (seconds < 15) {
    return {
      status: 'quick_disconnect',
      reason: 'Brief time away (5-15s) - may have hung up quickly or no answer',
      likelyCalled: true
    };
  } else if (seconds < 60) {
    return {
      status: 'short_call',
      reason: 'Moderate time away (15-60s) - likely brief call',
      likelyCalled: true
    };
  } else if (seconds < 180) {
    return {
      status: 'medium_call',
      reason: 'Significant time away (1-3 min) - likely meaningful conversation',
      likelyCalled: true
    };
  } else {
    return {
      status: 'long_call',
      reason: 'Extended time away (3+ min) - likely detailed conversation',
      likelyCalled: true
    };
  }
}

function getDeviceType(): 'desktop' | 'mobile' | 'tablet' {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
    return 'tablet';
  }
  if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
    return 'mobile';
  }
  return 'desktop';
}
