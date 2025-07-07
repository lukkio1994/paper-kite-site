'use client';

import { forwardRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from '@/app/components/ui';
import { Link as UILink } from '@/app/components/ui';
import { AnimatedHamburger, CloseIcon, ChevronDownIcon, ExternalLinkIcon } from '@/app/components/ui';
import { ThemeToggle } from '@/app/components/utils';
import type { NavItem, LogoConfig, ActionButton, AppearanceConfig } from '@/lib/header-config';

/**
 * Skip to content link props for accessibility
 */
interface SkipLinkProps {
  href: string;
  children: React.ReactNode;
}

/**
 * Header logo component props
 */
interface HeaderLogoProps {
  config: LogoConfig;
  ariaLabel?: string;
}

/**
 * Navigation item component props
 */
interface NavItemProps {
  item: NavItem;
  isActive?: boolean;
  isMobile?: boolean;
  onItemClick?: () => void;
  activeDropdown?: string | null;
  onDropdownToggle?: (itemLabel: string) => void;
}

/**
 * Action button component props
 */
interface ActionButtonProps {
  action: ActionButton;
  className?: string;
}

/**
 * Mobile menu component props
 */
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavItem[];
  actions: ActionButton[];
  logo?: LogoConfig;
  overlayBackground: 'blur' | 'solid' | 'dark';
  navigationAriaLabel: string;
  activePath?: string;
}

/**
 * Main header component props
 */
interface HeaderProps {
  /** Logo configuration */
  logo?: LogoConfig;
  /** Navigation items */
  navigation?: NavItem[];
  /** Action buttons */
  actions?: ActionButton[];
  /** Appearance configuration */
  appearance?: Partial<AppearanceConfig>;
  /** Mobile configuration */
  mobile?: {
    showLogo?: boolean;
    showActions?: boolean;
    menuPosition?: 'left' | 'right' | 'center';
    overlayBackground?: 'blur' | 'solid' | 'dark';
  };
  /** Accessibility configuration */
  accessibility?: {
    skipToContentHref?: string;
    logoAriaLabel?: string;
    mobileMenuAriaLabel?: string;
    navigationAriaLabel?: string;
  };
  /** Additional CSS classes */
  className?: string;
  /** Container size override */
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Active path for navigation highlighting */
  activePath?: string;
  /** Callback when mobile menu state changes */
  onMobileMenuChange?: (isOpen: boolean) => void;
}

/**
 * Professional Header Component
 * 
 * A comprehensive, production-ready header with full accessibility,
 * responsive design, and extensive customization options.
 * 
 * ## Key Features
 * - **Accessibility First**: Full WCAG 2.1 AA compliance with semantic HTML and ARIA attributes
 * - **Responsive Design**: Mobile-first approach with collapsible navigation and touch-friendly interactions
 * - **TypeScript Excellence**: Strict type safety with comprehensive interfaces and intelligent autocomplete
 * - **Performance Optimized**: Efficient rendering with proper React patterns and minimal re-renders
 * - **Dark Mode Ready**: Consistent theming with smooth transitions
 * - **Centralized Config**: Clean component architecture using configuration-driven approach
 * - **Mobile Navigation**: Full-featured mobile menu with smooth animations
 * - **SEO Friendly**: Proper semantic structure and crawlable navigation
 * 
 * ## Architecture
 * - **Clean Component Structure**: Separation of concerns with focused sub-components
 * - **Flexible Layout System**: Responsive layouts that adapt to content and screen size
 * - **Extensible Design**: Easy to add new navigation items, actions, and functionality
 * - **Design System Compliance**: Consistent spacing, typography, and color usage
 * 
 * @example
 * ```tsx
 * <Header 
 *   logo={{ text: "My App", href: "/" }}
 *   navigation={navigationItems}
 *   actions={actionButtons}
 *   appearance={{ variant: "elevated", sticky: true }}
 * />
 * ```
 */
