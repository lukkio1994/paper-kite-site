// TypeScript interfaces for the site configuration
export interface SiteConfig {
  site: {
    branding: {
      name: string;
      logoText: string;
      logoHref: string;
    };
  };
  header: {
    navigation: NavItem[];
    actions: ActionButton[];
    appearance: HeaderAppearanceConfig;
    mobile: MobileConfig;
    accessibility: AccessibilityConfig;
  };
  footer: {
    contact: ContactInfo;
    sections: {
      legal: LinkItem[];
      products: LinkItem[];
    };
    social: SocialLinkItem[];
    appearance: FooterAppearanceConfig;
    copyright: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  subItems?: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
}

export interface ActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  external?: boolean;
  disabled?: boolean;
}

export interface HeaderAppearanceConfig {
  variant: 'default' | 'transparent' | 'solid' | 'elevated' | 'minimal';
  background: 'default' | 'subtle' | 'dark' | 'glass' | 'gradient';
  sticky: boolean;
  showBorder: boolean;
  height: 'compact' | 'default' | 'comfortable' | 'spacious';
  mobileMenuBreakpoint: 'sm' | 'md' | 'lg' | 'xl';
  navigationAlignment: 'left' | 'center' | 'right';
}

export interface MobileConfig {
  showLogo: boolean;
  showActions: boolean;
  menuPosition: 'left' | 'right' | 'center';
  overlayBackground: 'blur' | 'solid' | 'dark';
}

export interface AccessibilityConfig {
  skipToContentHref: string;
  logoAriaLabel: string;
  mobileMenuAriaLabel: string;
  navigationAriaLabel: string;
}

export interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  extra?: Array<{ label: string; value: string; href?: string }>;
}

export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLinkItem {
  platform: string;
  href: string;
}

export interface FooterAppearanceConfig {
  variant: 'minimal' | 'default' | 'detailed' | 'enterprise';
  background: 'default' | 'subtle' | 'dark' | 'gradient';
  showBackToTop: boolean;
  showDividers: boolean;
  className: string;
}
