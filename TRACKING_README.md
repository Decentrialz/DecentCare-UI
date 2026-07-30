# Event Tracking System

A comprehensive event tracking system for capturing user behavior on your website. This system implements the Segment Spec for tracking events and follows the architecture from your system design document.

## 🎯 Features

- ✅ **Auto-tracking**: Automatically tracks clicks, scrolls, page views, and page visibility
- ✅ **Browser Identity**: Persistent `anonymous_id` and `session_id` management
- ✅ **UTM Attribution**: Captures first-touch and current-touch campaign parameters
- ✅ **Segment Spec Compliant**: Uses industry-standard event schema
- ✅ **Reliable Delivery**: Uses `navigator.sendBeacon()` for guaranteed event delivery
- ✅ **Real-time Dashboard**: View all tracked events in real-time
- ✅ **No External Dependencies**: Pure TypeScript/React implementation

## 📁 File Structure

```
lib/tracking/
├── identity.ts           # Browser identity management (anonymous_id, session_id)
├── types.ts             # TypeScript types for events
├── tracker.ts           # Core tracking functionality
├── useTracker.ts        # React hook for manual tracking
├── TrackingProvider.tsx # Auto-instrumentation component
└── index.ts             # Exports

app/api/collect/
└── route.ts             # API endpoint to receive events

app/tracking/
└── page.tsx             # Dashboard to view tracked events
```

## 🚀 Quick Start

### 1. Wrap Your App with TrackingProvider

```tsx
import { TrackingProvider } from '@/lib/tracking';

export default function MyPage() {
  return (
    <TrackingProvider
      enableAutoTracking={true}
      enableScrollTracking={true}
      enableClickTracking={true}
    >
      {/* Your page content */}
    </TrackingProvider>
  );
}
```

### 2. Auto-tracking with `data-track` Attributes

Simply add `data-track` attributes to elements you want to track:

```tsx
<button 
  data-track="cta_clicked"
  data-track-location="hero"
  data-track-department="cardiology"
>
  Book Appointment
</button>
```

### 3. Manual Tracking with Hook

For custom events, use the `useTracker` hook:

```tsx
import { useTracker } from '@/lib/tracking';

function MyComponent() {
  const { track } = useTracker();

  const handleCustomAction = () => {
    track('custom_action', {
      action_type: 'complex_interaction',
      value: 123
    });
  };

  return <button onClick={handleCustomAction}>Do Something</button>;
}
```

## 📊 View Tracked Events

Visit the tracking dashboard at: **`/tracking`**

The dashboard shows:
- Real-time event stream
- Session information (your `anonymous_id` and `session_id`)
- Event statistics (total events, unique visitors, active sessions)
- Filterable event list with full event details
- Auto-refresh every 2 seconds

## 🔍 What Gets Tracked Automatically

### Page Views
- Fires on initial page load
- Captures page path, title, referrer, and URL

### Clicks
- All clicks on elements with `data-track` attribute
- All regular clicks (with basic element information)

### Scroll Depth
- Tracked at 25%, 50%, 75%, and 100% thresholds
- Includes scroll pixels and page height

### Page Visibility
- When user switches tabs (`page_hidden` event)
- When user returns to tab (`page_visible` event)

### Page Exit
- Fires when user closes tab or navigates away
- Includes total time spent on page

## 📝 Event Schema

All events follow the Segment Spec format:

```json
{
  "messageId": "uuid-v4",
  "type": "track",
  "event": "button_clicked",
  "anonymousId": "anon_xxx",
  "sessionId": "sess_xxx",
  "patientId": null,
  "timestamp": "2024-06-16T10:23:01.220Z",
  "context": {
    "page": {
      "path": "/luxHospital",
      "url": "https://yoursite.com/luxHospital",
      "title": "LUX Hospital",
      "referrer": "https://google.com"
    },
    "campaign": {
      "source": "google",
      "medium": "cpc",
      "name": "cardiology_q3"
    },
    "device": {
      "type": "mobile"
    },
    "screen": {
      "width": 390,
      "height": 844
    }
  },
  "properties": {
    "location": "hero",
    "department": "cardiology"
  }
}
```

## 🎨 Event Types

### `page` - Page View
Tracks when a user views a page.

```tsx
const { trackPage } = useTracker();
trackPage('Home Page', { section: 'hero' });
```

### `track` - Custom Event
Tracks any user action or behavior.

```tsx
const { track } = useTracker();
track('appointment_booked', { 
  department: 'cardiology',
  date: '2024-06-20'
});
```

### `identify` - Patient Linkage
Called when an anonymous visitor is linked to a patient record.

```tsx
const { identifyPatient } = useTracker();
identifyPatient('MRN-00456', {
  linkSource: 'qr_scan',
  linkedAt: new Date().toISOString()
});
```

