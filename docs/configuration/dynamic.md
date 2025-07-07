# Dynamic Configuration Implementation Guide

## Overview

This implementation adds support for dynamic runtime configuration updates for both header and footer components. The system fetches updated configuration from `/api/config` using React `useEffect` and `useState` to store and update configurations dynamically inside components.

## Architecture

### 1. API Endpoint (`/src/app/api/config/route.ts`)

The API provides centralized configuration management:

- **GET** `/api/config` - Returns both header and footer configurations
- **GET** `/api/config?component=header` - Returns only header configuration  
- **GET** `/api/config?component=footer` - Returns only footer configuration
- **POST** `/api/config` - Updates configuration (for admin interfaces)

**Features:**
- Type-safe configuration using `ResolvedHeaderConfig` and `ResolvedFooterConfig`
- Mock data for development (replace with database/CMS in production)
- Versioning and timestamps for cache management
- Error handling with detailed error messages
- Caching headers for performance optimization

### 2. Dynamic Components

#### DynamicHeader (`/src/app/components/layout/DynamicHeader.tsx`)

Wraps the existing `Header` component with dynamic configuration capabilities:

**Features:**
- Fetches header configuration on mount
- Optional polling for real-time updates
- Graceful fallback to initial configuration on errors
- Loading states with skeleton UI
- Type-safe configuration merging
- Event callbacks for configuration events

**Props:**
```typescript
interface DynamicHeaderProps {
  initialConfig?: Partial<ResolvedHeaderConfig>;
  enableDynamicConfig?: boolean;
  pollingInterval?: number;
  onConfigLoad?: (config: ResolvedHeaderConfig) => void;
  onConfigError?: (error: Error) => void;
}
```

#### DynamicFooter (`/src/app/components/layout/DynamicFooter.tsx`)

Wraps the existing `Footer` component with dynamic configuration capabilities:

**Features:**
- Fetches footer configuration on mount
- Social media icon mapping and transformation
- Structured footer section rendering
- Loading states with skeleton UI
- Error handling and fallback configurations

**Key Implementation Details:**
- Maps platform names to icon components automatically
- Transforms configuration data to match Footer component expectations
- Handles missing or incomplete configuration gracefully

### 3. Configuration Hooks

#### useHeaderConfig Hook

Provides programmatic access to header configuration management:

```typescript
const {
  config,
  isLoading,
  error,
  fetchConfig,
  updateConfig
} = useHeaderConfig();
```

**Methods:**
- `fetchConfig()` - Manually fetch current configuration
- `updateConfig(newConfig)` - Update configuration via API

#### useFooterConfig Hook

Similar to `useHeaderConfig` but for footer configuration management.

## Usage Examples

### Basic Dynamic Components

```tsx
import { DynamicHeader, DynamicFooter } from '@/app/components/layout';

export default function MyPage() {
  return (
    <>
      <DynamicHeader
        enableDynamicConfig={true}
        pollingInterval={30000} // 30 seconds
        onConfigLoad={(config) => console.log('Header loaded:', config)}
        onConfigError={(error) => console.error('Header error:', error)}
      />
      
      <main>
        {/* Your content */}
      </main>
      
      <DynamicFooter
        enableDynamicConfig={true}
        pollingInterval={30000}
      />
    </>
  );
}
```

### With Fallback Configuration

```tsx
const fallbackHeaderConfig = {
  logo: { text: "My App", href: "/" },
  navigation: [{ label: "Home", href: "/" }],
  // ... other config
};

<DynamicHeader
  initialConfig={fallbackHeaderConfig}
  enableDynamicConfig={true}
/>
```

### Admin Interface Using Hooks

```tsx
'use client';

import { useHeaderConfig } from '@/app/components/layout';

export default function AdminPanel() {
  const { config, updateConfig, isLoading } = useHeaderConfig();

  const handleUpdateLogo = async () => {
    await updateConfig({
      logo: { text: "New Logo", href: "/" }
    });
  };

  return (
    <div>
      <h1>Current Logo: {config?.logo?.text}</h1>
      <button onClick={handleUpdateLogo} disabled={isLoading}>
        Update Logo
      </button>
    </div>
  );
}
```

