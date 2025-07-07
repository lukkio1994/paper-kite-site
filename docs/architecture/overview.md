# Architecture Guide

## Component Patterns and Design Decisions

### Header Component Architecture

#### Centralized Configuration System

The Header component uses a **centralized configuration approach** for all content, appearance, and behavior settings. This ensures consistency, maintainability, and easy customization.

**Implementation Pattern**: All header data is managed from `src/lib/header-config.ts`, with a client wrapper (`HeaderClient.tsx`) that injects the configuration into the header component.

#### Component Structure

```tsx
// Configuration-driven approach
import { Header } from '@/components/layout/Header';
import config from '@/lib/header-config';

<Header
  logo={config.logo}
  navigation={config.navigation}
  actions={config.actions}
  appearance={config.appearance}
  mobile={config.mobile}
  accessibility={config.accessibility}
/>
```

#### Benefits

1. **Single Source of Truth**: All header content managed from one file
2. **Type Safety**: Comprehensive TypeScript interfaces with IntelliSense
3. **AI/Junior Friendly**: Easy configuration without touching component code
4. **Production Ready**: Full accessibility, responsive design, and performance optimizations
5. **Maintainable**: Clean separation between configuration and implementation

#### Key Features

- **Multi-level Navigation**: Dropdown menus with descriptions and icons
- **Responsive Mobile Menu**: Slide-in animation with blur overlay
- **Action Buttons**: Multiple variants (primary, ghost, outline, secondary)
- **Dark Mode**: Consistent theming with smooth transitions
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Performance**: Optimized re-renders and efficient event handling

### Footer Component Architecture

#### Flat Composition for Next.js App Router Compatibility

The Footer component uses **flat composition** instead of compound component patterns to ensure full compatibility with Next.js App Router and Server Components.

**Migration Reason**: Compound component patterns (like `Footer.Section`) do not work reliably when the parent component is a Client Component in Server Components context. This can lead to runtime errors where React cannot resolve the nested component references.

#### Implementation

Instead of compound components:
```tsx
// ❌ Compound pattern (can cause issues in App Router)
<Footer>
  <Footer.Section title="Product">
    <Footer.Link href="/features">Features</Footer.Link>
  </Footer.Section>
</Footer>
```

We use flat composition:
```tsx
// ✅ Flat composition (App Router compatible)
import { Footer, FooterSection, FooterLink } from '@/components/layout/Footer';

<Footer>
  <FooterSection title="Product">
    <FooterLink href="/features">Features</FooterLink>
  </FooterSection>
</Footer>
```

#### Benefits

1. **Server Component Compatible**: Works seamlessly with Next.js App Router
2. **Clear Dependencies**: Explicit imports make component relationships obvious
3. **Tree Shaking**: Better bundling optimization with direct imports
4. **Type Safety**: Full TypeScript support without complex type gymnastics
5. **Debugging**: Easier to debug with direct component references

#### Component Exports

```tsx
// Clean, flat exports
export { Footer };           // Main footer container
export { Section as FooterSection }; // Footer section with title
export { FooterLink };       // Individual footer links
```

This architecture preserves a clean, scalable design while avoiding runtime errors and ensuring compatibility with modern React patterns.

### Design System Integration

Both Header and Footer components follow the design system principles:

- **Consistent Spacing**: Uses design tokens for margins, padding, and gaps
- **Typography Scale**: Follows the established font size and weight hierarchy  
- **Color Palette**: Respects light/dark mode themes and semantic color usage
- **Theme System**: Critical theme detection script prevents hydration mismatches (see [`THEME_SCRIPT_GUIDE.md`](./THEME_SCRIPT_GUIDE.md))
- **Responsive Breakpoints**: Uses standard breakpoint system for mobile-first design
- **Component Consistency**: Shared patterns between header and footer implementations

#### Header Design Optimizations

- **Professional Variants**: Multiple appearance options (default, elevated, transparent, minimal)
- **Smooth Animations**: 200ms transitions for all interactive elements
- **Focus Management**: Proper keyboard navigation and focus indicators
- **Mobile-First**: Collapsible navigation with touch-friendly interactions

#### Footer Design Optimizations

- **Optimized Proportions**: Balanced vertical rhythm with `py-8` main padding and `py-4` bottom bar
- **Professional Backgrounds**: Subtle transparency effects (`bg-gray-50/50`) for gentle visual separation
- **Compact Spacing**: Reduced section gaps and link spacing for cleaner look
- **Typography Hierarchy**: Smaller section titles (`text-xs`) with proper contrast

### Centralized Configuration Pattern

Both components use the same configuration-driven architecture:

```
src/lib/
├── header-config.ts    # All header content and settings
└── footer-config.ts    # All footer content and settings

src/app/components/layout/
├── Header.tsx          # Header component implementation  
├── HeaderClient.tsx    # Client wrapper for header config
├── Footer.tsx          # Footer component implementation
└── FooterClient.tsx    # Client wrapper for footer config
```

This pattern provides:
- **Consistency**: Same approach for all layout components
- **Maintainability**: Configuration separated from implementation
- **Flexibility**: Easy to extend or modify without breaking changes
- **Developer Experience**: Clear file structure and responsibilities

### Accessibility Standards

All layout components adhere to WCAG 2.1 AA standards:

#### Header Accessibility
- **Semantic HTML**: Proper use of header, nav, button elements
- **ARIA Attributes**: Comprehensive labeling for dropdowns, mobile menu, and actions
- **Keyboard Navigation**: Full keyboard accessibility with escape key handling
- **Screen Reader Support**: Skip-to-content links and descriptive labels
- **Focus Management**: Visible focus indicators and logical tab order

#### Footer Accessibility  
- **Semantic HTML**: Proper use of footer, nav, section elements
- **ARIA Attributes**: Appropriate labels and roles for screen readers
- **Keyboard Navigation**: Full keyboard accessibility with visible focus indicators
- **Color Contrast**: Meets minimum contrast ratios for all text elements

### Performance Considerations

Both components are optimized for production:

#### Header Performance
- **Client Components**: Strategic use of 'use client' only where needed
- **Event Optimization**: Efficient dropdown and mobile menu handling
- **Re-render Prevention**: Proper useCallback and useState patterns
- **Bundle Optimization**: Tree-shakeable exports and minimal dependencies

#### Footer Performance
- **Code Splitting**: Components designed for optimal bundle splitting
- **Render Optimization**: Minimal re-renders through proper prop design
- **Asset Optimization**: SVG icons and optimized images throughout
- **Client Components**: Only components that need interactivity use 'use client'
