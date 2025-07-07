# Layout Components Guide

This guide covers all layout components including headers, footers, containers, and specialized layout patterns.

## Components Overview

### Container
The foundation layout component providing consistent responsive spacing and max-widths.

**Usage:**
```tsx
import { Container } from '@/components/layout';

<Container size="lg" className="py-8">
  <h1>Your content here</h1>
</Container>
```

**Props:**
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full' - Controls max-width
- `padding`: 'none' | 'sm' | 'md' | 'lg' - Horizontal padding
- `className`: string - Additional CSS classes

**Size Reference:**
- `sm`: max-width 640px
- `md`: max-width 768px (default)
- `lg`: max-width 1024px  
- `xl`: max-width 1280px
- `full`: Full width with padding

### Header
Professional header component with navigation, branding, and actions.

**Usage:**
```tsx
import { Header } from '@/components/layout';

<Header
  logo={{ text: "My App", href: "/" }}
  navigation={navigationItems}
  actions={actionButtons}
  appearance={{ sticky: true, showBorder: true }}
  mobile={{ showLogo: true, menuPosition: "right" }}
/>
```

**Key Features:**
- Multi-level dropdown navigation
- Responsive mobile menu with animations
- Action buttons (CTA, Sign In, etc.)
- Dark mode support
- Full accessibility compliance
- Configurable appearance and behavior

**Configuration:**
See [Header Configuration Guide](../configuration/header.md) for complete setup details.

### DynamicHeader
Enhanced header with runtime configuration updates.

**Usage:**
```tsx
import { DynamicHeader } from '@/components/layout';

<DynamicHeader
  enableDynamicConfig={true}
  pollingInterval={30000}
  onConfigLoad={(config) => console.log('Header updated')}
  initialConfig={fallbackConfig}
/>
```

**Features:**
- Fetches configuration from API at runtime
- Optional polling for real-time updates
- Graceful fallback to initial configuration
- Loading states and error handling
- Type-safe configuration merging

### Footer
Comprehensive footer with contact info, links, and social media.

**Usage:**
```tsx
import { Footer, FooterSection, FooterLink } from '@/components/layout';

<Footer
  variant="detailed"
  background="default"
  showBackToTop={true}
  socialLinks={socialMediaLinks}
  contact={contactInfo}
>
  <FooterSection title="Products">
    <FooterLink href="/features">Features</FooterLink>
    <FooterLink href="/pricing">Pricing</FooterLink>
  </FooterSection>
</Footer>
```

**Key Features:**
- Flexible section-based organization
- Contact information display
- Social media integration with icons
- Back-to-top functionality
- Responsive multi-column layout
- Copyright and legal links

### DynamicFooter
Footer with runtime configuration capabilities.

**Usage:**
```tsx
import { DynamicFooter } from '@/components/layout';

<DynamicFooter
  enableDynamicConfig={true}
  initialConfig={fallbackFooterConfig}
  pollingInterval={60000}
/>
```

Similar to DynamicHeader but for footer configuration management.

## Specialized Containers

### HeaderContainer
Pre-configured container for header content.

```tsx
import { HeaderContainer } from '@/components/layout';

<HeaderContainer>
  <nav>Navigation content</nav>
</HeaderContainer>
```

### MainContainer
Container for main page content with semantic HTML.

```tsx
import { MainContainer } from '@/components/layout';

<MainContainer>
  <h1>Page Title</h1>
  <p>Main content</p>
</MainContainer>
```

### SectionContainer
Container for page sections with optional backgrounds.

```tsx
import { SectionContainer } from '@/components/layout';

<SectionContainer background="subtle" spacing="lg">
  <h2>Section Title</h2>
  <p>Section content</p>
</SectionContainer>
```

### FooterContainer
Pre-configured container for footer content.

```tsx
import { FooterContainer } from '@/components/layout';

<FooterContainer>
  <div>Footer content</div>
</FooterContainer>
```

### CardContainer
Container optimized for card layouts and grids.

```tsx
import { CardContainer } from '@/components/layout';

<CardContainer columns={{ sm: 1, md: 2, lg: 3 }}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</CardContainer>
```

## Layout Patterns

### Standard Page Layout

```tsx
import { DynamicHeader, DynamicFooter, Container } from '@/components/layout';

export default function StandardPage() {
  return (
    <>
      <DynamicHeader enableDynamicConfig={true} />
      
      <main>
        <Container size="lg" className="py-8">
          <h1>Page Content</h1>
          {/* Your content */}
        </Container>
      </main>
      
      <DynamicFooter enableDynamicConfig={true} />
    </>
  );
}
```

