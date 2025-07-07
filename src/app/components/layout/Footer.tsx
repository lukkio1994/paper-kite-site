'use client';

import { forwardRef, useCallback } from 'react';
import { Container } from './Container';
import { Button } from '@/app/components/ui';
import { Link as UILink } from '@/app/components/ui';
import { ArrowUpIcon, LocationIcon, PhoneIcon, EmailIcon, ExternalLinkIcon, DownloadIcon } from '@/app/components/ui';

/**
 * Footer section props for compound component pattern
 */
interface FooterSectionProps {
  /** Section title */
  title: string;
  /** Section content (typically Footer.Link components) */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Optional icon for the section */
  icon?: React.ComponentType<{ className?: string }>;
  /** ARIA label for the section */
  ariaLabel?: string;
}

/**
 * Footer link props with comprehensive support
 */
interface FooterLinkProps {
  /** Link destination URL */
  href: string;
  /** Link content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether link opens in new tab */
  external?: boolean;
  /** Optional icon for the link */
  icon?: React.ComponentType<{ className?: string }>;
  /** Additional accessibility label */
  ariaLabel?: string;
  /** Download attribute for file links */
  download?: boolean;
  /** Callback for tracking clicks */
  onClick?: () => void;
}

/**
 * Social media link props
 */
interface SocialLinkProps {
  /** Platform name (e.g., 'Twitter', 'LinkedIn') */
  platform: string;
  /** URL to social media profile */
  href: string;
  /** Icon component for the platform */
  icon: React.ComponentType<{ className?: string }>;
  /** Custom accessibility label */
  ariaLabel?: string;
}

/**
 * Contact information structure
 */
interface ContactInfo {
  /** Physical address */
  address?: string;
  /** Phone number */
  phone?: string;
  /** Email address */
  email?: string;
  /** Additional contact methods */
  extra?: Array<{
    label: string;
    value: string;
    href?: string;
    icon?: React.ComponentType<{ className?: string }>;
  }>;
}

/**
 * Main footer component props
 */
interface FooterProps {
  /** Footer sections content */
  children?: React.ReactNode;
  /** Copyright information */
  copyright?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Footer layout variant */
  variant?: 'minimal' | 'default' | 'detailed' | 'enterprise';
  /** Background styling variant */
  background?: 'default' | 'subtle' | 'dark' | 'gradient';
  /** Whether to show back-to-top button */
  showBackToTop?: boolean;
  /** Callback for back-to-top action */
  onBackToTop?: () => void;
  /** Social media links */
  socialLinks?: SocialLinkProps[];
  /** Newsletter signup component */
  newsletter?: React.ReactNode;
  /** Contact information */
  contact?: ContactInfo;
  /** Additional footer bottom content */
  bottomContent?: React.ReactNode;
  /** Language/region selector */
  languageSelector?: React.ReactNode;
  /** Whether to show divider between sections */
  showDividers?: boolean;
}

/**
 * Professional Footer Component
 * 
 * A comprehensive, production-ready footer with full accessibility,
 * responsive design, and extensive customization options.
 * 
 * ## Key Features
 * - **Accessibility First**: Full WCAG 2.1 AA compliance with semantic HTML and ARIA attributes
 * - **Responsive Design**: Mobile-first approach with fluid layouts and touch-friendly interactions
 * - **TypeScript Excellence**: Strict type safety with comprehensive interfaces and intelligent autocomplete
 * - **Performance Optimized**: Efficient rendering with proper React patterns and minimal re-renders
 * - **Dark Mode Ready**: Consistent theming with smooth transitions
 * - **Flat Composition**: Clean component architecture using direct imports for Next.js App Router compatibility
 * - **Social Integration**: Built-in social media links with proper accessibility
 * - **Contact Support**: Structured contact information display with icons and interactions
 * - **Customizable Layouts**: Multiple variants from minimal to enterprise-grade complexity
 * - **SEO Friendly**: Proper semantic structure and crawlable links
 * 
 * ## Architecture
 * - **Clean Component Structure**: Separation of concerns with focused sub-components
 * - **Flexible Grid System**: Responsive layouts that adapt to content and screen size
 * - **Extensible Design**: Easy to add new sections, links, and functionality
 * - **Design System Compliance**: Consistent spacing, typography, and color usage
 * 
 * @example
 * ```tsx
 * <Footer 
 *   variant="detailed"
 *   background="subtle"
 *   showBackToTop
 *   socialLinks={socialMediaLinks}
 *   contact={contactInfo}
 *   copyright="© 2025 Company Name. All rights reserved."
 * >
 *   <FooterSection title="Product" icon={ProductIcon}>
 *     <FooterLink href="/features">Features</FooterLink>
 *     <FooterLink href="/pricing">Pricing</FooterLink>
 *     <FooterLink href="/integrations">Integrations</FooterLink>
 *   </FooterSection>
 *   
 *   <FooterSection title="Support">
 *     <FooterLink href="/help">Help Center</FooterLink>
 *     <FooterLink href="/contact">Contact Us</FooterLink>
 *     <FooterLink href="/status">Status Page</FooterLink>
 *   </FooterSection>
 * </Footer>
 * ```
 */
