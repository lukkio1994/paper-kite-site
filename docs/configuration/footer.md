# Footer Configuration Guide

This project uses a **centralized configuration system** for all footer content and appearance. Everything is managed from a single file: `src/lib/footer-config.ts`.

## 🎯 Quick Start (AI Friendly)

**To configure the footer, edit `src/lib/footer-config.ts`:**
- Contact info: Edit the `contact` object
- Links: Edit the relevant array (e.g., `legalLinks`, `productLinks`)
- Appearance: Edit the `appearance` object
- To hide a section: Remove all items from its array or comment them out

## 📋 Configuration Overview

| Section | Type | Description | Example |
|---------|------|-------------|---------|
| **Contact Information** | Object | Address, phone, email, extra fields | `{ address: "123 Main St", phone: "+1-555-0123" }` |
| **Social Media Links** | Array | Platform and URL pairs | `[{ platform: "Twitter", href: "https://twitter.com/..." }]` |
| **Footer Sections** | Arrays | All navigation sections as `{ label, href }` objects | `[{ label: "Privacy Policy", href: "/privacy" }]` |
| **Appearance** | Object | Visual settings and layout options | `{ variant: "detailed", background: "dark" }` |

## 🔧 Detailed Configuration

### Contact Information

```typescript
contact: {
  address: "123 Business Street, City, State 12345",
  phone: "+1 (800) 555-0123",
  email: "contact@yourcompany.com",
  extra: [
    { 
      label: "Fax", 
      value: "+1 (800) 555-4567",
      href: "fax:+18005554567"  // Optional link
    },
    {
      label: "Support Hours",
      value: "Mon-Fri 9AM-5PM EST"
    }
  ]
}
```

### Social Media Links

```typescript
socialLinks: [
  {
    platform: "Twitter",
    href: "https://twitter.com/yourcompany"
  },
  {
    platform: "LinkedIn", 
    href: "https://linkedin.com/company/yourcompany"
  },
  {
    platform: "GitHub",
    href: "https://github.com/yourcompany"
  },
  {
    platform: "Discord",
    href: "https://discord.gg/yourserver"
  }
]
```

**Supported Platforms** (with automatic icons):
- Twitter, LinkedIn, Facebook, Instagram
- GitHub, GitLab, YouTube, TikTok
- Discord, Slack, WhatsApp, Telegram

### Footer Link Sections

Each section is an array of `{ label, href }` objects:

```typescript
// Legal and compliance links
legalLinks: [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "GDPR", href: "/gdpr" }
],

// Product or service links
productLinks: [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "API", href: "/api" }
],

// Solution-based links
solutionLinks: [
  { label: "For Startups", href: "/solutions/startups" },
  { label: "For Enterprise", href: "/solutions/enterprise" },
  { label: "For Developers", href: "/solutions/developers" }
],

// Help and resources
resourceLinks: [
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Tutorials", href: "/tutorials" },
  { label: "Changelog", href: "/changelog" }
],

// Support and help
supportLinks: [
  { label: "Help Center", href: "/help" },
  { label: "Contact Support", href: "/support" },
  { label: "System Status", href: "/status" },
  { label: "Report a Bug", href: "/report-bug" }
],

// Company information
companyLinks: [
  { label: "About Us", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Press Kit", href: "/press" },
  { label: "Investors", href: "/investors" }
]
```

### Appearance Configuration

```typescript
appearance: {
  variant: "detailed",             // minimal, default, detailed, enterprise
  background: "default",           // default, subtle, dark, gradient
  showBackToTop: true,             // Show "back to top" button
  showDividers: true,              // Show section dividers
  className: ""                    // Custom CSS classes
}
```

**Variant Options:**
- **minimal**: Single row with essential links only
- **default**: 2-3 columns with basic sections
- **detailed**: 4-5 columns with comprehensive sections
- **enterprise**: 6+ columns with extensive categorization

**Background Options:**
- **default**: Light background with dark text
- **subtle**: Slightly gray background
- **dark**: Dark background with light text
- **gradient**: Gradient background (customizable)

### Copyright Configuration

```typescript
copyright: `© ${new Date().getFullYear()} Your Company Name. All rights reserved.`
```

