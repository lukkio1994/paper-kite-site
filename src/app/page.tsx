/**
 * Root Page Redirect
 * 
 * This page handles the root route (/) and redirects to the default locale.
 * With next-intl, all pages should be under [locale] routes, so this
 * ensures users are properly redirected to /en or their preferred locale.
 */

import { redirect } from 'next/navigation';
import { DEFAULT_LOCALE } from '@/lib/i18n';

export default function RootPage() {
  // Redirect to default locale
  // The middleware will handle locale detection and routing
  redirect(`/${DEFAULT_LOCALE}`);
}