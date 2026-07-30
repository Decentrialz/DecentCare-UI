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

// Empty string keeps every URL relative (same-origin). Set only when the
// tracker/collect endpoints should be loaded from another deployment.
const ORIGIN = (process.env.NEXT_PUBLIC_OMNILENS_ORIGIN || "").replace(/\/$/, "");

const ENABLED = process.env.NEXT_PUBLIC_OMNILENS_ENABLED !== "false";
const TENANT_ID = process.env.NEXT_PUBLIC_OMNILENS_TENANT_ID || "decentcare";
const SITE = process.env.NEXT_PUBLIC_OMNILENS_SITE || "DecentCare";
// Matches the ?v= that other consumers (e.g. Dr. Gowds) pin, so every site
// references the same version of the same file. Bump on tracker changes.
const VERSION = process.env.NEXT_PUBLIC_OMNILENS_TRACKER_VERSION || "77";

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
  collectUrl: `${ORIGIN}/api/collect`,
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
    assignUrl: `${ORIGIN}/api/virtual-numbers/assign`,
    heartbeatUrl: `${ORIGIN}/api/virtual-numbers/heartbeat`,
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
        src={`${ORIGIN}/omnilens-tracker.js?v=${VERSION}`}
        strategy="beforeInteractive"
      />
    </>
  );
};

export default OmnilensTracker;
