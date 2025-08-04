import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { z } from 'zod';
import type { NavItem, ActionButton, AppearanceConfig } from './header-config';
import type { LinkItem, SocialLinkItem, ContactInfo, AppearanceConfig as FooterAppearanceConfig } from './footer-config';

/**
 * Cache for resolved header configurations per locale
 * Maps locale string to resolved header configuration to avoid redundant computation
 */
const headerConfigCache = new Map<string, ResolvedHeaderConfig>();

/**
 * Cache for resolved footer configurations per locale
 * Maps locale string to resolved footer configuration to avoid redundant computation
 */
const footerConfigCache = new Map<string, ResolvedFooterConfig>();

/**
 * TypeScript interface for resolved header configuration
 */
export interface ResolvedHeaderConfig {
  logo: {
    text: string;
    href: string;
    className: string;
  };
  navigation: NavItem[];
  actions: ActionButton[];
  appearance: AppearanceConfig;
  mobile: {
    showLogo: boolean;
    showActions: boolean;
    menuPosition: 'left' | 'right' | 'center';
    overlayBackground: 'blur' | 'solid' | 'dark';
  };
  accessibility: {
    skipToContentHref: string;
    logoAriaLabel: string;
    mobileMenuAriaLabel: string;
    navigationAriaLabel: string;
    mainLandmarkLabel?: string;
    searchFormLabel?: string;
    languageSwitcherLabel?: string;
  };
}

/**
 * TypeScript interface for resolved footer configuration
 */
export interface ResolvedFooterConfig {
  contact: ContactInfo;
  socialLinks: SocialLinkItem[];
  legalLinks: LinkItem[];
  productLinks: LinkItem[];
  solutionLinks: LinkItem[];
  resourceLinks: LinkItem[];
  supportLinks: LinkItem[];
  companyLinks: LinkItem[];
  appearance: FooterAppearanceConfig;
  copyright: string;
  accessibility: {
    footerAriaLabel: string;
    socialLinksAriaLabel: string;
    legalLinksAriaLabel: string;
    productLinksAriaLabel: string;
    contactInfoAriaLabel: string;
    backToTopAriaLabel?: string;
    copyrightAriaLabel?: string;
  };
}

/**
 * Zod schema for validating header configuration at runtime
 */
const HeaderConfigSchema = z.object({
  logo: z.object({
    text: z.string().min(1, "Logo text cannot be empty"),
    href: z.string().min(1, "Logo href cannot be empty"),
    className: z.string(),
  }),
  navigation: z.array(z.any()), // NavItem[] - complex validation would require importing Zod schemas from header-config
  actions: z.array(z.any()), // ActionButton[] - complex validation would require importing Zod schemas from header-config
  appearance: z.any(), // AppearanceConfig - complex validation would require importing Zod schema
  mobile: z.object({
    showLogo: z.boolean(),
    showActions: z.boolean(),
    menuPosition: z.enum(["left", "center", "right"]),
    overlayBackground: z.enum(["blur", "solid", "dark"]),
  }),
  accessibility: z.object({
    skipToContentHref: z.string().min(1, "Skip to content href cannot be empty"),
    logoAriaLabel: z.string().min(1, "Logo aria label is required for accessibility compliance"),
    mobileMenuAriaLabel: z.string().min(1, "Mobile menu aria label is required for accessibility compliance"),
    navigationAriaLabel: z.string().min(1, "Navigation aria label is required for accessibility compliance"),
    // Additional accessibility properties for comprehensive compliance
    mainLandmarkLabel: z.string().min(1, "Main landmark label is required for screen readers").optional(),
    searchFormLabel: z.string().optional(),
    languageSwitcherLabel: z.string().optional(),
  }).strict(), // Use strict mode to catch any missing required accessibility properties
});

/**
 * Zod schema for validating footer configuration at runtime
 */