const Footer = forwardRef<HTMLElement, FooterProps>(function Footer(
  {
    children,
    copyright,
    className = '',
    variant = 'default',
    background = 'default',
    showBackToTop = false,
    onBackToTop,
    socialLinks = [],
    newsletter,
    contact,
    bottomContent,
    languageSelector,
    showDividers = false,
    ...props
  },
  ref
) {
  // Grid configuration based on variant for responsive layouts
  const getGridClasses = (): string => {
    const gridConfigs = {
      minimal: 'grid-cols-1 sm:grid-cols-2 gap-6',
      default: 'grid-cols-2 md:grid-cols-4 gap-6',
      detailed: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6',
      enterprise: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'
    };
    return `grid ${gridConfigs[variant]}`;
  };

  // Background styling based on variant with design system consistency
  const getBackgroundClasses = (): string => {
    const backgroundConfigs = {
      default: 'bg-surface border-t border-border',
      subtle: 'bg-background border-t border-border',
      dark: 'bg-foreground text-background',
      gradient: 'bg-gradient-to-r from-primary to-secondary text-white'
    };
    return backgroundConfigs[background];
  };

  // Spacing configuration for design system compliance
  const getSpacing = (): 'compact' | 'default' | 'spacious' => {
    // Use more compact spacing for better footer proportions
    if (variant === 'minimal') return 'compact';
    if (variant === 'detailed' || variant === 'enterprise') return 'default';
    return 'compact'; // Default to compact for cleaner look
  };

  // Handle back to top functionality with smooth scrolling
  const handleBackToTop = useCallback((): void => {
    if (onBackToTop) {
      onBackToTop();
    } else {
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth',
        // Respect user's motion preferences
        ...(window.matchMedia('(prefers-reduced-motion: reduce)').matches && { behavior: 'auto' })
      });
    }
  }, [onBackToTop]);

  // Handle keyboard navigation for back to top
  const handleBackToTopKeyDown = useCallback((event: React.KeyboardEvent): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleBackToTop();
    }
  }, [handleBackToTop]);

  return (
    <footer
      ref={ref}
      role="contentinfo"
      className={`${getBackgroundClasses()} ${className}`}
      {...props}
    >
      {/* Main Footer Content */}
      {(children || newsletter || contact) && (
        <Container
          size="6xl"
          spacing={getSpacing()}
          className="relative"
        >
          <div className={getGridClasses()}>
            {/* Newsletter Section (if provided) */}
            {newsletter && variant !== 'minimal' && (
              <div className={`${variant === 'detailed' || variant === 'enterprise' ? 'col-span-full lg:col-span-2' : 'col-span-full'} mb-8 lg:mb-0`}>
                <div className="max-w-md">
                  {newsletter}
                </div>
              </div>
            )}

            {/* Contact Information (if provided) */}
            {contact && (variant === 'detailed' || variant === 'enterprise') &&
              (contact.address || contact.phone || contact.email || (contact.extra && contact.extra.length > 0)) && (
                <div className="space-y-4">
                  <h3 className="text-foreground font-semibold mb-4">
                    Contact Information
                  </h3>
                  <address className="not-italic space-y-3 text-primary">
                    {contact.address && (
                      <div className="flex items-start space-x-3">
                        <LocationIcon className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" aria-hidden={true} />
                        <span>{contact.address}</span>
                      </div>
                    )}
                    {contact.phone && (
                      <div className="flex items-center space-x-3">
                        <PhoneIcon className="w-4 h-4 flex-shrink-0 text-primary" aria-hidden={true} />
                        <a 
                          href={`tel:${contact.phone.replace(/\s+/g, '')}`} 
                          className="rounded-sm"
                          aria-label={`Call ${contact.phone}`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    )}
                    {contact.email && (
                      <div className="flex items-center space-x-3">
                        <EmailIcon className="w-4 h-4 flex-shrink-0" aria-hidden={true} />
                        <a 
                          href={`mailto:${contact.email}`} 
                          className="rounded-sm break-all"
                          aria-label={`Email ${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </div>
                    )}
                    {contact.extra?.map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        {item.icon && (
                          <item.icon className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        )}
                        {item.href ? (
                          <a 
                            href={item.href}
                            className="rounded-sm"
                            aria-label={`${item.label}: ${item.value}`}
                          >
                            <span className="sr-only">{item.label}: </span>
                            {item.value}
                          </a>
                        ) : (
                          <span>
                            <span className="sr-only">{item.label}: </span>
                            {item.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </address>
                </div>
              )}

            {/* Footer Sections */}
            {children}
          </div>

          {/* Back to Top Button */}
          {showBackToTop && (
            <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
              <Button
                onClick={handleBackToTop}
                onKeyDown={handleBackToTopKeyDown}
                variant="primary"
                size="md"
                className="group p-3 rounded-full"
                aria-label="Back to top"
                title="Back to top"
              >
                <ArrowUpIcon className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden={true} />
              </Button>
            </div>
          )}
        </Container>
      )}

      {/* Bottom Bar with Copyright, Social Links, and Additional Content */}
      <div className={`${showDividers ? 'mt-8' : ''}`}>
        <Container size="6xl" spacing="compact">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
            {/* Left Side: Copyright and Additional Content */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <div className="text-center sm:text-left text-primary">
                {copyright || `© ${new Date().getFullYear()} All rights reserved.`}
              </div>
              {bottomContent && (
                <div className="flex items-center space-x-4">
                  {bottomContent}
                </div>
              )}
            </div>

            {/* Right Side: Language Selector and Social Links */}
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              {/* Language Selector */}
              {languageSelector && (
                <div className="flex items-center">
                  {languageSelector}
                </div>
              )}

              {/* Social Links */}
              {socialLinks.length > 0 && (
                <div className="flex items-center space-x-1">
                  <span className="hidden sm:block mr-3 text-primary">
                    Follow us:
                  </span>
                  <nav aria-label="Social media links" className="flex items-center space-x-1">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-2 text-primary hover:text-primary-light hover:bg-background rounded-md transition-colors"
                        aria-label={social.ariaLabel || `Follow us on ${social.platform}`}
                        title={`Follow us on ${social.platform}`}
                      >
                        <social.icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                      </a>
                    ))}
                  </nav>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
});

/**
 * Footer Section Component
 * Creates a structured section with title and links using proper semantic HTML
 */
const Section = forwardRef<HTMLDivElement, FooterSectionProps>(function FooterSection(
  { title, children, className = '', icon: Icon, ariaLabel, ...props },
  ref
) {
  return (
    <section ref={ref} className={`space-y-3 ${className}`} {...props}>
      <h3 className="flex items-center text-foreground font-semibold mb-3 text-sm uppercase tracking-wide">
        {Icon && <Icon className="w-3.5 h-3.5 mr-2 text-primary" aria-hidden="true" />}
        {title}
      </h3>
      <nav aria-label={ariaLabel || `${title} navigation`}>
        <ul className="space-y-2" role="list">
          {children}
        </ul>
      </nav>
    </section>
  );
});

/**
 * Footer Link Component
 * Accessible link with proper styling, external link handling, and interaction feedback
 */
const FooterLink = forwardRef<HTMLLIElement, FooterLinkProps>(function FooterLink(
  { 
    href, 
    children, 
    className = '', 
    external = false, 
    icon: Icon, 
    ariaLabel, 
    download = false,
    onClick,
    ...props 
  },
  ref
) {
  const isExternal = external || href.startsWith('http') || href.startsWith('//');
  const isFile = download || href.includes('/downloads/') || /\.(pdf|doc|docx|zip|jpg|png)$/i.test(href);

  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  return (
    <li ref={ref} {...props}>
      <UILink
        href={href}
        external={isExternal}
        download={download || undefined}
        onClick={handleClick}
        className={`group flex items-center text-primary hover:text-primary-light rounded-sm py-1 -mx-1 px-1 transition-colors ${className}`}
        aria-label={ariaLabel}
        variant="primary"
        underline="none"
      >
        {Icon && (
          <Icon className="w-4 h-4 mr-2 flex-shrink-0" />
        )}
        <span className="flex-1 group-hover:translate-x-0.5 transition-transform duration-200">
          {children}
        </span>
        {isExternal && !isFile && (
          <ExternalLinkIcon className="w-3 h-3 ml-1 flex-shrink-0" aria-hidden={true} />
        )}
        {isFile && (
          <DownloadIcon className="w-3 h-3 ml-1 flex-shrink-0" aria-hidden={true} />
        )}
      </UILink>
    </li>
  );
});

// Display names for debugging
Footer.displayName = 'Footer';
Section.displayName = 'FooterSection';
FooterLink.displayName = 'FooterLink';

// Export components using flat composition for Next.js App Router compatibility
export { Footer };
export { Section as FooterSection };
export { FooterLink };

export type { 
  FooterProps, 
  FooterSectionProps, 
  FooterLinkProps, 
  SocialLinkProps, 
  ContactInfo 
};