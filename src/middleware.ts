/**
 * Next.js Middleware for Internationalization
 * 
 * Handles automatic locale detection, routing, and fallback behavior.
 * This middleware ensures users are served the appropriate language
 * version of the site with graceful fallback to English.
 */

import createMiddleware from 'next-intl/middleware';
import { LOCALES, DEFAULT_LOCALE } from './lib/i18n';

/**
 * Configure next-intl middleware with our locale constants
 * This provides:
 * - Automatic locale detection from headers/cookies
 * - URL-based locale routing (e.g., /en/about)
 * - Fallback to DEFAULT_LOCALE for unsupported locales
 * - Prefix handling for clean URLs
 */
export default createMiddleware({
  // Use centralized locale constants from lib/i18n
  locales: LOCALES,
  
  // Default locale for fallback behavior
  defaultLocale: DEFAULT_LOCALE,
  
  // Prefix strategy: 'as-needed' means the default locale (en) 
  // won't have a prefix, but other locales will (e.g., /fr/about)
  localePrefix: 'as-needed'
});

/**
 * Middleware configuration
 * Define which routes should be handled by the i18n middleware
 * 
 * This matcher ensures the middleware only runs on:
 * - Pages (not API routes, static files, or internal Next.js routes)
 * - Excludes _next, api, favicon.ico, and other static assets
 */
export const config = {
  matcher: [
    // Match all pathnames except for:
    // - API routes (/api/...)
    // - Static files (/favicon.ico, /sitemap.xml, etc.)
    // - Next.js internals (/_next/...)
    '/((?!api|_next|_vercel|.*\\..*).*)'
  ]
};
