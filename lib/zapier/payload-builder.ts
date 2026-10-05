import { FormSubmissionData, ZapierPayload } from './types';

const CLICK_TYPE_MAP: Record<FormSubmissionData['click_type'], string> = {
  'request-demo': 'Request Demo form - Home Page',
  'contact-form': 'Contact Form - Contact Page',
};

export const buildZapierPayload = (
  data: FormSubmissionData,
  pageUrl: string = 'decentcare.ai'
): ZapierPayload => {
  return {
    full_name: data.full_name?.trim() || '',
    email: data.email?.trim().toLowerCase() || '',
    phone_number: formatPhoneNumber(data.phone_number || ''),
    organization: data.organization?.trim() || '',
    role: data.role?.trim() || '',
    organization_type: data.organization_type?.trim() || '',
    message: data.message?.trim() || '',
    url: normalizeUrl(pageUrl),
    click_type: CLICK_TYPE_MAP[data.click_type],
  };
};

/**
 * Format Indian phone number to +91XXXXXXXXXX
 */
export const formatPhoneNumber = (phoneNumber: string): string => {
  const cleaned = phoneNumber.replace(/\D/g, '');

  if (cleaned.length === 10) {
    return `+91${cleaned}`;
  } else if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return `+${cleaned}`;
  }

  return cleaned;
};

export const normalizeUrl = (url: string): string => {
  try {
    if (!url.includes('://')) {
      url = `https://${url}`;
    }
    const parsedUrl = new URL(url);
    return `${parsedUrl.origin}${parsedUrl.pathname}`;
  } catch {
    return url;
  }
};
