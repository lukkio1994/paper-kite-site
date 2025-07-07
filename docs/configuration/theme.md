# Theme & Styling Configuration Guide

This guide covers the complete theming system including dark mode, colors, and styling customization.

## 🎨 Theme System Overview

The template includes a comprehensive theming system with:
- **Light/Dark Mode**: Automatic system detection with manual toggle
- **Custom Color Palette**: Semantic color system with CSS custom properties
- **Tailwind Integration**: Direct integration with Tailwind CSS utilities
- **Theme Persistence**: Remembers user preference across sessions

## 🌓 Dark Mode Configuration

### Theme Toggle Component

The theme toggle is automatically included in both header and footer:

```tsx
import { ThemeToggle } from '@/components/utils';

// Already included in DynamicHeader and DynamicFooter
<ThemeToggle />
```

### Theme Detection Script

The theme system uses a critical inline script to prevent flash of unstyled content (FOUC):

```tsx
// In src/app/layout.tsx - DO NOT REMOVE suppressHydrationWarning
<html 
  lang={locale} 
  className="scroll-smooth" 
  suppressHydrationWarning={true}
>
```

**Critical Requirements:**
- The `suppressHydrationWarning={true}` attribute is **REQUIRED**
- Theme script must be the first script in `<head>`
- Script runs synchronously before React hydration

### Theme Script Maintenance

The theme script exists in two locations:
1. **`/public/theme-script.js`** - Reference copy with documentation
2. **`src/app/layout.tsx`** - Inline working version

**To modify the theme script:**
1. Edit `/public/theme-script.js` first
2. Copy changes to the inline script in `layout.tsx`
3. Keep both versions synchronized

## 🎨 Color Palette Configuration

### Palette File Location

All colors are defined in `src/styles/palette.css`:

```css
:root {
  /* Light mode colors */
  --color-cstm-background: #f9fafb;
  --color-cstm-surface: #ffffff;
  --color-cstm-primary: #3b82f6;
  /* ... more colors */
}

[data-theme="dark"] {
  /* Dark mode colors */
  --color-cstm-background: #0f172a;
  --color-cstm-surface: #1e293b;
  --color-cstm-primary: #60a5fa;
  /* ... more colors */
}
```

### Color System Structure

#### Base Colors
```css
--color-cstm-background: /* Page background */
--color-cstm-surface:    /* Cards, containers */
--color-cstm-foreground: /* Main text */
--color-cstm-muted:      /* Secondary text */
--color-cstm-border:     /* Borders, dividers */
```

#### Functional Colors
```css
--color-cstm-primary:    /* Brand primary */
--color-cstm-secondary:  /* Brand secondary */
--color-cstm-accent:     /* Accent/highlight */
--color-cstm-success:    /* Success states */
--color-cstm-warn:       /* Warning states */
--color-cstm-error:      /* Error states */
```

### Tailwind Integration

Colors are automatically available as Tailwind utilities:

```tsx
<div className="bg-background text-foreground border border-border">
  <button className="bg-primary text-white hover:bg-primary-light">
    Click me
  </button>
</div>
```

### Customizing Colors

1. **Edit Light Mode Colors** in `:root` selector
2. **Edit Dark Mode Colors** in `[data-theme="dark"]` selector
3. **Maintain Contrast**: Ensure proper color contrast for accessibility

```css
:root {
  /* Brand Colors - Customize these */
  --color-cstm-primary: #your-brand-color;
  --color-cstm-secondary: #your-secondary-color;
}

[data-theme="dark"] {
  /* Darker version for dark mode */
  --color-cstm-primary: #lighter-version-of-brand;
}
```

## 🔧 Advanced Styling

### Container System

The container system provides consistent spacing and responsive behavior:

```tsx
import { Container } from '@/components/layout';

// Basic container
<Container>
  <h1>Content with responsive padding</h1>
</Container>

// Large container
<Container size="lg">
  <h1>Wider content area</h1>
</Container>

// Full width container
<Container size="full" className="bg-surface">
  <h1>Full width with background</h1>
</Container>
```

**Container Sizes:**
- `sm`: Max width 640px
- `md`: Max width 768px (default)
- `lg`: Max width 1024px
- `xl`: Max width 1280px
- `full`: Full width with padding

