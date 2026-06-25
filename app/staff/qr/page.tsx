"use client";

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

export default function StaffQRGenerator() {
  const [patientId, setPatientId] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateQR = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!patientId.trim()) return;

    setLoading(true);
    setError(null);
    setToken(null);

    try {
      const response = await fetch('/api/tokens', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ patient_id: patientId }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate token');
      }

      if (data?.data?.token) {
        setToken(data.data.token);
      } else {
        throw new Error('Invalid response format. Missing token.');
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Generate the full URL for the QR code
  const qrUrl = token && typeof window !== 'undefined' 
    ? `${window.location.origin}/qr?token=${token}` 
    : '';

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-2xl font-bold text-indigo-900 mb-6 text-center">
          Generate Patient QR
        </h1>

        <form onSubmit={generateQR} className="space-y-4">
          <div>
            <label htmlFor="patientId" className="block text-sm font-medium text-gray-700 mb-1">
              Patient ID (MRN)
            </label>
            <input
              type="text"
              id="patientId"
              value={patientId}
              onChange={(e) => setPatientId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. PAT-12345"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading || !patientId.trim()}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 transition-colors"
          >
            {loading ? 'Generating...' : 'Generate QR Code'}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-200">
            {error}
          </div>
        )}

        {token && qrUrl && (
          <div className="mt-8 flex flex-col items-center animate-fade-in">
            <div className="p-4 bg-white border-2 border-gray-100 rounded-lg shadow-sm">
              <QRCodeSVG value={qrUrl} size={256} level="H" includeMargin={true} />
            </div>
            <p className="mt-4 text-sm text-gray-600 text-center font-medium">
              Ask the patient to scan this QR code with their mobile phone.
            </p>
            <div className="mt-2 text-xs text-gray-400 break-all bg-gray-50 p-2 rounded w-full text-center border border-gray-200">
              {qrUrl}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
