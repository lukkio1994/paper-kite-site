# Configuration Documentation

This document provides detailed information about the site configuration structure for developers.

## Configuration Overview

The site configuration is managed through a centralized, type-safe system with internationalization support. All configuration is defined in TypeScript with Zod validation and accessed through React hooks.

### Configuration Version: 1.0

## HeaderConfig Structure

The header configuration controls the site navigation, branding, and header behavior.

| Key | Type | Description | Translation Key | Default Value |
|-----|------|-------------|-----------------|---------------|
| `logo.text` | `string` | The site logo text/brand name | `config.header.logo.text` | `"My App"` |
| `logo.href` | `string` | The URL the logo links to (typically homepage) | N/A | `"/"` |
| `logo.className` | `string` | CSS classes applied to the logo element | N/A | `"text-lg font-bold transition-colors"` |
| `navigation[].label` | `string` | Display text for navigation items | `config.header.navigation.*` | Various |
| `navigation[].href` | `string` | URL for navigation links | N/A | Various routes |
| `navigation[].subItems[]` | `NavItem[]` | Dropdown/submenu items for navigation | N/A | Array of sub-navigation |
| `navigation[].subItems[].label` | `string` | Display text for sub-navigation items | `config.header.navigation.*` | Various |
| `navigation[].subItems[].href` | `string` | URL for sub-navigation links | N/A | Various routes |
| `navigation[].subItems[].description` | `string` | Optional description for sub-navigation items | `config.header.navigation.*Description` | Various |
| `actions[].label` | `string` | Text for action buttons (Sign In, Get Started) | `config.header.actions.*` | `"Sign In"`, `"Get Started"` |
| `actions[].href` | `string` | URL for action buttons | N/A | `"/auth/signin"`, `"/auth/signup"` |
| `actions[].variant` | `"ghost" \| "primary"` | Button style variant | N/A | `"ghost"`, `"primary"` |
| `actions[].size` | `"sm" \| "md" \| "lg"` | Button size | N/A | `"sm"` |
| `appearance.variant` | `string` | Header visual style | N/A | `"elevated"` |
| `appearance.background` | `string` | Header background style | N/A | `"default"` |
| `appearance.sticky` | `boolean` | Whether header sticks to top on scroll | N/A | `true` |
| `appearance.showBorder` | `boolean` | Whether to show bottom border | N/A | `true` |
| `appearance.height` | `string` | Header height setting | N/A | `"default"` |
| `appearance.mobileMenuBreakpoint` | `string` | Breakpoint for mobile menu activation | N/A | `"md"` |
| `appearance.navigationAlignment` | `string` | Navigation alignment within header | N/A | `"right"` |
| `appearance.className` | `string` | Additional CSS classes | N/A | `""` |
| `mobile.showLogo` | `boolean` | Whether to show logo on mobile | N/A | `true` |
| `mobile.showActions` | `boolean` | Whether to show action buttons on mobile | N/A | `true` |
| `mobile.menuPosition` | `"left" \| "center" \| "right"` | Mobile menu button position | N/A | `"right"` |
| `mobile.overlayBackground` | `"blur" \| "solid" \| "dark"` | Mobile menu overlay style | N/A | `"blur"` |
| `accessibility.skipToContentHref` | `string` | Skip link target for screen readers | N/A | `"#main-content"` |
| `accessibility.logoAriaLabel` | `string` | ARIA label for logo link | `config.header.accessibility.logoAriaLabel` | `"Go to homepage"` |
| `accessibility.mobileMenuAriaLabel` | `string` | ARIA label for mobile menu toggle | `config.header.accessibility.mobileMenuAriaLabel` | `"Toggle mobile menu"` |
| `accessibility.navigationAriaLabel` | `string` | ARIA label for main navigation | `config.header.accessibility.navigationAriaLabel` | `"Main navigation"` |

## FooterConfig Structure

The footer configuration controls the site footer content, links, and appearance.

