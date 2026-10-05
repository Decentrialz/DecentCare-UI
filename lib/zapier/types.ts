/**
 * Zapier Integration Types
 */

export interface ZapierPayload {
  full_name: string;
  email: string;
  phone_number: string;
  organization: string;
  role: string;
  organization_type: string;
  message: string;
  url: string;
  click_type: string;
}

export interface FormSubmissionData {
  full_name: string;
  email: string;
  phone_number: string;
  organization: string;
  role?: string;
  organization_type?: string;
  message?: string;
  click_type: 'request-demo' | 'contact-form';
}

export interface ZapierResponse {
  success: boolean;
  message: string;
  timestamp?: string;
  error?: string;
}
