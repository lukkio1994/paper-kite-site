# Utility Components Guide

This guide covers utility components that provide common functionality and enhance user experience.

## Components Overview

### LoadingSpinner
Animated spinner for loading states.

**Usage:**
```tsx
import { LoadingSpinner } from '@/components/utils';

<LoadingSpinner size="md" color="primary" label="Loading content..." />
```

**Props:**
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `color`: 'primary' | 'secondary' | 'current'
- `label`: string - Accessibility label
- `className`: string - Additional styling

**Best Practices:**
- Always provide meaningful labels for screen readers
- Use appropriate sizes for context (xs for buttons, lg for page loading)
- Consider color contrast in different backgrounds
- Don't overuse spinners - they can feel sluggish

### Skeleton
Loading placeholders that match content structure.

**Usage:**
```tsx
import { Skeleton, SkeletonCard, SkeletonAvatar } from '@/components/utils';

// Basic skeleton
<Skeleton variant="text" lines={3} />

// Predefined patterns
<SkeletonCard />
<SkeletonAvatar size="md" withText />
```

**Props:**
- `variant`: 'text' | 'rectangular' | 'circular'
- `width`: string | number - Custom width
- `height`: string | number - Custom height
- `lines`: number - For text variant
- `animation`: 'pulse' | 'wave' | 'none'

**Predefined Patterns:**
- `SkeletonCard`: Complete card layout skeleton
- `SkeletonAvatar`: Avatar with optional text
- `SkeletonTable`: Table structure skeleton

**Best Practices:**
- Match skeleton structure to actual content
- Use skeletons for perceived performance
- Prefer skeletons over generic spinners
- Keep animations subtle and accessible

### ThemeToggle
Toggle between light, dark, and system themes.

**Usage:**
```tsx
import { ThemeToggle } from '@/components/utils';

<ThemeToggle size="md" variant="icon" showLabel={false} />
```

**Props:**
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'icon' | 'button'
- `showLabel`: boolean - Show theme label text
- `className`: string - Additional styling

**Theme Behavior:**
- Cycles through: light → dark → system
- Persists preference in localStorage
- Respects system preference when in system mode
- Updates document class for CSS targeting

**Best Practices:**
- Place in consistent location (header, settings)
- Use icon variant for space-constrained areas
- Test with system preference changes
- Ensure all components support both themes

## Loading States Patterns

### Page Loading
```tsx
function PageWithLoading() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetchData().then(result => {
      setData(result);
      setLoading(false);
    });
  }, []);
  
  if (loading) {
    return (
      <div className="space-y-6">
        <Skeleton variant="text" height="2rem" width="60%" />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }
  
  return <ActualContent data={data} />;
}
```

### Button Loading
```tsx
function FormWithLoadingButton() {
  const [submitting, setSubmitting] = useState(false);
  
  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      await submitForm();
    } finally {
      setSubmitting(false);
    }
  };
  
  return (
    <Button 
      onClick={handleSubmit}
      loading={submitting}
      disabled={submitting}
    >
      {submitting ? 'Saving...' : 'Save Changes'}
    </Button>
  );
}
```

### Progressive Loading
```tsx
function ProgressiveList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  const loadMore = async () => {
    if (loading || !hasMore) return;
    
    setLoading(true);
    const newItems = await fetchItems(items.length);
    setItems([...items, ...newItems]);
    setHasMore(newItems.length > 0);
    setLoading(false);
  };
  
  return (
    <div>
      {items.map(item => <ItemCard key={item.id} item={item} />)}
      
      {loading && (
        <div className="space-y-4">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      )}
      
      {hasMore && !loading && (
        <Button onClick={loadMore} variant="ghost" fullWidth>
          Load More
        </Button>
      )}
    </div>
  );
}
```

### Data Table Loading
```tsx
function DataTableWithSkeleton() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  if (loading) {
    return (
      <div className="border rounded-lg overflow-hidden">
        <SkeletonTable rows={10} columns={5} />
      </div>
    );
  }
  
  return <DataTable data={data} />;
}
```

## Theme Implementation

### CSS Variables Approach
```css
/* globals.css */
:root {
  --background: 255 255 255;
  --foreground: 0 0 0;
  --primary: 59 130 246;
  --secondary: 107 114 128;
}

.dark {
  --background: 0 0 0;
  --foreground: 255 255 255;
  --primary: 96 165 250;
  --secondary: 156 163 175;
}

/* Usage in Tailwind */
.bg-background { background-color: rgb(var(--background)); }
.text-foreground { color: rgb(var(--foreground)); }
```

