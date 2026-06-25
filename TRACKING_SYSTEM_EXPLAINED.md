# Event Tracking System - Technical Deep Dive

## Overview

We built a complete behavioral tracking system that captures every user interaction on the website. It tracks clicks, scrolls, page views, and can even infer phone call behavior. All events are sent to a backend API and can be viewed in real-time on a dashboard.

## Architecture

```
Browser (Client)                Backend                Storage
┌─────────────────┐           ┌──────────┐          ┌─────────┐
│  React App      │           │   API    │          │ In-Mem  │
│                 │           │          │          │ (Demo)  │
│  ┌───────────┐  │  POST     │ /api/    │  Write   │         │
│  │Components │─────────────▶│ collect  │─────────▶│ Events  │
│  └───────────┘  │  Events   │          │          │  Array  │
│                 │           └──────────┘          └─────────┘
│  ┌───────────┐  │           ┌──────────┐          
│  │ Tracking  │  │   GET     │ /api/    │  Read    
│  │ Dashboard │◀──────────────│ collect  │◀─────────
│  └───────────┘  │  Events   │          │          
└─────────────────┘           └──────────┘          
                                                     
Production will replace in-memory with:
  - ClickHouse (event storage)
  - PostgreSQL (profiles)
  - Redis (caching)
```

## Core Components

### 1. Identity Management (`lib/tracking/identity.ts`)

**Purpose:** Assign and persist unique identifiers to track users across sessions.

**Key Concepts:**
- `anonymous_id` - Permanent visitor ID (stored in localStorage)
- `session_id` - Unique per browser tab/session (stored in sessionStorage)
- `patient_id` - Set when visitor is linked to hospital patient (QR code flow)
- `fingerprint` - Browser fingerprint for re-identification if localStorage cleared

**How it works:**
```typescript
// First visit to site
localStorage is empty
↓
Generate: anonymous_id = "anon_abc123"
Generate: session_id = "sess_xyz789"
Generate: fingerprint = "fp_def456"
Save to localStorage/sessionStorage
↓
Return identity object

// Subsequent visits
Read anonymous_id from localStorage (same visitor)
Generate new session_id (new session)
Reuse fingerprint
```

**Why localStorage + sessionStorage?**
- localStorage persists across browser restarts → track returning visitors
- sessionStorage is per-tab → track individual browsing sessions

### 2. Event Tracker (`lib/tracking/tracker.ts`)

**Purpose:** Core tracking engine that captures events and sends them to the backend.

**Key Functions:**

#### `track(eventName, properties)`
Tracks custom events:
```typescript
track('button_clicked', { 
  button_name: 'book_appointment',
  location: 'hero'
});
```

**What happens internally:**
1. Calls `buildContext()` to gather browser info (page, device, UTM params)
2. Gets identity from `identityManager`
3. Creates event object following Segment Spec
4. Sends via `navigator.sendBeacon()` (guaranteed delivery even on page exit)

#### `page(name, properties)`
Tracks page views:
```typescript
page('Home Page', { section: 'hero' });
```

#### `identify(patientId, traits)`
Links anonymous visitor to known patient:
```typescript
identify('MRN-00456', { linkSource: 'qr_scan' });
```

**Event Context (`buildContext()`):**
This function automatically attaches rich metadata to every event:
- Page info: URL, path, title, referrer
- Device: type (mobile/desktop/tablet), screen size, viewport
- Campaign: UTM parameters (source, medium, campaign)
- Location: timezone, language
- User-agent string

**Why `sendBeacon()`?**
Regular `fetch()` requests get cancelled if user closes tab or navigates away. `sendBeacon()` is specifically designed to complete even during page unload → critical for exit events and form abandonment tracking.

### 3. React Hook (`lib/tracking/useTracker.ts`)

**Purpose:** Convenient React hook for components to use tracking.

**What it provides:**
```typescript
const { 
  track,           // Track custom events
  trackPage,       // Track page views
  identifyPatient, // Link to patient
  anonymousId,     // Current visitor ID
  sessionId,       // Current session ID
  patientId        // Patient ID if linked
} = useTracker();
```

**Usage in components:**
```typescript
function MyComponent() {
  const { track } = useTracker();
  
  const handleClick = () => {
    track('cta_clicked', { department: 'cardiology' });
  };
  
  return <button onClick={handleClick}>Book</button>;
}
```

