import { NextRequest, NextResponse } from 'next/server';
import type { ResolvedHeaderConfig, ResolvedFooterConfig } from '@/lib/config-resolver';

/**
 * Dynamic Configuration API Endpoint
 * 
 * Provides runtime configuration updates for header and footer components.
 * This allows for real-time configuration changes without requiring a rebuild.
 * 
 * Usage:
 * - GET /api/config - Returns current header and footer configurations
 * - Supports query parameters: ?component=header|footer to get specific config
 * 
 * Response format:
 * {
 *   "header": HeaderConfig,
 *   "footer": FooterConfig,
 *   "lastUpdated": ISO timestamp,
 *   "version": string
 * }
 */

// Mock configuration - In production, this would come from a database or CMS
const mockHeaderConfig: ResolvedHeaderConfig = {
  logo: {
    text: "Dynamic App",
    href: "/",
    className: "text-foreground text-xl font-bold"
  },
  navigation: [
    {
      label: "Products",
      href: "/products",
      subItems: [
        {
          label: "Web Development",
          href: "/products/web",
          description: "Custom web applications and websites"
        },
        {
          label: "Mobile Apps",
          href: "/products/mobile",
          description: "iOS and Android applications"
        }
      ]
    },
    {
      label: "Services",
      href: "/services"
    },
    {
      label: "About",
      href: "/about"
    },
    {
      label: "Contact",
      href: "/contact"
    }
  ],
  actions: [
    {
      label: "Get Started",
      href: "/get-started",
      variant: "primary"
    },
    {
      label: "Login",
      href: "/login",
      variant: "outline"
    }
  ],
  appearance: {
    variant: "default",
    background: "default", 
    sticky: true,
    showBorder: true,
    height: "default",
    mobileMenuBreakpoint: "md",
    navigationAlignment: "left"
  },
  mobile: {
    showLogo: true,
    showActions: true,
    menuPosition: "right",
    overlayBackground: "blur"
  },
  accessibility: {
    skipToContentHref: "#main-content",
    logoAriaLabel: "Dynamic App - Go to homepage",
    mobileMenuAriaLabel: "Toggle main navigation menu",
    navigationAriaLabel: "Main navigation"
  }
};

const mockFooterConfig: ResolvedFooterConfig = {
  contact: {
    address: "123 Dynamic Street, Tech City, TC 12345",
    phone: "+1 (555) 123-4567",
    email: "contact@dynamicapp.com"
  },
  socialLinks: [
    {
      platform: "Twitter",
      href: "https://twitter.com/dynamicapp"
    },
    {
      platform: "LinkedIn", 
      href: "https://linkedin.com/company/dynamicapp"
    }
  ],
  legalLinks: [
    {
      label: "Privacy Policy",
      href: "/privacy"
    },
    {
      label: "Terms of Service",
      href: "/terms"
    }
  ],
  productLinks: [
    {
      label: "Web Development",
      href: "/products/web"
    },
    {
      label: "Mobile Apps",
      href: "/products/mobile"
    }
  ],
  solutionLinks: [
    {
      label: "Enterprise",
      href: "/solutions/enterprise"
    },
    {
      label: "Startups",
      href: "/solutions/startups"
    }
  ],
  resourceLinks: [
    {
      label: "Documentation",
      href: "/docs"
    },
    {
      label: "Blog",
      href: "/blog"
    }
  ],
  supportLinks: [
    {
      label: "Help Center",
      href: "/support"
    },
    {
      label: "Contact Support",
      href: "/support/contact"
    }
  ],
  companyLinks: [
    {
      label: "About Us",
      href: "/about"
    },
    {
      label: "Careers",
      href: "/careers"
    }
  ],
  appearance: {
    variant: "detailed",
    background: "default",
    showBackToTop: true,
    showDividers: true,
    className: ""
  },
  copyright: `© ${new Date().getFullYear()} Dynamic App. All rights reserved.`,
  accessibility: {
    footerAriaLabel: "Site footer",
    socialLinksAriaLabel: "Social media links",
    legalLinksAriaLabel: "Legal links",
    productLinksAriaLabel: "Product links", 
    contactInfoAriaLabel: "Contact information",
    backToTopAriaLabel: "Back to top of page",
    copyrightAriaLabel: "Copyright information"
  }
};

// Configuration metadata
interface ConfigResponse {
  header?: ResolvedHeaderConfig;
  footer?: ResolvedFooterConfig;
  lastUpdated: string;
  version: string;
}

let configVersion = "1.0.0";
let lastUpdated = new Date().toISOString();

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const component = searchParams.get('component');
    
    // Simulate potential network delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const response: ConfigResponse = {
      lastUpdated,
      version: configVersion
    };
    
    // Return specific component config or all configs
    switch (component) {
      case 'header':
        response.header = mockHeaderConfig;
        break;
      case 'footer':
        response.footer = mockFooterConfig;
        break;
      default:
        response.header = mockHeaderConfig;
        response.footer = mockFooterConfig;
        break;
    }
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=60', // Cache for 1 minute
        'Content-Type': 'application/json'
      }
    });
    
  } catch (error) {
    console.error('Failed to fetch configuration:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch configuration',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// Optional: POST endpoint to update configuration (for admin panel)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { component, config } = body;
    
    // In production, this would update the database/CMS
    if (component === 'header' && config) {
      // Update header config
      Object.assign(mockHeaderConfig, config);
    } else if (component === 'footer' && config) {
      // Update footer config
      Object.assign(mockFooterConfig, config);
    }
    
    // Update metadata
    configVersion = `${parseFloat(configVersion) + 0.1}`;
    lastUpdated = new Date().toISOString();
    
    return NextResponse.json({
      success: true,
      version: configVersion,
      lastUpdated,
      message: `${component} configuration updated successfully`
    });
    
  } catch (error) {
    console.error('Failed to update configuration:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to update configuration',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
