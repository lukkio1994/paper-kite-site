# Utility Components Guide

This guide covers utility components that provide common functionality and enhance user experience.

## Components Overview

### LoadingSpinner
Animated spinner for loading states.

**Usage:**
```tsx
import { LoadingSpinner } from '@/app/components/utils';

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
import { Skeleton, SkeletonCard, SkeletonAvatar } from '@/app/components/utils';

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
import { ThemeToggle } from '@/app/components/utils';

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
Advanced React error boundary with detailed reporting, recovery options, and multiple display levels.

**Usage:**
```tsx
import { ErrorBoundary } from '@/app/components/utils';

// Basic usage with enhanced default fallback
<ErrorBoundary
  level="default"
  showErrorDetails={false}
  enableReporting={true}
>
  <MyComponent />
</ErrorBoundary>

// Production configuration
<ErrorBoundary 
  level="minimal"
  errorTitle="Something went wrong"
  errorMessage="We're working to fix this issue. Please try again."
  supportContact={{
    email: "support@example.com",
    phone: "+1-555-0123",
    url: "https://help.example.com"
  }}
  showReload={true}
  showGoBack={true}
  onError={(error, errorInfo, errorDetails) => {
    // Send to error reporting service
    errorReporting.captureException(error, {
      extra: errorDetails,
      tags: { component: 'ErrorBoundary' }
    });
  }}
  onReport={async (errorDetails) => {
    await fetch('/api/error-report', {
      method: 'POST',
      body: JSON.stringify(errorDetails)
    });
  }}
>
  <CriticalComponent />
</ErrorBoundary>

// Development/Debug configuration
<ErrorBoundary
  level="debug"
  showErrorDetails={true}
  autoRetry={{
    attempts: 3,
    delay: 2000
  }}
  recoverySuggestions={[
    "Check the browser console for more details",
    "Refresh the page to retry",
    "Clear browser cache and cookies",
    "Report this issue to our support team"
  ]}
  onReset={() => {
    // Custom reset logic
    window.location.reload();
  }}
>
  <DevelopmentComponent />
</ErrorBoundary>

// Custom fallback component
const CustomErrorFallback = ({ error, errorDetails, resetError, reportError }) => (
  <div className="error-fallback">
    <h2>Oops! Something broke</h2>
    <details>
      <summary>Error Details</summary>
      <pre>{error.message}</pre>
    </details>
    <button onClick={resetError}>Try Again</button>
    <button onClick={reportError}>Report Issue</button>
  </div>
);

<ErrorBoundary fallback={CustomErrorFallback}>
  <MyComponent />
</ErrorBoundary>
```

**Enhanced Props:**
- `level`: 'minimal' | 'default' | 'detailed' | 'debug' - Display detail level
- `fallback`: Custom fallback component with enhanced props
- `showErrorDetails`: boolean - Show technical error information
- `enableReporting`: boolean - Enable error reporting functionality
- `errorTitle`: string - Custom error title
- `errorMessage`: string - Custom error message
- `supportContact`: Object - Support contact information
- `recoverySuggestions`: string[] - User-friendly recovery steps
- `showReload`: boolean - Show page reload option
- `showGoBack`: boolean - Show browser back option
- `autoRetry`: Object - Automatic retry configuration
- `isolationLevel`: 'component' | 'page' | 'section' - Error containment level
- `onError`: Enhanced callback with error details object
- `onReport`: Async error reporting callback
- `onReset`: Callback when user attempts recovery
- `loadingTimeout`: number - Maximum loading time before error

**Error Detail Object:**
```typescript
interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
  userAgent?: string;
  url?: string;
}
```

**Display Levels:**
- **minimal**: Simple message with retry button
- **default**: Standard error UI with recovery options
- **detailed**: Comprehensive error info with support contacts
- **debug**: Full technical details for development

**Advanced Features:**
- **Auto-retry**: Configurable automatic recovery attempts
- **Error Reporting**: Built-in error reporting with custom endpoints
- **Recovery Suggestions**: User-friendly troubleshooting steps
- **Support Integration**: Contact information and help links
- **Error IDs**: Unique identifiers for support tracking
- **Graceful Degradation**: Progressive enhancement based on error severity

**Best Practices:**
- Use 'minimal' level in production for user-facing errors
- Enable detailed logging in development with 'debug' level
- Implement proper error reporting for production monitoring
- Provide meaningful recovery suggestions
- Test error boundaries with intentional errors
- Monitor error frequency and patterns
- Keep error messages user-friendly and actionable
  <RiskyComponent />
</ErrorBoundary>

// Development configuration
<ErrorBoundary 
  level="debug"
  showErrorDetails={true}
  autoRetry={{
    attempts: 3,
    delay: 1000
  }}
  onReset={() => {
    console.log('ErrorBoundary reset');
  }}
>
  <DevelopmentComponent />
</ErrorBoundary>

// Custom fallback with full control
<ErrorBoundary 
  fallback={({ error, errorDetails, resetError, reportError }) => (
    <div className="custom-error-container">
      <h2>Application Error</h2>
      <p>Error ID: {errorDetails.errorId}</p>
      <details>
        <summary>Technical Details</summary>
        <pre>{error.stack}</pre>
      </details>
      <div className="error-actions">
        <button onClick={resetError}>Try Again</button>
        <button onClick={reportError}>Report Issue</button>
      </div>
    </div>
  )}
>
  <AdvancedComponent />
</ErrorBoundary>
```

