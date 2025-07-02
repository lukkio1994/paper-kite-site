/**
 * Internationalization Configuration
 * 
 * Centralized locale management for Paper Kite Games website.
 * This file defines supported locales, default fallback behavior, and types
 * for clean, maintainable internationalization across the project.
 */

import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

/**
 * Supported locale constants - prevents magic strings throughout the project
 * Add new locales here as they become available
 */
export const LOCALES = ['en'] as const;

/**
 * Default fallback locale - used when no locale is detected or available
 * This ensures the site never breaks due to missing translations
 */
export const DEFAULT_LOCALE = 'en' as const;

/**
 * TypeScript type for supported locales
 * Automatically derived from LOCALES array for type safety
 */
export type Locale = (typeof LOCALES)[number];

/**
 * Validation helper to check if a locale is supported
 * @param locale - The locale string to validate
 * @returns true if the locale is supported, false otherwise
 */
export function isValidLocale(locale: string): locale is Locale {
  return LOCALES.includes(locale as Locale);
}

/**
 * Next-intl configuration with fallback behavior
 * This function loads the appropriate translation messages for each locale
 * and provides safe fallback to English if translations are missing
 */
export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is defined and validate that it's supported
  const currentLocale = locale || DEFAULT_LOCALE;
  
  if (!isValidLocale(currentLocale)) {
    notFound();
  }

  try {
    return {
      // Include the current locale in the configuration
      locale: currentLocale,
      // Load translation messages for the requested locale
      // Falls back to default locale if file is missing
      messages: (await import(`../../messages/${currentLocale}.json`)).default,
    };
  } catch {
    // Fallback to default locale if translation file is missing
    console.warn(`Failed to load translations for locale '${currentLocale}', falling back to '${DEFAULT_LOCALE}'`);
    
    return {
      locale: DEFAULT_LOCALE,
      messages: (await import(`../../messages/${DEFAULT_LOCALE}.json`)).default,
    };
  }
});
