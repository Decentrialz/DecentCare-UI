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