**Enhanced Props:**
- `children`: ReactNode - Components to protect
- `fallback`: Custom error component with enhanced props
- `level`: 'minimal' | 'default' | 'detailed' | 'debug' - Error detail level
- `showErrorDetails`: boolean - Show technical error information
- `enableReporting`: boolean - Enable error reporting features
- `errorTitle`: string - Custom error title
- `errorMessage`: string - Custom error message
- `supportContact`: Object - Support contact information
- `recoverySuggestions`: string[] - User-friendly recovery steps
- `showReload`: boolean - Show reload page button
- `showGoBack`: boolean - Show go back button
- `autoRetry`: Object - Auto-retry configuration
- `loadingTimeout`: number - Timeout for operations
- `isolationLevel`: 'component' | 'page' | 'section' - Error isolation scope
- `onError`: Enhanced error callback with detailed context
- `onReport`: Error reporting callback
- `onReset`: Reset callback

**Error Details Interface:**
```typescript
interface ErrorDetails {
  message: string;
  stack?: string;
  componentStack?: string;
  timestamp: Date;
  userAgent?: string;
  url?: string;
}
```

**Fallback Component Props:**
```typescript
interface FallbackProps {
  error: Error;
  errorDetails: ErrorDetails;
  resetError: () => void;
  reportError: () => Promise<void>;
}
```

**Error Levels:**
- **minimal**: Basic error message with recovery actions
- **default**: Standard error display with suggestions
- **detailed**: Comprehensive error info with support contact
- **debug**: Full technical details for development

**Auto-Retry Features:**
- Configurable retry attempts and delays
- Exponential backoff for retries
- Visual feedback during retry attempts
- Automatic fallback after max retries

**Advanced Features:**
- **Error ID Generation**: Unique IDs for support tracking
- **User Agent Detection**: Browser/device information
- **URL Context**: Current page URL when error occurred
- **Component Stack**: React component hierarchy
- **Time Tracking**: Error timestamp for debugging
- **Cleanup Management**: Proper cleanup on unmount

**Best Practices:**
- Use multiple boundaries at different app levels
- Implement proper error reporting pipeline
- Provide meaningful recovery suggestions
- Test error scenarios thoroughly
- Use appropriate detail levels for production vs development
- Monitor error patterns and fix common issues
- Include sufficient context for debugging
- Respect user privacy in error reports

### NotFound
Comprehensive 404 page component with search, suggestions, and multiple variants.

