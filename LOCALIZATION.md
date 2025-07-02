# 🌐 Internationalization (i18n) Documentation

## Overview

This project now implements industry-standard internationalization using `next-intl` with fallback behavior, centralized locale management, and clean architecture following modern best practices.

## ✅ Implementation Features

### 🎯 **Centralized Locale Management**
- **File**: `src/lib/i18n.ts`
- **Benefits**: No magic strings, TypeScript type safety, single source of truth
- **Constants**: `LOCALES`, `DEFAULT_LOCALE`, `Locale` type
- **Validation**: `isValidLocale()` helper function

### 🛡️ **Fallback Behavior**
- **Primary**: Loads requested locale translations
- **Secondary**: Falls back to English (`en`) if locale translation missing
- **Graceful**: Site never breaks due to missing translations
- **Console**: Warning logs when fallback occurs

### 🗂️ **Translation File Organization**
- **Location**: `/messages` directory
- **Format**: One JSON file per locale (`en.json`, `fr.json`, etc.)
- **Structure**: Nested objects for logical grouping
- **Current**: English (`en.json`) with complete translations

### 🔧 **Middleware Integration**
- **File**: `src/middleware.ts`
- **Features**: Automatic locale detection, URL routing, prefix handling
- **Strategy**: `as-needed` (default locale has no prefix)
- **Exclusions**: API routes, static files, Next.js internals

### 📱 **App Router Compatible**
- **Structure**: Pages under `[locale]` directory
- **Server Components**: Full support with `getTranslations`
- **Client Components**: `useTranslations` hook available
- **Metadata**: Localized page titles and descriptions

## 🚀 Usage Examples

### **Server Components** (Recommended)
```tsx
import { getTranslations } from 'next-intl/server';

export default async function HomePage() {
  const t = await getTranslations('home');
  
  return <h1>{t('title')}</h1>;
}
```

### **Client Components**
```tsx
'use client';
import { useTranslations } from 'next-intl';

export default function Navigation() {
  const t = useTranslations('navigation');
  
  return <nav>{t('home')}</nav>;
}
```

### **Metadata Generation**
```tsx
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('about');
  
  return {
    title: t('pageTitle'),
    description: t('pageDescription'),
  };
}
```

## 📂 File Structure

```
src/
├── lib/
│   └── i18n.ts                    # Locale constants & configuration
├── middleware.ts                  # Locale detection & routing
├── app/
│   ├── layout.tsx                 # Root layout (minimal)
│   ├── page.tsx                   # Root redirect to default locale
│   └── [locale]/
│       ├── layout.tsx             # Localized layout with providers
│       ├── page.tsx               # Homepage with translations
│       ├── about/page.tsx         # About page with translations
│       ├── games/page.tsx         # Games page with translations
│       └── contact/page.tsx       # Contact page with translations
├── components/
│   └── Header.tsx                 # Navigation with translation support
└── messages/
    └── en.json                    # English translations
```

## 🌍 Adding New Locales

### 1. **Update Locale Constants**
```typescript
// src/lib/i18n.ts
export const LOCALES = ['en', 'fr', 'es'] as const;
```

### 2. **Create Translation File**
```json
// messages/fr.json
{
  "navigation": {
    "home": "Accueil",
    "about": "À propos",
    "games": "Jeux",
    "contact": "Contact"
  },
  // ... rest of translations
}
```

### 3. **Test the Implementation**
- Navigate to `/fr` to test French translations
- Verify fallback behavior when translations are missing

## 🔍 Translation Key Structure

```json
{
  "common": {
    "companyName": "Paper Kite Games",
    "siteTagline": "Creating simple, joyful gaming experiences"
  },
  "navigation": {
    "home": "Home",
    "about": "About",
    "games": "Games",
    "contact": "Contact"
  },
  "home": {
    "heroTagline": "Creating simple, joyful gaming experiences",
    "missionStatement": "We believe games have the power...",
    "features": {
      "innovation": {
        "title": "Innovative Gameplay",
        "description": "We push the boundaries..."
      }
    }
  }
}
```

## ⚡ Performance Features

- **Static Generation**: Pages pre-rendered for each locale
- **Code Splitting**: Translation files loaded only when needed
- **Tree Shaking**: Unused translations removed in production
- **Caching**: Translation files cached by Next.js

## 🛠️ Development Workflow

### **Adding New Translation Keys**
1. Add key to `messages/en.json`
2. Use in component with `t('newKey')`
3. Test with fallback behavior
4. Add to other locale files as needed

### **Testing Localization**
```bash
# Start development server
npm run dev

# Test URLs:
# http://localhost:3000     → redirects to /en
# http://localhost:3000/en  → English version
# http://localhost:3000/fr  → French version (when added)
```

### **Build Verification**
```bash
npm run build  # Verify all locales compile correctly
```

## 🔧 Configuration Files

### **next.config.ts**
```typescript
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');
const nextConfig: NextConfig = { /* config */ };

export default withNextIntl(nextConfig);
```

### **middleware.ts**
```typescript
import createMiddleware from 'next-intl/middleware';
import { LOCALES, DEFAULT_LOCALE } from './lib/i18n';

export default createMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  localePrefix: 'as-needed'
});
```

## 🎯 Best Practices Implemented

✅ **Centralized Constants**: No magic strings, single source of truth  
✅ **Type Safety**: Full TypeScript support for locales and translations  
✅ **Fallback Behavior**: Graceful degradation when translations missing  
✅ **Performance**: Static generation with locale support  
✅ **SEO Friendly**: Proper HTML lang attributes and localized metadata  
✅ **Accessibility**: ARIA labels and semantic structure maintained  
✅ **Developer Experience**: Clear structure, helpful comments, easy to extend  

## 🚨 Important Notes

- **Middleware Required**: The `src/middleware.ts` file is essential for routing
- **Translation Keys**: Use nested objects for logical grouping
- **Fallback Safety**: Always provide English translations as fallback
- **Performance**: Avoid `useTranslations` in server components (use `getTranslations`)
- **Testing**: Test both existing and missing translation keys

This implementation provides a solid foundation for international expansion while maintaining clean, maintainable code and excellent developer experience.
