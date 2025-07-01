# Paper Kite Games Website

A modern, responsive website built with Next.js 15, TypeScript, and Tailwind CSS v4.

## 🚀 Project Overview

This is the official website for Paper Kite Games, an indie game development studio. The site showcases our games, company information, and provides contact capabilities.

## 📁 Project Structure

```
paper-kite-site/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/              # About page
│   │   │   └── page.tsx
│   │   ├── games/              # Games showcase page
│   │   │   └── page.tsx
│   │   ├── contact/            # Contact form page
│   │   │   └── page.tsx
│   │   ├── layout.tsx          # Root layout with Header/Footer
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles with Tailwind
│   └── components/             # Reusable React components
│       ├── Header.tsx          # Navigation header
│       └── Footer.tsx          # Site footer
├── public/                     # Static assets
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.mjs          # PostCSS configuration
└── package.json               # Dependencies and scripts
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono
- **Development**: Hot reload, ESLint

## 🎨 Design Features

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Hamburger menu for mobile navigation

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- High contrast ratios

### Dark Mode Support
- Automatic dark/light mode detection
- Consistent theming across all pages
- Tailwind CSS dark: variants

## 📄 Pages

### Home (`/`)
- Hero section with company branding
- Feature highlights
- Latest game showcase (Aera)
- Call-to-action buttons

### About (`/about`)
- Company mission and values
- Team member profiles
- Company history and culture
- Community engagement

### Games (`/games`)
- Featured game showcase (Aera)
- Development progress tracking
- Newsletter subscription

### Contact (`/contact`)
- Contact form with validation
- Company contact information
- Business hours
- FAQ section

## 🧩 Components

### Header Component
- Responsive navigation bar
- Active page highlighting
- Mobile hamburger menu
- Company logo and branding

### Footer Component
- Copyright information
- Social media links
- Additional navigation links
- Business information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Development
The development server runs on `http://localhost:3000`

## 🎯 Key Features

- ✅ **Tailwind CSS v4** - Latest version with modern syntax
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Dark Mode** - Automatic theme detection
- ✅ **TypeScript** - Full type safety
- ✅ **Accessibility** - WCAG compliant
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Performance** - Next.js App Router optimization

## 📱 Pages Created

1. **Home Page** (`/`) - Hero, features, game showcase
2. **About Page** (`/about`) - Mission, team, values
3. **Games Page** (`/games`) - Aera showcase, development progress
4. **Contact Page** (`/contact`) - Form, info, FAQ

## 🧩 Components Created

1. **Header** - Navigation with mobile menu
2. **Footer** - Copyright and social links

## 🔧 Configuration

- ✅ Tailwind CSS v4 with `@tailwindcss/postcss`
- ✅ PostCSS configuration
- ✅ TypeScript strict mode
- ✅ ESLint configuration
- ✅ Next.js App Router

---

© 2025 Paper Kite Games. All rights reserved.
