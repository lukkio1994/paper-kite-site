import { useTranslations } from 'next-intl';
import { useSiteConfig, useHeaderConfig, useFooterConfig } from '@/lib/site-config';

export default function ConfigPOCPage() {
  const t = useTranslations();
  const siteConfig = useSiteConfig();
  const headerConfig = useHeaderConfig();
  const footerConfig = useFooterConfig();

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-primary mb-6">
            {t('HomePage.title')} - Site Configuration POC
          </h1>
          <p className="text-muted mb-6">
            This page demonstrates the new JSON-based configuration system with localization integration.
          </p>
        </div>

        {/* Site Branding Demo */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Site Branding</h2>
          <div className="space-y-2">
            <p><strong>Site Name:</strong> {siteConfig.site.branding.name}</p>
            <p><strong>Logo Text:</strong> {siteConfig.site.branding.logoText}</p>
            <p><strong>Logo Href:</strong> {siteConfig.site.branding.logoHref}</p>
          </div>
        </div>

        {/* Header Configuration Demo */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Header Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Navigation Items</h3>
              <ul className="space-y-2">
                {headerConfig.navigation.map((item, index) => (
                  <li key={index} className="border-l-2 border-primary pl-3">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-muted">{item.href}</div>
                    {item.subItems && (
                      <ul className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <li key={subIndex} className="text-sm">
                            <div className="font-medium">{subItem.label}</div>
                            <div className="text-xs text-muted">{subItem.description}</div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Action Buttons</h3>
              <ul className="space-y-2">
                {headerConfig.actions.map((action, index) => (
                  <li key={index} className="border-l-2 border-accent pl-3">
                    <div className="font-medium">{action.label}</div>
                    <div className="text-sm text-muted">
                      {action.href} • {action.variant} • {action.size}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Accessibility</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <strong>Logo ARIA:</strong> {headerConfig.accessibility.logoAriaLabel}
              </div>
              <div>
                <strong>Mobile Menu ARIA:</strong> {headerConfig.accessibility.mobileMenuAriaLabel}
              </div>
              <div>
                <strong>Navigation ARIA:</strong> {headerConfig.accessibility.navigationAriaLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Configuration Demo */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Footer Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm">
                <p><strong>Address:</strong> {footerConfig.contact.address}</p>
                <p><strong>Phone:</strong> {footerConfig.contact.phone}</p>
                <p><strong>Email:</strong> {footerConfig.contact.email}</p>
              </div>
              
              <h3 className="text-lg font-medium mb-3 mt-6">Social Links</h3>
              <ul className="space-y-1 text-sm">
                {footerConfig.socialLinks.map((social, index) => (
                  <li key={index}>
                    <strong>{social.platform}:</strong> {social.href}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Footer Sections</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Legal Links</h4>
                <ul className="space-y-1 text-sm">
                  {footerConfig.legalLinks.map((link, index) => (
                    <li key={index}>
                      {link.label} → {link.href}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Product Links</h4>
                <ul className="space-y-1 text-sm">
                  {footerConfig.productLinks.map((link, index) => (
                    <li key={index}>
                      {link.label} → {link.href}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Copyright</h4>
                <p className="text-sm text-muted">{footerConfig.copyright}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Configuration Source Demo */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="space-y-4 text-sm">
            <div className="bg-background p-4 rounded border">
              <h3 className="font-medium mb-2">1. JSON Configuration (site-config.json)</h3>
              <p>Contains structure with t(&apos;key&apos;) placeholders for translatable content</p>
            </div>
            <div className="bg-background p-4 rounded border">
              <h3 className="font-medium mb-2">2. Translation Files (messages/en.json)</h3>
              <p>Contains actual translated text values for each locale</p>
            </div>
            <div className="bg-background p-4 rounded border">
              <h3 className="font-medium mb-2">3. Config Resolver (site-config.ts)</h3>
              <p>Processes JSON config and replaces t(&apos;key&apos;) with actual translations</p>
            </div>
            <div className="bg-background p-4 rounded border">
              <h3 className="font-medium mb-2">4. Typed Hooks</h3>
              <p>Provides typed configuration objects for components to consume</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