## 🌐 Site-wide Script Injection (`omnilens-tracker.js`)

Alongside the React `TrackingProvider` above, this app injects the standalone
tracker (`public/omnilens-tracker.js`) site-wide from the root layout via
`app/components/OmnilensTracker.tsx`. This is the same script other sites load
cross-origin (e.g. Dr. Gowds), except here it is served from this origin — so
the script, `/api/collect` and the virtual-number endpoints are all same-origin
and no separate tracking service or host app is needed.

Configure it with these env vars (all optional — the defaults work as-is):

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_OMNILENS_ENABLED` | `true` | Set to `false` to remove the tracker from the page entirely |
| `NEXT_PUBLIC_OMNILENS_TENANT_ID` | `decentcare` | Tenant the events are attributed to |
| `NEXT_PUBLIC_OMNILENS_SITE` | `DecentCare` | Site label sent with each event |
| `NEXT_PUBLIC_OMNILENS_TRACKER_VERSION` | `77` | Cache-buster for this app's own copy — bump when `public/omnilens-tracker.js` changes |
| `NEXT_PUBLIC_OMNILENS_SCRIPT_URL` | `/omnilens-tracker.js?v=<version>` | Full override for where the script is fetched from, e.g. the CDN URL |
| `NEXT_PUBLIC_OMNILENS_API_ORIGIN` | _(empty)_ | Origin for the collect / virtual-number endpoints. Empty keeps them same-origin, which is what this app wants |
| `NEXT_PUBLIC_OMNILENS_DEBUG` | `false` | Verbose tracker logging in the console |
| `NEXT_PUBLIC_OMNILENS_FINGERPRINT` | `true` | Load FingerprintJS for device identity |
| `NEXT_PUBLIC_OMNILENS_VIRTUAL_NUMBERS` | `false` | Swap phone numbers in the live DOM — **off by default** |
| `NEXT_PUBLIC_OMNILENS_WHATSAPP` | `false` | Rewrite WhatsApp links in the live DOM — **off by default** |
| `NEXT_PUBLIC_OMNILENS_ORIGIN` | _(empty)_ | Leave empty to keep all tracker URLs relative; set only to load the tracker/endpoints from another deployment |

The two DOM-mutating features default to off so the site renders and behaves
exactly as it did before the tracker was added. Enable them per deployment once
the virtual-number pool is provisioned for the tenant.

## 🏢 Onboarding a tenant site

A tenant site embeds exactly one line, and never needs to touch it again:

```html
<script async src="https://cdn.dev.decentcare.ai/t/<tenantId>.js"></script>
```

That loader is generated from this repo. It carries the tenant's configuration
**and** the tracker version they run, which means both are controlled here — a
config change or a version roll reaches the tenant on the next publish, with no
deploy on their side. Deliberately, no tenant ever hand-copies a config blob.

To onboard a tenant:

1. Add `tenants/<tenantId>.json` with only what differs from
   `tenants/_defaults.json` (usually `site` plus a feature toggle or two).
2. `./scripts/publish-tenant-loaders.sh`
3. Give them the one-line snippet above.

To change a tenant's config, or move them to a new tracker version: edit their
JSON (or `_defaults.json` for everyone), publish, done. Loaders revalidate about
once a minute, so changes — and rollbacks — land quickly.

### Infrastructure

| Resource | Value |
| --- | --- |
| CDN | `https://cdn.dev.decentcare.ai` |
| S3 bucket | `decentcare-dev-omnilens-tracker` (`ap-south-1`, private) |
| CloudFront distribution | `E6V72KSXVI57V` (`d2pze1lwft60rl.cloudfront.net`) |
| Origin access | OAC `E2F6ECJGXKR3F0` — the bucket is not publicly readable |
| TLS certificate | ACM `us-east-1`, `cdn.dev.decentcare.ai`, DNS-validated |
| Route53 zone | `Z01662272HN14OCWQL3N7` (`dev.decentcare.ai`) |
| AWS profile | `decentcare-dev` (account `401838845163`) |

Paths, cached very differently on purpose:

| Path | Origin | Cache | Why |
| --- | --- | --- | --- |
| `/t/<tenantId>.js` | S3 | `max-age=60, swr=300` | Control plane — config changes and rollbacks must land fast |
| `/tracker/v<N>/omnilens-tracker.js` | S3 | `max-age=31536000, immutable` | A version a tenant runs must never change under them |
| `/vendor/<lib>/<version>/…` | S3 | `max-age=31536000, immutable` | Vendored third-party code — see `tenants/VENDOR.md` |
| `/api/v1/*` | `omnilens.dev.decentcare.ai` | `CachingDisabled` | Tracking ingest, forwarded straight to the backend |

### Why ingest goes through the CDN