const FooterConfigSchema = z.object({
  contact: z.any(), // ContactInfo - complex validation would require importing Zod schema
  socialLinks: z.array(z.any()), // SocialLinkItem[] - complex validation would require importing Zod schemas
  legalLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  productLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  solutionLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  resourceLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  supportLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  companyLinks: z.array(z.any()), // LinkItem[] - complex validation would require importing Zod schemas
  appearance: z.any(), // FooterAppearanceConfig - complex validation would require importing Zod schema
  copyright: z.string().min(1, "Copyright text cannot be empty"),
  accessibility: z.object({
    footerAriaLabel: z.string().min(1, "Footer aria label is required for accessibility compliance"),
    socialLinksAriaLabel: z.string().min(1, "Social links aria label is required for accessibility compliance"),
    legalLinksAriaLabel: z.string().min(1, "Legal links aria label is required for accessibility compliance"),
    productLinksAriaLabel: z.string().min(1, "Product links aria label is required for accessibility compliance"),
    contactInfoAriaLabel: z.string().min(1, "Contact info aria label is required for accessibility compliance"),
    backToTopAriaLabel: z.string().optional(),
    copyrightAriaLabel: z.string().optional(),
  }).strict(), // Use strict mode to ensure all accessibility properties are validated
});

/**
 * Reusable configuration resolver that validates generated configs with Zod schemas
 * @param schema - Zod schema for validation
 * @param factory - Factory function that generates the configuration
 * @param configType - Type name for error messages (e.g., 'header', 'footer')
 * @returns Validated configuration
 * @throws {Error} If the generated configuration is invalid
 */
function createConfigResolver<T>(
  schema: z.ZodType<unknown>,
  factory: (getKey: (key: string, options?: { defaultValue?: string }) => string) => T,
  configType: string
) {
  return (t: (key: string, options?: { defaultValue?: string }) => string): T => {
    // Create scoped key accessor
    const getKey = (key: string, options?: { defaultValue?: string }) => t(key, options);
    
    // Generate configuration using factory
    const config = factory(getKey);
    
    // Validate configuration using Zod schema
    const result = schema.safeParse(config);
    if (!result.success) {
      throw new Error(`Invalid ${configType} configuration: ${result.error.message}`);
    }
    
    // Return the original config with proper typing (Zod validation passed)
    return config;
  };
}


/**
 * Header configuration factory function
 * @param getKey - Scoped key accessor function
 * @returns Header configuration object
 */
const headerConfigFactory = (getKey: (key: string, options?: { defaultValue?: string }) => string): ResolvedHeaderConfig => ({
  logo: {
    text: getKey('logo.text', { defaultValue: 'My App' }),
    href: "/",
    className: "text-lg font-bold transition-colors",
  },
  navigation: [
    {
      label: getKey('navigation.features', { defaultValue: 'Features' }),
      href: "/features",
      subItems: [
        {
          label: getKey('navigation.featuresAnalytics', { defaultValue: 'Analytics' }),
          href: "/features/analytics",
          description: getKey('navigation.featuresAnalyticsDescription', { defaultValue: 'Powerful analytics and insights' })
        },
        {
          label: getKey('navigation.featuresCollaboration', { defaultValue: 'Collaboration' }),
          href: "/features/collaboration",
          description: getKey('navigation.featuresCollaborationDescription', { defaultValue: 'Team collaboration tools' })
        }
      ]
    },
    {
      label: getKey('navigation.pricing', { defaultValue: 'Pricing' }),
      href: "/pricing"
    },
    {
      label: getKey('navigation.about', { defaultValue: 'About' }),
      href: "/about"
    }
  ] as NavItem[],
  actions: [
    {
      label: getKey('actions.signIn', { defaultValue: 'Sign In' }),
      href: "/auth/signin",
      variant: "ghost" as const,
      size: "sm" as const
    },
    {
      label: getKey('actions.getStarted', { defaultValue: 'Get Started' }),
      href: "/auth/signup",
      variant: "primary" as const,
      size: "sm" as const
    }
  ] as ActionButton[],
  appearance: {
    variant: "elevated",
    background: "default",
    sticky: true,
    showBorder: true,
    height: "default",
    mobileMenuBreakpoint: "md",
    navigationAlignment: "right",
    className: ""
  } as AppearanceConfig,
  mobile: {
    showLogo: true,
    showActions: true,
    menuPosition: "right" as const,
    overlayBackground: "blur" as const
  },
  accessibility: {
    skipToContentHref: "#main-content",
    logoAriaLabel: getKey('accessibility.logoAriaLabel', { defaultValue: 'Go to homepage' }),
    mobileMenuAriaLabel: getKey('accessibility.mobileMenuAriaLabel', { defaultValue: 'Toggle mobile menu' }),
    navigationAriaLabel: getKey('accessibility.navigationAriaLabel', { defaultValue: 'Main navigation' })
  },
});

