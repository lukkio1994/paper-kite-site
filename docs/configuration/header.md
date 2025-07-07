# Header Configuration Guide

This project uses a **centralized configuration system** for all header content and appearance. Everything is managed from a single file: `src/lib/header-config.ts`.

## 🎯 Quick Start (AI Friendly)

**To configure the header, edit `src/lib/header-config.ts`:**
- Logo: Edit the `logo` object (text or image)
- Navigation: Edit the `navigation` array with menu items and dropdowns
- Actions: Edit the `actions` array for buttons (Sign In, Get Started, etc.)
- Appearance: Edit the `appearance` object for styling and behavior
- Mobile: Configure mobile menu behavior
- Accessibility: Set ARIA labels and skip links

## 📋 Configuration Overview

| Section | Type | Description | Example |
|---------|------|-------------|---------|
| **Logo** | Object | Text or image logo with link | `{ text: "My App", href: "/" }` |
| **Navigation** | Array | Menu items with optional dropdowns | `[{ label: "Features", href: "/features", subItems: [...] }]` |
| **Actions** | Array | Header buttons (CTA, Sign In, etc.) | `[{ label: "Get Started", href: "/signup", variant: "primary" }]` |
| **Appearance** | Object | Visual styling and behavior | `{ variant: "default", sticky: true, showBorder: true }` |
| **Mobile** | Object | Mobile menu configuration | `{ showLogo: true, menuPosition: "right" }` |
| **Accessibility** | Object | ARIA labels and skip links | `{ logoAriaLabel: "Go to homepage" }` |

## 🔧 Detailed Configuration

### Logo Configuration

```typescript
logo: {
  text: "Your App Name",           // Display text (alternative to image)
  image: {                         // OR use an image logo
    src: "/logo.svg",
    alt: "Your App Logo",
    width: 120,
    height: 40
  },
  href: "/",                       // Where logo links to
  className: "custom-logo-styles"  // Optional custom CSS classes
}
```

### Navigation Configuration

```typescript
navigation: [
  // Simple link
  {
    label: "Home",
    href: "/"
  },
  
  // Dropdown menu
  {
    label: "Products",
    href: "/products",
    subItems: [
      {
        label: "Web Development",
        href: "/products/web",
        description: "Custom web applications",
        icon: WebIcon                // Optional icon component
      },
      {
        label: "Mobile Apps", 
        href: "/products/mobile",
        description: "iOS and Android apps"
      }
    ]
  },
  
  // External link
  {
    label: "Documentation",
    href: "https://docs.example.com",
    external: true,
    icon: ExternalLinkIcon
  }
]
```

### Action Buttons Configuration

```typescript
actions: [
  {
    label: "Sign In",
    href: "/signin",
    variant: "ghost"               // ghost, outline, secondary
  },
  {
    label: "Get Started",
    href: "/signup", 
    variant: "primary",            // primary, secondary, outline, ghost
    icon: ArrowRightIcon           // Optional icon
  },
  {
    label: "Download",
    onClick: () => downloadApp(),  // Custom click handler
    variant: "outline",
    disabled: false                // Enable/disable button
  }
]
```

### Appearance Configuration

```typescript
appearance: {
  variant: "default",              // default, transparent, solid, elevated, minimal
  background: "default",           // default, subtle, dark, glass, gradient
  sticky: true,                    // Stick to top on scroll
  showBorder: true,                // Show bottom border
  height: "default",               // compact, default, comfortable, spacious
  mobileMenuBreakpoint: "md",      // sm, md, lg, xl - when to show mobile menu
  navigationAlignment: "left",     // left, center, right
  className: ""                    // Custom CSS classes
}
```

### Mobile Configuration

```typescript
mobile: {
  showLogo: true,                  // Show logo in mobile menu
  showActions: true,               // Show action buttons in mobile menu
  menuPosition: "right",           // left, right, center
  overlayBackground: "blur"        // blur, solid, dark
}
```

### Accessibility Configuration

