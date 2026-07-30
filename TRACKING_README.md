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

Two layers, cached very differently on purpose:

| Path | Cache | Why |
| --- | --- | --- |
| `/t/<tenantId>.js` | `max-age=60, stale-while-revalidate=300` | Control plane — config changes and rollbacks must land fast |
| `/tracker/v<N>/omnilens-tracker.js` | `max-age=31536000, immutable` | A version a tenant runs must never change under them |

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

**The `/api/*` proxy routes are load-bearing — do not "simplify" them away.**
They look like pure pass-throughs (`virtual-numbers/assign` and `heartbeat` add
no auth and no transformation at all), but the backend's own CORS allowlist
trusts *this app's* origin and rejects tenant origins outright:

| Backend preflight | `Origin: <this app>` | `Origin: <tenant site>` |
| --- | --- | --- |
| `/api/v1/collect` | 200 | 400 |
| `/api/v1/virtual-numbers/assign` | 200 | 400 |

So these routes are the CORS bridge that makes tenant tracking work at all.
Pointing a tenant straight at `omnilens.dev.decentcare.ai` requires adding that
tenant's origin to the **backend's** allowlist first. `/api/collect`
additionally injects `Authorization: Bearer $BACKEND_COGNITO_TOKEN`, so it also
needs the backend to accept a public write credential before it can be bypassed.

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
