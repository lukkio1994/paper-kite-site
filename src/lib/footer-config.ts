// Footer configuration for all footer content and appearance
// Centralize all static footer data here for easy management

interface LinkItem {
  label: string;
  href: string;
}

interface SocialLinkItem {
  platform: string;
  href: string;
}

interface ContactInfo {
  address?: string;
  phone?: string;
  email?: string;
  extra?: Array<{ label: string; value: string; href?: string }>;

}

interface AppearanceConfig {
  variant: 'minimal' | 'default' | 'detailed' | 'enterprise';
  background: 'default' | 'subtle' | 'dark' | 'gradient';
  showBackToTop: boolean;
  showDividers: boolean;
  className: string;
}

interface FooterConfig {
  contact: ContactInfo;
  socialLinks: SocialLinkItem[];
  legalLinks: LinkItem[];
  productLinks: LinkItem[];
  solutionLinks: LinkItem[];
  resourceLinks: LinkItem[];
  supportLinks: LinkItem[];
  companyLinks: LinkItem[];
  appearance: AppearanceConfig;
  copyright: string;
}

const config: FooterConfig = {
  contact: {
    address: "123 Business Street, City, State 12345",
    phone: "+1 (800) 555-0123",
    email: "contact@mynextjsapp.com",
    extra: [
      // { label: "Fax", value: "+1 (800) 555-4567" },
    ],
  },
  socialLinks: [
    { platform: "Twitter", href: "https://twitter.com/yourcompany" },
    { platform: "LinkedIn", href: "https://linkedin.com/company/yourcompany" },
    { platform: "GitHub", href: "https://github.com/yourcompany" },
    { platform: "Discord", href: "https://discord.gg/yourserver" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Security", href: "/security" },
    { label: "Compliance", href: "/compliance" },
  ],
  productLinks: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Solutions", href: "/solutions" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Integrations", href: "/integrations" },
  ],
  solutionLinks: [
    { label: "Small Business", href: "/small-business" },
    { label: "Enterprise", href: "/enterprise" },
    { label: "Developers", href: "/developers" },
    { label: "Startups", href: "/startups" },
    { label: "Education", href: "/education" },
  ],
  resourceLinks: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/community" },
    { label: "Changelog", href: "/changelog" },
    { label: "API Reference", href: "/api" },
  ],
  supportLinks: [
    { label: "Help Center", href: "/help" },
    { label: "Contact Support", href: "/contact" },
    { label: "System Status", href: "/status" },
    { label: "Training", href: "/training" },
    { label: "Consulting", href: "/consulting" },
  ],
  companyLinks: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Press", href: "/press" },
    { label: "Investors", href: "/investors" },
    { label: "Sustainability", href: "/sustainability" },
  ],
  appearance: {
    variant: "detailed",
    background: "dark",
    showBackToTop: true,
    showDividers: true,
    className: "w-screen max-w-none !mx-0 !px-0",
  },
  copyright: `© ${new Date().getFullYear()} My Next.js App. All rights reserved.`,
  // newsletter: { enabled: true, ... },
  // languageSelector: ...
};

export default config;
export type { FooterConfig, LinkItem, SocialLinkItem, ContactInfo, AppearanceConfig };
