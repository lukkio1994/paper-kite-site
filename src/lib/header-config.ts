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
      label: "Features",
      href: "/features",
      icon: undefined, // Add icon component if needed
      subItems: [
        {
          label: "Analytics Dashboard",
          href: "/features/analytics",
          description: "Comprehensive data insights and reporting",
        },
        {
          label: "Team Collaboration",
          href: "/features/collaboration",
          description: "Real-time team workspace and communication",
        },
        {
          label: "API Integration",
          href: "/features/api",
          description: "Seamless third-party service connections",
        },
      ],
    },
    {
      label: "Solutions",
      href: "/solutions",
      subItems: [
        {
          label: "For Startups",
          href: "/solutions/startups",
          description: "Scalable solutions for growing companies",
        },
        {
          label: "Enterprise",
          href: "/solutions/enterprise",
          description: "Enterprise-grade security and compliance",
        },
        {
          label: "Developers",
          href: "/solutions/developers",
          description: "Developer-first tools and documentation",
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Resources",
      href: "/resources",
      subItems: [
        {
          label: "Documentation",
          href: "/docs",
          description: "Complete guides and API references",
        },
        {
          label: "Blog",
          href: "/blog",
          description: "Latest updates and industry insights",
        },
        {
          label: "Community",
          href: "/community",
          description: "Connect with other users and experts",
        },
        {
          label: "Support",
          href: "/support",
          description: "Get help from our support team",
        },
      ],
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  actions: [
    {
      label: "Sign In",
      href: "/auth/signin",
      variant: "ghost",
      size: "sm",
    },
    {
      label: "Get Started",
      href: "/auth/signup",
      variant: "primary",
      size: "sm",
    },
  ],
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
