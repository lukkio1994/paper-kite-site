# Layout Components Guide

This guide covers layout components that provide structure and consistency to your application.

## Components Overview

### Container
A flexible, responsive container component for consistent content layout.

**Usage:**
```tsx
import { Container } from '@/app/components/layout';

// Basic container
<Container size="xl" spacing="comfortable">
  <h1>Your content here</h1>
</Container>

// With custom background
<Container 
  size="lg" 
  spacing="cozy" 
  background="subtle"
  as="section"
>
  <p>Content with subtle background</p>
</Container>
```

**Props:**
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'full' | 'fluid'
- `spacing`: 'none' | 'compact' | 'cozy' | 'comfortable' | 'spacious' | 'loose'
- `background`: 'none' | 'subtle' | 'muted' | 'elevated' | 'inset' | 'tinted'
- `as`: ElementType - HTML element to render as
- `center`: boolean - Center content horizontally

**Size Guide:**
- `xs` (320px) - Mobile widgets, alerts
- `sm` (384px) - Small cards, forms
- `md` (448px) - Modal content, narrow articles
- `lg` (512px) - Standard forms, content blocks
- `xl` (576px) - Default, most content areas
- `2xl` (672px) - Wide content, dashboards
- `3xl` (768px) - Large articles, landing sections
- `4xl` (896px) - Hero sections, featured content
- `5xl` (1024px) - Wide layouts, galleries
- `6xl` (1152px) - Extra wide content
- `7xl` (1280px) - Maximum width layouts
- `full` - Full width with padding
- `fluid` - No max width, responsive padding