### Component Theme Support
```tsx
function ThemedComponent() {
  return (
    <div className={cn(
      'bg-white dark:bg-gray-900',
      'text-gray-900 dark:text-gray-100',
      'border-gray-200 dark:border-gray-800'
    )}>
      Content that adapts to theme
    </div>
  );
}
```

### Theme Context
```tsx
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('system');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
```

## Accessibility Considerations

### Loading States
- Announce loading state changes to screen readers
- Use aria-live regions for dynamic content
- Provide meaningful loading labels
- Don't rely solely on visual indicators

### Theme Toggle
- Announce theme changes
- Use proper ARIA labels
- Respect prefers-reduced-motion
- Maintain focus after theme change

### Skeleton Loading
- Use aria-hidden for decorative skeletons
- Announce when real content loads
- Keep animations subtle for motion sensitivity
- Provide alternative loading indicators

## Performance Optimization

### Skeleton Components
```tsx
// Lazy load skeleton components
const SkeletonCard = lazy(() => import('./SkeletonCard'));

// Memoize complex skeletons
const MemoizedSkeleton = memo(({ rows, columns }) => (
  <SkeletonTable rows={rows} columns={columns} />
));

// Use CSS animations over JavaScript
const pulseAnimation = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`;
```

### Theme Performance
```tsx
// Avoid theme flashing
function ThemeScript() {
  const script = `
    (function() {
      const theme = localStorage.getItem('theme');
      if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  `;
  
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}

