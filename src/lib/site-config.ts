import { useTranslations } from 'next-intl';
import siteConfigRaw from './site-config.json';
import type { SiteConfig, LinkItem } from './site-config.types';

/**
 * Recursively processes a configuration object and resolves t() function calls
 * @param obj The configuration object to process
 * @param t The translation function from next-intl
 * @returns Processed configuration with resolved translations
 */
function resolveTranslations(obj: unknown, t: (key: string) => string): unknown {
  if (typeof obj === 'string') {
    // Check if the string starts with "t('" and ends with "')"
    const tFunctionMatch = obj.match(/^t\('(.+)'\)$/);
    if (tFunctionMatch) {
      const translationKey = tFunctionMatch[1];
      return t(translationKey);
    }
    return obj;
  }
  
  if (Array.isArray(obj)) {
    return obj.map(item => resolveTranslations(item, t));
  }
  
  if (obj && typeof obj === 'object') {
    const resolved: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(obj)) {
      resolved[key] = resolveTranslations(value, t);
    }
    return resolved;
  }
  
  return obj;
}

/**
 * Hook to get the resolved site configuration with translations
 * @returns Fully resolved site configuration
 */
export function useSiteConfig(): SiteConfig {
  const t = useTranslations();
  
  // Process the raw config and resolve all t() calls
  const resolvedConfig = resolveTranslations(siteConfigRaw, t) as SiteConfig;
  
  return resolvedConfig;
}

/**
 * Get header configuration from the site config
 */
export function useHeaderConfig() {
  const siteConfig = useSiteConfig();
  return {
    logo: {
      text: siteConfig.site.branding.logoText,
      href: siteConfig.site.branding.logoHref,
      className: "text-lg font-bold transition-colors",
    },
    navigation: siteConfig.header.navigation,
    actions: siteConfig.header.actions,
    appearance: siteConfig.header.appearance,
    mobile: siteConfig.header.mobile,
    accessibility: siteConfig.header.accessibility,
  };
}

/**
 * Get footer configuration from the site config
 */
export function useFooterConfig() {
  const siteConfig = useSiteConfig();

  // Convert the simplified sections structure to the format expected by the footer
  const legalLinks = siteConfig.footer.sections.legal || [];
  const productLinks = siteConfig.footer.sections.products || [];
  const socialLinks = siteConfig.footer.social || [];

  return {
    contact: siteConfig.footer.contact,
    socialLinks,
    legalLinks,
    productLinks,
    // Empty arrays for sections not included in POC
    solutionLinks: [] as LinkItem[],
    resourceLinks: [] as LinkItem[],
    supportLinks: [] as LinkItem[],
    companyLinks: [] as LinkItem[],
    appearance: siteConfig.footer.appearance,
    copyright: siteConfig.footer.copyright,
  };
}

export default siteConfigRaw;