**Best Practices:**
- Use `xl` for most content areas (it's the default)
- Choose spacing based on content density
- Use `as` prop for semantic HTML (section, article, main)
- Use backgrounds to create visual hierarchy

### Header
Professional header component with navigation and branding.

**Usage:**
```tsx
import { Header } from '@/app/components/layout';

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    href: "/services", 
    label: "Services",
    subItems: [
      { href: "/services/web", label: "Web Development" },
      { href: "/services/mobile", label: "Mobile Apps" }
    ]
  }
];

<Header
  logo={<img src="/logo.svg" alt="Company Logo" />}
  navItems={navItems}
  actions={
    <div className="flex gap-2">
      <Button variant="ghost">Login</Button>
      <Button variant="primary">Sign Up</Button>
    </div>
  }
  variant="elevated"
  sticky={true}
/>
```

**Props:**
- `logo`: React.ReactNode - Logo or brand element
- `navItems`: NavItem[] - Navigation items array
- `actions`: React.ReactNode - Right-side actions (buttons, etc.)
- `variant`: 'default' | 'transparent' | 'solid' | 'elevated'
- `sticky`: boolean - Sticky positioning
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

**NavItem:**
- `href`: string - Link destination
- `label`: string - Display text
- `subItems`: NavItem[] - Sub-navigation items (optional)

**Best Practices:**
- Keep navigation items concise and well-organized
- Use sticky headers for better UX
- Provide clear visual hierarchy in navigation
- Test responsive behavior on all screen sizes

### Footer
Professional footer component with links and company information.

**Usage:**
```tsx
import { Footer } from '@/app/components/layout';

const footerSections = [
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" }
    ]
  },
  {
    title: "Support",
    links: [
      { href: "/help", label: "Help Center" },
      { href: "/docs", label: "Documentation" },
      { href: "/status", label: "Status" }
    ]
  }
];

<Footer
  logo={<img src="/logo.svg" alt="Company" />}
  sections={footerSections}
  socialLinks={[
    { href: "https://twitter.com", icon: <TwitterIcon />, label: "Twitter" },
    { href: "https://github.com", icon: <GitHubIcon />, label: "GitHub" }
  ]}
  copyright="© 2024 Your Company. All rights reserved."
  variant="default"
/>
```

**Props:**
- `logo`: React.ReactNode - Footer logo
- `sections`: FooterSection[] - Link sections
- `socialLinks`: SocialLink[] - Social media links
- `copyright`: string - Copyright text
- `variant`: 'default' | 'minimal' | 'rich'
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'

**FooterSection:**
- `title`: string - Section heading
- `links`: Array of { href: string, label: string }

**SocialLink:**
- `href`: string - Social media URL
- `icon`: React.ReactNode - Social icon
- `label`: string - Accessibility label

### SpecializedContainers
Pre-configured containers for common layouts.

**Usage:**
```tsx
import { 
  HeroContainer, 
  ContentContainer, 
  SidebarContainer,
  DashboardContainer 
} from '@/app/components/layout';

// Hero section
<HeroContainer>
  <h1>Welcome to Our Site</h1>
  <p>Beautiful hero content</p>
</HeroContainer>

// Main content area
<ContentContainer>
  <article>Your article content</article>
</ContentContainer>

// Sidebar layout
<SidebarContainer
  sidebar={<nav>Navigation</nav>}
  sidebarPosition="left"
>
  <main>Main content</main>
</SidebarContainer>

// Dashboard layout
<DashboardContainer
  header={<DashboardHeader />}
  sidebar={<DashboardSidebar />}
>
  <DashboardContent />
</DashboardContainer>
```

**Components:**
- `HeroContainer`: Large hero sections with centered content
- `ContentContainer`: Standard content areas with optimal reading width
- `SidebarContainer`: Two-column layout with sidebar
- `DashboardContainer`: Complete dashboard layout structure

## Layout Patterns

### Basic Page Layout
```tsx
function Page() {
  return (
    <>
      <Header 
        logo={<Logo />}
        navItems={navItems}
        actions={<UserMenu />}
      />
      
      <main>
        <HeroContainer>
          <h1>Page Title</h1>
        </HeroContainer>
        
        <ContentContainer>
          <p>Your content here</p>
        </ContentContainer>
      </main>
      
      <Footer 
        sections={footerSections}
        copyright="© 2024 Company"
      />
    </>
  );
}
```

### Dashboard Layout
```tsx
function Dashboard() {
  return (
    <DashboardContainer
      header={
        <Header 
          logo={<Logo />}
          actions={<UserActions />}
          variant="solid"
        />
      }
      sidebar={
        <nav>
          <NavItem href="/dashboard">Overview</NavItem>
          <NavItem href="/analytics">Analytics</NavItem>
        </nav>
      }
    >
      <Container size="full" spacing="comfortable">
        <h1>Dashboard Content</h1>
      </Container>
    </DashboardContainer>
  );
}
```

### Content with Sidebar
```tsx
function BlogPost() {
  return (
    <SidebarContainer
      sidebar={
        <aside>
          <h3>Related Posts</h3>
          <nav>
            <Link href="/post1">Post 1</Link>
            <Link href="/post2">Post 2</Link>
          </nav>
        </aside>
      }
      sidebarPosition="right"
    >
      <ContentContainer>
        <article>
          <h1>Blog Post Title</h1>
          <p>Post content...</p>
        </article>
      </ContentContainer>
    </SidebarContainer>
  );
}
```

## Responsive Behavior

### Container Breakpoints
- **Mobile (< 640px)**: Containers use full width with padding
- **Tablet (640px - 1024px)**: Containers scale fluidly
- **Desktop (> 1024px)**: Containers reach max-width with centering

### Header Behavior
- **Desktop**: Full navigation visible
- **Tablet**: Condensed navigation
- **Mobile**: Hamburger menu with slide-over

### Sidebar Layouts
- **Desktop**: Side-by-side layout
- **Tablet**: Sidebar toggles on/off
- **Mobile**: Sidebar becomes overlay

## Best Practices

### Container Usage
- Use semantic HTML elements with the `as` prop
- Choose appropriate sizes for content type
- Maintain consistent spacing throughout your app
- Test on multiple screen sizes

### Header Guidelines
- Keep navigation items to 5-7 main items
- Use sub-navigation for complex hierarchies
- Ensure logo is clickable and returns to home
- Provide clear active states

### Footer Standards
- Include essential links and contact information
- Use consistent link grouping
- Add social media links when appropriate
- Include accessibility information

### Performance Tips
- Use appropriate container sizes to avoid unnecessary width
- Optimize images in headers and footers
- Consider lazy loading for footer content
- Use semantic HTML for better SEO

## Troubleshooting

### Common Issues

**Container not centering:**
```tsx
// ❌ Wrong
<Container>Content</Container>

// ✅ Correct
<Container center>Content</Container>
```

**Header overlapping content:**
```tsx
// ❌ Wrong - no spacing for sticky header
<Header sticky />
<main>Content</main>

// ✅ Correct - add top padding/margin
<Header sticky />
<main className="pt-16">Content</main>
```

**Sidebar not responsive:**
```tsx
// ✅ Use the responsive SidebarContainer
<SidebarContainer
  sidebar={<Sidebar />}
  sidebarPosition="left"
>
  <Content />
</SidebarContainer>
```

### Accessibility Checklist
- [ ] Headers have proper heading hierarchy (h1, h2, etc.)
- [ ] Navigation has aria-labels
- [ ] Skip links are provided for keyboard users
- [ ] Color contrast meets WCAG guidelines
- [ ] Focus indicators are visible

## Examples for Junior Developers

### Your First Layout
```tsx
// Start with this simple layout
import { Container, Header, Footer } from '@/app/components/layout';

function MyFirstPage() {
  return (
    <>
      <Header 
        logo={<h1>My Site</h1>}
        navItems={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" }
        ]}
      />
      
      <main>
        <Container size="lg" spacing="comfortable">
          <h1>Welcome to My Site</h1>
          <p>This is my first page using the layout components!</p>
        </Container>
      </main>
      
      <Footer 
        copyright="© 2024 My Site"
        sections={[
          {
            title: "Links",
            links: [
              { href: "/privacy", label: "Privacy" },
              { href: "/terms", label: "Terms" }
            ]
          }
        ]}
      />
    </>
  );
}
```

### Adding Interactivity
```tsx
// Add some interactive features
import { useState } from 'react';
import { Header, Container } from '@/app/components/layout';
import { Button, ThemeToggle } from '@/app/components/ui';

function InteractivePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Header 
        logo={<h1>My Site</h1>}
        navItems={[
          { href: "/", label: "Home" },
          { href: "/about", label: "About" }
        ]}
        actions={
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="primary">Get Started</Button>
          </div>
        }
      />
      
      <Container size="lg" spacing="comfortable">
        <h1>Interactive Page</h1>
        <p>This page has a theme toggle and action buttons!</p>
      </Container>
    </>
  );
}
```

Happy building! 🚀