**Why a custom hook?**
- Encapsulates tracking logic
- Provides consistent API across components
- Manages identity lifecycle
- Easy to use, hard to misuse

### 4. Auto-Instrumentation (`lib/tracking/TrackingProvider.tsx`)

**Purpose:** Automatically track user behavior without manual coding.

**What it tracks automatically:**

#### 4a. Click Tracking
```typescript
// Listens for ALL clicks on document
document.addEventListener('click', (event) => {
  const element = event.target;
  
  // Check for data-track attribute
  if (element.hasAttribute('data-track')) {
    track(element.getAttribute('data-track'), {
      // Include all data-track-* attributes
      ...collectDataAttributes(element)
    });
  }
});
```

**Example:**
```html
<button 
  data-track="appointment_booked"
  data-track-dept="cardiology"
  data-track-location="hero"
>
  Book Now
</button>
```
Automatically generates:
```json
{
  "event": "appointment_booked",
  "properties": {
    "dept": "cardiology",
    "location": "hero",
    "element_type": "button",
    "element_text": "Book Now"
  }
}
```

#### 4b. Scroll Depth Tracking
```typescript
window.addEventListener('scroll', () => {
  const scrollPercent = (scrollY / pageHeight) * 100;
  
  // Track at milestones: 25%, 50%, 75%, 100%
  if (scrollPercent >= 25 && !tracked[25]) {
    track('scroll_depth', { depth_percent: 25 });
    tracked[25] = true;
  }
  // ... same for 50, 75, 100
});
```

#### 4c. Page View Tracking
Automatically tracks when component mounts:
```typescript
useEffect(() => {
  tracker.page(); // Captures page URL, title, referrer
}, []);
```

#### 4d. Visibility Tracking
Tracks when user switches tabs:
```typescript
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    track('page_hidden');
  } else {
    track('page_visible');
  }
});
```

#### 4e. Exit Tracking
Tracks when user closes tab/navigates away:
```typescript
window.addEventListener('beforeunload', () => {
  track('page_exit', {
    time_on_page: Date.now() - pageLoadTime
  });
});
```

**Usage:**
```typescript
<TrackingProvider
  enableAutoTracking={true}
  enableScrollTracking={true}
  enableClickTracking={true}
>
  <YourApp />
</TrackingProvider>
```

### 5. Enhanced Phone Tracking (`lib/tracking/phoneTracking.ts`)

