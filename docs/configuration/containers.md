# 📦 Container System Guide

A comprehensive guide to using the professional container system in your Next.js application.

## 🚀 Quick Start

The Container system provides a consistent, responsive layout foundation for any website type - from landing pages to complex applications.

```tsx
import { Container } from '@/app/components/layout';

export default function MyPage() {
  return (
    <Container>
      <h1>Hello World!</h1>
      <p>Your content automatically gets proper spacing and responsive width.</p>
    </Container>
  );
}
```

## 📐 Size Reference

| Size | Width | Best For |
|------|-------|----------|
| `xs` | 320px | Mobile alerts, small widgets |
| `sm` | 384px | Compact cards, mini forms |
| `md` | 448px | Modal dialogs, narrow articles |
| `lg` | 512px | Standard forms, content blocks |
| `xl` | 576px | **Default** - Most content areas |
| `2xl` | 672px | Wide content, simple dashboards |
| `3xl` | 768px | Long articles, feature sections |
| `4xl` | 896px | Hero sections, main content areas |
| `5xl` | 1024px | Wide layouts, image galleries |
| `6xl` | 1152px | Extra wide sections, landing pages |
| `7xl` | 1280px | Maximum content width |
| `full` | 100% | Navigation bars, full-width sections |

## 🎨 Visual Variants

### Background Options
- `transparent` - No background (default)
- `subtle` - Very light background for gentle separation
- `card` - White/dark card background with subtle border
- `elevated` - Card with shadow for prominence
- `primary` - Brand color background
- `secondary` - Muted secondary background

### Spacing Density
- `none` - No padding (for custom layouts)
- `tight` - Minimal padding (navigation, compact UI)
- `compact` - Small padding (dense information)
- `comfortable` - Standard padding (default, most content)
- `loose` - Generous padding (breathing room)
- `spacious` - Maximum padding (hero sections)

## 🏗️ Common Website Patterns

### 1. Landing Page Layout

```tsx
import { Container, HeaderContainer, SectionContainer, FooterContainer } from '@/app/components/layout';

export default function LandingPage() {
  return (
    <>
      {/* Navigation Header */}
      <HeaderContainer className="border-b bg-white/95 backdrop-blur">
        <nav className="flex justify-between items-center">
          <Logo />
          <NavMenu />
          <CTAButton />
        </nav>
      </HeaderContainer>

      {/* Hero Section */}
      <SectionContainer size="4xl" spacing="spacious" className="text-center">
        <h1 className="text-6xl font-bold mb-6">Transform Your Business</h1>
        <p className="text-xl text-gray-600 mb-8">Revolutionary solutions for modern companies</p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg">Get Started</button>
      </SectionContainer>

      {/* Features Grid */}
      <SectionContainer background="subtle" spacing="loose">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard />
          <FeatureCard />
          <FeatureCard />
        </div>
      </SectionContainer>

      {/* Footer */}
      <FooterContainer>
        <div className="grid md:grid-cols-4 gap-8">
          <FooterColumn title="Company" />
          <FooterColumn title="Product" />
          <FooterColumn title="Support" />
          <FooterColumn title="Legal" />
        </div>
      </FooterContainer>
    </>
  );
}
```

### 2. Blog/Article Layout

```tsx
import { Container, MainContainer } from '@/app/components/layout';

export default function BlogPost({ post }) {
  return (
    <>
      {/* Article Header */}
      <Container size="3xl" spacing="comfortable" className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">{post.excerpt}</p>
        <div className="flex justify-center items-center space-x-4 text-sm text-gray-500">
          <AuthorInfo author={post.author} />
          <span>•</span>
          <time>{post.publishDate}</time>
          <span>•</span>
          <span>{post.readTime} min read</span>
        </div>
      </Container>

      {/* Article Content */}
      <MainContainer className="prose prose-lg max-w-none">
        <img src={post.heroImage} alt={post.title} className="w-full h-80 object-cover rounded-lg mb-8" />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </MainContainer>

      {/* Related Articles */}
      <Container size="5xl" spacing="loose" background="subtle">
        <h3 className="text-2xl font-bold mb-8">Related Articles</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedPosts.map(post => (
            <ArticleCard key={post.id} post={post} />
          ))}
        </div>
      </Container>
    </>
  );
}
```