Tenants send events to `cdn.dev.decentcare.ai/api/v1/*`, which CloudFront
forwards to the backend. The marketing app is deliberately **not** in the data
path: a deploy here must not be able to stop ingest across every tenant site.

Two pieces make that work without any backend change:

- **`omnilens-cors-preflight`** (CloudFront Function, viewer-request) answers
  `OPTIONS` at the edge with `204`. Needed because the tracker sends
  `Content-Type: application/json` and `x-tenant-id` — both non-simple, so every
  call is preflighted — while the backend's CORS allowlist rejects tenant origins
  outright (verified: `400` for a tenant origin, `200` for ours).
- **`omnilens-api-cors`** (response headers policy, `OriginOverride: true`) adds
  `Access-Control-Allow-Origin` to real responses. The override matters: the
  backend sets its own header for some origins, and two `Allow-Origin` headers
  make browsers reject the response outright.

No credential is injected at the edge, because there is nothing to inject —
the backend does not verify `Authorization` at all. A `POST` with no bearer and
one with a garbage bearer both return the same validation error. See the security
note below.

### Shipping a tracker change

`public/omnilens-tracker.js` is the source of truth. Publish a **new** version,
then point tenants at it:

```bash
./scripts/publish-tracker.sh 78          # publish the new build
# bump trackerVersion in tenants/_defaults.json (or one tenant's JSON)
./scripts/publish-tenant-loaders.sh      # roll tenants onto it
```

`publish-tracker.sh` refuses to overwrite an existing version, so a publish can
never alter what a tenant is already running. Rolling forward is always a
deliberate act — and because the version lives in the loader, it needs no tenant
deploy. To canary, bump one tenant's JSON instead of `_defaults.json`.

This app itself is first-party and stays on the React component
(`app/components/OmnilensTracker.tsx`) with same-origin URLs, so it always runs
the copy in `public/`. The loader flow is for external sites only.

### Shared hosting note

This Amplify deployment is also the tracker host for other sites — Dr. Gowds
loads `/omnilens-tracker.js` and posts to `/api/collect` here cross-origin.
Injecting the tracker into this app is purely additive: no route, response or
asset that those sites depend on changes.

`TRACKER_ALLOWED_ORIGINS` is currently unset, so `/api/collect` echoes back
whichever `Origin` calls it and self-tracking needs no configuration. If you do
set an allowlist later, it must name **both** this app's own origin and every
consuming site's origin — browsers send `Origin` even on same-origin `POST`s, so
omitting this app's own origin makes it reject its own events with a 403.

The `/api/*` routes in this app are **no longer on any tenant's critical path** —
tenants now reach the backend through the CDN (see above). They still serve this
app's own first-party tracking, which is same-origin and needs no CORS.

## 📡 Monitoring

A Lambda probes delivery and ingest from outside every 5 minutes, publishing
`Omnilens/HealthCheckFailures` to CloudWatch.

| Resource | Value |
| --- | --- |
| Function | `decentcare-dev-omnilens-healthcheck` (`ap-south-1`, python3.12) |
| Source | `scripts/healthcheck/lambda_function.py` |
| Schedule | EventBridge rule `decentcare-dev-omnilens-healthcheck`, `rate(5 minutes)` |
| Alarms | `decentcare-dev-omnilens-healthcheck-failures`, `…-stalled` |
| Notifies | `arn:aws:sns:ap-south-1:401838845163:decentcare-dev-alerts` |

What it checks:

1. Every tenant loader is served and actually sets `OmnilensConfig`.
2. Every absolute asset a loader references resolves — this catches a loader
   published against a tracker version that was never uploaded.
3. CORS preflight is answered at the edge for a tenant origin.
4. Ingest reaches the backend and the backend is processing. It sends a
   deliberately invalid payload and expects a validation rejection, so the probe
   proves the path is alive **without** writing synthetic events into the
   warehouse.

Tenants are discovered by listing the bucket, so onboarding a tenant needs no
change here. Run it by hand with:

```bash
./scripts/healthcheck/run-local.sh
```

The second alarm (`…-stalled`) fires when the check stops publishing at all.
Without it, a broken health check looks exactly like a healthy system.

### What this does not catch

These probes see the system from the outside, so they catch server-side
breakage. They would **not** have caught the failure that motivated them — a
tenant's virtual-number assignment never completing client-side, which looked
fine from every server's point of view.

The client-side signal for that already exists. The tracker reports its own
assignment failures as a normal event, with the reason propagated from the
failing response:

```json
{ "event_name": "virtual_number_assign_failed",
  "properties": { "reason": "<message from the failed response>",
                  "source": "omnilens-tracker-js" } }
```

Verified against a harness that forced assign to 503: the event is sent, and sent
*before* `page_view`. So the data needed to detect this has been arriving in the
warehouse the whole time — what is missing is a query and an alert on it, not
instrumentation.

