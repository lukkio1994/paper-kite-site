// Header configuration for all header content and appearance
// Centralize all static header data here for easy management

interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
  badge?: {
    text: string;
    variant?: 'default' | 'success' | 'warning' | 'error';
  };
  subItems?: SubNavItem[];
}

interface SubNavItem {
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  icon?: React.ComponentType<{ className?: string }>;
}

interface LogoConfig {
  text?: string;
  image?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  href?: string;
  className?: string;
}

interface ActionButton {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
  disabled?: boolean;
}

interface AppearanceConfig {
  variant: 'default' | 'transparent' | 'solid' | 'elevated' | 'minimal';
  background: 'default' | 'subtle' | 'dark' | 'glass' | 'gradient';
  sticky: boolean;
  showBorder: boolean;
  height: 'compact' | 'default' | 'comfortable' | 'spacious';
  mobileMenuBreakpoint: 'sm' | 'md' | 'lg' | 'xl';
  navigationAlignment: 'left' | 'center' | 'right';
  className?: string;
}

interface HeaderConfig {
  logo: LogoConfig;
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
    logoAriaLabel?: string;
    mobileMenuAriaLabel: string;
    navigationAriaLabel: string;
  };
}

const config: HeaderConfig = {
  logo: {
    text: "My Next.js App",
    href: "/",
    className: "text-lg font-bold transition-colors",
  },
  navigation: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Games",
      href: "/games",
    },
  ],
  actions: [],
  appearance: {
    variant: "elevated",
    background: "default",
    sticky: true,
    showBorder: true,
    height: "default",
    mobileMenuBreakpoint: "md",
    navigationAlignment: "right", // Options: 'left', 'center', 'right'
    className: "",
  },
  mobile: {
    showLogo: true,
    showActions: true,
    menuPosition: "right",
    overlayBackground: "blur",
  },
  accessibility: {
    skipToContentHref: "#main-content",
    logoAriaLabel: "My Next.js App - Go to homepage",
    mobileMenuAriaLabel: "Toggle main navigation menu",
    navigationAriaLabel: "Main navigation",
  },
};

export default config;
export type {
  HeaderConfig,
  NavItem,
  SubNavItem,
  LogoConfig,
  ActionButton,
  AppearanceConfig,
};