**Usage:**
```tsx
import { NotFound } from '@/app/components/utils';

// Basic 404 page
<NotFound />

// Enhanced 404 with all features
<NotFound 
  title="Oops! Page Not Found"
  description="The page you're looking for might have been moved or deleted."
  errorCode="404"
  variant="detailed"
  showSearch={true}
  searchPlaceholder="Search our site..."
  onSearch={(query) => console.log('Searching for:', query)}
  suggestions={[
    { 
      label: "Documentation", 
      href: "/docs", 
      description: "Learn how to use our platform" 
    },
    { 
      label: "Contact Support", 
      href: "/support", 
      description: "Get help from our team" 
    }
  ]}
  actions={[
    {
      label: "Browse Features",
      href: "/features",
      variant: "outline"
    },
    {
      label: "Contact Sales",
      href: "/contact",
      variant: "primary"
    }
  ]}
  contact={{
    email: "support@example.com",
    phone: "+1-555-0123",
    supportUrl: "/help"
  }}
  autoRedirect={{
    href: "/",
    timeout: 10,
    message: "Redirecting to homepage in {countdown} seconds..."
  }}
  breadcrumb={[
    { label: "Home", href: "/" },
    { label: "Category", href: "/category" },
    { label: "Current Page" }
  ]}
/>

// Minimal variant
<NotFound 
  variant="minimal"
  title="Page Not Found"
  showBackButton={true}
  showHomeLink={true}
/>

// Playful variant
<NotFound 
  variant="playful"
  animated={true}
  illustration={<CustomSpaceIllustration />}
/>
```

**Enhanced Props:**
- `title`: string - Custom title (variant-aware defaults)
- `description`: string - Custom description
- `errorCode`: string | number - Error code to display (default: '404')
- `variant`: 'default' | 'minimal' | 'detailed' | 'playful' - Page style
- `showHomeLink`: boolean - Show home navigation button
- `homeText`: string - Home button text
- `homeHref`: string - Home button destination
- `showBackButton`: boolean - Show browser back button
- `backText`: string - Back button text
- `actions`: Array - Additional action buttons
- `showSearch`: boolean - Include search functionality
- `searchPlaceholder`: string - Search input placeholder
- `onSearch`: Function - Search callback
- `suggestions`: Array - Suggested page links
- `illustration`: ReactNode - Custom illustration/icon
- `autoRedirect`: Object - Auto-redirect configuration
- `animated`: boolean - Enable animations
- `contact`: Object - Support contact information
- `breadcrumb`: Array - Breadcrumb navigation for context

**Action Button Interface:**
```typescript
interface Action {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  external?: boolean;
}
```

**Suggestion Interface:**
```typescript
interface Suggestion {
  label: string;
  href: string;
  description?: string;
}
```

**Variants:**
- **default**: Standard 404 with moderate detail
- **minimal**: Clean, simple layout with essential elements
- **detailed**: Comprehensive with search, suggestions, and contact info
- **playful**: Fun, engaging style with animations

**Advanced Features:**
- **Search Integration**: Built-in search with callback
- **Smart Suggestions**: Contextual page recommendations
- **Auto-redirect**: Timed redirect with countdown
- **Contact Options**: Multiple support channels
- **Breadcrumb Context**: Show user's navigation path
- **Accessibility**: Full ARIA support and keyboard navigation
- **Analytics Ready**: Track 404 events for optimization

**Best Practices:**
- Use 'detailed' variant for main site 404s
- Provide relevant suggestions based on the attempted URL
- Include search to help users find what they need
- Test auto-redirect timeouts for good UX
- Monitor 404 analytics to identify broken links
- Use friendly, helpful language
- Ensure mobile responsiveness

### SEO
App Router compatible SEO meta tag management with advanced features.

**Usage:**
```tsx
import { SEO } from '@/app/components/utils';

<SEO
  title="My Page - My Site"
  description="A comprehensive guide to building great web applications"
  keywords={["react", "nextjs", "typescript", "web development"]}
  ogImage="/images/og-image.jpg"
  ogUrl="https://mysite.com/my-page"
  canonical="https://mysite.com/my-page"
  structuredData={{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "My Article Title",
    "author": {
      "@type": "Person",
      "name": "John Doe"
    }
  }}
  alternateLanguages={[
    { lang: "es", href: "https://mysite.com/es/my-page" },
    { lang: "fr", href: "https://mysite.com/fr/my-page" }
  ]}
  preload={[
    { href: "/fonts/inter.woff2", as: "font", type: "font/woff2", crossOrigin: "anonymous" }
  ]}
/>
```

**Enhanced Props:**
- `title`: string - Page title
- `description`: string - Meta description  
- `keywords`: string | string[] - SEO keywords (array or comma-separated)
- `ogImage`: string - Open Graph image URL
- `ogUrl`: string - Open Graph page URL
- `ogType`: 'website' | 'article' | 'product' | 'profile' - Content type
- `canonical`: string - Canonical URL for duplicate content
- `structuredData`: object | object[] - JSON-LD structured data
- `alternateLanguages`: Array<{lang: string, href: string}> - Language versions
- `preload`: Resource preloading for performance
- `dnsPrefetch`: string[] - Domains to prefetch DNS
- `preconnect`: string[] - Domains to preconnect
- `noIndex`: boolean - Prevent search engine indexing
- `noFollow`: boolean - Prevent following links
- `themeColor`: string - Theme color for mobile browsers
- `viewport`: string - Custom viewport settings