### Custom CSS Classes

Add custom styles in `src/styles/globals.css`:

```css
/* Custom component styles */
.my-custom-component {
  @apply bg-surface border border-border rounded-lg p-6;
}

/* Custom animations */
.fade-in {
  @apply transition-opacity duration-300 ease-in-out;
}

/* Dark mode specific styles */
[data-theme="dark"] .special-dark-style {
  @apply bg-surface/50 backdrop-blur;
}
```

## 🎯 Component Styling

### UI Component Variants

Most UI components support theming through variants:

```tsx
import { Button, Card, Badge } from '@/components/ui';

// Button variants
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Subtle Action</Button>

// Card variants with theming
<Card variant="elevated" className="dark:bg-surface/90">
  Content
</Card>

// Semantic badges
<Badge variant="success">Active</Badge>
<Badge variant="warn">Pending</Badge>
<Badge variant="error">Error</Badge>
```

### Layout Component Theming

Header and footer automatically adapt to theme:

```tsx
// Header appearance options
appearance: {
  variant: "default",        // default, transparent, solid, elevated
  background: "default",     // default, subtle, dark, glass, gradient
  sticky: true,
  showBorder: true
}

// Footer appearance options  
appearance: {
  variant: "detailed",       // minimal, default, detailed, enterprise
  background: "default",     // default, subtle, dark, gradient
  showBackToTop: true,
  showDividers: true
}
```

## 🌐 Responsive Design

### Breakpoint System

The template uses Tailwind's responsive breakpoints:

```css
/* Default (mobile first) */
.class-name { /* styles */ }

/* Small devices (640px and up) */
@media (min-width: 640px) {
  .sm:class-name { /* styles */ }
}

/* Medium devices (768px and up) */
@media (min-width: 768px) {
  .md:class-name { /* styles */ }
}

/* Large devices (1024px and up) */
@media (min-width: 1024px) {
  .lg:class-name { /* styles */ }
}
```

### Responsive Utilities

```tsx
<div className="
  p-4 md:p-6 lg:p-8
  text-sm md:text-base lg:text-lg
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  Responsive content
</div>
```

## ♿ Accessibility in Theming

### Color Contrast

Ensure proper contrast ratios:
- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text**: 3:1 minimum contrast ratio
- **Interactive elements**: Clear focus indicators

### Focus Indicators

```css
/* Custom focus styles */
.focus-visible:focus {
  @apply outline-none ring-2 ring-primary ring-offset-2 ring-offset-background;
}

/* Dark mode focus adjustments */
[data-theme="dark"] .focus-visible:focus {
  @apply ring-offset-surface;
}
```

### Reduced Motion

Respect user motion preferences:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🧪 Testing Themes

### Manual Testing

1. **Toggle between themes** using the theme toggle
2. **Test all components** in both light and dark modes
3. **Check contrast** using browser dev tools
4. **Verify persistence** by refreshing the page

### Automated Testing

```typescript
// Test theme persistence
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

test('theme persists across sessions', () => {
  // Set dark theme
  localStorage.setItem('theme', 'dark');
  
  render(<App />);
  
  expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
});
```

## 💡 Best Practices

1. **Consistent Colors**: Use semantic color tokens, not hardcoded values
2. **Test Both Themes**: Always verify components work in light and dark modes
3. **Accessibility First**: Maintain proper contrast ratios
4. **Performance**: Avoid unnecessary theme calculations
5. **Documentation**: Document custom color additions

## 🐛 Troubleshooting

**Theme not switching?**
- Check if `suppressHydrationWarning={true}` is on `<html>`
- Verify theme script is the first script in `<head>`
- Check browser console for JavaScript errors

**Colors not updating?**
- Verify color variables are properly defined in `palette.css`
- Check Tailwind configuration includes custom colors
- Ensure CSS custom properties follow naming convention

**Flash of unstyled content (FOUC)?**
- Theme script must run before React hydration
- Check script placement in `<head>`
- Verify `suppressHydrationWarning` attribute

**Theme not persisting?**
- Check localStorage is available and working
- Verify theme script localStorage logic
- Test in different browsers and devices