The full set of events the tracker emits, for whoever builds those alerts:

| Event | Meaning |
| --- | --- |
| `page_view` | Page viewed |
| `phone_clicked` | A tracked phone number or `tel:` link was clicked |
| `whatsapp_clicked` | A tracked WhatsApp link was clicked |
| `virtual_number_assigned` | Assignment succeeded — carries `assignment_id`, `distribution_mode` |
| `virtual_number_assign_failed` | Assignment failed — carries `reason` |

Two alerts worth adding backend-side, both per tenant:

1. `virtual_number_assign_failed` rate, or its ratio to `virtual_number_assigned`.
   A tenant whose assignments are all failing is losing exactly the call
   attribution the feature exists to capture.
2. Event volume dropping to zero over a rolling window. This is the general
   catch-all for a tenant whose tracking has stopped for any reason, including
   ones nobody predicted.

### ⚠️ The tracking API is unauthenticated

`app/api/collect/route.ts` attaches `Authorization: Bearer
$BACKEND_COGNITO_TOKEN` when forwarding, which reads as though ingest is
authenticated. It is not. The backend does not check it:

```
POST /api/v1/collect  (no Authorization)                -> 400 validation error
POST /api/v1/collect  (Authorization: Bearer garbage)   -> 400 validation error
```

Identical responses, so the token is decorative. `BACKEND_COGNITO_TOKEN` also
defaults to the literal string `dev`.

Anyone can therefore post arbitrary events for any tenant. Tenant IDs are not
secret either — they are visible in every tenant's public loader. The exposure is
data integrity rather than data theft: forged pageviews, clicks, and conversions
land in the warehouse indistinguishable from real ones, so attribution and
reporting can be skewed by anyone who looks at a tenant's page source.

Worth fixing backend-side with a per-tenant public write key plus rate limiting.
`virtual-numbers/assign` deserves particular attention — it allocates from a
finite number pool, so unauthenticated access there can exhaust the pool or run
up telephony cost.

## 🔧 API Endpoints

### POST `/api/collect`
Receives tracking events from the frontend.

**Request:**
```json
{
  "type": "track",
  "event": "button_clicked",
  "anonymousId": "anon_xxx",
  "sessionId": "sess_xxx",
  "timestamp": "2024-06-16T10:23:01.220Z",
  "context": { ... },
  "properties": { ... }
}
```

**Response:**
```json
{
  "success": true,
  "received": 1
}
```

### GET `/api/collect`
Retrieves tracked events (for dashboard).

**Query Parameters:**
- `limit` - Number of events to return (default: 100)
- `type` - Filter by event type (page, track, identify)
- `anonymousId` - Filter by specific visitor

**Response:**
```json
{
  "total": 150,
  "events": [...],
  "stats": {
    "totalEvents": 150,
    "uniqueVisitors": 5,
    "uniqueSessions": 8
  }
}
```

## 🎯 Example: LuxHospital Page

The `/luxHospital` page demonstrates the tracking system in action:

- **Header**: Logo and navigation clicks tracked
- **Hero Section**: WhatsApp, Appointment, and Maps button clicks tracked with location context
- **Cards Section**: Each card (Appointment, Cost, Severity, Insurance) tracked with card title
- **Location Section**: Direction and Review button clicks, plus phone number clicks tracked
- **Auto-tracking**: Scroll depth, page views, and visibility changes

Visit `/luxHospital` and then check `/tracking` to see all events captured in real-time!

## 🔒 Privacy & Storage

### Browser Storage
- **localStorage**: `anonymous_id`, `patient_id`, `fingerprint`, first-touch UTM params
- **sessionStorage**: `session_id`, current-touch UTM params

### Server Storage
Currently stores events in-memory (last 1000 events for demo).

**For production:**
- Replace in-memory storage with ClickHouse database
- Add PostgreSQL for visitor profiles
- Implement nightly cron job for aggregation

## 🚀 Next Steps

1. **Database Integration**: Connect to ClickHouse for event storage
2. **Visitor Profiles**: Create nightly aggregation job to build visitor profiles
3. **QR Patient Linking**: Implement QR code generation and patient linking flow
4. **Personalization API**: Build profile lookup API for personalized content
5. **Fingerprinting**: Integrate FingerprintJS for better visitor re-identification
6. **GDPR Compliance**: Add consent management and data retention policies

## 📚 Architecture

This implementation follows the system design document:
- Browser identity with `anonymous_id` → `patient_id` hierarchy
- Segment Spec event schema with 4 call types
- Reliable event delivery with `sendBeacon()`
- Auto-instrumentation with minimal developer friction
- Server-side timestamp correction
- Ready for ClickHouse + PostgreSQL integration

---

**Need Help?** Check the [System Design Document](../# Behavioral Tracking & Patient Linkage — System Design.docx) for full architecture details.
