import { DynamicHeader, DynamicFooter } from '@/app/components/layout';
import { Container } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

/**
 * Demo page showcasing dynamic header and footer configuration
 * 
 * This page demonstrates:
 * - Static fallback configuration
 * - Dynamic configuration loading from API
 * - Real-time polling for configuration updates
 * - Error handling and graceful fallbacks
 */
export default function DynamicConfigDemo() {
  // Fallback configurations (used if API fails)
  const fallbackHeaderConfig = {
    logo: {
      text: "Fallback App",
      href: "/",
      className: "text-foreground text-xl font-bold"
    },
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" }
    ],
    actions: [
      { label: "Sign In", href: "/signin", variant: "outline" as const }
    ],
    appearance: {
      variant: "default" as const,
      background: "default" as const,
      sticky: true,
      showBorder: true,
      height: "default" as const,
      mobileMenuBreakpoint: "md" as const,
      navigationAlignment: "left" as const
    },
    mobile: {
      showLogo: true,
      showActions: true,
      menuPosition: "right" as const,
      overlayBackground: "blur" as const
    },
    accessibility: {
      skipToContentHref: "#main-content",
      logoAriaLabel: "Fallback App - Go to homepage",
      mobileMenuAriaLabel: "Toggle main navigation menu",
      navigationAriaLabel: "Main navigation"
    }
  };

  const fallbackFooterConfig = {
    contact: {
      address: "123 Fallback Street, City, State 12345",
      phone: "+1 (555) 000-0000",
      email: "contact@fallbackapp.com"
    },
    socialLinks: [
      { platform: "Twitter", href: "https://twitter.com/fallbackapp" },
      { platform: "GitHub", href: "https://github.com/fallbackapp" }
    ],
    legalLinks: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" }
    ],
    productLinks: [
      { label: "Features", href: "/features" },
      { label: "Pricing", href: "/pricing" }
    ],
    supportLinks: [
      { label: "Help", href: "/help" },
      { label: "Support", href: "/support" }
    ],
    companyLinks: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" }
    ],
    appearance: {
      variant: "detailed" as const,
      background: "default" as const,
      showBackToTop: true,
      showDividers: true,
      className: ""
    },
    copyright: "© 2025 Fallback App. All rights reserved.",
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

  return (
    <>
      {/* Dynamic Header with fallback config */}
      <DynamicHeader
        initialConfig={fallbackHeaderConfig}
        enableDynamicConfig={true}
        pollingInterval={30000} // Poll every 30 seconds for demo
        onConfigLoad={(config) => {
          console.log('Header config loaded:', config);
        }}
        onConfigError={(error) => {
          console.error('Header config error:', error);
        }}
      />

      {/* Main Content */}
      <main id="main-content" className="min-h-screen">
        <Container className="py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">
              Dynamic Configuration Demo
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              This page demonstrates dynamic header and footer configuration updates.
              The components fetch their configuration from the API and update in real-time.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Header Features</h2>
                <ul className="text-left space-y-2 text-sm">
                  <li>✅ Dynamic logo and navigation</li>
                  <li>✅ Real-time action button updates</li>
                  <li>✅ Appearance configuration</li>
                  <li>✅ Mobile menu settings</li>
                  <li>✅ Accessibility configuration</li>
                  <li>✅ Fallback on API errors</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Footer Features</h2>
                <ul className="text-left space-y-2 text-sm">
                  <li>✅ Dynamic contact information</li>
                  <li>✅ Social media links</li>
                  <li>✅ Organized link sections</li>
                  <li>✅ Copyright and legal links</li>
                  <li>✅ Appearance configuration</li>
                  <li>✅ Graceful error handling</li>
                </ul>
              </div>
            </div>

            <div className="bg-muted/50 border border-border rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">API Endpoints</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <code className="block bg-background border rounded px-3 py-2 mb-2">
                    GET /api/config?component=header
                  </code>
                  <p className="text-muted-foreground">Fetch header configuration</p>
                </div>
                <div>
                  <code className="block bg-background border rounded px-3 py-2 mb-2">
                    GET /api/config?component=footer
                  </code>
                  <p className="text-muted-foreground">Fetch footer configuration</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                onClick={() => window.location.reload()}
                variant="outline"
              >
                Reload Page
              </Button>
              <Button 
                onClick={() => window.open('/api/config', '_blank')}
                variant="primary"
              >
                View API Response
              </Button>
            </div>
          </div>
        </Container>
      </main>

      {/* Dynamic Footer with fallback config */}
      <DynamicFooter
        initialConfig={fallbackFooterConfig}
        enableDynamicConfig={true}
        pollingInterval={30000} // Poll every 30 seconds for demo
        onConfigLoad={(config) => {
          console.log('Footer config loaded:', config);
        }}
        onConfigError={(error) => {
          console.error('Footer config error:', error);
        }}
      />
    </>
  );
}
