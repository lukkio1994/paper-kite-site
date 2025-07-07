# Accessibility Configuration Documentation

This document outlines the comprehensive accessibility features built into the header and footer configuration schemas, ensuring WCAG 2.1 compliance and excellent screen reader support.

## Overview

Both `HeaderConfigSchema` and `FooterConfigSchema` now include mandatory accessibility properties that enforce compliance with web accessibility standards. These schemas validate that all required accessibility attributes are present and properly configured.

## Header Accessibility Requirements

### Required Properties

All header configurations **must** include the following accessibility properties:

```typescript
accessibility: {
  skipToContentHref: string;        // Link to main content (required)
  logoAriaLabel: string;            // Logo accessibility description (required)
  mobileMenuAriaLabel: string;      // Mobile menu button description (required)
  navigationAriaLabel: string;      // Navigation landmark description (required)
}
```

### Optional Properties

Additional accessibility properties for enhanced compliance:

```typescript
accessibility: {
  // ... required properties above
  mainLandmarkLabel?: string;       // Main content area description
  searchFormLabel?: string;         // Search form accessibility label
  languageSwitcherLabel?: string;   // Language switcher description
}
```

### Example Header Configuration

```typescript
// In messages/en.json
"config": {
  "header": {
    "accessibility": {
      "logoAriaLabel": "My Next.js App - Go to homepage",
      "mobileMenuAriaLabel": "Toggle main navigation menu",
      "navigationAriaLabel": "Main navigation",
      "mainLandmarkLabel": "Main content area",
      "searchFormLabel": "Search our website",
      "languageSwitcherLabel": "Change language"
    }
  }
}
```

## Footer Accessibility Requirements

### Required Properties

All footer configurations **must** include the following accessibility properties:

```typescript
accessibility: {
  footerAriaLabel: string;          // Footer landmark description (required)
  socialLinksAriaLabel: string;     // Social media links description (required)
  legalLinksAriaLabel: string;      // Legal links section description (required)
  productLinksAriaLabel: string;    // Product links section description (required)
  contactInfoAriaLabel: string;     // Contact information description (required)
}
```

### Optional Properties

Additional accessibility properties for enhanced user experience:

```typescript
accessibility: {
  // ... required properties above
  backToTopAriaLabel?: string;      // Back to top button description
  copyrightAriaLabel?: string;      // Copyright notice description
}
```

### Example Footer Configuration

```typescript
// In messages/en.json
"config": {
  "footer": {
    "accessibility": {
      "footerAriaLabel": "Website footer with company information and links",
      "socialLinksAriaLabel": "Follow us on social media",
      "legalLinksAriaLabel": "Legal information and policies",
      "productLinksAriaLabel": "Product information and features", 
      "contactInfoAriaLabel": "Contact information and office details",
      "backToTopAriaLabel": "Return to top of page",
      "copyrightAriaLabel": "Copyright and legal notice"
    }
  }
}
```

## Schema Validation Features

### Strict Mode Validation

Both schemas use `.strict()` mode to ensure:
- All required accessibility properties are present
- No unexpected properties are added
- Consistent accessibility implementation across locales

### Comprehensive Error Messages

The schemas provide detailed error messages for accessibility violations:

```typescript
// Example validation errors
"Logo aria label is required for accessibility compliance"
"Footer aria label is required for accessibility compliance"
"Social links aria label is required for accessibility compliance"
```

### Runtime Validation

All configurations are validated at runtime using Zod schemas:

```typescript
const result = HeaderConfigSchema.safeParse(config);
if (!result.success) {
  throw new Error(`Invalid header configuration: ${result.error.message}`);
}
```

## Accessibility Best Practices

### ARIA Labels

- **Descriptive**: Use clear, descriptive labels that explain the purpose
- **Concise**: Keep labels brief but informative
- **Context-aware**: Consider the user's current location in the site

### Examples of Good vs. Poor Labels

