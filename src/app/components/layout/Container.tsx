import { forwardRef, ElementType } from 'react';
import { ContainerProps } from '@/types/container';
import { getContainerClasses } from '@/lib/container-utils';

/**
 * A flexible, professional container component for any site type.
 * 
 * The Container component provides a consistent, responsive layout system that adapts
 * to different content types and design requirements. It's built with accessibility,
 * performance, and developer experience in mind.
 * 
 * ## Key Features
 * - **Responsive by default**: Mobile-first approach with fluid scaling
 * - **Multiple size options**: From `xs` (320px) to `7xl` (1280px) plus fluid
 * - **Professional spacing**: 6 spacing presets for different content densities
 * - **Visual hierarchy**: Background variants for depth and organization
 * - **Polymorphic**: Can render as any HTML element (div, section, article, etc.)
 * - **Accessibility**: Built-in ARIA attributes and semantic HTML support
 * - **TypeScript**: Fully typed with intelligent autocomplete
 * 
 * ## Size Guide
 * - `xs` (320px) - Mobile widgets, alerts
 * - `sm` (384px) - Small cards, forms
 * - `md` (448px) - Modal content, narrow articles
 * - `lg` (512px) - Standard forms, content blocks
 * - `xl` (576px) - Default, most content areas
 * - `2xl` (672px) - Wide content, dashboards
 * - `3xl` (768px) - Large articles, landing sections
 * - `4xl` (896px) - Hero sections, featured content
 * - `5xl` (1024px) - Wide layouts, galleries
 * - `6xl` (1152px) - Extra wide sections
 * - `7xl` (1280px) - Maximum content width
 * - `full` - 100% width with responsive padding
 * 
 * ## Common Use Cases
 * 
 * @example
 * ```tsx
 * // Basic content container (most common)
 * <Container>
 *   <h1>Page Title</h1>
 *   <p>Your content here...</p>
 * </Container>
 * 
 * // Navigation header with full width
 * <Container as="header" variant="nav" spacing="tight" fluid>
 *   <nav>Navigation items...</nav>
 * </Container>
 * 
 * // Hero section with large content
 * <Container as="section" size="4xl" spacing="spacious" background="subtle">
 *   <h1>Welcome to our site</h1>
 *   <p>Hero description...</p>
 * </Container>
 * 
 * // Card-style content with elevation
 * <Container variant="card" background="elevated" spacing="comfortable">
 *   <h3>Card Title</h3>
 *   <p>Card content...</p>
 * </Container>
 * 
 * // Compact sidebar or widget
 * <Container size="sm" spacing="compact" background="card">
 *   <div>Widget content</div>
 * </Container>
 * 
 * // Footer with subtle background
 * <Container as="footer" variant="section" background="secondary" spacing="loose">
 *   <p>&copy; 2025 Your Company</p>
 * </Container>
 * ```
 * 
 * @param size - Maximum width constraint (default: 'xl')
 * @param variant - Visual style variant (default: 'base')
 * @param spacing - Internal padding amount (default: 'comfortable')
 * @param background - Background treatment (default: 'transparent')
 * @param fluid - Whether to use full viewport width (default: false)
 * @param centered - Whether to center the container (default: true)
 * @param as - HTML element to render as (default: 'div')
 * @param className - Additional CSS classes
 * @param children - Content to render inside the container
 */
const Container = forwardRef<
  HTMLElement,
  ContainerProps<ElementType>
>(function Container(
  {
    as: Component = 'div',
    size = 'xl',
    variant = 'base',
    spacing = 'comfortable',
    background = 'transparent',
    fluid = false,
    centered = true,
    className,
    children,
    ...props
  },
  ref
) {
  const containerClasses = getContainerClasses({
    size,
    spacing,
    background,
    variant,
    fluid,
    centered,
    className
  });

  return (
    <Component
      ref={ref}
      className={containerClasses}
      {...props}
    >
      {children}
    </Component>
  );
});

Container.displayName = 'Container';

export { Container };