# 🎨 Color Palette System Guide

> **AI & Junior Developer Friendly Guide** - Complete reference for implementing consistent colors across your Next.js application using our custom Tailwind v4 palette system.

## 📚 Table of Contents

1. [Quick Start](#-quick-start)
2. [Color Theory & Best Practices](#-color-theory--best-practices)
3. [Palette Architecture](#-palette-architecture)
4. [Implementation Guide](#-implementation-guide)
5. [Common Patterns](#-common-patterns)
6. [Troubleshooting](#-troubleshooting)
7. [Maintenance & Testing](#-maintenance--testing)

---

## 🚀 Quick Start

### TL;DR - Copy & Paste Ready Classes

```tsx
// ✅ Common UI Elements - Ready to Use
<div className="bg-background text-foreground">Page Background</div>
<div className="bg-surface border border-border">Card/Panel</div>
<button className="bg-primary text-white">Primary CTA</button>
<button className="bg-secondary text-white">Secondary Action</button>
<p className="text-muted">Helper text</p>
<div className="bg-success text-white">Success message</div>
<div className="bg-error text-white">Error message</div>
```

### 30-Second Setup Check
Your palette is working if you can see all colors in `src/app/[locale]/page.tsx` - this is your living color demo page.

---

## 🎯 Color Theory & Best Practices

### Why Consistent Colors Matter

| Benefit | Impact |
|---------|---------|
| **Brand Recognition** | Users instantly recognize your app |
| **Accessibility** | High contrast ensures everyone can use your app |
| **User Experience** | Consistent colors reduce cognitive load |
| **Development Speed** | Predefined colors eliminate decision fatigue |

### The Golden Rules

#### ✅ DO's
- **Use semantic colors**: `bg-success` for success states, not `bg-green-500`
- **Test in both themes**: Every color should work in light AND dark mode
- **Follow accessibility**: Ensure 4.5:1 contrast ratio minimum
- **Keep it simple**: Limit accent colors to 2-3 maximum

#### ❌ DON'T's
- **Never hardcode colors**: Avoid `bg-blue-500`, use `bg-primary` instead
- **Don't mix systems**: Stick to palette classes, avoid mixing with Tailwind defaults
- **Avoid color for color's sake**: Every color should have a purpose
- **Don't skip dark mode**: Always test your colors in both themes

---

## 🏗️ Palette Architecture

### Color Categories & When to Use Each

#### 🎨 Brand Colors
```tsx
// Primary - Your main brand color
<button className="bg-primary hover:bg-primary-light active:bg-primary-dark">
  Primary CTA
</button>

// Secondary - Supporting brand color
<button className="bg-secondary hover:bg-secondary-light">
  Secondary Action
</button>

// Accent - Highlight and emphasis
<span className="bg-accent text-white px-2 py-1 rounded">New!</span>
```

#### 🎯 Functional Colors
```tsx
// Success - Positive outcomes
<div className="bg-success text-white p-4 rounded">
  ✅ Payment successful!
</div>

// Info - Neutral information
<div className="bg-info text-white p-4 rounded">
  ℹ️ Update available
</div>

// Warning - Caution needed
<div className="bg-warn text-white p-4 rounded">
  ⚠️ Storage almost full
</div>

// Error - Problems and failures
<div className="bg-error text-white p-4 rounded">
  ❌ Connection failed
</div>
```

#### 🏠 Structural Colors
```tsx
// Background - Page backgrounds
<main className="bg-background min-h-screen">

// Surface - Cards, panels, modals
<div className="bg-surface border border-border rounded-lg p-6">

// Overlay - Modal backgrounds, dropdowns
<div className="bg-overlay bg-opacity-75 fixed inset-0">

// Text colors
<h1 className="text-foreground">Main heading</h1>
<p className="text-muted">Secondary text</p>

// Borders and dividers
<hr className="border-border" />
```

### Complete Color Reference Table

| Class | Usage | Example Component |
|-------|-------|-------------------|
| `bg-primary` | Main CTAs, key actions | Submit buttons, nav highlights |
| `bg-primary-light` | Hover states for primary | Button hover effects |
| `bg-primary-dark` | Active/pressed states | Button active states |
| `bg-secondary` | Secondary actions | Cancel buttons, tabs |
| `bg-accent` | Highlights, badges | New labels, featured items |
| `bg-success` | Success states | Confirmation messages |
| `bg-info` | Information | Help tooltips, notifications |
| `bg-warn` | Warnings | Alert messages |
| `bg-error` | Errors, destructive actions | Error messages, delete buttons |
| `bg-background` | Page backgrounds | Body, main containers |
| `bg-surface` | Elevated surfaces | Cards, modals, sidebars |
| `bg-overlay` | Semi-transparent overlays | Modal backdrops |
| `text-foreground` | Primary text | Headings, body text |
| `text-muted` | Secondary text | Captions, helper text |
| `border-border` | Borders and dividers | Card borders, separators |

---

## � Implementation Guide

### Basic Component Examples

#### Button Components
```tsx
// Primary button
<button className="bg-primary hover:bg-primary-light active:bg-primary-dark text-white font-semibold py-2 px-4 rounded transition-colors">
  Primary Action
</button>

// Secondary button
<button className="bg-surface hover:bg-primary hover:text-white border border-border text-foreground font-semibold py-2 px-4 rounded transition-colors">
  Secondary Action
</button>

// Destructive button
<button className="bg-error hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors">
  Delete Item
</button>
```

#### Card Components
```tsx
// Basic card
<div className="bg-surface border border-border rounded-lg shadow-sm p-6">
  <h2 className="text-foreground font-bold mb-2">Card Title</h2>
  <p className="text-muted">Card description text</p>
</div>

// Interactive card
<div className="bg-surface hover:bg-primary hover:text-white border border-border rounded-lg shadow-sm p-6 transition-colors cursor-pointer">
  <h2 className="font-bold mb-2">Interactive Card</h2>
  <p className="opacity-75">Click me!</p>
</div>
```

#### Alert/Notification Components
```tsx
// Success alert
<div className="bg-success text-white p-4 rounded-lg flex items-center gap-3">
  <span>✅</span>
  <span>Success! Your changes have been saved.</span>
</div>

// Error alert
<div className="bg-error text-white p-4 rounded-lg flex items-center gap-3">
  <span>❌</span>
  <span>Error! Please check your input and try again.</span>
</div>

// Info alert
<div className="bg-info text-white p-4 rounded-lg flex items-center gap-3">
  <span>ℹ️</span>
  <span>Info: New features are available in settings.</span>
</div>
```

### Advanced Patterns

#### Gradients with Palette Colors
```tsx
// Subtle gradient background
<div className="bg-gradient-to-br from-primary to-accent text-white p-8 rounded-lg">
  <h1>Hero Section</h1>
</div>

// Surface to background gradient
<div className="bg-gradient-to-b from-surface to-background min-h-screen">
  Content here
</div>
```

#### State Management with Colors
```tsx
// Dynamic state colors
const getStatusColor = (status: string) => {
  switch (status) {
    case 'success': return 'bg-success'
    case 'error': return 'bg-error'
    case 'warning': return 'bg-warn'
    case 'info': return 'bg-info'
    default: return 'bg-surface'
  }
}

<div className={`${getStatusColor(status)} text-white p-3 rounded`}>
  {message}
</div>
```

---

## 🎪 Common Patterns

### Navigation & Headers
```tsx
// Header with palette
<header className="bg-surface border-b border-border sticky top-0">
  <nav className="bg-background px-6 py-4">
    <div className="text-primary font-bold text-xl">Logo</div>
    <div className="text-foreground hover:text-primary">Menu Item</div>
  </nav>
</header>
```

### Forms & Inputs
```tsx
// Form styling
<form className="bg-surface border border-border rounded-lg p-6 space-y-4">
  <div>
    <label className="text-foreground font-medium">Email</label>
    <input 
      className="bg-background border border-border text-foreground rounded px-3 py-2 w-full focus:border-primary" 
      type="email" 
    />
  </div>
  <button className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded w-full">
    Submit
  </button>
</form>
```

### Data Display
```tsx
// Table with alternating rows
<table className="w-full">
  <thead className="bg-surface">
    <tr>
      <th className="text-foreground p-3 text-left">Name</th>
      <th className="text-foreground p-3 text-left">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr className="bg-background border-b border-border">
      <td className="text-foreground p-3">John Doe</td>
      <td className="p-3">
        <span className="bg-success text-white px-2 py-1 rounded text-sm">Active</span>
      </td>
    </tr>
  </tbody>
</table>
```

---

## ⚠️ Surface-Specific Text Colors & Contrast

### Critical Guidance for Dark Surfaces

When working with dark backgrounds (especially in footers), text color selection is crucial for accessibility and visibility:

#### ✅ Recommended Text Colors for Dark Surfaces
```tsx
// Dark footer with proper contrast
<footer className="bg-surface"> {/* Dark background */}
  <h3 className="text-primary-light">Section Title</h3>      {/* High contrast */}
  <a className="text-primary hover:text-primary-light">Link</a> {/* Visible, accessible */}
  <p className="text-foreground">Body text</p>              {/* Good contrast */}
</footer>
```

#### ❌ Common Contrast Issues We Fixed
```tsx
// AVOID: These combinations had visibility issues
<footer className="bg-surface">
  <a className="text-primary">Link</a>           {/* Too dark on dark background */}
  <p className="text-muted">Text</p>             {/* Poor contrast */}
  <span className="text-primary-dark">Dark</span> {/* Nearly invisible */}
</footer>
```

#### 🔍 Footer-Specific Patterns (Tested & Working)
```tsx
// ✅ Footer with excellent accessibility
<footer className="bg-surface text-foreground">
  {/* Section headings */}
  <h3 className="text-primary-light font-semibold">Company</h3>
  
  {/* Navigation links */}
  <a className="text-primary hover:text-primary-light transition-colors">
    About Us
  </a>
  
  {/* Copyright and legal text */}
  <p className="text-foreground">© 2025 Company. All rights reserved.</p>
  
  {/* Social media icons */}
  <a className="text-primary hover:text-primary-light group">
    <IconComponent className="w-5 h-5 transition-transform group-hover:scale-110" />
  </a>
</footer>
```

### Quick Contrast Testing
1. **Light Mode**: Check if text is readable against light backgrounds
2. **Dark Mode**: Verify dark surface text is bright enough
3. **Hover States**: Ensure hover colors maintain good contrast
4. **Focus States**: Test keyboard navigation visibility

### Color Opacity Guidelines
- **High contrast needed**: Use base colors (`text-primary`, `text-foreground`)
- **Medium contrast**: Use light variants (`text-primary-light`)
- **Low contrast acceptable**: Use muted for less important text (`text-muted`)

---

## 🛠️ Troubleshooting

### Common Issues & Solutions

#### ❓ "My colors look different in dark mode"
**Solution**: Ensure you're using palette classes, not Tailwind defaults. Test in both themes.

```tsx
// ❌ Wrong - will look bad in dark mode
<div className="bg-gray-100 text-gray-900">

// ✅ Correct - automatically adapts
<div className="bg-surface text-foreground">
```

#### ❓ "Text is hard to read"
**Solution**: Check contrast ratios and use appropriate text colors.

```tsx
// ❌ Poor contrast
<div className="bg-primary text-primary">

// ✅ Good contrast
<div className="bg-primary text-white">
<div className="bg-surface text-foreground">
```

#### ❓ "Colors don't match my design"
**Solution**: Customize the palette in `src/styles/palette.css`, don't override with inline styles.

#### ❓ "Hover states don't work"
**Solution**: Use the provided light/dark variants and add transitions.

```tsx
// ✅ Proper hover state
<button className="bg-primary hover:bg-primary-light transition-colors">
```

#### ❓ "Footer links are invisible or hard to see"
**Solution**: Dark surfaces need lighter text colors for proper contrast.

```tsx
// ❌ Poor visibility on dark footer
<footer className="bg-surface">
  <a className="text-primary">Link</a>        {/* Too dark */}
  <p className="text-muted">Copyright</p>     {/* Poor contrast */}
</footer>

// ✅ Excellent visibility and accessibility
<footer className="bg-surface">
  <a className="text-primary-light hover:text-primary">Link</a>  {/* High contrast */}
  <p className="text-foreground">Copyright</p>                   {/* Good contrast */}
</footer>
```

#### ❓ "Social media icons not showing"
**Solution**: Check platform name spelling and ensure icon mapping exists.

```tsx
// ✅ Supported platforms (case-sensitive)
socialLinks: [
  { platform: "Twitter", href: "..." },      // ✅ Correct
  { platform: "LinkedIn", href: "..." },     // ✅ Correct
  { platform: "GitHub", href: "..." },       // ✅ Correct
  { platform: "Discord", href: "..." },      // ✅ Correct
  // { platform: "twitter", href: "..." },   // ❌ Wrong case
]
```

### Debug Checklist

1. ✅ Are you using semantic palette classes (`bg-primary` not `bg-blue-500`)?
2. ✅ Have you tested in both light and dark modes?
3. ✅ Are you using proper text colors for contrast?
4. ✅ Have you added transitions for smooth interactions?
5. ✅ Is your palette properly configured in `palette.css`?
6. ✅ For footers: Are links visible against dark backgrounds?
7. ✅ For social icons: Are platform names spelled exactly right?

---

## 🧪 Maintenance & Testing

### Visual Testing

Your live color demo is at `src/app/[locale]/page.tsx` - this shows all palette colors in action. Use this to:

- ✅ Verify colors load correctly
- ✅ Test dark/light mode switching
- ✅ Check contrast and readability
- ✅ Validate new palette changes

### Accessibility Testing

```bash
# Install accessibility testing tools
npm install --save-dev @axe-core/react

# Use online contrast checkers
# WebAIM: https://webaim.org/resources/contrastchecker/
# Colour Contrast Analyser: https://www.tpgi.com/color-contrast-checker/
```

### Code Quality

```bash
# Search for hardcoded colors (should return minimal results)
grep -r "bg-\(red\|blue\|green\|yellow\|purple\|pink\|indigo\)-" src/

# Search for our palette usage (should return many results)
grep -r "bg-\(primary\|secondary\|success\|error\)" src/
```

### Expanding the Palette

When adding new colors:

1. **Update `src/styles/palette.css`** with new CSS variables
2. **Add to this documentation** with examples
3. **Test in both themes** thoroughly
4. **Update the demo page** to show the new colors
5. **Verify accessibility** with contrast checkers

---

## 🤖 AI Assistant Instructions

When styling components in this project:

1. **Always use the semantic color classes**: `bg-background`, `text-foreground`, `bg-primary`, etc.
2. **Never use hardcoded colors**: Avoid `bg-blue-500`, `text-gray-600`, etc.
3. **No dark mode prefixes needed**: Just use `bg-background`, not `bg-white dark:bg-gray-900`
4. **For buttons**: Use `bg-primary` for main actions, `bg-secondary` for secondary actions
5. **For text**: Use `text-foreground` for main text, `text-muted` for secondary text
6. **For borders**: Use `border-border` for subtle lines, `border-primary` for emphasis

### Reference Implementation

Below is your working **reference implementation** demonstrating the palette in context:

```tsx
import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center space-y-8 p-8">

      {/* Header */}
      <div className="bg-surface border border-border rounded-xl shadow-lg p-8 max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold text-primary mb-4">{t('title')}</h1>
        <p className="text-muted text-lg mb-6">
          🎉 Tailwind CSS v4 + Expanded Palette Demo
        </p>

        {/* Color Test Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-primary text-white p-4 rounded-lg text-center">Primary</div>
          <div className="bg-primary-light text-white p-4 rounded-lg text-center">Primary Light</div>
          <div className="bg-primary-dark text-white p-4 rounded-lg text-center">Primary Dark</div>
          <div className="bg-secondary text-white p-4 rounded-lg text-center">Secondary</div>
          <div className="bg-accent text-white p-4 rounded-lg text-center">Accent</div>
          <div className="bg-success text-white p-4 rounded-lg text-center">Success</div>
          <div className="bg-info text-white p-4 rounded-lg text-center">Info</div>
          <div className="bg-warn text-white p-4 rounded-lg text-center">Warn</div>
          <div className="bg-error text-white p-4 rounded-lg text-center">Error</div>
          <div className="bg-background text-foreground border border-border p-4 rounded-lg text-center">Background</div>
          <div className="bg-surface text-foreground border border-border p-4 rounded-lg text-center">Surface</div>
          <div className="bg-overlay text-white p-4 rounded-lg text-center">Overlay</div>
          <div className="bg-muted text-white p-4 rounded-lg text-center">Muted</div>
          <div className="bg-border text-foreground p-4 rounded-lg text-center">Border</div>
        </div>
      </div>

      <div className="text-center text-muted text-sm max-w-md">
        If you can see all the colors above, your Tailwind + expanded palette + dark mode setup is working perfectly!
      </div>
    </div>
  );
}
```

---

## 📋 Summary Checklist

### For Every New Component:
- [ ] Use semantic palette classes only
- [ ] Test in light AND dark mode
- [ ] Verify text contrast meets accessibility standards
- [ ] Add hover/focus/active states with transitions
- [ ] Document any new color patterns discovered

### For Palette Changes:
- [ ] Update `palette.css` with new variables
- [ ] Test across the entire application
- [ ] Update this documentation
- [ ] Verify accessibility compliance
- [ ] Update the demo page

### For Team Onboarding:
- [ ] Share this guide with new developers
- [ ] Point them to the live demo page
- [ ] Review common patterns together
- [ ] Emphasize semantic over literal color usage

---

> **💡 Pro Tip**: Bookmark the demo page (`/[locale]/page.tsx`) as your color reference - it's always up-to-date and shows exactly how your palette looks in the current theme!