// Use in _document.js
export default function Document() {
  return (
    <Html>
      <Head>
        <ThemeScript />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### Loading State Management
```tsx
// Debounce loading states
function useDebounceLoading(loading, delay = 200) {
  const [debouncedLoading, setDebouncedLoading] = useState(false);
  
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => setDebouncedLoading(true), delay);
      return () => clearTimeout(timer);
    } else {
      setDebouncedLoading(false);
    }
  }, [loading, delay]);
  
  return debouncedLoading;
}

// Prevent loading flash for quick operations
function SmartLoadingSpinner({ loading }) {
  const showSpinner = useDebounceLoading(loading, 300);
  
  if (!showSpinner) return null;
  
  return <LoadingSpinner />;
}
```

## Testing Strategy

### Loading Components
```tsx
// Test loading state transitions
test('shows loading spinner during async operation', async () => {
  render(<ComponentWithLoading />);
  
  expect(screen.getByRole('status')).toBeInTheDocument();
  
  await waitForElementToBeRemoved(() => screen.queryByRole('status'));
  
  expect(screen.getByText('Loaded content')).toBeInTheDocument();
});

// Test skeleton accessibility
test('skeleton has proper accessibility attributes', () => {
  render(<SkeletonCard />);
  
  const skeleton = screen.getByRole('status');
  expect(skeleton).toHaveAttribute('aria-label', expect.stringContaining('loading'));
});
```

### Theme Toggle
```tsx
// Test theme persistence
test('persists theme preference', () => {
  render(<ThemeToggle />);
  
  const toggle = screen.getByRole('button');
  fireEvent.click(toggle);
  
  expect(localStorage.getItem('theme')).toBe('dark');
  expect(document.documentElement).toHaveClass('dark');
});

// Test system preference
test('respects system preference', () => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === '(prefers-color-scheme: dark)',
      media: query,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    })),
  });
  
  render(<ThemeToggle />);
  // Test system theme behavior
});
```

## Common Patterns

### Error Boundaries with Loading
```tsx
function ErrorBoundaryWithFallback({ children }) {
  return (
    <ErrorBoundary
      FallbackComponent={({ error, resetErrorBoundary }) => (
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">Something went wrong:</p>
          <p className="text-gray-600 mb-4">{error.message}</p>
          <Button onClick={resetErrorBoundary}>Try again</Button>
        </div>
      )}
    >
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
```

### Progressive Enhancement
```tsx
function ProgressiveComponent() {
  const [enhanced, setEnhanced] = useState(false);
  
  useEffect(() => {
    // Enable enhanced features after hydration
    setEnhanced(true);
  }, []);
  
  return (
    <div>
      <BasicContent />
      {enhanced && <EnhancedFeatures />}
    </div>
  );
}
```

### Optimistic Updates
```tsx
function OptimisticList() {
  const [items, setItems] = useState([]);
  const [optimisticItems, setOptimisticItems] = useState([]);
  
  const addItem = async (newItem) => {
    // Add optimistically
    const tempId = Date.now();
    const optimisticItem = { ...newItem, id: tempId, pending: true };
    setOptimisticItems(prev => [...prev, optimisticItem]);
    
    try {
      const savedItem = await saveItem(newItem);
      setItems(prev => [...prev, savedItem]);
      setOptimisticItems(prev => prev.filter(item => item.id !== tempId));
    } catch (error) {
      // Remove optimistic item on error
      setOptimisticItems(prev => prev.filter(item => item.id !== tempId));
      // Show error
    }
  };
  
  const allItems = [...items, ...optimisticItems];
  
  return (
    <div>
      {allItems.map(item => (
        <ItemCard 
          key={item.id} 
          item={item} 
          pending={item.pending}
        />
      ))}
    </div>
  );
}
```

### ErrorBoundary
React class component for handling JavaScript errors in component trees.

**Usage:**
```tsx
import { ErrorBoundary } from '@/components/utils';

// Basic usage with default fallback
<ErrorBoundary>
  <MyComponent />
</ErrorBoundary>

// Custom fallback component
<ErrorBoundary 
  fallback={({ error, resetError }) => (
    <div className="error-container">
      <h2>Oops! Something went wrong</h2>
      <details>{error.message}</details>
      <button onClick={resetError}>Try Again</button>
    </div>
  )}
  onError={(error, errorInfo) => {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    // Send to error reporting service
  }}
>
  <RiskyComponent />
</ErrorBoundary>
```

**Props:**
- `children`: ReactNode - Components to protect
- `fallback`: Component to render on error
- `onError`: Callback for error logging/reporting

### NotFound
Pre-styled 404 page component with customizable messaging.

**Usage:**
```tsx
import { NotFound } from '@/components/utils';

// Basic 404 page
<NotFound />

// Custom messaging
<NotFound 
  title="Page Not Found"
  description="The page you're looking for doesn't exist."
  homeText="Return Home"
  showHomeLink={true}
/>
```

**Props:**
- `title`: string - Main heading text
- `description`: string - Descriptive text
- `showHomeLink`: boolean - Show home navigation
- `homeText`: string - Home link text

### SEO
Comprehensive SEO meta tag management component.

**Usage:**
```tsx
import { SEO } from '@/components/utils';

<SEO
  title="My Page - My Site"
  description="A comprehensive guide to building great web applications"
  keywords="react, nextjs, typescript, web development"
  ogImage="/images/og-image.jpg"
  canonical="https://mysite.com/my-page"
  structuredData={{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "My Article Title"
  }}
/>
```

**Props:**
- `title`: string - Page title
- `description`: string - Meta description
- `keywords`: string - SEO keywords
- `ogImage`: string - Open Graph image
- `canonical`: string - Canonical URL
- `structuredData`: object - JSON-LD structured data

### Analytics
Google Analytics and custom tracking integration.

**Usage:**
```tsx
import { Analytics, trackEvent, trackPageView } from '@/components/utils';

// Initialize analytics (usually in _app.tsx or layout)
<Analytics 
  gaId="GA_MEASUREMENT_ID"
  enableGoogleAnalytics={true}
  enableCustomTracking={true}
/>

// Track events
trackEvent('button_click', {
  event_category: 'engagement',
  event_label: 'header_cta',
  value: 1
});

// Track page views
trackPageView('/new-page', 'New Page Title');
```

**Functions:**
- `trackEvent`: Track custom events
- `trackPageView`: Track page navigation
- `trackCustomEvent`: Custom analytics tracking

### ProtectedRoute
Route protection with authentication and role-based access control.

**Usage:**
```tsx
import { ProtectedRoute } from '@/components/utils';

// Basic authentication check
<ProtectedRoute 
  isAuthenticated={user !== null}
  redirectTo="/login"
>
  <DashboardContent />
</ProtectedRoute>

// Role-based protection
<ProtectedRoute
  user={user}
  requiredRole={['admin', 'moderator']}
  redirectTo="/unauthorized"
  checkAuth={async () => {
    const user = await getCurrentUser();
    return { isAuthenticated: !!user, user };
  }}
>
  <AdminPanel />
</ProtectedRoute>
```

**Props:**
- `isAuthenticated`: boolean - Auth status
- `user`: User object with role information
- `requiredRole`: string | string[] - Required roles
- `checkAuth`: Async function for auth verification
- `redirectTo`: Redirect path for unauthorized users

## Error Handling Patterns

### Global Error Boundary
```tsx
// _app.tsx or root layout
function MyApp({ Component, pageProps }) {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // Log to error reporting service
        console.error('Global error:', error, errorInfo);
      }}
    >
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
```

### Component-Level Error Boundaries
```tsx
// Wrap risky components
function FeatureSection() {
  return (
    <div>
      <SafeContent />
      
      <ErrorBoundary fallback={({ resetError }) => (
        <div className="text-center p-4">
          <p>This feature is temporarily unavailable.</p>
          <Button onClick={resetError}>Retry</Button>
        </div>
      )}>
        <RiskyFeature />
      </ErrorBoundary>
      
      <MoreSafeContent />
    </div>
  );
}
```

## SEO Best Practices

### Page-Level SEO
```tsx
function ProductPage({ product }) {
  return (
    <>
      <SEO
        title={`${product.name} - ${product.category} | MyStore`}
        description={product.description}
        ogImage={product.image}
        ogUrl={`https://mystore.com/products/${product.slug}`}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": product.name,
          "description": product.description,
          "image": product.image,
          "offers": {
            "@type": "Offer",
            "price": product.price,
            "priceCurrency": "USD"
          }
        }}
      />
      <ProductDetails product={product} />
    </>
  );
}
```

### Dynamic SEO
```tsx
function BlogPost({ post }) {
  const seoData = useMemo(() => ({
    title: `${post.title} | My Blog`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    canonical: `https://myblog.com/posts/${post.slug}`,
    ogImage: post.featuredImage,
    structuredData: {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "author": {
        "@type": "Person",
        "name": post.author.name
      },
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt
    }
  }), [post]);

  return (
    <>
      <SEO {...seoData} />
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}
```

## Security Patterns

### Role-Based Access Control
```tsx
function AdminDashboard() {
  return (
    <ProtectedRoute
      checkAuth={async () => {
        const session = await getSession();
        return {
          isAuthenticated: !!session?.user,
          user: session?.user
        };
      }}
      requiredRole="admin"
      onUnauthorized={(reason) => {
        if (reason === 'unauthenticated') {
          // Redirect to login
        } else {
          // Show insufficient permissions
        }
      }}
    >
      <AdminContent />
    </ProtectedRoute>
  );
}
```

### Nested Protection
```tsx
function SettingsPage() {
  return (
    <ProtectedRoute isAuthenticated={!!user}>
      <div className="grid grid-cols-12 gap-6">
        <SettingsSidebar />
        
        <div className="col-span-9">
          <Routes>
            <Route path="profile" element={<ProfileSettings />} />
            
            <Route 
              path="billing" 
              element={
                <ProtectedRoute requiredRole={['premium', 'admin']}>
                  <BillingSettings />
                </ProtectedRoute>
              } 
            />
            
            <Route 
              path="admin" 
              element={
                <ProtectedRoute requiredRole="admin">
                  <AdminSettings />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </div>
    </ProtectedRoute>
  );
}
```

## Testing Considerations

### Error Boundary Testing
```tsx
// Test error scenarios
test('ErrorBoundary catches and displays errors', () => {
  const ThrowError = () => {
    throw new Error('Test error');
  };

  render(
    <ErrorBoundary>
      <ThrowError />
    </ErrorBoundary>
  );

  expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument();
});
```

### SEO Testing
```tsx
// Test meta tag generation
test('SEO component renders correct meta tags', () => {
  render(
    <SEO
      title="Test Page"
      description="Test description"
      keywords="test, page"
    />
  );

  expect(document.title).toBe('Test Page');
  expect(document.querySelector('meta[name="description"]')).toHaveAttribute('content', 'Test description');
  expect(document.querySelector('meta[name="keywords"]')).toHaveAttribute('content', 'test, page');
});
```

### Analytics Testing
```tsx
// Mock analytics in tests
jest.mock('@/components/utils', () => ({
  ...jest.requireActual('@/components/utils'),
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
}));

test('tracks user interaction', () => {
  const { trackEvent } = require('@/components/utils');
  
  render(<MyComponent />);
  fireEvent.click(screen.getByRole('button'));
  
  expect(trackEvent).toHaveBeenCalledWith('button_click', {
    event_category: 'engagement'
  });
});
```

## Performance Considerations

- **ErrorBoundary**: Minimal performance impact, use liberally
- **SEO**: Only renders in document head, no runtime cost
- **Analytics**: Lazy loads scripts, minimal initial impact
- **ProtectedRoute**: Consider caching auth checks
- **NotFound**: Lightweight, suitable for error pages

Use these utility components to build robust, secure, and well-optimized applications with proper error handling, SEO, and user experience patterns.