## Configuration Types

### Header Configuration

```typescript
interface ResolvedHeaderConfig {
  logo: {
    text: string;
    href: string;
    className: string;
  };
  navigation: NavItem[];
  actions: ActionButton[];
  appearance: AppearanceConfig;
  mobile: MobileConfig;
  accessibility: AccessibilityConfig;
}
```

### Footer Configuration

```typescript
interface ResolvedFooterConfig {
  contact: ContactInfo;
  socialLinks: SocialLinkItem[];
  legalLinks: LinkItem[];
  productLinks: LinkItem[];
  // ... other link sections
  appearance: FooterAppearanceConfig;
  copyright: string;
  accessibility: FooterAccessibilityConfig;
}
```

## Demo Pages

### 1. Dynamic Configuration Demo (`/demo/dynamic-config`)

Demonstrates the dynamic components in action:
- Shows header and footer with live configuration
- Displays configuration features and API endpoints
- Includes real-time polling demonstration
- Error handling and fallback behavior

### 2. Admin Configuration Demo (`/demo/admin-config`)

Shows configuration management capabilities:
- Live configuration viewing and editing
- Real-time updates using hooks
- Error handling in admin interfaces
- API usage examples

## Technical Features

### Performance Optimization

1. **Caching**: API responses include cache headers
2. **Polling**: Optional and configurable
3. **Lazy Loading**: Components only fetch when needed
4. **Memoization**: useCallback for fetch functions

### Error Handling

1. **Graceful Degradation**: Falls back to initial config on errors
2. **Loading States**: Skeleton UI during configuration fetch
3. **Error Reporting**: Detailed error messages and callbacks
4. **Retry Logic**: Built into hooks for failed requests

### Type Safety

1. **TypeScript**: Full type coverage for all configuration interfaces
2. **Runtime Validation**: Zod schemas for API data validation
3. **Type Guards**: Safe configuration merging and updates

### Accessibility

1. **ARIA Labels**: Configurable accessibility labels
2. **Loading States**: Proper ARIA labels for loading components
3. **Error Messages**: Accessible error reporting
4. **Keyboard Navigation**: Maintains accessibility during updates

## Production Considerations

### 1. Replace Mock Data

Replace the mock configuration in `/api/config/route.ts` with:
- Database queries
- CMS integration
- External configuration services
- Environment-based configuration

### 2. Authentication

Add authentication to the POST endpoint:
```typescript
// Verify admin privileges before allowing updates
const session = await getSession(request);
if (!session?.user?.isAdmin) {
  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
}
```

### 3. Validation

Implement comprehensive validation:
```typescript
import { HeaderConfigSchema } from '@/lib/config-schemas';

const validatedConfig = HeaderConfigSchema.parse(config);
```

### 4. Caching Strategy

Implement proper caching:
- Redis for configuration caching
- CDN for static configuration assets
- Database connection pooling
- Response compression

### 5. Monitoring

Add monitoring and analytics:
- Configuration update tracking
- Error rate monitoring
- Performance metrics
- Usage analytics

## File Structure

```
src/
├── app/
│   ├── api/
│   │   └── config/
│   │       └── route.ts              # Configuration API endpoint
│   ├── components/
│   │   └── layout/
│   │       ├── DynamicHeader.tsx     # Dynamic header component
│   │       ├── DynamicFooter.tsx     # Dynamic footer component
│   │       └── index.ts              # Layout exports
│   └── [locale]/
│       └── demo/
│           ├── dynamic-config/       # Dynamic config demo
│           └── admin-config/         # Admin config demo
└── lib/
    ├── config-resolver.ts            # Configuration types
    ├── header-config.ts              # Header configuration
    └── footer-config.ts              # Footer configuration
```

## Testing

### Unit Tests
- Component rendering with different configurations
- Hook functionality and error handling
- API endpoint responses

### Integration Tests
- End-to-end configuration updates
- Real-time polling behavior
- Error recovery scenarios

### Performance Tests
- Configuration fetching performance
- Memory usage with polling
- Network request optimization

This implementation provides a robust, type-safe, and performant solution for dynamic configuration management that can scale from development to production environments.
