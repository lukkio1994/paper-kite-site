/**
 * HeroSection Component
 * 
 * Reusable hero section component for landing pages and feature highlights.
 * Supports customizable backgrounds, content, and call-to-action buttons.
 * 
 * @component
 * @example
 * ```tsx
 * <HeroSection
 *   title="Paper Kite Games"
 *   subtitle="Crafting immersive gaming experiences"
 *   description="We create innovative games that challenge and delight players worldwide."
 *   primaryCta={{
 *     text: "Play Our Games",
 *     href: "/games"
 *   }}
 *   secondaryCta={{
 *     text: "About Us",
 *     href: "/about"
 *   }}
 *   backgroundVariant="gradient"
 * />
 * ```
 */

import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export interface HeroSectionProps {
  /**
   * Main headline text
   */
  title: string;
  
  /**
   * Subtitle or tagline
   */
  subtitle?: string;
  
  /**
   * Detailed description text
   */
  description?: string;
  
  /**
   * Primary call-to-action button
   */
  primaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  
  /**
   * Secondary call-to-action button
   */
  secondaryCta?: {
    text: string;
    href: string;
    external?: boolean;
  };
  
  /**
   * Background style variant
   * @default "gradient"
   */
  backgroundVariant?: 'gradient' | 'solid' | 'image' | 'dungeon';
  
  /**
   * Text alignment
   * @default "center"
   */
  textAlign?: 'left' | 'center' | 'right';
  
  /**
   * Custom logo or icon element
   */
  logo?: React.ReactNode;
  
  /**
   * Additional CSS classes
   */
  className?: string;
  
  /**
   * Children elements to render below the main content
   */
  children?: React.ReactNode;
}

const backgroundVariants = {
  gradient: 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900',
  solid: 'bg-white dark:bg-gray-900',
  image: 'bg-cover bg-center bg-no-repeat',
  dungeon: 'bg-gradient-to-br from-dungeon-dark to-purple-900 dark:from-gray-900 dark:to-dungeon-dark',
};

const textAlignments = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

export function HeroSection({
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  backgroundVariant = 'gradient',
  textAlign = 'center',
  logo,
  className,
  children,
}: HeroSectionProps) {
  const CtaButton = ({ cta, variant }: { cta: NonNullable<HeroSectionProps['primaryCta']>, variant: 'primary' | 'outline' }) => {
    const buttonContent = (
      <Button variant={variant} size="lg">
        {cta.text}
      </Button>
    );

    if (cta.external) {
      return (
        <a
          href={cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <Link href={cta.href} className="inline-block">
        {buttonContent}
      </Link>
    );
  };

  return (
    <section
      className={cn(
        'relative py-20 sm:py-32',
        backgroundVariants[backgroundVariant],
        className
      )}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn('max-w-4xl', textAlign === 'center' && 'mx-auto', textAlignments[textAlign])}>
          
          {/* Logo */}
          {logo && (
            <div className={cn('mb-8', textAlign === 'center' && 'flex justify-center')}>
              {logo}
            </div>
          )}
          
          {/* Title */}
          <h1 
            id="hero-title"
            className={cn(
              'text-4xl sm:text-5xl lg:text-6xl font-bold mb-6',
              backgroundVariant === 'dungeon' 
                ? 'text-white' 
                : 'text-gray-900 dark:text-white'
            )}
          >
            {title}
          </h1>
          
          {/* Subtitle */}
          {subtitle && (
            <p className={cn(
              'text-xl sm:text-2xl mb-6',
              backgroundVariant === 'dungeon' 
                ? 'text-purple-100' 
                : 'text-gray-600 dark:text-gray-300'
            )}>
              {subtitle}
            </p>
          )}
          
          {/* Description */}
          {description && (
            <p className={cn(
              'text-lg sm:text-xl mb-8 max-w-3xl',
              textAlign === 'center' && 'mx-auto',
              backgroundVariant === 'dungeon' 
                ? 'text-gray-200' 
                : 'text-gray-600 dark:text-gray-300'
            )}>
              {description}
            </p>
          )}
          
          {/* Call-to-Action Buttons */}
          {(primaryCta || secondaryCta) && (
            <div className={cn(
              'flex gap-4',
              textAlign === 'center' && 'justify-center',
              textAlign === 'right' && 'justify-end',
              'flex-col sm:flex-row items-center'
            )}>
              {primaryCta && (
                <CtaButton cta={primaryCta} variant="primary" />
              )}
              {secondaryCta && (
                <CtaButton cta={secondaryCta} variant="outline" />
              )}
            </div>
          )}
          
          {/* Additional Content */}
          {children && (
            <div className="mt-12">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
