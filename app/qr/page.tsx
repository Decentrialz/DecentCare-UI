"use client";

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTracker } from '@/lib/tracking/useTracker';
import { identityManager } from '@/lib/tracking/identity';

function QRScanner() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const { anonymousId, sessionId } = useTracker();
  
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    // Only proceed if we have token and tracking IDs
    if (!token) {
      setStatus('error');
      setErrorMessage('Invalid QR code. No token found in URL.');
      return;
    }

    if (!anonymousId || !sessionId) {
      // Wait for tracker to initialize the IDs from IdentityManager
      return;
    }

    const linkPatient = async () => {
      try {
        const response = await fetch('/api/link-patient', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token,
            anonymous_id: anonymousId,
            session_id: sessionId,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to link patient profile');
        }

        // Save patient ID locally so all future events are linked
        if (data?.data?.patient_id) {
          identityManager.linkPatient(data.data.patient_id);
        }

        // Success!
        setStatus('success');
      } catch (error: any) {
        setStatus('error');
        setErrorMessage(error.message);
      }
    };

    linkPatient();
  }, [token, anonymousId, sessionId]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        {status === 'loading' && (
          <div className="animate-pulse space-y-6">
            <div className="w-16 h-16 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto"></div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Securely Linking...</h2>
              <p className="text-gray-500">Please wait while we connect your device to your patient profile.</p>
            </div>
          </div>
        )}

        {status === 'success' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto shadow-sm border border-green-200">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Successfully Linked!</h2>
              <p className="text-gray-600 mb-6">
                Your device is now securely connected. We have securely synced your history with your profile to provide a better experience.
              </p>
              <a href="/" className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md">
                Go to Home Page
              </a>
            </div>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-6">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto shadow-sm border border-red-200">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Link Failed</h2>
              <p className="text-red-700 bg-red-50 p-3 rounded-lg text-sm border border-red-100 mb-4 font-medium">
                {errorMessage}
              </p>
              <p className="text-gray-500 text-sm">
                The QR code might have expired or is invalid. Please ask the hospital staff to generate a new one for you.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function QRLandingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin"></div>
      </div>
    }>
      <QRScanner />
    </Suspense>
  );
}
