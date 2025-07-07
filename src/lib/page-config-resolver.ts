import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { z } from 'zod';

/**
 * Interface for homepage configuration
 */
export interface HomePageConfig {
  hero: {
    headline: string;
    subtitle: string;
    ctaText: string;
    ctaHref: string;
  };
  features: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
  };
  social: {
    title: string;
    description: string;
  };
}

/**
 * Interface for about page configuration
 */
export interface AboutPageConfig {
  hero: {
    title: string;
    description: string;
  };
  team: {
    title: string;
    members: Array<{
      name: string;
      role: string;
      bio: string;
    }>;
  };
  company: {
    mission: string;
    vision: string;
    values: string[];
  };
}

/**
 * Zod schema for homepage validation
 */
const HomePageSchema = z.object({
  hero: z.object({
    headline: z.string().min(1, "Hero headline cannot be empty"),
    subtitle: z.string().min(1, "Hero subtitle cannot be empty"),
    ctaText: z.string().min(1, "CTA text cannot be empty"),
    ctaHref: z.string().min(1, "CTA href cannot be empty"),
  }),
  features: z.object({
    title: z.string().min(1, "Features title cannot be empty"),
    items: z.array(z.object({
      title: z.string().min(1, "Feature title cannot be empty"),
      description: z.string().min(1, "Feature description cannot be empty"),
      icon: z.string().optional(),
    })),
  }),
  social: z.object({
    title: z.string().min(1, "Social title cannot be empty"),
    description: z.string().min(1, "Social description cannot be empty"),
  }),
});

/**
 * Factory function to create homepage configuration
 */
function createHomePageConfig(t: (key: string, options?: { defaultValue?: string }) => string): HomePageConfig {
  const config = {
    hero: {
      headline: t('hero.headline', { defaultValue: 'Welcome to Our Platform' }),
      subtitle: t('hero.subtitle', { defaultValue: 'Build amazing things with our tools' }),
      ctaText: t('hero.ctaText', { defaultValue: 'Get Started' }),
      ctaHref: '/auth/signup',
    },
    features: {
      title: t('features.title', { defaultValue: 'Our Features' }),
      items: [
        {
          title: t('features.analytics.title', { defaultValue: 'Analytics' }),
          description: t('features.analytics.description', { defaultValue: 'Powerful insights' }),
          icon: 'chart-bar',
        },
        {
          title: t('features.collaboration.title', { defaultValue: 'Collaboration' }),
          description: t('features.collaboration.description', { defaultValue: 'Team workspace' }),
          icon: 'users',
        },
        {
          title: t('features.security.title', { defaultValue: 'Security' }),
          description: t('features.security.description', { defaultValue: 'Enterprise security' }),
          icon: 'shield',
        },
      ],
    },
    social: {
      title: t('social.title', { defaultValue: 'Join Our Community' }),
      description: t('social.description', { defaultValue: 'Connect with thousands of users' }),
    },
  };

  // Validate configuration
  const result = HomePageSchema.safeParse(config);
  if (!result.success) {
    throw new Error(`Invalid homepage configuration: ${result.error.message}`);
  }

  return config;
}

/**
 * Hook to get resolved homepage configuration
 */
export function useHomePageConfig(): HomePageConfig {
  const t = useTranslations('pages.home');
  
  return useMemo(() => {
    try {
      return createHomePageConfig(t);
    } catch (error) {
      console.error('Homepage configuration validation failed:', error);
      throw error;
    }
  }, [t]);
}

/**
 * Hook to get simple page translations (for basic pages)
 */
export function usePageTranslations(pageKey: string) {
  return useTranslations(`pages.${pageKey}`);
}