### Landing Page Layout

```tsx
import { DynamicHeader, DynamicFooter, SectionContainer } from '@/components/layout';

export default function LandingPage() {
  return (
    <>
      <DynamicHeader />
      
      {/* Hero Section */}
      <SectionContainer background="gradient" spacing="xl">
        <h1>Hero Title</h1>
        <p>Hero subtitle</p>
      </SectionContainer>
      
      {/* Features Section */}
      <SectionContainer spacing="lg">
        <h2>Features</h2>
        {/* Feature content */}
      </SectionContainer>
      
      <DynamicFooter />
    </>
  );
}
```

### Dashboard Layout

```tsx
import { Header, Container } from '@/components/layout';

export default function Dashboard() {
  return (
    <>
      <Header 
        navigation={dashboardNav}
        actions={userActions}
        appearance={{ variant: "solid", sticky: true }}
      />
      
      <div className="flex">
        <aside className="w-64 bg-surface border-r">
          {/* Sidebar */}
        </aside>
        
        <main className="flex-1">
          <Container size="full" className="py-6">
            {/* Dashboard content */}
          </Container>
        </main>
      </div>
    </>
  );
}
```

## Responsive Behavior

### Container Responsiveness

All layout components automatically adapt to screen size:

- **Mobile**: Single column, full width with padding
- **Tablet**: Adjusted spacing and max-widths
- **Desktop**: Multi-column layouts with appropriate max-widths

### Header Responsiveness

- **Desktop**: Full navigation with dropdowns
- **Mobile**: Hamburger menu with slide-in animation
- **Configurable breakpoint**: Set when mobile menu appears

### Footer Responsiveness

- **Desktop**: Multi-column link organization
- **Tablet**: 2-3 columns with adjusted spacing
- **Mobile**: Single column with collapsible sections

## Accessibility Features

### Semantic HTML

All layout components use proper semantic HTML:

```tsx
<header role="banner">
  <nav aria-label="Main navigation">
    {/* Navigation */}
  </nav>
</header>

<main role="main" id="main-content">
  {/* Main content */}
</main>

<footer role="contentinfo">
  {/* Footer content */}
</footer>
```

### Skip Links

Headers automatically include skip links for keyboard navigation:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

### ARIA Labels

All interactive elements include proper ARIA labels:

```tsx
<button 
  aria-label="Toggle mobile menu"
  aria-expanded={isMenuOpen}
  aria-controls="mobile-menu"
>
  <MenuIcon />
</button>
```

## Performance Optimization

### Code Splitting

Layout components are optimized for tree-shaking:

```tsx
// Import only what you need
import { Container } from '@/components/layout';
// vs importing everything
import * from '@/components/layout'; // Don't do this
```

### Image Optimization

Headers and footers automatically optimize images:

```tsx
// Automatic Next.js Image optimization
logo: {
  image: {
    src: "/logo.svg",
    alt: "Company Logo",
    width: 120,
    height: 40
  }
}
```

### Lazy Loading

Non-critical layout elements can be lazy loaded:

```tsx
import dynamic from 'next/dynamic';

const DynamicFooter = dynamic(() => import('@/components/layout').then(mod => mod.DynamicFooter));
```

## Testing Layout Components

### Component Testing

```tsx
import { render, screen } from '@testing-library/react';
import { Header } from '@/components/layout';

test('renders navigation items', () => {
  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ];
  
  render(<Header navigation={navigation} />);
  
  expect(screen.getByText('Home')).toBeInTheDocument();
  expect(screen.getByText('About')).toBeInTheDocument();
});
```

### Layout Testing

```tsx
test('container provides proper responsive classes', () => {
  render(<Container size="lg">Content</Container>);
  
  const container = screen.getByText('Content').parentElement;
  expect(container).toHaveClass('max-w-4xl');
  expect(container).toHaveClass('mx-auto');
});
```

## Best Practices

### Layout Hierarchy

1. **Use semantic HTML**: header, main, footer, nav, section
2. **Consistent spacing**: Use Container and specialized containers
3. **Responsive design**: Test on all device sizes
4. **Accessibility**: Include skip links and proper ARIA labels

### Performance

1. **Tree shaking**: Import only needed components
2. **Image optimization**: Use Next.js Image component
3. **Lazy loading**: For non-critical content
4. **Bundle analysis**: Monitor component bundle sizes

### Maintenance

1. **Configuration driven**: Use config files instead of hardcoding
2. **Dynamic updates**: Consider DynamicHeader/Footer for admin interfaces
3. **Testing**: Include layout in your testing strategy
4. **Documentation**: Keep component documentation updated