#### ✅ Good Examples
```json
{
  "logoAriaLabel": "Acme Corporation - Return to homepage",
  "navigationAriaLabel": "Main site navigation",
  "socialLinksAriaLabel": "Connect with us on social media",
  "contactInfoAriaLabel": "Company contact information and office locations"
}
```

#### ❌ Poor Examples
```json
{
  "logoAriaLabel": "Logo",
  "navigationAriaLabel": "Nav",
  "socialLinksAriaLabel": "Social",
  "contactInfoAriaLabel": "Contact"
}
```

### Skip Links

The header requires a `skipToContentHref` property that should point to the main content:

```typescript
// Recommended skip link targets
skipToContentHref: "#main-content"     // Points to <main id="main-content">
skipToContentHref: "#content"          // Points to <div id="content">
skipToContentHref: ".main-content"     // Points to first element with class
```

## Localization Support

All accessibility labels support full internationalization:

```json
// messages/en.json
"accessibility": {
  "logoAriaLabel": "Acme Corp - Go to homepage"
}

// messages/es.json  
"accessibility": {
  "logoAriaLabel": "Acme Corp - Ir a la página principal"
}

// messages/fr.json
"accessibility": {
  "logoAriaLabel": "Acme Corp - Aller à la page d'accueil"
}
```

## Implementation Details

### Factory Functions

The configuration factory functions automatically include accessibility properties:

```typescript
const headerConfigFactory = (getKey) => ({
  // ... other config properties
  accessibility: {
    skipToContentHref: "#main-content",
    logoAriaLabel: getKey('accessibility.logoAriaLabel', { 
      defaultValue: 'Go to homepage' 
    }),
    mobileMenuAriaLabel: getKey('accessibility.mobileMenuAriaLabel', { 
      defaultValue: 'Toggle mobile menu' 
    }),
    navigationAriaLabel: getKey('accessibility.navigationAriaLabel', { 
      defaultValue: 'Main navigation' 
    })
  }
});
```

### Default Values

All accessibility properties include sensible default values to ensure the application works even if translations are missing:

```typescript
// Header defaults
logoAriaLabel: 'Go to homepage'
mobileMenuAriaLabel: 'Toggle mobile menu' 
navigationAriaLabel: 'Main navigation'

// Footer defaults  
footerAriaLabel: 'Website footer'
socialLinksAriaLabel: 'Social media links'
legalLinksAriaLabel: 'Legal information'
```

## Testing Accessibility

### Manual Testing

1. **Screen Reader Testing**: Test with NVDA, JAWS, or VoiceOver
2. **Keyboard Navigation**: Ensure all elements are keyboard accessible
3. **Skip Links**: Verify skip links work and are visible when focused

### Automated Testing

The schemas help catch accessibility issues at build time:

```bash
# Build will fail if required accessibility properties are missing
npm run build

# Example error output:
# Invalid header configuration: Logo aria label is required for accessibility compliance
```

### Validation Commands

```typescript
// Check configuration validity
import { getConfigCacheStats } from '@/lib/config-resolver';

// Will throw if accessibility properties are missing
const headerConfig = await getResolvedHeaderConfig('en');
const footerConfig = await getResolvedFooterConfig('en');
```

## WCAG 2.1 Compliance

This accessibility implementation supports:

- **1.3.1 Info and Relationships**: Proper landmark roles and labels
- **2.4.1 Bypass Blocks**: Skip to content functionality
- **2.4.4 Link Purpose**: Descriptive link and button labels
- **2.4.6 Headings and Labels**: Clear, descriptive labels
- **4.1.2 Name, Role, Value**: Proper ARIA labeling

## Migration Notes

### Existing Configurations

Existing configurations will continue to work with default values, but for full compliance, update your translation files to include the new accessibility properties.

### Gradual Migration

1. **Phase 1**: Update translation files with accessibility properties
2. **Phase 2**: Test with screen readers and keyboard navigation
3. **Phase 3**: Refine labels based on user testing feedback

This comprehensive accessibility system ensures your application provides an excellent experience for all users, including those using assistive technologies.
