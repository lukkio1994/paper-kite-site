# Quick Reference: Configuration Structure

## HeaderConfig Quick Reference

| Section | Keys | Purpose |
|---------|------|---------|
| `logo` | `text`, `href`, `className` | Site branding and logo |
| `navigation[]` | `label`, `href`, `subItems[]` | Main navigation menu |
| `actions[]` | `label`, `href`, `variant`, `size` | Action buttons (Sign In, Get Started) |
| `appearance` | `variant`, `background`, `sticky`, `showBorder`, etc. | Visual styling and behavior |
| `mobile` | `showLogo`, `showActions`, `menuPosition`, `overlayBackground` | Mobile-specific settings |
| `accessibility` | `skipToContentHref`, `logoAriaLabel`, etc. | Screen reader and accessibility |

## FooterConfig Quick Reference

| Section | Keys | Purpose |
|---------|------|---------|
| `contact` | `address`, `phone`, `email` | Business contact information |
| `socialLinks[]` | `platform`, `href` | Social media links |
| `legalLinks[]` | `label`, `href` | Legal pages (Privacy, Terms) |
| `productLinks[]` | `label`, `href` | Product-related links |
| `*Links[]` | Various empty arrays | Future link sections |
| `appearance` | `variant`, `background`, `showBackToTop`, etc. | Visual styling and behavior |
| `copyright` | String | Copyright notice |

## Translation Namespace Structure

```
config.header.*     → Header configuration
config.footer.*     → Footer configuration
HomePage.*          → Home page content
AboutPage.*         → About page content
_meta.*            → Configuration metadata
```

## Key Functions

| Function | Purpose | Returns |
|----------|---------|---------|
| `useResolvedHeaderConfig()` | Get header config (client) | `ResolvedHeaderConfig` |
| `useResolvedFooterConfig()` | Get footer config (client) | `ResolvedFooterConfig` |
| `createHeaderConfig(t)` | Factory for header config | `ResolvedHeaderConfig` |
| `createFooterConfig(t)` | Factory for footer config | `ResolvedFooterConfig` |

## Validation Features

- ✅ Zod runtime validation
- ✅ TypeScript compile-time checking  
- ✅ Default value fallbacks
- ✅ Error logging and throwing
- ✅ Performance optimization with useMemo

See `CONFIG_DOCUMENTATION.md` for complete details.
