# Accessibility Properties Quick Reference

## Header Accessibility Properties (Required)

| Property | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `skipToContentHref` | `string` | Link to main content area | `"#main-content"` |
| `logoAriaLabel` | `string` | Logo accessibility description | `"My App - Go to homepage"` |
| `mobileMenuAriaLabel` | `string` | Mobile menu button description | `"Toggle main navigation menu"` |
| `navigationAriaLabel` | `string` | Navigation landmark description | `"Main navigation"` |

## Header Accessibility Properties (Optional)

| Property | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `mainLandmarkLabel` | `string?` | Main content area description | `"Main content area"` |
| `searchFormLabel` | `string?` | Search form accessibility label | `"Search our website"` |
| `languageSwitcherLabel` | `string?` | Language switcher description | `"Change language"` |

## Footer Accessibility Properties (Required)

| Property | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `footerAriaLabel` | `string` | Footer landmark description | `"Website footer with company information"` |
| `socialLinksAriaLabel` | `string` | Social media links description | `"Follow us on social media"` |
| `legalLinksAriaLabel` | `string` | Legal links section description | `"Legal information and policies"` |
| `productLinksAriaLabel` | `string` | Product links section description | `"Product information and features"` |
| `contactInfoAriaLabel` | `string` | Contact information description | `"Contact information and office details"` |

## Footer Accessibility Properties (Optional)

| Property | Type | Description | Example Value |
|----------|------|-------------|---------------|
| `backToTopAriaLabel` | `string?` | Back to top button description | `"Return to top of page"` |
| `copyrightAriaLabel` | `string?` | Copyright notice description | `"Copyright and legal notice"` |

## Translation Key Structure

### Header Keys
```
config.header.accessibility.logoAriaLabel
config.header.accessibility.mobileMenuAriaLabel
config.header.accessibility.navigationAriaLabel
config.header.accessibility.mainLandmarkLabel
config.header.accessibility.searchFormLabel
config.header.accessibility.languageSwitcherLabel
```

### Footer Keys
```
config.footer.accessibility.footerAriaLabel
config.footer.accessibility.socialLinksAriaLabel
config.footer.accessibility.legalLinksAriaLabel
config.footer.accessibility.productLinksAriaLabel
config.footer.accessibility.contactInfoAriaLabel
config.footer.accessibility.backToTopAriaLabel
config.footer.accessibility.copyrightAriaLabel
```

## Validation Errors

The Zod schemas will throw descriptive errors if required properties are missing:

- `"Logo aria label is required for accessibility compliance"`
- `"Footer aria label is required for accessibility compliance"`
- `"Social links aria label is required for accessibility compliance"`
- `"Navigation aria label is required for accessibility compliance"`

## WCAG 2.1 Compliance Coverage

✅ **1.3.1 Info and Relationships** - Proper landmark roles and labels  
✅ **2.4.1 Bypass Blocks** - Skip to content functionality  
✅ **2.4.4 Link Purpose** - Descriptive link and button labels  
✅ **2.4.6 Headings and Labels** - Clear, descriptive labels  
✅ **4.1.2 Name, Role, Value** - Proper ARIA labeling
