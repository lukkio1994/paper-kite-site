# UI Components Guide

This guide covers all the UI components in the component library, their usage, API, and best practices.

## Components Overview

### Button
A versatile button component with multiple variants and states.

**Usage:**
```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="md" onClick={handleClick}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'ghost' | 'destructive'
- `size`: 'sm' | 'md' | 'lg'
- `loading`: boolean - Shows loading spinner
- `fullWidth`: boolean - Makes button full width

**Best Practices:**
- Use primary for main actions, secondary for supporting actions
- Always provide loading states for async operations
- Use appropriate sizes based on context (sm for compact areas, lg for hero sections)

### IconButton
Icon-only button with accessibility support.

**Usage:**
```tsx
import { IconButton } from '@/components/ui';

<IconButton
  variant="ghost"
  size="md"
  aria-label="Delete item"
  icon={<TrashIcon />}
  onClick={handleDelete}
/>
```

**Props:**
- `icon`: React.ReactNode - Required icon element
- `aria-label`: string - Required for accessibility
- Same variant and size options as Button

**Best Practices:**
- Always provide meaningful aria-label
- Use consistent icon sizes (16px for sm, 20px for md, 24px for lg)
- Consider button placement and spacing in layouts

### Link
Enhanced Next.js Link with styling variants.

**Usage:**
```tsx
import { Link } from '@/components/ui';

<Link href="/about" variant="primary" underline="hover">
  Learn more
</Link>
```

**Props:**
- `href`: string - Required destination
- `variant`: 'default' | 'primary' | 'muted' | 'destructive'
- `underline`: 'none' | 'hover' | 'always'
- `external`: boolean - Forces external link behavior

**Best Practices:**
- Use external prop for external links to add security attributes
- Choose underline style based on context (hover for navigation, always for inline text)
- Use appropriate variants to match design hierarchy

### Card
Flexible container component for content grouping.

**Usage:**
```tsx
import { Card } from '@/components/ui';

<Card
  variant="elevated"
  title="Card Title"
  description="Card description"
  image={{ src: "/image.jpg", alt: "Description" }}
  cta={{ text: "Read more", onClick: handleClick }}
/>
```

**Props:**
- `variant`: 'default' | 'elevated' | 'outlined'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `image`: Object with src, alt, width, height
- `cta`: Object with text, onClick, href, variant

**Best Practices:**
- Use elevated variant for important content that needs prominence
- Provide alt text for all images
- Keep descriptions concise and scannable

### Badge
Small status indicators and labels.

**Usage:**
```tsx
import { Badge } from '@/components/ui';

<Badge variant="success" size="md" dot>
  Active
</Badge>
```

**Props:**
- `variant`: 'default' | 'success' | 'warning' | 'error' | 'info' | 'secondary'
- `size`: 'sm' | 'md' | 'lg'
- `dot`: boolean - Shows status dot

**Best Practices:**
- Use semantic variants (success for positive states, error for negative)
- Consider size in relation to surrounding content
- Use dots for status indicators, text for labels

### Avatar
User profile images with fallback support.

**Usage:**
```tsx
import { Avatar } from '@/components/ui';

<Avatar
  src="/user.jpg"
  alt="John Doe"
  fallback="John Doe"
  size="md"
  status="online"
/>
```

**Props:**
- `src`: string - Image URL
- `fallback`: string - Text for initials fallback
- `size`: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
- `status`: 'online' | 'offline' | 'away' | 'busy'
- `shape`: 'circle' | 'square'

**Best Practices:**
- Always provide fallback text for failed image loads
- Use appropriate sizes based on context
- Include status indicators only when relevant

### Modal
Accessible modal dialogs with backdrop and keyboard support.

**Usage:**
```tsx
import { Modal } from '@/components/ui';

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Modal Title"
  size="md"
>
  <p>Modal content</p>
