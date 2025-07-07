# Next.js Template - Production Ready

This is a **production-ready Next.js template** with centralized configuration, modern TypeScript, and enterprise-grade components.

## 🚀 Key Features

- **Centralized Header & Footer**: Configure all content from single config files
- **TypeScript First**: Full type safety with comprehensive interfaces
- **Accessibility Ready**: WCAG 2.1 AA compliant components
- **Responsive Design**: Mobile-first with smooth animations
- **Dark Mode Support**: Complete theming system
- **Production Tested**: Zero build errors, lint-clean codebase

## ⚡ Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📋 Configuration Guide

### Header Configuration
Edit `src/lib/header-config.ts` to customize:
- Logo (text or image)
- Navigation menu with dropdowns
- Action buttons (Sign In, Get Started, etc.)
- Appearance and mobile behavior
- Accessibility settings

### Footer Configuration  
Edit `src/lib/footer-config.ts` to customize:
- Contact information
- Social media links
- Footer sections and links
- Appearance and layout

**📖 Complete Documentation:**
- **[Documentation Index](./docs/README.md)** - **Start here!** Complete documentation glossary
- **[Getting Started Guide](./docs/guides/getting-started.md)** - 5-minute customization guide
- **[Component Library](./docs/components/overview.md)** - Complete component reference
- **[Configuration Guide](./docs/configuration/header.md)** - Header and footer setup
- **[Architecture Overview](./docs/architecture/overview.md)** - Technical patterns and design

## ⚡ Performance & SEO

- **Optimized Bundle**: Minimal JavaScript for fast loading
- **SEO Ready**: Proper meta tags and semantic HTML
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Progressive Enhancement**: Works without JavaScript

## 🛠 Development

```bash
npm run dev    # Start development server
npm run build  # Create production build  
npm run start  # Start production server
npm run lint   # Run ESLint checks
```

```bash
npm run dev    # Start development server
npm run build  # Create production build  
npm run start  # Start production server
npm run lint   # Run ESLint checks
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── components/
│   │   └── layout/
│   │       ├── Header.tsx        # Header component
│   │       ├── HeaderClient.tsx  # Client wrapper
│   │       ├── Footer.tsx        # Footer component  
│   │       └── FooterClient.tsx  # Client wrapper
│   └── [locale]/                 # Internationalized routes
├── lib/
│   ├── header-config.ts          # 🎯 Header configuration
│   └── footer-config.ts          # 🎯 Footer configuration
└── styles/
    └── globals.css               # Global styles
```

## 🎨 Customization

This template is designed for easy customization:

1. **Colors & Themes**: Edit Tailwind config and CSS variables
2. **Content**: Update header/footer config files
3. **Components**: Extend existing components or add new ones
4. **Internationalization**: Add new locales in `messages/`

## 📈 Production Ready

- ✅ **Zero build errors** - Passes all production checks
- ✅ **TypeScript strict mode** - Full type safety
- ✅ **ESLint clean** - No warnings or errors
- ✅ **Accessibility tested** - WCAG 2.1 AA compliant
- ✅ **Performance optimized** - Minimal bundle size

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🎯 Quick Reference

### Common Tasks

**Change the logo:**
```typescript
// In src/lib/header-config.ts
logo: {
  text: "Your Company",
  href: "/",
}
```

**Add a navigation item:**
```typescript
// In src/lib/header-config.ts  
navigation: [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }, // ← Add this
]
```

**Update contact info:**
```typescript
// In src/lib/footer-config.ts
contact: {
  address: "Your Address",
  phone: "+1 (555) 123-4567",
  email: "hello@yourcompany.com",
}
```

**Change footer links:**
```typescript
// In src/lib/footer-config.ts
legalLinks: [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
]
```

## 🌍 Internationalization

Built-in support for multiple languages:
- Configure locales in `next.config.ts`
- Add translations in `messages/` directory
- Automatic locale detection and routing