### 3. Dashboard Layout

```tsx
import { Container, CardContainer } from '@/app/components/layout';

export default function Dashboard() {
  return (
    <Container size="7xl" spacing="comfortable">
      {/* Dashboard Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back, here's what's happening</p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-8">
        <CardContainer className="text-center">
          <div className="text-3xl font-bold text-blue-600">$24,500</div>
          <div className="text-sm text-gray-600">Revenue</div>
        </CardContainer>
        <CardContainer className="text-center">
          <div className="text-3xl font-bold text-green-600">1,234</div>
          <div className="text-sm text-gray-600">Users</div>
        </CardContainer>
        <CardContainer className="text-center">
          <div className="text-3xl font-bold text-purple-600">98.5%</div>
          <div className="text-sm text-gray-600">Uptime</div>
        </CardContainer>
        <CardContainer className="text-center">
          <div className="text-3xl font-bold text-orange-600">156</div>
          <div className="text-sm text-gray-600">Orders</div>
        </CardContainer>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CardContainer>
            <h3 className="text-lg font-semibold mb-4">Revenue Chart</h3>
            <RevenueChart />
          </CardContainer>
        </div>
        <CardContainer>
          <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
          <ActivityList />
        </CardContainer>
      </div>
    </Container>
  );
}
```

### 4. E-commerce Product Page

```tsx
import { Container, CardContainer } from '@/app/components/layout';

export default function ProductPage({ product }) {
  return (
    <>
      {/* Product Hero */}
      <Container size="6xl" spacing="comfortable">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <ProductImageGallery images={product.images} />
          </div>
          <div className="space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="text-2xl font-semibold text-blue-600">${product.price}</div>
            <p className="text-gray-600">{product.description}</p>
            <ProductOptions options={product.options} />
            <button className="w-full bg-blue-600 text-white py-3 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </Container>

      {/* Product Details */}
      <Container size="4xl" spacing="loose" background="subtle">
        <div className="grid md:grid-cols-3 gap-8">
          <CardContainer className="text-center">
            <ShippingIcon className="w-8 h-8 mx-auto mb-3 text-blue-600" />
            <h4 className="font-semibold mb-2">Free Shipping</h4>
            <p className="text-sm text-gray-600">On orders over $50</p>
          </CardContainer>
          <CardContainer className="text-center">
            <ReturnIcon className="w-8 h-8 mx-auto mb-3 text-green-600" />
            <h4 className="font-semibold mb-2">Easy Returns</h4>
            <p className="text-sm text-gray-600">30-day return policy</p>
          </CardContainer>
          <CardContainer className="text-center">
            <SupportIcon className="w-8 h-8 mx-auto mb-3 text-purple-600" />
            <h4 className="font-semibold mb-2">24/7 Support</h4>
            <p className="text-sm text-gray-600">Always here to help</p>
          </CardContainer>
        </div>
      </Container>

      {/* Related Products */}
      <Container size="6xl" spacing="loose">
        <h3 className="text-2xl font-bold mb-8">You Might Also Like</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </>
  );
}
```

### 5. Contact/Form Page

```tsx
import { Container, CardContainer } from '@/app/components/layout';

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <Container size="3xl" spacing="comfortable" className="text-center py-16">
        <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </Container>

      {/* Contact Form & Info */}
      <Container size="5xl" spacing="loose">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <CardContainer>
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input type="text" className="w-full px-3 py-2 border rounded-lg" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input type="email" className="w-full px-3 py-2 border rounded-lg" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea rows={5} className="w-full px-3 py-2 border rounded-lg"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                  Send Message
                </button>
              </form>
            </CardContainer>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <CardContainer>
              <h3 className="text-lg font-semibold mb-4">Office</h3>
              <div className="space-y-2 text-gray-600">
                <p>123 Business St</p>
                <p>Suite 100</p>
                <p>City, State 12345</p>
              </div>
            </CardContainer>

            <CardContainer>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <p className="text-gray-600">Phone: (555) 123-4567</p>
                <p className="text-gray-600">Email: hello@company.com</p>
              </div>
            </CardContainer>

            <CardContainer>
              <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
              <div className="space-y-1 text-gray-600">
                <p>Monday - Friday: 9am - 6pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContainer>
          </div>
        </div>
      </Container>
    </>
  );
}
```