**Purpose:** Track phone calls and infer call behavior (since browsers can't directly track calls).

**The Challenge:**
Browsers have no API to detect:
- If call was made
- If call connected
- Call duration
- Call outcome

**The Solution:**
Track page visibility changes as proxy signals.

**How it works:**

```
User clicks phone number
↓
Track: "phone_clicked" { phone, location }
↓
Start monitoring page visibility
↓
User leaves page (dialer opens) [~1-2 seconds later]
↓
Track: "phone_dialer_opened" { time_to_leave: 1200ms }
↓
<User is away making call - we wait>
↓
User returns to page [45 seconds later]
↓
Calculate: time_away = 45 seconds
↓
Infer call status based on time_away:
  - < 2s = cancelled_immediately
  - 2-5s = cancelled_in_dialer
  - 5-15s = quick_disconnect
  - 15-60s = short_call ← This one!
  - 1-3min = medium_call
  - 3+min = long_call
↓
Track: "phone_session_completed" {
  time_away_seconds: 45,
  inferred_status: "short_call",
  likely_called: true
}
```

**Implementation:**
```typescript
export function trackPhoneClick(phoneNumber, location) {
  // 1. Track initial click
  tracker.track('phone_clicked', { phone_number, location });
  
  // 2. Store session info
  currentPhoneSession = {
    phone: phoneNumber,
    clickedAt: Date.now(),
    leftPageAt: null,
    returnedAt: null
  };
  
  // 3. Listen for visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && !currentPhoneSession.leftPageAt) {
      // Page hidden = dialer opened
      currentPhoneSession.leftPageAt = Date.now();
      tracker.track('phone_dialer_opened', {...});
    } 
    else if (!document.hidden && currentPhoneSession.leftPageAt) {
      // Page visible = user returned
      currentPhoneSession.returnedAt = Date.now();
      const timeAway = returnedAt - leftPageAt;
      
      // Infer what happened based on time_away
      const status = inferCallStatus(timeAway);
      tracker.track('phone_session_completed', { ...status });
    }
  });
}
```

### 6. Event Schema (`lib/tracking/types.ts`)

**Purpose:** TypeScript types defining event structure. Follows Segment Spec.

**Event Types:**
1. **page** - Page view
2. **track** - Custom event (clicks, scrolls, etc.)
3. **identify** - User/patient identification
4. **alias** - Merge two identities

**Full Event Structure:**
```typescript
{
  messageId: "uuid-v4",           // Unique event ID
  type: "track",                  // Event type
  event: "button_clicked",        // Event name
  anonymousId: "anon_abc123",     // Visitor ID
  sessionId: "sess_xyz789",       // Session ID
  patientId: "MRN-00456",         // Patient ID (if linked)
  
  // Timestamps (4 different ones for clock correction)
  originalTimestamp: "2024-06-16T10:23:01.000Z", // Client time when event happened
  sentAt: "2024-06-16T10:23:01.120Z",            // Client time when sent
  receivedAt: "2024-06-16T10:23:01.340Z",        // Server time when received
  timestamp: "2024-06-16T10:23:01.220Z",         // Corrected timestamp (use this!)
  
  context: {                      // Automatic context
    page: {
      path: "/luxHospital",
      url: "https://site.com/luxHospital",
      title: "LUX Hospital",
      referrer: "https://google.com"
    },
    campaign: {
      source: "google",
      medium: "cpc",
      name: "cardiology_q3"
    },
    device: { type: "mobile" },
    screen: { width: 390, height: 844 },
    viewport: { width: 390, height: 800 },
    timezone: "Asia/Kolkata",
    locale: "en-IN",
    userAgent: "Mozilla/5.0..."
  },
  
  properties: {                   // Custom properties
    button_name: "book_appointment",
    department: "cardiology",
    location: "hero"
  }
}
```

**Why 4 timestamps?**
Client device clocks can be wrong (phone time off by minutes). The corrected `timestamp` formula accounts for clock skew:
```
timestamp = receivedAt - (sentAt - originalTimestamp)
```
Always use `timestamp` for queries, not `originalTimestamp`.

### 7. API Endpoint (`app/api/collect/route.ts`)

**Purpose:** Backend endpoint to receive and store events.

**POST `/api/collect`**

Receives events from browser:
```typescript
export async function POST(request) {
  const body = await request.json();
  const events = Array.isArray(body) ? body : [body];
  
  // Server-side enrichment
  const enrichedEvents = events.map(event => ({
    ...event,
    receivedAt: new Date().toISOString(),
    timestamp: calculateCorrectedTimestamp(event),
    serverContext: {
      ip: request.headers.get('x-forwarded-for'),
      userAgent: request.headers.get('user-agent')
    }
  }));
  
  // Store (currently in-memory, will be ClickHouse in production)
  eventStore.push(...enrichedEvents);
  
  return Response.json({ success: true });
}
```

**GET `/api/collect`**

Retrieves events for dashboard:
```typescript
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const limit = parseInt(searchParams.get('limit') || '100');
  const type = searchParams.get('type');        // Filter by type
  const anonymousId = searchParams.get('anonymousId'); // Filter by visitor
  
  let filtered = eventStore;
  if (type) filtered = filtered.filter(e => e.type === type);
  if (anonymousId) filtered = filtered.filter(e => e.anonymousId === anonymousId);
  
  return Response.json({
    total: filtered.length,
    events: filtered.slice(-limit).reverse(), // Most recent first
    stats: {
      totalEvents: eventStore.length,
      uniqueVisitors: new Set(eventStore.map(e => e.anonymousId)).size,
      uniqueSessions: new Set(eventStore.map(e => e.sessionId)).size
    }
  });
}
```

**Current Storage:** In-memory array (last 1000 events)
**Production Storage:** ClickHouse database (designed for analytics on billions of events)

### 8. Dashboard (`app/tracking/page.tsx`)

**Purpose:** Real-time UI to view all tracked events.

**Features:**
- Shows current visitor's `anonymous_id` and `session_id`
- Real-time stats (total events, unique visitors, active sessions)
- Filterable event list (by type: page, track, identify)
- Auto-refresh every 2 seconds
- Expandable event details (full JSON)

**How it works:**
```typescript
export default function TrackingDashboard() {
  const [events, setEvents] = useState([]);
  const { anonymousId, sessionId } = useTracker();
  
  // Fetch events every 2 seconds
  useEffect(() => {
    const fetchEvents = async () => {
      const res = await fetch('/api/collect?limit=50');
      const data = await res.json();
      setEvents(data.events);
    };
    
    fetchEvents();
    const interval = setInterval(fetchEvents, 2000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div>
      <h1>Your Session</h1>
      <p>Anonymous ID: {anonymousId}</p>
      <p>Session ID: {sessionId}</p>
      
      <h2>Recent Events</h2>
      {events.map(event => (
        <EventCard key={event.messageId} event={event} />
      ))}
    </div>
  );
}
```

## Data Flow Example

Let's trace what happens when a user clicks "Book Appointment":

```
1. USER CLICKS BUTTON
   <button 
     data-track="appointment_clicked"
     data-track-dept="cardiology"
   />

2. BROWSER EVENT CAPTURED
   TrackingProvider's click listener fires
   ↓
   Finds data-track attribute
   ↓
   Calls: tracker.track('appointment_clicked', { dept: 'cardiology' })

3. TRACKER BUILDS EVENT
   Gets identity: { anonymousId, sessionId, patientId }
   ↓
   Builds context: { page, device, campaign, screen, ... }
   ↓
   Creates event object:
   {
     messageId: "uuid-1234",
     type: "track",
     event: "appointment_clicked",
     anonymousId: "anon_abc123",
     sessionId: "sess_xyz789",
     originalTimestamp: "2024-06-22T10:30:00.000Z",
     sentAt: "2024-06-22T10:30:00.050Z",
     context: { page: {...}, device: {...}, campaign: {...} },
     properties: { dept: "cardiology", element_type: "button", ... }
   }

4. SENDS TO BACKEND
   navigator.sendBeacon('/api/collect', eventJSON)
   ↓
   (Guaranteed delivery even if user closes tab)

5. BACKEND RECEIVES
   POST /api/collect
   ↓
   Adds receivedAt: "2024-06-22T10:30:00.200Z"
   ↓
   Calculates corrected timestamp (accounts for clock skew)
   ↓
   Adds server context (IP, user-agent)
   ↓
   Stores in eventStore array

6. DASHBOARD UPDATES
   Dashboard polls GET /api/collect every 2 seconds
   ↓
   Fetches recent events
   ↓
   Displays event card:
   
   📊 track: appointment_clicked
   Time: Jun 22, 2024 10:30:00
   Page: /luxHospital
   Device: mobile
   Properties: { dept: "cardiology", ... }
```

## Implementation in LuxHospital Page

### Page Setup
```typescript
// app/luxHospital/page.tsx
<TrackingProvider
  enableAutoTracking={true}
  enableScrollTracking={true}
  enableClickTracking={true}
>
  <Header />
  <HeroSection />
  <CardsSection />
  <LocationSection />
</TrackingProvider>
```

### Header Tracking
```typescript
// app/luxHospital/Header.tsx
const handlePhoneClick = (location) => {
  trackPhoneClick('07969084448', location);
};

<a href="tel:07969084448" onClick={() => handlePhoneClick('header_desktop')}>
  Call Now
</a>

// Nav links
<a 
  href="#doctors"
  data-track="nav_link_clicked"
  data-track-link="Doctors"
  data-track-location="header_desktop"
>
  Doctors
</a>
```

### Cards Tracking
```typescript
// app/luxHospital/CardsSection.tsx
<a
  href="#appointment"
  data-track="card_clicked_appointment"
  data-track-card-title="Book an Appointment"
  data-track-location="cards_section"
>
  <CardContent />
</a>
```

### Location Tracking
```typescript
// app/luxHospital/LocationSection.tsx
<a
  href="https://maps.google.com"
  data-track="get_direction_clicked"
  data-track-location="location_section"
>
  Get Direction
</a>
```

## Key Design Decisions

### 1. Why Segment Spec?
- Industry standard format
- Easy to integrate third-party tools later (Google Analytics, Mixpanel, etc.)
- Well-documented and battle-tested
- Clean separation of event types (page, track, identify, alias)

### 2. Why localStorage + sessionStorage?
- **localStorage** = persistent across sessions → track returning visitors
- **sessionStorage** = per-tab → track individual browsing sessions
- **Combination** = both cross-visit and within-visit tracking

### 3. Why `sendBeacon()` instead of `fetch()`?
- Guaranteed delivery even on page unload/close
- Critical for exit events, form abandonment
- Non-blocking (doesn't delay page transitions)

### 4. Why auto-instrumentation with `data-track`?
- Minimal developer friction
- No need to import tracking code in every component
- Declarative (tracking is visible in JSX)
- Easy to maintain and audit

### 5. Why fingerprinting?
- Backup when localStorage is cleared
- Probabilistic re-identification of returning visitors
- Improves visitor count accuracy

### 6. Why in-memory storage for demo?
- Fast prototyping
- No database setup required
- Easy to demonstrate
- Production will use ClickHouse (billions of events, fast queries)

## Production Migration Path

### Current (Demo):
```
Browser → /api/collect → In-memory array (1000 events)
```

### Production:
```
Browser → /api/collect → ClickHouse (billions of events)
                       ↓
                  Nightly cron job
                       ↓
                  PostgreSQL (visitor profiles)
                       ↓
                  Personalization API
```

**Steps to production:**
1. Replace in-memory storage with ClickHouse inserts
2. Set up PostgreSQL for visitor profiles
3. Create nightly cron job to aggregate events → profiles
4. Build personalization API to serve profile-based content
5. Add QR code patient linkage flow
6. Implement GDPR consent management

## Testing the System

### 1. Manual Testing
```bash
# Start dev server
npm run dev

# Visit tracking page
http://localhost:3000/tracking

# In another tab, visit demo page
http://localhost:3000/luxHospital

# Interact with page:
- Click buttons
- Scroll down
- Click phone numbers
- Switch tabs
- Click nav links

# Watch events appear in tracking dashboard in real-time
```

### 2. What to Verify
- ✅ Page view fires on load
- ✅ Clicks on data-track elements generate events
- ✅ Scroll milestones (25%, 50%, 75%, 100%) tracked
- ✅ Phone clicks generate 3+ events (clicked, dialer_opened, session_completed)
- ✅ Events include proper context (page, device, campaign)
- ✅ Same `anonymous_id` across page reloads
- ✅ Different `session_id` in different tabs

### 3. Browser Console
```javascript
// Check your identity
localStorage.getItem('anonymous_id')
sessionStorage.getItem('session_id')

// Manually trigger tracking
const { track } = useTracker();
track('test_event', { foo: 'bar' });
```

## Common Issues & Solutions

### Issue: Events not appearing in dashboard
**Check:**
1. Is TrackingProvider wrapping your component?
2. Is `/api/collect` endpoint running?
3. Check browser console for errors
4. Check Network tab for failed requests

### Issue: Anonymous ID changes on every page load
**Cause:** localStorage not persisting
**Solution:** Check browser privacy settings, ensure cookies/storage enabled

### Issue: Phone tracking not working
**Cause:** Page visibility API not supported (very old browsers)
**Solution:** Fallback to basic click tracking without session inference

### Issue: Duplicate events firing
**Cause:** Multiple TrackingProviders or event listeners
**Solution:** Ensure TrackingProvider at root level only, not nested

## Next Steps for Production

1. **Database Integration**
   - Install ClickHouse
   - Update `/api/collect` to insert into ClickHouse
   - Create tables with proper partitioning

2. **Visitor Profiles**
   - Set up PostgreSQL
   - Create nightly cron job
   - Aggregate events → profiles
   - Calculate interest scores

3. **QR Patient Linking**
   - Build QR generation endpoint
   - Create patient link flow
   - Backfill historical events with patient_id

4. **Personalization**
   - Build profile lookup API
   - Implement rule engine
   - Serve personalized content on revisit

5. **Compliance**
   - Add GDPR consent banner
   - Implement data retention policies
   - Add user data export/deletion

---

## Quick Reference: Key Files

| File | Purpose |
|------|---------|
| `lib/tracking/identity.ts` | Browser identity management |
| `lib/tracking/tracker.ts` | Core event tracking engine |
| `lib/tracking/types.ts` | TypeScript event types |
| `lib/tracking/useTracker.ts` | React hook for components |
| `lib/tracking/TrackingProvider.tsx` | Auto-instrumentation |
| `lib/tracking/phoneTracking.ts` | Enhanced phone call tracking |
| `app/api/collect/route.ts` | Backend API endpoint |
| `app/tracking/page.tsx` | Real-time dashboard |

## Questions for Your Fellow Developer?

Feel free to ask me to elaborate on any section!