const Header = forwardRef<HTMLElement, HeaderProps>(function Header(
  {
    logo,
    navigation = [],
    actions = [],
    appearance = {},
    mobile = {},
    accessibility = {},
    className = '',
    containerSize = 'full',
    activePath,
    onMobileMenuChange,
    ...props
  },
  ref
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Merge with default appearance settings
  const appearanceConfig: AppearanceConfig = {
    variant: 'default',
    background: 'default',
    sticky: true,
    showBorder: true,
    height: 'default',
    mobileMenuBreakpoint: 'md',
    navigationAlignment: 'left',
    className: '',
    ...appearance,
  };

  // Merge with default mobile settings
  const mobileConfig = {
    showLogo: true,
    showActions: true,
    menuPosition: 'right' as const,
    overlayBackground: 'blur' as const,
    ...mobile,
  };

  // Merge with default accessibility settings
  const a11yConfig = {
    skipToContentHref: '#main-content',
    logoAriaLabel: logo?.text ? `${logo.text} - Go to homepage` : 'Go to homepage',
    mobileMenuAriaLabel: 'Toggle main navigation menu',
    navigationAriaLabel: 'Main navigation',
    ...accessibility,
  };

  // Handle mobile menu toggle
  const handleMobileMenuToggle = useCallback(() => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    setActiveDropdown(null); // Close any open dropdowns
    onMobileMenuChange?.(newState);
  }, [isMobileMenuOpen, onMobileMenuChange]);

  // Handle dropdown toggle
  const handleDropdownToggle = useCallback((itemLabel: string) => {
    setActiveDropdown(prev => prev === itemLabel ? null : itemLabel);
  }, []);

  // Close mobile menu and dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Use the forwarded ref if it's available
      const headerElement = (ref as React.MutableRefObject<HTMLElement>)?.current;
      if (headerElement && !headerElement.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Get header styling based on configuration
  const getHeaderClasses = (): string => {
    const baseClasses = 'transition-all duration-200 ease-in-out';
    const borderClasses = appearanceConfig.showBorder ? 'border-b border-border' : '';
    const stickyClasses = appearanceConfig.sticky ? 'sticky top-0 z-50' : '';

    const backgroundClasses = (() => {
      switch (appearanceConfig.variant) {
        case 'transparent':
          return 'bg-transparent';
        case 'solid':
          return 'bg-background';
        case 'elevated':
          return 'bg-surface shadow-sm';
        case 'minimal':
          return 'bg-background';
        default:
          return 'bg-surface/95 backdrop-blur-sm';
      }
    })();

    return `${baseClasses} ${borderClasses} ${stickyClasses} ${backgroundClasses} ${appearanceConfig.className}`.trim();
  };

  // Determine if a navigation item is active
  const isNavItemActive = (item: NavItem): boolean => {
    if (!activePath) return false;
    if (item.href === activePath) return true;
    if (item.subItems?.some(subItem => subItem.href === activePath)) return true;
    return false;
  };

  // Get navigation alignment classes and container structure
  // Get navigation alignment classes and container structure
  const getNavigationClasses = (): string => {
    const baseClasses = `hidden ${appearanceConfig.mobileMenuBreakpoint === 'sm' ? 'sm:flex' : appearanceConfig.mobileMenuBreakpoint === 'md' ? 'md:flex' : appearanceConfig.mobileMenuBreakpoint === 'lg' ? 'lg:flex' : 'xl:flex'} items-center space-x-1`;
    
    switch (appearanceConfig.navigationAlignment) {
      case 'center':
        return `${baseClasses} flex-1 justify-center`;
      case 'right':
        return `${baseClasses} flex-1 justify-end mr-4`;
      case 'left':
      default:
        return `${baseClasses} ml-8`;
    }
  };

  // Get container layout classes based on navigation alignment
  const getContainerClasses = (): string => {
    const baseClasses = `flex items-center ${getHeaderClasses().includes('h-') ? '' : 'h-16'}`;
    
    switch (appearanceConfig.navigationAlignment) {
      case 'center':
        return `${baseClasses} justify-between`; // Logo left, nav center, actions right
      case 'right':
        return `${baseClasses} justify-between`; // Logo left, nav+actions right
      case 'left':
      default:
        return `${baseClasses} justify-between`; // Logo left, nav left, actions right
    }
  };

  return (
    <>
      {/* Skip to content link for accessibility */}
      <SkipLink href={a11yConfig.skipToContentHref}>
        Skip to main content
      </SkipLink>

      <header
        ref={ref}
        role="banner"
        className={`${getHeaderClasses()} ${className}`}
        {...props}
      >
        <Container
          size={containerSize === 'full' ? 'full' : containerSize}
          spacing="tight"
          className={getContainerClasses()}
        >
          {/* Logo */}
          {logo && <HeaderLogo config={logo} ariaLabel={a11yConfig.logoAriaLabel} />}

          {/* Desktop Navigation - positioned based on navigationAlignment */}
          <nav
            className={getNavigationClasses()}
            aria-label={a11yConfig.navigationAriaLabel}
          >
            {navigation.map((item) => (
              <NavItem
                key={item.href}
                item={item}
                isActive={isNavItemActive(item)}
                activeDropdown={activeDropdown}
                onDropdownToggle={handleDropdownToggle}
              />
            ))}
          </nav>

          {/* Desktop Actions - Always on the right */}
          <div className={`hidden ${appearanceConfig.mobileMenuBreakpoint === 'sm' ? 'sm:flex' : appearanceConfig.mobileMenuBreakpoint === 'md' ? 'md:flex' : appearanceConfig.mobileMenuBreakpoint === 'lg' ? 'lg:flex' : 'xl:flex'} items-center space-x-3`}>
            {/* Theme Toggle */}
            <ThemeToggle size="md" variant="icon" />
            
            {/* Action Buttons */}
            {actions.map((action, index) => (
              <ActionButtonComponent key={`${action.label}-${index}`} action={action} />
            ))}
          </div>

          {/* Mobile Menu Button - Always on the right */}
          <Button
            variant="ghost"
            size="md"
            className={`${appearanceConfig.mobileMenuBreakpoint === 'sm' ? 'sm:hidden' : appearanceConfig.mobileMenuBreakpoint === 'md' ? 'md:hidden' : appearanceConfig.mobileMenuBreakpoint === 'lg' ? 'lg:hidden' : 'xl:hidden'} p-2`}
            aria-label={a11yConfig.mobileMenuAriaLabel}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={handleMobileMenuToggle}
          >
            <span className="sr-only">
              {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            <AnimatedHamburger isOpen={isMobileMenuOpen} className="w-6 h-6 relative" />
          </Button>
        </Container>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          navigation={navigation}
          actions={actions}
          logo={logo}
          overlayBackground={mobileConfig.overlayBackground}
          navigationAriaLabel={a11yConfig.navigationAriaLabel}
          activePath={activePath}
        />
      </header>
    </>
  );
});

Header.displayName = 'Header';

/**
 * Skip to content link for accessibility
 */
const SkipLink = forwardRef<HTMLAnchorElement, SkipLinkProps>(function SkipLink(
  { href, children },
  ref
) {
  return (
    <a
      ref={ref}
      href={href}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md font-medium z-50 focus:outline-none focus:ring-2 focus:ring-primary-light"
    >
      {children}
    </a>
  );
});

SkipLink.displayName = 'SkipLink';

/**
 * Header logo component with support for text and image logos
 */
const HeaderLogo = forwardRef<HTMLAnchorElement, HeaderLogoProps>(function HeaderLogo(
  { config, ariaLabel },
  ref
) {
  const logoContent = config.image ? (
    <Image
      src={config.image.src}
      alt={config.image.alt}
      width={config.image.width || 32}
      height={config.image.height || 32}
      priority
      className="object-contain"
    />
  ) : (
    <span className={config.className || 'text-foreground text-lg font-bold'}>
      {config.text}
    </span>
  );

  return (
    <UILink
      ref={ref}
      href={config.href || '/'}
      className="rounded-md focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors hover:opacity-80"
      aria-label={ariaLabel}
      variant="default"
      underline="none"
    >
      {logoContent}
    </UILink>
  );
});

HeaderLogo.displayName = 'HeaderLogo';

/**
 * Navigation item component with dropdown support
 */
const NavItem = forwardRef<HTMLDivElement, NavItemProps>(function NavItem(
  { item, isActive = false, isMobile = false, onItemClick, activeDropdown, onDropdownToggle },
  ref
) {
  const hasSubItems = item.subItems && item.subItems.length > 0;
  const isDropdownOpen = activeDropdown === item.label;

  const handleClick = useCallback(() => {
    if (hasSubItems && onDropdownToggle) {
      onDropdownToggle(item.label);
    } else {
      onItemClick?.();
    }
  }, [hasSubItems, onDropdownToggle, item.label, onItemClick]);

  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
    if (event.key === 'Escape' && isDropdownOpen) {
      onDropdownToggle?.(item.label);
    }
  }, [handleClick, isDropdownOpen, onDropdownToggle, item.label]);

  if (isMobile) {
    return (
      <div ref={ref} className="space-y-2">
        {hasSubItems ? (
          <div>
            <button
              type="button"
              onClick={handleClick}
              onKeyDown={handleKeyDown}
              className={`flex items-center justify-between w-full px-4 py-3 text-foreground font-medium rounded-lg transition-colors ${
                isActive 
                  ? 'bg-primary text-white' 
                  : 'hover:bg-surface'
              }`}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
            >
              <span className="flex items-center">
                {item.icon && (
                  <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
                )}
                {item.label}
                {item.badge && (
                  <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                    item.badge.variant === 'success' ? 'bg-success text-white' :
                    item.badge.variant === 'warning' ? 'bg-warn text-white' :
                    item.badge.variant === 'error' ? 'bg-error text-white' :
                    'bg-accent text-white'
                  }`}>
                    {item.badge.text}
                  </span>
                )}
              </span>
              <ChevronDownIcon
                className={`w-5 h-5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                aria-hidden={true}
              />
            </button>
            {isDropdownOpen && (
              <div className="mt-2 ml-4 space-y-1">
                {item.subItems?.map((subItem) => (
                  <UILink
                    key={subItem.href}
                    href={subItem.href}
                    external={subItem.external}
                    className="block px-4 py-2 text-foreground hover:bg-surface rounded-md transition-colors"
                    onClick={onItemClick}
                    underline="none"
                  >
                    <div className="flex items-center">
                      {subItem.icon && (
                        <subItem.icon className="w-4 h-4 mr-3" aria-hidden="true" />
                      )}
                      <div>
                        <div className="font-medium text-foreground">{subItem.label}</div>
                        {subItem.description && (
                          <div className="mt-0.5 text-muted text-sm">
                            {subItem.description}
                          </div>
                        )}
                      </div>
                      {subItem.external && (
                        <ExternalLinkIcon className="w-3 h-3 ml-auto" aria-hidden={true} />
                      )}
                    </div>
                  </UILink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <UILink
            href={item.href}
            external={item.external}
            onClick={onItemClick}
            className={`flex items-center px-4 py-3 text-foreground font-medium rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary text-white' 
                : 'hover:bg-surface'
            }`}
            underline="none"
          >
            {item.icon && (
              <item.icon className="w-5 h-5 mr-3" aria-hidden="true" />
            )}
            {item.label}
            {item.badge && (
              <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                item.badge.variant === 'success' ? 'bg-success text-white' :
                item.badge.variant === 'warning' ? 'bg-warn text-white' :
                item.badge.variant === 'error' ? 'bg-error text-white' :
                'bg-accent text-white'
              }`}>
                {item.badge.text}
              </span>
            )}
            {item.external && (
              <ExternalLinkIcon className="w-4 h-4 ml-2" aria-hidden={true} />
            )}
          </UILink>
        )}
      </div>
    );
  }

  // Desktop navigation item
  return (
    <div ref={ref} className="relative">
      {hasSubItems ? (
        <div className="relative">
          <button
            type="button"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className={`flex items-center px-3 py-2 text-foreground font-medium rounded-md transition-colors ${
              isActive || isDropdownOpen
                ? 'bg-primary text-white' 
                : 'hover:bg-surface hover:text-primary'
            }`}
            aria-expanded={isDropdownOpen}
            aria-haspopup="true"
          >
            {item.icon && (
              <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
            )}
            {item.label}
            {item.badge && (
              <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
                item.badge.variant === 'success' ? 'bg-success text-white' :
                item.badge.variant === 'warning' ? 'bg-warn text-white' :
                item.badge.variant === 'error' ? 'bg-error text-white' :
                'bg-accent text-white'
              }`}>
                {item.badge.text}
              </span>
            )}
            <ChevronDownIcon
              className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
              aria-hidden={true}
            />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-80 bg-surface border border-border rounded-lg shadow-lg z-50 py-2">
              <div className="grid gap-1">
                {item.subItems?.map((subItem) => (
                  <UILink
                    key={subItem.href}
                    href={subItem.href}
                    external={subItem.external}
                    className="flex items-start px-4 py-3 text-foreground hover:bg-background rounded-md transition-colors"
                    underline="none"
                  >
                    {subItem.icon && (
                      <subItem.icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center">
                        <span className="font-medium text-foreground">
                          {subItem.label}
                        </span>
                        {subItem.external && (
                          <ExternalLinkIcon className="w-3 h-3 ml-1 flex-shrink-0" aria-hidden={true} />
                        )}
                      </div>
                      {subItem.description && (
                        <p className="mt-1 text-muted text-sm">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </UILink>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <UILink
          href={item.href}
          external={item.external}
          className={`flex items-center px-3 py-2 text-foreground font-medium rounded-md transition-colors ${
            isActive 
              ? 'bg-primary text-white' 
              : 'hover:bg-surface hover:text-primary'
          }`}
          underline="none"
        >
          {item.icon && (
            <item.icon className="w-4 h-4 mr-2" aria-hidden="true" />
          )}
          {item.label}
          {item.badge && (
            <span className={`ml-2 px-2 py-0.5 text-xs font-medium rounded-full ${
              item.badge.variant === 'success' ? 'bg-success text-white' :
              item.badge.variant === 'warning' ? 'bg-warn text-white' :
              item.badge.variant === 'error' ? 'bg-error text-white' :
              'bg-accent text-white'
            }`}>
              {item.badge.text}
            </span>
          )}
          {item.external && (
            <ExternalLinkIcon className="w-4 h-4 ml-2" aria-hidden={true} />
          )}
        </UILink>
      )}
    </div>
  );
});

NavItem.displayName = 'NavItem';

/**
 * Action button component with multiple variants
 */
const ActionButtonComponent = forwardRef<HTMLElement, ActionButtonProps>(function ActionButton(
  { action, className = '' },
  ref
) {
  const sizeMap = {
    sm: 'sm',
    md: 'md', 
    lg: 'lg',
  } as const;

  const variantMap = {
    primary: 'primary',
    secondary: 'secondary',
    outline: 'outline',
    ghost: 'ghost',
  } as const;

  const content = (
    <>
      {action.icon && (
        <action.icon className="w-4 h-4 mr-2 flex-shrink-0" aria-hidden="true" />
      )}
      {action.label}
      {action.external && (
        <ExternalLinkIcon className="w-4 h-4 ml-2 flex-shrink-0" aria-hidden={true} />
      )}
    </>
  );

  if (action.href) {
    return (
      <UILink
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={action.href}
        external={action.external}
        className={`inline-flex items-center justify-center font-medium rounded-md disabled:opacity-50 disabled:cursor-not-allowed transition-colors focus:outline-none focus:ring-2 focus:ring-primary-light px-4 py-2 ${
          action.variant === 'primary' ? 'bg-primary text-white hover:bg-primary-light' :
          action.variant === 'secondary' ? 'bg-secondary text-white hover:bg-secondary-light' :
          action.variant === 'outline' ? 'border border-border text-foreground hover:bg-surface' :
          'text-foreground hover:bg-surface'
        } ${className}`}
        underline="none"
      >
        {content}
      </UILink>
    );
  }

  return (
    <Button
      ref={ref as React.Ref<HTMLButtonElement>}
      onClick={action.onClick}
      disabled={action.disabled}
      variant={variantMap[action.variant || 'primary']}
      size={sizeMap[action.size || 'md']}
      className={className}
    >
      {content}
    </Button>
  );
});

ActionButtonComponent.displayName = 'ActionButton';

/**
 * Mobile menu component with slide-in animation
 */
const MobileMenu = forwardRef<HTMLDivElement, MobileMenuProps>(function MobileMenu(
  { isOpen, onClose, navigation, actions, logo, navigationAriaLabel, activePath },
  ref
) {
  const handleItemClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const isNavItemActive = (item: NavItem): boolean => {
    if (!activePath) return false;
    if (item.href === activePath) return true;
    if (item.subItems?.some(subItem => subItem.href === activePath)) return true;
    return false;
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-overlay/50 backdrop-blur-sm"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        ref={ref}
        id="mobile-menu"
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-surface border-l border-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label={navigationAriaLabel}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-4 border-b border-border">
            {logo && (
              <HeaderLogo config={logo} ariaLabel={`${logo.text || 'Logo'} - Go to homepage`} />
            )}
            <Button
              variant="ghost"
              size="md"
              onClick={onClose}
              className="p-2"
              aria-label="Close navigation menu"
            >
              <span className="sr-only">Close menu</span>
              <CloseIcon className="w-6 h-6" aria-hidden={true} />
            </Button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 px-4 py-4 overflow-y-auto" aria-label={navigationAriaLabel}>
            <div className="space-y-2">
              {navigation.map((item) => (
                <NavItem
                  key={item.href}
                  item={item}
                  isActive={isNavItemActive(item)}
                  isMobile={true}
                  onItemClick={handleItemClick}
                />
              ))}
            </div>
          </nav>

          {/* Mobile Actions */}
          <div className="px-4 py-4 border-t border-border">
            <div className="space-y-3">
              {/* Theme Toggle for Mobile */}
              <div className="flex justify-center">
                <ThemeToggle size="md" variant="button" showLabel={true} />
              </div>
              
              {/* Action Buttons */}
              {actions.map((action, index) => (
                <ActionButtonComponent
                  key={`${action.label}-${index}`}
                  action={action}
                  className="w-full justify-center"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

MobileMenu.displayName = 'MobileMenu';

export { Header };
export type { HeaderProps, NavItem, LogoConfig, ActionButton, AppearanceConfig };