/**
 * Create header configuration resolver using the reusable resolver pattern
 */
const createHeaderConfig = createConfigResolver(
  HeaderConfigSchema,
  headerConfigFactory,
  'header'
);

/**
 * Footer configuration factory function
 * @param getKey - Scoped key accessor function
 * @returns Footer configuration object
 */
const footerConfigFactory = (getKey: (key: string, options?: { defaultValue?: string }) => string): ResolvedFooterConfig => ({
  contact: {
    address: getKey('contact.address', { defaultValue: '123 Main Street, City, State 12345' }),
    phone: getKey('contact.phone', { defaultValue: '+1 (555) 123-4567' }),
    email: getKey('contact.email', { defaultValue: 'paperkitegames@gmail.com' })
  } as ContactInfo,
  socialLinks: [
    {
      platform: getKey('social.x', { defaultValue: 'X' }),
      href: "https://x.com/PaperKiteGames"
    },
    {
      platform: getKey('social.ig', { defaultValue: 'IG' }),
      href: "https://www.instagram.com/paperkitegames"
    },
    {
      platform: getKey('social.discord', { defaultValue: 'Discord' }),
      href: "https://discord.gg/eFgfb6vHwG"
    },
    {
      platform: getKey('social.youtube', { defaultValue: 'YouTube' }),
      href: "https://www.youtube.com/@PaperKiteGames"
    }
  ] as SocialLinkItem[],
  legalLinks: [
    {
      label: getKey('legal.privacy', { defaultValue: 'Privacy Policy' }),
      href: "/privacy"
    },
    {
      label: getKey('legal.terms', { defaultValue: 'Terms of Service' }),
      href: "/terms"
    }
  ] as LinkItem[],
  productLinks: [
    {
      label: getKey('product.features', { defaultValue: 'Features' }),
      href: "/features"
    },
    {
      label: getKey('product.pricing', { defaultValue: 'Pricing' }),
      href: "/pricing"
    }
  ] as LinkItem[],
  // Keep empty arrays for sections not configured
  solutionLinks: [] as LinkItem[],
  resourceLinks: [] as LinkItem[],
  supportLinks: [] as LinkItem[],
  companyLinks: [] as LinkItem[],
  appearance: {
    variant: "detailed",
    background: "dark",
    showBackToTop: true,
    showDividers: true,
    className: "w-screen max-w-none !mx-0 !px-0"
  } as FooterAppearanceConfig,
  copyright: getKey('copyright', { defaultValue: '© 2025 My Company. All rights reserved.' }),
  accessibility: {
    footerAriaLabel: getKey('accessibility.footerAriaLabel', { defaultValue: 'Website footer' }),
    socialLinksAriaLabel: getKey('accessibility.socialLinksAriaLabel', { defaultValue: 'Social media links' }),
    legalLinksAriaLabel: getKey('accessibility.legalLinksAriaLabel', { defaultValue: 'Legal information' }),
    productLinksAriaLabel: getKey('accessibility.productLinksAriaLabel', { defaultValue: 'Product links' }),
    contactInfoAriaLabel: getKey('accessibility.contactInfoAriaLabel', { defaultValue: 'Contact information' }),
    backToTopAriaLabel: getKey('accessibility.backToTopAriaLabel', { defaultValue: 'Back to top of page' }),
    copyrightAriaLabel: getKey('accessibility.copyrightAriaLabel', { defaultValue: 'Copyright information' }),
  },
});

