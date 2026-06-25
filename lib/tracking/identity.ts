/**
 * Browser Identity Management
 * Handles anonymous_id, session_id, patient_id persistence
 */

/**
 * Generate UUID v4
 */
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

import * as fpjs from '@fingerprintjs/fingerprintjs';

export interface BrowserIdentity {
  anonymous_id: string;
  session_id: string;
  patient_id: string | null;
  fingerprint: string;
  first_utm_source?: string;
  first_utm_campaign?: string;
  first_utm_medium?: string;
}

class IdentityManager {
  private static instance: IdentityManager;
  private identity: BrowserIdentity | null = null;

  private constructor() {}

  static getInstance(): IdentityManager {
    if (!IdentityManager.instance) {
      IdentityManager.instance = new IdentityManager();
    }
    return IdentityManager.instance;
  }

  /**
   * Initialize or retrieve browser identity
   */
  initialize(): BrowserIdentity {
    if (this.identity) {
      return this.identity;
    }

    // Skip on server - return placeholder identity
    if (typeof window === 'undefined') {
      this.identity = {
        anonymous_id: 'anon_server',
        session_id: 'sess_server',
        patient_id: null,
        fingerprint: 'fp_server',
      };
      return this.identity;
    }

    // Get or create anonymous_id (persists across sessions)
    let anonymous_id = localStorage.getItem('anonymous_id');
    if (!anonymous_id) {
      anonymous_id = `anon_${generateUUID()}`;
      localStorage.setItem('anonymous_id', anonymous_id);
    }

    // Get or create session_id (new per tab/session)
    let session_id = sessionStorage.getItem('session_id');
    if (!session_id) {
      session_id = `sess_${generateUUID()}`;
      sessionStorage.setItem('session_id', session_id);
    }

    // Get patient_id if linked
    const patient_id = localStorage.getItem('patient_id');

    // Get or create fingerprint
    let fingerprint = localStorage.getItem('fingerprint');
    if (!fingerprint) {
      // Async load FingerprintJS so it doesn't block main thread
      fingerprint = 'fp_loading';
      fpjs.load()
        .then(fp => fp.get())
        .then(result => {
          const generatedFp = result.visitorId;
          localStorage.setItem('fingerprint', generatedFp);
          if (this.identity) {
            this.identity.fingerprint = generatedFp;
          }
        })
        .catch(err => {
          console.warn('Failed to load FingerprintJS', err);
          // Fallback simple UUID if blocked by privacy extensions
          const fallback = `fp_fallback_${generateUUID()}`;
          localStorage.setItem('fingerprint', fallback);
          if (this.identity) {
            this.identity.fingerprint = fallback;
          }
        });
    }

    // Capture first-touch UTM params (only once)
    const urlParams = new URLSearchParams(window.location.search);
    if (!localStorage.getItem('first_utm_source') && urlParams.get('utm_source')) {
      localStorage.setItem('first_utm_source', urlParams.get('utm_source') || '');
      localStorage.setItem('first_utm_campaign', urlParams.get('utm_campaign') || '');
      localStorage.setItem('first_utm_medium', urlParams.get('utm_medium') || '');
    }

    // Store current UTM params for this session
    if (urlParams.get('utm_source')) {
      sessionStorage.setItem('current_utm_source', urlParams.get('utm_source') || '');
      sessionStorage.setItem('current_utm_campaign', urlParams.get('utm_campaign') || '');
      sessionStorage.setItem('current_utm_medium', urlParams.get('utm_medium') || '');
    }

    this.identity = {
      anonymous_id,
      session_id,
      patient_id,
      fingerprint,
      first_utm_source: localStorage.getItem('first_utm_source') || undefined,
      first_utm_campaign: localStorage.getItem('first_utm_campaign') || undefined,
      first_utm_medium: localStorage.getItem('first_utm_medium') || undefined,
    };

    return this.identity;
  }

  /**
   * Get current identity
   */
  getIdentity(): BrowserIdentity {
    if (!this.identity) {
      return this.initialize();
    }
    return this.identity;
  }

  /**
   * Link anonymous visitor to patient
   */
  linkPatient(patient_id: string): void {
    if (typeof window === 'undefined') return;
    
    localStorage.setItem('patient_id', patient_id);
    if (this.identity) {
      this.identity.patient_id = patient_id;
    }
  }

  /**
   * Get current UTM parameters
   */
  getCurrentUTM() {
    if (typeof window === 'undefined') {
      return {
        utm_source: undefined,
        utm_campaign: undefined,
        utm_medium: undefined,
        utm_content: undefined,
        utm_term: undefined,
      };
    }

    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: sessionStorage.getItem('current_utm_source') || urlParams.get('utm_source') || undefined,
      utm_campaign: sessionStorage.getItem('current_utm_campaign') || urlParams.get('utm_campaign') || undefined,
      utm_medium: sessionStorage.getItem('current_utm_medium') || urlParams.get('utm_medium') || undefined,
      utm_content: urlParams.get('utm_content') || undefined,
      utm_term: urlParams.get('utm_term') || undefined,
    };
  }
}

export const identityManager = IdentityManager.getInstance();