## 🎯 Specialized Components

For common patterns, use pre-configured specialized containers:

```tsx
import { 
  HeaderContainer,
  MainContainer, 
  SectionContainer,
  FooterContainer,
  CardContainer 
} from '@/app/components/layout';

// Instead of configuring each time:
<Container as="header" variant="nav" spacing="tight" fluid>

// Use the specialized version:
<HeaderContainer>
```

## 🔧 Advanced Usage

### Custom Responsive Behavior

```tsx
// Different sizes at different breakpoints
<Container 
  size="sm"           // Small on mobile
  className="md:max-w-4xl lg:max-w-6xl"  // Larger on desktop
>
  <ResponsiveContent />
</Container>
```

### Polymorphic Elements

```tsx
// Render as different HTML elements for semantic markup
<Container as="article" variant="content">Article content</Container>
<Container as="aside" size="sm">Sidebar content</Container>
<Container as="section" variant="section">Section content</Container>
```

### Nesting Containers

```tsx
// Outer container for page layout
<Container size="7xl" spacing="none">
  {/* Inner containers for content organization */}
  <Container size="4xl" spacing="comfortable">
    <h1>Main Content</h1>
  </Container>
  
  <Container size="sm" spacing="compact" className="ml-auto">
    <aside>Sidebar</aside>
  </Container>
</Container>
```

## 🎨 Styling Tips

### With Tailwind CSS

```tsx
// Background patterns
<Container background="subtle" className="bg-gradient-to-r from-blue-50 to-purple-50">

// Custom borders and shadows
<Container background="card" className="border-2 border-blue-200 shadow-xl">

// Responsive spacing adjustments
<Container spacing="comfortable" className="py-4 md:py-8 lg:py-12">
```

### Dark Mode Support

```tsx
// Automatic dark mode backgrounds
<Container background="card" className="dark:bg-gray-800">

// Custom dark mode styling
<Container className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## 📱 Responsive Design

The container system is mobile-first and automatically responsive:

- **Mobile (< 640px)**: Full width with minimal padding
- **Tablet (640px+)**: Constrained width with comfortable padding  
- **Desktop (1024px+)**: Maximum width with generous spacing
- **Large screens (1280px+)**: Centered with optimal reading widths

## ♿ Accessibility

Containers include accessibility features by default:

- Semantic HTML elements when using `as` prop
- Proper heading hierarchy support
- Focus management for interactive containers
- Screen reader friendly structure

## 🚀 Performance

- **Zero runtime overhead** - All styles are compiled at build time
- **Optimized bundle size** - Only used variants are included
- **CSS-in-JS free** - Pure Tailwind CSS classes
- **Tree-shakeable** - Unused components are automatically removed

## 🆘 Troubleshooting

### Container not taking full width?
```tsx
// Add fluid prop for full viewport width
<Container fluid>

// Or use size="full" for responsive full width
<Container size="full">
```

### Content looking cramped?
```tsx
// Increase spacing
<Container spacing="loose">  // or "spacious"

// Or add custom padding
<Container className="py-12">
```

### Need custom breakpoints?
```tsx
// Use Tailwind responsive classes
<Container className="max-w-sm md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
```

---

## 💡 Best Practices

1. **Start with defaults** - `<Container>` works great for most content
2. **Use specialized components** - `HeaderContainer`, `FooterContainer` for common patterns
3. **Semantic HTML** - Use the `as` prop for proper document structure
4. **Consistent spacing** - Stick to the spacing scale rather than custom padding
5. **Mobile-first** - Design for mobile, enhance for desktop
6. **Performance** - Prefer the built-in variants over heavy customization

Happy building! 🎉
