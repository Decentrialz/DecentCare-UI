import Script from "next/script";

/**
 * Injects the Omnilens behavioural tracker into this app.
 *
 * The tracker itself lives in `public/omnilens-tracker.js` and the collect /
 * virtual-number endpoints live under `app/api/*`, so everything is served from
 * this same origin — no separate tracking service or host app is required.
 *
 * Every knob is env driven so the tracker can be turned off, or pointed at a
 * different deployment, without a code change.
 */

const ENABLED = process.env.NEXT_PUBLIC_OMNILENS_ENABLED !== "false";
const TENANT_ID = process.env.NEXT_PUBLIC_OMNILENS_TENANT_ID || "decentcare";
const SITE = process.env.NEXT_PUBLIC_OMNILENS_SITE || "DecentCare";

// Where the collect / virtual-number endpoints live. Empty keeps them relative
// (same-origin), which is what this app wants — the routes are its own.
const API_ORIGIN = (process.env.NEXT_PUBLIC_OMNILENS_API_ORIGIN || "").replace(/\/$/, "");

// Version of public/omnilens-tracker.js this app serves to itself. Bump on
// tracker changes. Unused when SCRIPT_URL is set explicitly.
const VERSION = process.env.NEXT_PUBLIC_OMNILENS_TRACKER_VERSION || "79";

// Where the tracker script is loaded from — deliberately independent of
// API_ORIGIN so the script can come from the CDN while events still post to
// this app's own routes. Defaults to this app's own copy in public/.
const SCRIPT_URL =
  process.env.NEXT_PUBLIC_OMNILENS_SCRIPT_URL || `/omnilens-tracker.js?v=${VERSION}`;

const DEBUG = process.env.NEXT_PUBLIC_OMNILENS_DEBUG === "true";
// Fingerprinting is read-only; on by default.
const FINGERPRINT = process.env.NEXT_PUBLIC_OMNILENS_FINGERPRINT !== "false";
// The next two rewrite phone numbers / WhatsApp links in the live DOM, so they
// stay off unless a deployment explicitly opts in.
const VIRTUAL_NUMBERS = process.env.NEXT_PUBLIC_OMNILENS_VIRTUAL_NUMBERS === "true";
const WHATSAPP = process.env.NEXT_PUBLIC_OMNILENS_WHATSAPP === "true";

const omnilensConfig = {
  tenantId: TENANT_ID,
  site: SITE,
  collectUrl: `${API_ORIGIN}/api/collect`,
  autoPageView: true,
  autoClicks: true,
  trackAllClicks: true,
  replaceEventWithDerived: true,
  debug: DEBUG,
  enableFingerprint: FINGERPRINT,
  fingerprintJsUrl: FINGERPRINT
    ? "https://cdn.jsdelivr.net/npm/@fingerprintjs/fingerprintjs@3/dist/fp.min.js"
    : "",
  virtualNumbers: {
    enabled: VIRTUAL_NUMBERS,
    assignUrl: `${API_ORIGIN}/api/virtual-numbers/assign`,
    heartbeatUrl: `${API_ORIGIN}/api/virtual-numbers/heartbeat`,
    phoneTextSelector: ".phone-number,[data-phone]",
    telLinkSelector: "a[href^='tel:'],[data-call-link]",
    heartbeatSec: 30,
    geolocationTimeoutMs: 5000,
    hashAnonymousId: true,
  },
  whatsapp: {
    enabled: WHATSAPP,
    selector: "a[href*='wa.me'],a[href*='api.whatsapp.com/send']",
    message: "Hi, I need help booking an appointment.",
    trackClicks: true,
  },
};

export const OmnilensTracker = () => {
  if (!ENABLED) {
    return null;
  }

  return (
    <>
      <Script
        id="omnilens-config"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.OmnilensConfig = ${JSON.stringify(omnilensConfig)};`,
        }}
      />
      <Script
        id="omnilens-tracker"
        src={SCRIPT_URL}
        strategy="beforeInteractive"
      />
    </>
  );
};

export default OmnilensTracker;
