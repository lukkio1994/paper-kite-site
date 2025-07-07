# Configuration Cache Usage Examples

This document demonstrates how to use the new cached server-side configuration functions.

## Server-Side Usage

### Basic Usage

```typescript
import { getResolvedHeaderConfig, getResolvedFooterConfig } from '@/lib/config-resolver';

// In a server component or API route
export default async function ServerComponent({ params }: { params: { locale: string } }) {
  // These calls will be cached per locale
  const headerConfig = await getResolvedHeaderConfig(params.locale);
  const footerConfig = await getResolvedFooterConfig(params.locale);
  
  return (
    <div>
      <h1>{headerConfig.logo.text}</h1>
      <p>{footerConfig.copyright}</p>
    </div>
  );
}
```

### Cache Management

```typescript
import { 
  getResolvedHeaderConfig, 
  getResolvedFooterConfig,
  clearConfigCache,
  getConfigCacheStats 
} from '@/lib/config-resolver';

// Get cache statistics
const stats = getConfigCacheStats();
console.log('Cache stats:', stats);
// Output: { headerCacheSize: 2, footerCacheSize: 2, cachedLocales: ['en', 'es'] }

// Clear cache for specific locale
clearConfigCache('en');

// Clear all cached configurations
clearConfigCache();
```

### API Route Example

```typescript
// app/api/config/route.ts
import { getResolvedHeaderConfig, getResolvedFooterConfig } from '@/lib/config-resolver';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const locale = searchParams.get('locale') || 'en';
  
  try {
    // These will be cached automatically
    const [headerConfig, footerConfig] = await Promise.all([
      getResolvedHeaderConfig(locale),
      getResolvedFooterConfig(locale)
    ]);
    
    return Response.json({
      header: headerConfig,
      footer: footerConfig
    });
  } catch (error) {
    return Response.json({ error: 'Configuration error' }, { status: 500 });
  }
}
```

## Benefits

1. **Performance**: Configurations are computed once per locale and cached
2. **Memory Efficiency**: Only active locales are cached
3. **Server-Side Friendly**: Works with Next.js App Router server components
4. **Cache Control**: Manual cache clearing for development or when translations change
5. **Monitoring**: Cache statistics for debugging and optimization

## Cache Behavior

- **Automatic**: First call computes and caches, subsequent calls return cached result
- **Locale-Specific**: Each locale has its own cache entry
- **Memory-Based**: Cache persists for the lifetime of the server process
- **Error Handling**: Failed configurations are not cached (will retry on next call)

## Development Tips

- Clear cache when updating translation files during development
- Use `getConfigCacheStats()` to monitor cache usage
- Consider clearing cache in API routes that update translations
- Cache is automatically cleared on server restart