**App Router Features:**
- Uses useEffect for client-side meta management
- Compatible with Next.js 13+ App Router
- Automatic cleanup on component unmount
- SSR-safe implementation
- Respects existing meta tags

**Best Practices:**
- Place in page components or layouts
- Use descriptive, unique titles (50-60 characters)
- Keep descriptions under 160 characters  
- Include structured data for rich search results
- Use canonical URLs to prevent duplicate content issues
- Preload critical resources for better performance
- Test with social media preview tools

### Analytics
Privacy-compliant analytics with multiple providers and auto-tracking features.

**Usage:**
```tsx
import { Analytics, trackEvent, trackPageView, trackConversion } from '@/app/components/utils';

// Initialize with multiple providers
<Analytics 
  config={{
    ga: {
      measurementId: "G-XXXXXXXXXX",
      config: {
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      }
    },
    gtm: {
      containerId: "GTM-XXXXXXX"
    },
    fbPixel: {
      pixelId: "XXXXXXXXXX",
      advanced_matching: false
    }
  }}
  enabled={true}
  respectDNT={true}
  autoTrackPageViews={true}
  autoTrackScrollDepth={true}
  autoTrackOutboundLinks={true}
  consent={{
    required: true,
    categories: ['analytics', 'marketing'],
    onConsentChange: (consent) => console.log('Consent updated:', consent)
  }}
/>

// Track events
trackEvent('button_click', {
  event_category: 'engagement',
  event_label: 'header_cta',
  value: 1,
  custom_parameters: {
    section: 'hero',
    user_type: 'visitor'
  }
});

// Track conversions
trackConversion({
  action: 'purchase',
  category: 'ecommerce',
  value: 99.99,
  currency: 'USD',
  transaction_id: 'txn_123456'
});

// Set user properties
setUserProperties({
  user_id: 'user_123',
  user_properties: {
    plan: 'premium',
    signup_date: '2024-01-15'
  }
});
```

**Enhanced Props:**
- `config`: Object - Multi-provider configuration
  - `ga`: Google Analytics 4 configuration
  - `gtm`: Google Tag Manager configuration  
  - `fbPixel`: Facebook Pixel configuration
  - `custom`: Array of custom analytics providers
- `enabled`: boolean - Master analytics toggle
- `debug`: boolean - Enable debug logging
- `respectDNT`: boolean - Respect Do Not Track header
- `autoTrackPageViews`: boolean - Auto-track navigation
- `autoTrackScrollDepth`: boolean - Auto-track scroll milestones
- `autoTrackOutboundLinks`: boolean - Auto-track external links
- `autoTrackDownloads`: boolean - Auto-track file downloads
- `consent`: Object - GDPR/CCPA consent management

**Enhanced Functions:**
- `trackEvent`: Enhanced event tracking with custom parameters
- `trackPageView`: Page view tracking with metadata
- `trackConversion`: E-commerce conversion tracking
- `setUserProperties`: Set user identification and properties
- `getDebugLogs`: Get debug information for troubleshooting
- `clearDebugLogs`: Clear stored debug logs

**Privacy Features:**
- GDPR/CCPA compliance
- Consent management integration
- Do Not Track header respect
- IP anonymization
- Disable advertising features
- Local consent storage

**Auto-Tracking Features:**
- Page views with Next.js router integration
- Scroll depth milestones (25%, 50%, 75%, 100%)
- Outbound link clicks
- File download tracking
- Custom event patterns

**Best Practices:**
- Always respect user privacy and consent
- Enable IP anonymization and disable advertising signals
- Use meaningful event names and categories
- Test tracking implementation thoroughly
- Monitor Core Web Vitals impact
- Implement proper consent banners
- Review data retention policies

### ProtectedRoute
Advanced route protection with authentication, role/permission-based access control, and retry logic.

