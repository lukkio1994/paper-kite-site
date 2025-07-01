/**
 * Business Contact Information
 * 
 * Centralized configuration for Paper Kite Games contact information.
 * Update these constants to change contact details across the entire site.
 */

export const BUSINESS_EMAIL = 'paperkitegames@gmail.com';
export const BUSINESS_EMAIL_MAILTO = `mailto:${BUSINESS_EMAIL}`;
export const COMPANY_NAME = 'Paper Kite Games';

export const CONTACT_INFO = {
  email: BUSINESS_EMAIL,
  emailMailto: BUSINESS_EMAIL_MAILTO,
  company: COMPANY_NAME,
} as const;
