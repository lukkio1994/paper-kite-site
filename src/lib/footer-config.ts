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
    { platform: "X", href: "https://x.com/PaperKiteGames" },
    { platform: "IG", href: "https://www.instagram.com/paperkitegames" },
    { platform: "Discord", href: "https://discord.gg/eFgfb6vHwG" },
    { platform: "YouTube", href: "https://www.youtube.com/@PaperKiteGames" },
  ],
  legalLinks: [
    { label: "Presskit", href: "/presskit" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Jobs", href: "/jobs" },
  ],
  productLinks: [],
  solutionLinks: [],
  resourceLinks: [],
  supportLinks: [],
  companyLinks: [],
  appearance: {
    variant: "detailed",
    background: "dark",
    showBackToTop: true,
    showDividers: true,
    className: "w-screen max-w-none !mx-0 !px-0",
  },
  copyright: `© ${new Date().getFullYear()} Paper Kite Games. All rights reserved.`,
  // newsletter: { enabled: true, ... },
  // languageSelector: ...
};

export default config;
export type { FooterConfig, LinkItem, SocialLinkItem, ContactInfo, AppearanceConfig };
