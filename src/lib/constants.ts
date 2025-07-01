/**
 * Centralized Constants for Paper Kite Games
 * 
 * This file re-exports all constants from their domain-specific files
 * for backward compatibility and convenience.
 * 
 * For new code, consider importing directly from the specific files:
 * - import { CONTACT_INFO } from '@/lib/contact'
 * - import { BRAND_CONTENT } from '@/lib/brand'
 */

// Re-export all contact-related constants
export {
  BUSINESS_EMAIL,
  BUSINESS_EMAIL_MAILTO,
  COMPANY_NAME,
  CONTACT_INFO,
} from './contact';

// Re-export all brand-related constants
export {
  MISSION_STATEMENT,
  BRAND_TAGLINE,
  BRAND_SUBLINE,
  BRAND_CONTENT,
  TINIAD_DESCRIPTION_PART1,
  TINIAD_DESCRIPTION_PART2,
  TINIAD_MICRO_TAGLINE,
  TINIAD_KEY_FEATURES,
  TINIAD_CONTENT,
} from './brand';