| Key | Type | Description | Translation Key | Default Value |
|-----|------|-------------|-----------------|---------------|
| `contact.address` | `string` | Physical business address | `config.footer.contact.address` | `"123 Main Street, City, State 12345"` |
| `contact.phone` | `string` | Business phone number | `config.footer.contact.phone` | `"+1 (555) 123-4567"` |
| `contact.email` | `string` | Business email address | `config.footer.contact.email` | `"contact@example.com"` |
| `socialLinks[].platform` | `string` | Display name for social platform | `config.footer.social.*` | `"Twitter"`, `"LinkedIn"`, `"GitHub"` |
| `socialLinks[].href` | `string` | URL to social media profile | N/A | Platform-specific URLs |
| `legalLinks[].label` | `string` | Display text for legal links | `config.footer.legal.*` | `"Privacy Policy"`, `"Terms of Service"` |
| `legalLinks[].href` | `string` | URL for legal pages | N/A | `"/privacy"`, `"/terms"` |
| `productLinks[].label` | `string` | Display text for product links | `config.footer.product.*` | `"Features"`, `"Pricing"` |
| `productLinks[].href` | `string` | URL for product pages | N/A | `"/features"`, `"/pricing"` |
| `solutionLinks[]` | `LinkItem[]` | Links to solution pages (currently empty) | N/A | `[]` |
| `resourceLinks[]` | `LinkItem[]` | Links to resource pages (currently empty) | N/A | `[]` |
| `supportLinks[]` | `LinkItem[]` | Links to support pages (currently empty) | N/A | `[]` |
| `companyLinks[]` | `LinkItem[]` | Links to company pages (currently empty) | N/A | `[]` |
| `appearance.variant` | `string` | Footer layout style | N/A | `"detailed"` |
| `appearance.background` | `string` | Footer background style | N/A | `"dark"` |
| `appearance.showBackToTop` | `boolean` | Whether to show back-to-top button | N/A | `true` |
| `appearance.showDividers` | `boolean` | Whether to show section dividers | N/A | `true` |
| `appearance.className` | `string` | Additional CSS classes | N/A | `"w-screen max-w-none !mx-0 !px-0"` |
| `copyright` | `string` | Copyright notice text | `config.footer.copyright` | `"© 2025 My Company. All rights reserved."` |

## Type Definitions

### Core Types

```typescript
interface LinkItem {
  label: string;
  href: string;
}

interface SocialLinkItem {
  platform: string;
  href: string;
}

interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

interface NavItem {
  label: string;
  href: string;
  subItems?: NavItem[];
  description?: string;
}

interface ActionButton {
  label: string;
  href: string;
  variant: "ghost" | "primary";
  size: "sm" | "md" | "lg";
}
```

## Usage Examples

### Client-side Hook Usage

```typescript
import { useResolvedHeaderConfig, useResolvedFooterConfig } from '@/lib/config-resolver';

function MyComponent() {
  const headerConfig = useResolvedHeaderConfig();
  const footerConfig = useResolvedFooterConfig();
  
  // Use configuration objects...
}
```

### Adding New Translation Keys

To add new translatable content:

1. Add the key to `messages/en.json` under the appropriate namespace
2. Update the factory function in `config-resolver.ts`
3. Add Zod validation if needed
4. Update this documentation

Example:
```json
{
  "config": {
    "header": {
      "newSection": {
        "newKey": "New Translatable Text"
      }
    }
  }
}
```

## Validation

All configuration is validated at runtime using Zod schemas:

- **HeaderConfigSchema**: Validates header configuration structure
- **FooterConfigSchema**: Validates footer configuration structure

Validation errors are logged to the console and thrown as exceptions to prevent invalid configurations from reaching components.

## Performance

- Configurations are memoized using `useMemo` to prevent unnecessary re-computation
- Only re-computed when translation function changes (locale switch)
- Factory pattern ensures consistent structure across client/server contexts

## Migration

The configuration includes version metadata (`_meta.configVersion`) to support future migrations. Current version: **1.0**

When making breaking changes:
1. Increment the version number
2. Create migration functions
3. Update validation schemas
4. Update this documentation
