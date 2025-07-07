import type { Metadata } from 'next';
import { DynamicHeader, DynamicFooter } from '@/app/components/layout';
import { Button } from '@/app/components/ui';

export const metadata: Metadata = {
  title: 'Dynamic Configuration Demo | Next.js Template',
  description: 'Demonstration of dynamic header and footer configuration updates',
};

/**
 * Demo page showing dynamic configuration capabilities
 */
export default function DynamicConfigDemo() {
  // Example of initial/fallback configuration
  const initialHeaderConfig = {
    logo: {
      text: "Fallback App",
      href: "/",
      className: "text-foreground text-xl font-bold"
    },
    navigation: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" }
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
    }
  };

  const initialFooterConfig = {
    contact: {
      email: "fallback@example.com"
    },
    socialLinks: [
      { platform: "GitHub", href: "https://github.com" }
    ],
    productLinks: [
      { label: "Product A", href: "/products/a" }
    ],
    solutionLinks: [],
    resourceLinks: [],
    supportLinks: [],
    companyLinks: [],
    legalLinks: [
      { label: "Privacy", href: "/privacy" }
    ],
    appearance: {
      variant: "default" as const,
      background: "default" as const,
      showBackToTop: true,
      showDividers: false,
      className: ""
    },
    copyright: "© 2024 Fallback App. All rights reserved.",
    accessibility: {
      footerAriaLabel: "Site footer",
      socialLinksAriaLabel: "Social media links",
      legalLinksAriaLabel: "Legal links",
      productLinksAriaLabel: "Product links", 
      contactInfoAriaLabel: "Contact information"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Dynamic Header with fallback config */}
      <DynamicHeader 
        initialConfig={initialHeaderConfig}
        enableDynamicConfig={true}
        onConfigLoad={(config) => console.log('Header config loaded:', config)}
        onConfigError={(error) => console.error('Header config error:', error)}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <header className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">
              Dynamic Configuration Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              This page demonstrates dynamic header and footer configuration updates.
              The components fetch their configuration from <code className="bg-muted px-2 py-1 rounded">/api/config</code> at runtime.
            </p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-3">Dynamic Header</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Fetches navigation and branding from API</li>
                  <li>• Graceful fallback to initial config</li>
                  <li>• Optional real-time polling updates</li>
                  <li>• Type-safe configuration merging</li>
                </ul>
              </div>
              
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-lg font-medium mb-3">Dynamic Footer</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Configurable link sections</li>
                  <li>• Dynamic social media links</li>
                  <li>• Runtime appearance updates</li>
                  <li>• Accessibility-first design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-foreground">Configuration API</h2>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Available Endpoints</h3>
              <div className="space-y-2 text-sm font-mono">
                <div>
                  <span className="text-green-600 font-medium">GET</span> 
                  <span className="ml-2">/api/config</span>
                  <span className="text-muted-foreground ml-2">- Get all configurations</span>
                </div>
                <div>
                  <span className="text-green-600 font-medium">GET</span> 
                  <span className="ml-2">/api/config?component=header</span>
                  <span className="text-muted-foreground ml-2">- Get header config only</span>
                </div>
                <div>
                  <span className="text-green-600 font-medium">GET</span> 
                  <span className="ml-2">/api/config?component=footer</span>
                  <span className="text-muted-foreground ml-2">- Get footer config only</span>
                </div>
                <div>
                  <span className="text-blue-600 font-medium">POST</span> 
                  <span className="ml-2">/api/config</span>
                  <span className="text-muted-foreground ml-2">- Update configuration</span>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Test Configuration Updates</h2>
            <p className="text-muted-foreground mb-6">
              Open your browser&apos;s developer tools and watch the network tab as the page loads.
              You should see requests to <code className="bg-muted px-2 py-1 rounded">/api/config</code>.
            </p>
            <Button onClick={() => window.location.reload()}>
              Reload to Test Configuration Fetch
            </Button>
          </section>
        </div>
      </main>

      {/* Dynamic Footer with fallback config */}
      <DynamicFooter 
        initialConfig={initialFooterConfig}
        enableDynamicConfig={true}
        onConfigLoad={(config) => console.log('Footer config loaded:', config)}
        onConfigError={(error) => console.error('Footer config error:', error)}
      />
    </div>
  );
}