```typescript
accessibility: {
  skipToContentHref: "#main-content",           // Skip link target
  logoAriaLabel: "Go to homepage",              // Logo accessibility label
  mobileMenuAriaLabel: "Toggle navigation",    // Mobile menu button label
  navigationAriaLabel: "Main navigation",      // Navigation landmark label
  mainLandmarkLabel: "Main content",           // Main content landmark
  searchFormLabel: "Site search",              // Search form label (if applicable)
  languageSwitcherLabel: "Choose language"     // Language switcher label
}
```

## 🎨 Styling and Theming

The header automatically adapts to your theme configuration:

- **Light Mode**: Uses light background with dark text
- **Dark Mode**: Uses dark background with light text  
- **Custom Themes**: Inherits from your CSS custom properties

### Custom Styling

Add custom styles through the `className` properties:

```typescript
appearance: {
  className: "custom-header-class"
}

logo: {
  className: "custom-logo-class"
}
```

## 🌐 Internationalization

The header supports multiple languages through the translation system:

```typescript
// In your locale files (messages/en.json, messages/es.json, etc.)
{
  "config": {
    "header": {
      "navigation": {
        "home": "Home",
        "about": "About",
        "contact": "Contact"
      }
    }
  }
}
```

Navigation labels will automatically use translations when available.

## 📱 Responsive Behavior

The header automatically adapts to different screen sizes:

- **Desktop**: Full navigation with dropdowns
- **Tablet**: Condensed navigation, mobile menu at configured breakpoint
- **Mobile**: Hamburger menu with slide-in animation

### Mobile Menu Features

- Smooth slide-in animation
- Blur or solid background overlay
- Touch-friendly navigation
- Action buttons integration
- Accessible keyboard navigation

## ♿ Accessibility Features

The header is fully WCAG 2.1 AA compliant with:

- **Skip Links**: Direct navigation to main content
- **ARIA Labels**: Descriptive labels for all interactive elements
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper semantic structure and landmarks
- **Focus Management**: Visible focus indicators and logical tab order

## 🚀 Performance

The header is optimized for performance:

- **Tree Shaking**: Only used components are included in bundle
- **Lazy Loading**: Dropdown content loads only when needed
- **Memoization**: Prevents unnecessary re-renders
- **Optimized Images**: Automatic image optimization for logos

## 🧪 Testing

Test your header configuration:

```typescript
// Example test
import { render, screen } from '@testing-library/react';
import { HeaderClient } from '@/components/layout';

test('renders navigation items', () => {
  render(<HeaderClient />);
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('Products')).toBeInTheDocument();
});
```

## 🔄 Dynamic Configuration

For runtime configuration updates, use the Dynamic Header component:

```typescript
import { DynamicHeader } from '@/components/layout';

<DynamicHeader
  enableDynamicConfig={true}
  pollingInterval={30000}  // Check for updates every 30 seconds
  onConfigLoad={(config) => console.log('Header config updated')}
/>
```

See the [Dynamic Configuration Guide](./dynamic.md) for detailed information.

## 💡 Tips and Best Practices

1. **Keep navigation simple**: Limit top-level items to 5-7 for best UX
2. **Use descriptive labels**: Make navigation self-explanatory
3. **Test on mobile**: Always verify mobile menu functionality
4. **Accessibility first**: Use proper ARIA labels and semantic HTML
5. **Performance matters**: Optimize images and limit dropdown content
6. **Consistent branding**: Ensure logo and styling match your brand

## 🐛 Troubleshooting

**Navigation not showing?**
- Check that navigation array has items
- Verify TypeScript types are correct
- Check for console errors

**Mobile menu not working?**
- Verify mobileMenuBreakpoint setting
- Check that mobile.showLogo and mobile.showActions are configured
- Test on actual mobile device, not just browser resize

**Styling issues?**
- Check theme configuration in `src/styles/palette.css`
- Verify custom className values
- Use browser dev tools to inspect CSS

**Accessibility warnings?**
- Ensure all ARIA labels are set in accessibility config
- Verify skipToContentHref points to valid element
- Test with screen reader or accessibility tools
