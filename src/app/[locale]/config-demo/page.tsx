"use client";

import { useState } from 'react';

export default function ConfigDemoPage() {
  const [showRawConfig, setShowRawConfig] = useState(false);

  // This is our new JSON-based configuration that would replace the old separate files
  const siteConfig = {
    "header": {
      "logo": {
        "text": "My Next.js App",
        "href": "/"
      },
      "navigation": [
        {
          "label": "Features",
          "href": "/features",
          "subItems": [
            {
              "label": "Analytics Dashboard",
              "href": "/features/analytics",
              "description": "Comprehensive data insights and reporting"
            },
            {
              "label": "Team Collaboration",
              "href": "/features/collaboration",
              "description": "Real-time team workspace and communication"
            }
          ]
        },
        {
          "label": "Pricing",
          "href": "/pricing"
        },
        {
          "label": "About",
          "href": "/about"
        }
      ],
      "actions": [
        {
          "label": "Sign In",
          "href": "/auth/signin",
          "variant": "ghost",
          "size": "sm"
        },
        {
          "label": "Get Started",
          "href": "/auth/signup",
          "variant": "primary",
          "size": "sm"
        }
      ],
      "appearance": {
        "variant": "elevated",
        "background": "default",
        "sticky": true,
        "showBorder": true,
        "height": "default",
        "mobileMenuBreakpoint": "md",
        "navigationAlignment": "right"
      }
    },
    "footer": {
      "contact": {
        "address": "123 Business Street, City, State 12345",
        "phone": "+1 (800) 555-0123",
        "email": "contact@mynextjsapp.com"
      },
      "socialLinks": [
        {
          "platform": "Twitter",
          "href": "https://twitter.com/yourcompany"
        },
        {
          "platform": "LinkedIn",
          "href": "https://linkedin.com/company/yourcompany"
        },
        {
          "platform": "GitHub",
          "href": "https://github.com/yourcompany"
        }
      ],
      "legalLinks": [
        {
          "label": "Privacy Policy",
          "href": "/privacy"
        },
        {
          "label": "Terms of Service",
          "href": "/terms"
        }
      ],
      "productLinks": [
        {
          "label": "Features",
          "href": "/features"
        },
        {
          "label": "Pricing",
          "href": "/pricing"
        }
      ],
      "appearance": {
        "variant": "detailed",
        "background": "dark",
        "showBackToTop": true,
        "showDividers": true,
        "className": "w-screen max-w-none !mx-0 !px-0"
      },
      "copyright": "© 2025 My Next.js App. All rights reserved."
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-primary mb-4">
            🎯 JSON-Based Configuration System POC
          </h1>
          <p className="text-muted text-lg mb-6">
            This demonstrates how we can replace the separate header-config.ts and footer-config.ts files 
            with a unified JSON-based configuration system that supports localization.
          </p>
          
          <div className="flex gap-4">
            <button 
              onClick={() => setShowRawConfig(!showRawConfig)}
              className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
            >
              {showRawConfig ? 'Hide' : 'Show'} Raw Configuration
            </button>
          </div>
        </div>

        {/* Raw Configuration Display */}
        {showRawConfig && (
          <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">Raw Configuration JSON</h2>
            <pre className="bg-background p-4 rounded border overflow-x-auto text-sm">
              {JSON.stringify(siteConfig, null, 2)}
            </pre>
          </div>
        )}

        {/* Before vs After */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-red-600">❌ Before (Current)</h2>
            <div className="space-y-3 text-sm">
              <div className="bg-background p-3 rounded border">
                <strong>src/lib/header-config.ts</strong><br/>
                Hardcoded strings, separate file
              </div>
              <div className="bg-background p-3 rounded border">
                <strong>src/lib/footer-config.ts</strong><br/>
                Hardcoded strings, separate file
              </div>
              <div className="bg-background p-3 rounded border">
                <strong>messages/en.json</strong><br/>
                Only page content translations
              </div>
            </div>
          </div>

          <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4 text-green-600">✅ After (New POC)</h2>
            <div className="space-y-3 text-sm">
              <div className="bg-background p-3 rounded border">
                <strong>src/lib/site-config.json</strong><br/>
                Unified configuration with t() placeholders
              </div>
              <div className="bg-background p-3 rounded border">
                <strong>messages/en.json</strong><br/>
                All content including layout translations
              </div>
              <div className="bg-background p-3 rounded border">
                <strong>src/lib/config-resolver.ts</strong><br/>
                Processes config and resolves translations
              </div>
            </div>
          </div>
        </div>

        {/* Header Configuration Demo */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Header Configuration</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Logo & Branding</h3>
              <div className="bg-background p-4 rounded border space-y-2">
                <p><strong>Text:</strong> {siteConfig.header.logo.text}</p>
                <p><strong>Href:</strong> {siteConfig.header.logo.href}</p>
              </div>
              
              <h3 className="text-lg font-medium mb-3 mt-6">Action Buttons</h3>
              <div className="space-y-2">
                {siteConfig.header.actions.map((action, index) => (
                  <div key={index} className="bg-background p-3 rounded border">
                    <div className="font-medium">{action.label}</div>
                    <div className="text-sm text-muted">
                      {action.href} • {action.variant} • {action.size}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Navigation Items</h3>
              <div className="space-y-2">
                {siteConfig.header.navigation.map((item, index) => (
                  <div key={index} className="bg-background p-3 rounded border">
                    <div className="font-medium">{item.label}</div>
                    <div className="text-sm text-muted">{item.href}</div>
                    {item.subItems && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.subItems.map((subItem, subIndex) => (
                          <div key={subIndex} className="text-sm">
                            <div className="font-medium">{subItem.label}</div>
                            <div className="text-xs text-muted">{subItem.description}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Appearance Settings</h3>
            <div className="bg-background p-4 rounded border">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div><strong>Variant:</strong> {siteConfig.header.appearance.variant}</div>
                <div><strong>Background:</strong> {siteConfig.header.appearance.background}</div>
                <div><strong>Sticky:</strong> {siteConfig.header.appearance.sticky.toString()}</div>
                <div><strong>Show Border:</strong> {siteConfig.header.appearance.showBorder.toString()}</div>
                <div><strong>Height:</strong> {siteConfig.header.appearance.height}</div>
                <div><strong>Navigation:</strong> {siteConfig.header.appearance.navigationAlignment}</div>
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
              <div className="bg-background p-4 rounded border space-y-2 text-sm">
                <p><strong>Address:</strong> {siteConfig.footer.contact.address}</p>
                <p><strong>Phone:</strong> {siteConfig.footer.contact.phone}</p>
                <p><strong>Email:</strong> {siteConfig.footer.contact.email}</p>
              </div>
              
              <h3 className="text-lg font-medium mb-3 mt-6">Social Links</h3>
              <div className="space-y-1">
                {siteConfig.footer.socialLinks.map((social, index) => (
                  <div key={index} className="bg-background p-2 rounded border text-sm">
                    <strong>{social.platform}:</strong> {social.href}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Footer Sections</h3>
              
              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Legal Links</h4>
                <div className="space-y-1">
                  {siteConfig.footer.legalLinks.map((link, index) => (
                    <div key={index} className="bg-background p-2 rounded border text-sm">
                      {link.label} → {link.href}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-medium text-sm mb-2">Product Links</h4>
                <div className="space-y-1">
                  {siteConfig.footer.productLinks.map((link, index) => (
                    <div key={index} className="bg-background p-2 rounded border text-sm">
                      {link.label} → {link.href}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm mb-2">Copyright</h4>
                <div className="bg-background p-2 rounded border text-sm">
                  {siteConfig.footer.copyright}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-surface border border-border rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-background p-4 rounded border">
                <h3 className="font-medium mb-2">🔧 Single Source of Truth</h3>
                <p className="text-sm text-muted">All site configuration in one JSON file instead of multiple TypeScript files</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <h3 className="font-medium mb-2">🌍 Fully Localized</h3>
                <p className="text-sm text-muted">Works seamlessly with your existing next-intl translation system</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-background p-4 rounded border">
                <h3 className="font-medium mb-2">🛡️ Type Safe</h3>
                <p className="text-sm text-muted">Complete TypeScript support with existing interfaces</p>
              </div>
              <div className="bg-background p-4 rounded border">
                <h3 className="font-medium mb-2">🔄 Backward Compatible</h3>
                <p className="text-sm text-muted">Uses your existing Header and Footer components without changes</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
