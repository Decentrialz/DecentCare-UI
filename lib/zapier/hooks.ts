/**
 * Hook for Zapier form submission
 */

'use client';

import { useState, useCallback } from 'react';
import { FormSubmissionData, ZapierResponse } from '@/lib/zapier/types';

interface UseZapierSubmitReturn {
  isLoading: boolean;
  isSuccess: boolean;
  error: string | null;
  submit: (data: FormSubmissionData) => Promise<boolean>;
  reset: () => void;
}

export const useZapierSubmit = (): UseZapierSubmitReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = useCallback(
    async (data: FormSubmissionData): Promise<boolean> => {
      setIsLoading(true);
      setError(null);
      setIsSuccess(false);

      try {
        const response = await fetch('/api/zapier', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        const result = (await response.json()) as ZapierResponse;

        if (!response.ok || !result.success) {
          setError(result.error || result.message || 'Failed to submit form');
          return false;
        }

        setIsSuccess(true);
        return true;
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Network error occurred');
        return false;
      } finally {
        setIsLoading(false);
      }
    },
    []
  );

  const reset = useCallback(() => {
    setIsLoading(false);
    setIsSuccess(false);
    setError(null);
  }, []);

  return { isLoading, isSuccess, error, submit, reset };
};
