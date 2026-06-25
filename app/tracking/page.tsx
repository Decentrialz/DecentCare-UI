"use client";

import React, { useEffect, useState, useMemo } from 'react';
import { useTracker } from '@/lib/tracking';

interface TrackedEvent {
  messageId: string;
  type: string;
  event?: string;
  name?: string;
  anonymousId: string;
  sessionId: string;
  patientId?: string;
  timestamp: string;
  originalTimestamp: string;
  context: any;
  properties?: any;
  traits?: any;
}

interface EventStats {
  totalEvents: number;
  uniqueVisitors: number;
  uniqueSessions: number;
}

export default function TrackingDashboard() {
  const [events, setEvents] = useState<TrackedEvent[]>([]);
  const [stats, setStats] = useState<EventStats>({ totalEvents: 0, uniqueVisitors: 0, uniqueSessions: 0 });
  const [filter, setFilter] = useState<string>('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  
  const { anonymousId, sessionId } = useTracker();

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchEvents = async () => {
    try {
      const params = new URLSearchParams({ limit: '100' });
      if (filter !== 'all') {
        params.append('type', filter);
      }
      
      const response = await fetch(`/api/collect?${params}`);
      const data = await response.json();
      setEvents(data.events || []);
      setStats(data.stats || { totalEvents: 0, uniqueVisitors: 0, uniqueSessions: 0 });
    } catch (error) {
      console.error('Failed to fetch events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
    if (autoRefresh) {
      const interval = setInterval(fetchEvents, 3000);
      return () => clearInterval(interval);
    }
  }, [filter, autoRefresh]);

  const uniqueUsers = useMemo(() => {
    const usersMap = new Map<string, {
      anonymousId: string;
      patientId?: string;
      lastActive: string;
      eventCount: number;
    }>();

    events.forEach(e => {
      const existing = usersMap.get(e.anonymousId);
      if (!existing) {
        usersMap.set(e.anonymousId, {
          anonymousId: e.anonymousId,
          patientId: e.patientId,
          lastActive: e.timestamp,
          eventCount: 1
        });
      } else {
        existing.eventCount++;
        if (e.patientId) existing.patientId = e.patientId;
        if (new Date(e.timestamp) > new Date(existing.lastActive)) {
          existing.lastActive = e.timestamp;
        }
      }
    });

    return Array.from(usersMap.values()).sort((a, b) => 
      new Date(b.lastActive).getTime() - new Date(a.lastActive).getTime()
    );
  }, [events]);

  const filteredEvents = useMemo(() => {
    if (!selectedUser) return events;
    return events.filter(e => e.anonymousId === selectedUser);
  }, [events, selectedUser]);

  const getEventColor = (type: string) => {
    switch (type) {
      case 'page': return 'bg-blue-100 text-blue-800';
      case 'track': return 'bg-green-100 text-green-800';
      case 'identify': return 'bg-purple-100 text-purple-800';
      case 'alias': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Event Tracking</h1>
              <p className="text-sm text-gray-500 mt-1">Real-time user monitoring</p>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">{stats.uniqueVisitors}</p>
                <p className="text-xs text-gray-500 uppercase font-semibold">Visitors</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-indigo-600">{stats.totalEvents}</p>
                <p className="text-xs text-gray-500 uppercase font-semibold">Events</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 container mx-auto px-4 py-8 flex gap-6 h-[calc(100vh-100px)]">
        
        {/* Sidebar: Users */}
        <aside className="w-80 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50">
            <h2 className="font-semibold text-gray-800">Active Visitors ({uniqueUsers.length})</h2>
            <button 
              onClick={() => setSelectedUser(null)}
              className={`mt-2 w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${!selectedUser ? 'bg-indigo-50 text-indigo-700 font-medium' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Show All Events
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {uniqueUsers.map(user => (
              <button
                key={user.anonymousId}
                onClick={() => setSelectedUser(user.anonymousId)}
                className={`w-full text-left p-3 rounded-lg border-2 transition-all ${selectedUser === user.anonymousId ? 'border-indigo-500 bg-indigo-50' : 'border-transparent hover:border-gray-200 bg-white'}`}
              >
                <div className="flex items-start justify-between">
                  <div className="truncate">
                    {user.patientId ? (
                      <div className="flex items-center gap-1.5 text-purple-700 font-bold text-sm truncate">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        {user.patientId}
                      </div>
                    ) : (
                      <div className="text-gray-700 font-medium text-sm truncate">
                        Anon Visitor
                      </div>
                    )}
                    <div className="text-xs text-gray-400 font-mono mt-1 truncate">
                      {user.anonymousId}
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                  <span>{user.eventCount} events</span>
                  <span>{new Date(user.lastActive).toLocaleTimeString()}</span>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content: Timeline */}
        <main className="flex-1 bg-white rounded-xl shadow-sm border border-gray-200 flex flex-col overflow-hidden">
          
          {/* Timeline Toolbar */}
          <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">
              {selectedUser ? 'User Timeline' : 'Global Timeline'} 
              <span className="text-gray-500 font-normal ml-2">({filteredEvents.length} events)</span>
            </h2>
            
            <div className="flex items-center gap-4">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-3 py-1.5 border border-gray-300 text-sm rounded-md focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="all">All Types</option>
                <option value="page">Page Views</option>
                <option value="track">Actions</option>
              </select>

              <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={autoRefresh}
                  onChange={(e) => setAutoRefresh(e.target.checked)}
                  className="w-4 h-4 text-indigo-600 rounded focus:ring-indigo-500"
                />
                Auto-refresh
              </label>
            </div>
          </div>

          {/* Timeline Feed */}
          <div className="flex-1 overflow-y-auto p-6">
            {filteredEvents.length === 0 ? (
              <div className="h-full flex items-center justify-center text-gray-400">
                No events found for this filter.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredEvents.map((event) => (
                  <div key={event.messageId} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow transition-shadow">
                    
                    {/* Event Header */}
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-3">
                        <span className={`px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide ${getEventColor(event.type)}`}>
                          {event.type}
                        </span>
                        <span className="font-bold text-gray-900 text-lg">
                          {event.event || event.name || 'Event'}
                        </span>
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {new Date(event.timestamp).toLocaleTimeString()}
                      </div>
                    </div>

                    {/* Event Context */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm bg-gray-50 rounded-md p-3 mb-3 border border-gray-100">
                       <div>
                          <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Patient ID</p>
                          <p className="font-medium text-purple-700 truncate">{event.patientId || 'Unlinked'}</p>
                       </div>
                       <div>
                          <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Device FP</p>
                          <p className="font-mono text-blue-600 truncate" title={event.context?.fingerprint}>{event.context?.fingerprint?.substring(0,8) || 'N/A'}</p>
                       </div>
                       <div>
                          <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Page</p>
                          <p className="font-medium text-gray-900 truncate">{event.context?.page?.path || 'N/A'}</p>
                       </div>
                       <div>
                          <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Device</p>
                          <p className="font-medium text-gray-900 truncate">{event.context?.device?.type || 'N/A'}</p>
                       </div>
                       <div>
                          <p className="text-gray-400 text-xs uppercase font-semibold mb-0.5">Session ID</p>
                          <p className="font-mono text-gray-600 truncate">{event.sessionId?.substring(0,8)}...</p>
                       </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      {/* Properties Toggle */}
                      {event.properties && Object.keys(event.properties).length > 0 && (
                        <details className="group">
                          <summary className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 cursor-pointer select-none outline-none">
                            View Event Properties
                          </summary>
                          <div className="mt-2 bg-slate-900 text-green-400 p-4 rounded-md overflow-x-auto text-xs font-mono shadow-inner">
                            {JSON.stringify(event.properties, null, 2)}
                          </div>
                        </details>
                      )}

                      {/* Full JSON Toggle */}
                      <details className="group">
                        <summary className="text-sm font-semibold text-gray-500 hover:text-gray-700 cursor-pointer select-none outline-none">
                          View Full Event JSON
                        </summary>
                        <div className="mt-2 bg-gray-100 text-gray-800 p-4 rounded-md overflow-x-auto text-xs font-mono border border-gray-200">
                          {JSON.stringify(event, null, 2)}
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </main>
      </div>
    </div>
  );
}