**Usage:**
```tsx
import { ProtectedRoute } from '@/app/components/utils';

// Basic authentication check
<ProtectedRoute 
  isAuthenticated={user !== null}
  user={user}
  redirectTo="/login"
  unauthorizedRedirectTo="/unauthorized"
>
  <DashboardContent />
</ProtectedRoute>

// Role and permission-based protection
<ProtectedRoute
  user={user}
  requiredRole={['admin', 'moderator']}
  requiredPermissions={['read:analytics', 'write:reports']}
  checkAuth={async () => {
    const user = await getCurrentUser();
    return { 
      isAuthenticated: !!user, 
      user,
      loading: false 
    };
  }}
  customValidation={async (user) => {
    // Custom business logic validation
    return user.emailVerified && !user.suspended;
  }}
  autoRetry={{
    attempts: 3,
    delay: 1000
  }}
  onUnauthorized={(reason, context) => {
    console.log('Access denied:', reason, context);
    // Send to analytics or error reporting
  }}
  loadingTimeout={10000}
  rememberRoute={true}
>
  <AdminPanel />
</ProtectedRoute>

// Advanced configuration
<ProtectedRoute
  user={user}
  allowedRoles={['premium', 'enterprise']}
  allowedPermissions={['access:premium_features']}
  immediate={false}
  unauthorizedFallback={
    <div className="text-center p-8">
      <h2>Access Restricted</h2>
      <p>Upgrade your plan to access this feature.</p>
      <Button href="/upgrade">Upgrade Now</Button>
    </div>
  }
  showErrorDetails={true}
  maxRetries={5}
  retryOnFailure={true}
>
  <PremiumFeatures />
</ProtectedRoute>
```

**Enhanced Props:**
- `isAuthenticated`: boolean - Authentication status
- `user`: User object with role, permissions, and custom properties
- `requiredRole`: string | string[] - Required user roles
- `requiredPermissions`: string | string[] - Required user permissions
- `allowedRoles`: string[] - Alternative inclusive role checking
- `allowedPermissions`: string[] - Alternative inclusive permission checking
- `checkAuth`: Async function returning AuthState
- `customValidation`: Custom user validation function
- `redirectTo`: Path for unauthenticated users (default: '/login')
- `unauthorizedRedirectTo`: Path for insufficient permissions (default: '/unauthorized')
- `fallback`: Custom loading component
- `unauthorizedFallback`: Custom unauthorized component
- `immediate`: boolean - Redirect immediately or show fallback
- `loadingTimeout`: number - Max loading time in milliseconds
- `autoRetry`: Object - Auto-retry configuration
- `maxRetries`: number - Maximum retry attempts
- `retryOnFailure`: boolean - Enable retry on auth failures
- `rememberRoute`: boolean - Remember attempted route for post-login redirect
- `showErrorDetails`: boolean - Show detailed error information
- `onUnauthorized`: Callback with reason and context
- `onAuthSuccess`: Callback when authentication succeeds
- `onAuthFailure`: Callback when authentication fails
- `onReset`: Callback when component resets

**User Interface:**
```typescript
interface User {
  id: string;
  email?: string;
  name?: string;
  role?: string;
  permissions?: string[];
  [key: string]: unknown; // Allow custom properties
}
```

**AuthState Interface:**
```typescript
interface AuthState {
  isAuthenticated: boolean;
  user?: User | null;
  loading?: boolean;
}
```

**Advanced Features:**
- **Retry Logic**: Automatic retry with exponential backoff
- **Permission System**: Granular permission-based access control
- **Custom Validation**: Business logic validation beyond roles/permissions
- **Route Memory**: Remember attempted routes for post-login redirect
- **Loading Management**: Configurable timeouts and loading states
- **Error Handling**: Detailed error reporting and recovery
- **Privacy**: User context available in callbacks for analytics

**Best Practices:**
- Implement comprehensive authentication flow
- Use granular permissions over broad roles when possible
- Provide meaningful loading and error states
- Cache authentication results to reduce API calls
- Handle network failures gracefully with retry logic
- Test all unauthorized access scenarios
- Implement proper session management
- Use TypeScript for better type safety

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
jest.mock('@/app/components/utils', () => ({
  ...jest.requireActual('@/app/components/utils'),
  trackEvent: jest.fn(),
  trackPageView: jest.fn(),
}));

test('tracks user interaction', () => {
  const { trackEvent } = require('@/app/components/utils');
  
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