/**
 * Create footer configuration resolver using the reusable resolver pattern
 */
const createFooterConfig = createConfigResolver(
  FooterConfigSchema,
  footerConfigFactory,
  'footer'
);

/**
 * Server-side function to get resolved header configuration with caching
 * @param locale - The locale to get configuration for
 * @returns Promise that resolves to header configuration
 * @throws {Error} If the generated configuration is invalid
 */
export async function getResolvedHeaderConfig(locale: string): Promise<ResolvedHeaderConfig> {
  // Check cache first
  if (headerConfigCache.has(locale)) {
    return headerConfigCache.get(locale)!;
  }

  try {
    const t = await getTranslations({ locale, namespace: 'config.header' });
    const config = createHeaderConfig(t);
    
    // Cache the resolved configuration
    headerConfigCache.set(locale, config);
    
    return config;
  } catch (error) {
    console.error(`Server-side header configuration validation failed for locale ${locale}:`, error);
    throw error;
  }
}

/**
 * Server-side function to get resolved footer configuration with caching
 * @param locale - The locale to get configuration for
 * @returns Promise that resolves to footer configuration
 * @throws {Error} If the generated configuration is invalid
 */
export async function getResolvedFooterConfig(locale: string): Promise<ResolvedFooterConfig> {
  // Check cache first
  if (footerConfigCache.has(locale)) {
    return footerConfigCache.get(locale)!;
  }

  try {
    const t = await getTranslations({ locale, namespace: 'config.footer' });
    const config = createFooterConfig(t);
    
    // Cache the resolved configuration
    footerConfigCache.set(locale, config);
    
    return config;
  } catch (error) {
    console.error(`Server-side footer configuration validation failed for locale ${locale}:`, error);
    throw error;
  }
}

/**
 * Clear the configuration cache for a specific locale or all locales
 * @param locale - Optional locale to clear. If not provided, clears all cached configs
 */
export function clearConfigCache(locale?: string): void {
  if (locale) {
    headerConfigCache.delete(locale);
    footerConfigCache.delete(locale);
  } else {
    headerConfigCache.clear();
    footerConfigCache.clear();
  }
}

/**
 * Get cache statistics for monitoring and debugging
 * @returns Object containing cache size information
 */
export function getConfigCacheStats(): {
  headerCacheSize: number;
  footerCacheSize: number;
  cachedLocales: string[];
} {
  const headerLocales = Array.from(headerConfigCache.keys());
  const footerLocales = Array.from(footerConfigCache.keys());
  const allLocales = [...new Set([...headerLocales, ...footerLocales])];

  return {
    headerCacheSize: headerConfigCache.size,
    footerCacheSize: footerConfigCache.size,
    cachedLocales: allLocales,
  };
}

/**
 * Hook to get resolved header configuration compatible with existing HeaderClient
 * @throws {Error} If the generated configuration is invalid
 */
export function useResolvedHeaderConfig(): ResolvedHeaderConfig {
  const t = useTranslations('config.header');
  
  return useMemo(() => {
    try {
      return createHeaderConfig(t);
    } catch (error) {
      console.error('Header configuration validation failed:', error);
      throw error;
    }
  }, [t]);
}

/**
 * Hook to get resolved footer configuration compatible with existing FooterClient
 * @throws {Error} If the generated configuration is invalid
 */
export function useResolvedFooterConfig(): ResolvedFooterConfig {
  const t = useTranslations('config.footer');
  
  return useMemo(() => {
    try {
      return createFooterConfig(t);
    } catch (error) {
      console.error('Footer configuration validation failed:', error);
      throw error;
    }
  }, [t]);
}