</Modal>
```

**Props:**
- `open`: boolean - Controls visibility
- `onClose`: function - Close handler
- `title`: string - Modal title
- `size`: 'sm' | 'md' | 'lg' | 'xl' | 'full'
- `closeOnOverlayClick`: boolean - Default true
- `closeOnEscape`: boolean - Default true

**Best Practices:**
- Always provide escape routes (close button, overlay click, escape key)
- Use appropriate sizes for content
- Focus management is handled automatically

### Tooltip
Contextual information on hover/focus.

**Usage:**
```tsx
import { Tooltip } from '@/components/ui';

<Tooltip content="This is helpful information" side="top">
  <Button>Hover me</Button>
</Tooltip>
```

**Props:**
- `content`: React.ReactNode - Tooltip content
- `side`: 'top' | 'right' | 'bottom' | 'left'
- `delay`: number - Show delay in ms
- `disabled`: boolean - Disable tooltip

**Best Practices:**
- Keep content concise and helpful
- Don't rely on tooltips for critical information
- Test on touch devices where hover doesn't exist

### Toast
Non-intrusive notifications.

**Usage:**
```tsx
import { useToast } from '@/components/ui';

const { addToast } = useToast();

addToast({
  title: "Success!",
  description: "Your changes have been saved.",
  variant: "success",
  duration: 5000
});
```

**Toast Props:**
- `title`: string - Toast title
- `description`: string - Toast message
- `variant`: 'default' | 'success' | 'warning' | 'error'
- `duration`: number - Auto-dismiss time (0 = no auto-dismiss)
- `action`: Object with label and onClick

**Best Practices:**
- Use appropriate variants for message types
- Provide clear, actionable messages
- Don't overuse toasts - they can be disruptive

### Tabs
Organized content sections.

**Usage:**
```tsx
import { Tabs } from '@/components/ui';

<Tabs defaultValue="tab1">
  <Tabs.List>
    <Tabs.Trigger value="tab1">Tab 1</Tabs.Trigger>
    <Tabs.Trigger value="tab2">Tab 2</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="tab1">Content 1</Tabs.Content>
  <Tabs.Content value="tab2">Content 2</Tabs.Content>
</Tabs>
```

**Best Practices:**
- Keep tab labels short and descriptive
- Don't use more than 5-7 tabs
- Ensure content is substantially different between tabs

### Accordion
Collapsible content sections.

**Usage:**
```tsx
import { Accordion } from '@/components/ui';

<Accordion type="single">
  <Accordion.Item value="item1">
    <Accordion.Trigger>Question 1</Accordion.Trigger>
    <Accordion.Content>Answer 1</Accordion.Content>
  </Accordion.Item>
</Accordion>
```

**Props:**
- `type`: 'single' | 'multiple' - Single or multiple open items
- `defaultValue`: string | string[] - Initially open items

**Best Practices:**
- Use for FAQ sections and progressive disclosure
- Keep trigger text descriptive
- Don't nest accordions too deeply

### Breadcrumbs
Navigation path indicators.

**Usage:**
```tsx
import { Breadcrumbs } from '@/components/ui';

const items = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Shoes", current: true }
];

<Breadcrumbs items={items} />
```

**Best Practices:**
- Show the full path from home to current page
- Keep labels concise
- Make all non-current items clickable

## Accessibility Considerations

All components follow WCAG 2.1 AA guidelines:
- Proper ARIA attributes
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Screen reader compatibility

## Testing Strategy

**Unit Tests:**
- Component rendering
- Prop handling
- Event handling
- Accessibility attributes

**Integration Tests:**
- User interactions
- Keyboard navigation
- Focus management
- State changes

**Visual Tests:**
- Cross-browser compatibility
- Responsive behavior
- Dark mode support
- Animation performance

## Performance Notes

- All components are tree-shakeable
- Minimal runtime overhead
- Optimized for bundle size
- Lazy loading for modals and tooltips
- Efficient re-rendering patterns
