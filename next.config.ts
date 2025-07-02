import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

/**
 * Configure next-intl plugin with our i18n configuration
 * This enables server-side translation loading and proper routing
 */
const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);