The copyright automatically includes the current year.

## 🎨 Styling and Theming

The footer automatically adapts to your theme:

- **Light Mode**: Light background, dark text
- **Dark Mode**: Dark background, light text
- **Custom Themes**: Uses your CSS custom properties

### Custom Styling

```typescript
appearance: {
  className: "custom-footer-styles"
}
```

## 📱 Responsive Behavior

The footer automatically responds to screen size:

- **Desktop**: Full multi-column layout
- **Tablet**: 2-3 columns with adjusted spacing
- **Mobile**: Single column with collapsible sections

### Mobile Optimizations

- Touch-friendly link spacing
- Optimized contact information display
- Simplified social media icons
- Collapsible sections for better navigation

## ♿ Accessibility Features

The footer is fully WCAG 2.1 AA compliant:

- **Semantic Structure**: Proper HTML landmarks and headings
- **ARIA Labels**: Descriptive labels for all sections
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Optimized for assistive technologies
- **Focus Management**: Clear focus indicators

## 🌐 Internationalization

The footer supports multiple languages:

```typescript
// In locale files (messages/en.json, messages/es.json, etc.)
{
  "config": {
    "footer": {
      "sections": {
        "legal": "Legal",
        "products": "Products", 
        "support": "Support",
        "company": "Company"
      },
      "contact": "Contact Us",
      "social": "Follow Us"
    }
  }
}
```

## 🔄 Dynamic Configuration

For runtime configuration updates:

```typescript
import { DynamicFooter } from '@/components/layout';

<DynamicFooter
  enableDynamicConfig={true}
  pollingInterval={30000}
  onConfigLoad={(config) => console.log('Footer updated')}
/>
```

See the [Dynamic Configuration Guide](./dynamic.md) for details.

## 🧪 Testing

Test your footer configuration:

```typescript
import { render, screen } from '@testing-library/react';
import { FooterClient } from '@/components/layout';

test('renders contact information', () => {
  render(<FooterClient />);
  
  expect(screen.getByText('contact@yourcompany.com')).toBeInTheDocument();
  expect(screen.getByText('+1 (800) 555-0123')).toBeInTheDocument();
});

test('renders social media links', () => {
  render(<FooterClient />);
  
  expect(screen.getByLabelText(/twitter/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
});
```

## 💡 Tips and Best Practices

1. **Keep it organized**: Group related links into logical sections
2. **Essential links only**: Include only important, frequently accessed links
3. **Contact accessibility**: Make contact information easy to find and use
4. **Legal compliance**: Include required legal links for your jurisdiction
5. **Social presence**: Only include active, maintained social media accounts
6. **Mobile first**: Test footer on mobile devices regularly

## 🐛 Troubleshooting

**Footer not showing?**
- Check that at least one section has content
- Verify the footer is included in your layout
- Check for TypeScript/JavaScript errors

**Contact information not displaying?**
- Verify contact object has at least one property
- Check email/phone formatting
- Ensure contact section is enabled in appearance

**Social icons missing?**
- Check platform names match supported platforms exactly
- Verify href URLs are valid
- Ensure socialLinks array has items

**Styling issues?**
- Check theme configuration in `src/styles/palette.css`
- Verify appearance.variant and appearance.background settings
- Use browser dev tools to inspect CSS

**Responsive layout problems?**
- Test on actual devices, not just browser resize
- Check Tailwind CSS responsive classes
- Verify container system is working properly

## 📦 Footer Sections Reference

Quick reference for what each section typically contains:

| Section | Purpose | Common Links |
|---------|---------|--------------|
| **Legal** | Compliance and legal information | Privacy Policy, Terms, Cookies, GDPR |
| **Products** | Product/service information | Features, Pricing, Enterprise, API |
| **Solutions** | Target audience solutions | For Startups, Enterprise, Developers |
| **Resources** | Educational and support content | Docs, Blog, Tutorials, Changelog |
| **Support** | Help and customer service | Help Center, Contact, Status, Bug Reports |
| **Company** | About the organization | About, Careers, Press, Investors |

Choose the sections that make sense for your business and audience!
