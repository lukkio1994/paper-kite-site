# Navigation Components Guide

This guide covers navigation components for building intuitive and accessible navigation systems.

## Components Overview

### NavItem
Individual navigation link with active state detection.

**Usage:**
```tsx
import { NavItem } from '@/app/components/navigation';

<NavItem
  href="/dashboard"
  variant="default"
  icon={<DashboardIcon />}
  badge="3"
>
  Dashboard
</NavItem>
```

**Props:**
- `href`: string - Required destination URL
- `variant`: 'default' | 'ghost' | 'underline'
- `size`: 'sm' | 'md' | 'lg'
- `active`: boolean - Override auto-detection
- `icon`: React.ReactNode - Leading icon
- `badge`: string | number - Badge content
- `external`: boolean - External link behavior

**Best Practices:**
- Let the component auto-detect active state when possible
- Use icons consistently across navigation items
- Keep badge content concise (numbers or short text)
- Use appropriate variants for different navigation contexts

### NavDropdown
Dropdown menu for sub-navigation items.

**Usage:**
```tsx
import { NavDropdown } from '@/app/components/navigation';

const items = [
  { href: "/profile", children: "Profile" },
  { href: "/settings", children: "Settings", icon: <SettingsIcon /> },
  { divider: true },
  { href: "/logout", children: "Logout", icon: <LogoutIcon /> }
];

<NavDropdown
  trigger="Account"
  items={items}
  align="right"
/>
```

**Props:**
- `trigger`: React.ReactNode - Dropdown trigger content
- `items`: DropdownItem[] - Menu items array
- `align`: 'left' | 'right' - Dropdown alignment
- `dropdownClassName`: string - Custom dropdown styles

**DropdownItem:**
- `href`: string - Link destination
- `children`: React.ReactNode - Item content
- `icon`: React.ReactNode - Optional icon
- `disabled`: boolean - Disable item
- `divider`: boolean - Show divider instead of item

**Best Practices:**
- Group related items together with dividers
- Use right alignment for user menus in headers
- Provide visual feedback for disabled items
- Keep menu depth shallow (avoid nested dropdowns)

### MobileMenu
Slide-over menu for mobile navigation.

**Usage:**
```tsx
import { MobileMenu } from '@/app/components/navigation';

<MobileMenu
  isOpen={isMobileMenuOpen}
  onClose={() => setIsMobileMenuOpen(false)}
  title="Navigation"
  side="left"
>
  <nav className="space-y-2">
    <NavItem href="/home">Home</NavItem>
    <NavItem href="/about">About</NavItem>
  </nav>
</MobileMenu>
```

**Props:**
- `isOpen`: boolean - Controls visibility
- `onClose`: function - Close handler
- `title`: string - Menu header title
- `side`: 'left' | 'right' - Slide direction
- `children`: React.ReactNode - Menu content

**Best Practices:**
- Use consistent slide direction across your app
- Provide clear close affordances
- Include all primary navigation items
- Test on various mobile screen sizes
- Handle body scroll prevention automatically

### Pagination
Page navigation for large datasets.

**Usage:**
```tsx
import { Pagination } from '@/app/components/navigation';

<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  onPageChange={setCurrentPage}
  showFirstLast={true}
  maxVisible={7}
/>
```

**Props:**
- `currentPage`: number - Current page (1-indexed)
- `totalPages`: number - Total number of pages
- `onPageChange`: function - Page change handler
- `showFirstLast`: boolean - Show first/last buttons
- `showPrevNext`: boolean - Show prev/next buttons
- `maxVisible`: number - Max visible page numbers
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean - Disable all interactions

**Best Practices:**
- Always show current page clearly
- Provide skip to first/last for long lists
- Use appropriate sizing for available space
- Show total count when helpful
- Handle edge cases (page 1, last page)
- Maintain page state in URL for bookmarking

## Navigation Patterns

### Header Navigation
```tsx
<header className="border-b">
  <div className="flex items-center justify-between px-6 py-4">
    <Logo />
    
    {/* Desktop Navigation */}
    <nav className="hidden md:flex items-center space-x-6">
      <NavItem href="/products">Products</NavItem>
      <NavItem href="/solutions">Solutions</NavItem>
      <NavDropdown
        trigger="Resources"
        items={resourceItems}
      />
    </nav>
    
    {/* User Menu */}
    <NavDropdown
      trigger={<Avatar />}
      items={userMenuItems}
      align="right"
    />
    
    {/* Mobile Menu Button */}
    <IconButton
      icon={<MenuIcon />}
      onClick={() => setMobileMenuOpen(true)}
      className="md:hidden"
    />
  </div>
</header>
```

### Sidebar Navigation
```tsx
<aside className="w-64 bg-gray-50 dark:bg-gray-900">
  <nav className="p-4 space-y-2">
    <NavItem href="/dashboard" variant="ghost" icon={<DashboardIcon />}>
      Dashboard
    </NavItem>
    <NavItem href="/projects" variant="ghost" icon={<ProjectsIcon />}>
      Projects
    </NavItem>
    <NavItem href="/tasks" variant="ghost" icon={<TasksIcon />} badge="5">
      Tasks
    </NavItem>
  </nav>
</aside>
```

### Breadcrumb Navigation
```tsx
<nav className="mb-6">
  <Breadcrumbs
    items={[
      { label: "Home", href: "/" },
      { label: "Products", href: "/products" },
      { label: "Electronics", href: "/products/electronics" },
      { label: "Smartphones", current: true }
    ]}
  />
</nav>
```

### Paginated Content
```tsx
<div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
    {items.map(item => (
      <Card key={item.id} {...item} />
    ))}
  </div>
  
  <Pagination
    currentPage={currentPage}
    totalPages={Math.ceil(totalItems / itemsPerPage)}
    onPageChange={handlePageChange}
  />
</div>
```

## Accessibility Guidelines

### Keyboard Navigation
- Tab order follows visual flow
- Arrow keys for menu navigation
- Enter/Space to activate items
- Escape to close menus

### Screen Reader Support
- Proper ARIA labels and roles
- Current page indication
- Menu state announcements
- Skip links for main content

### Focus Management
- Visible focus indicators
- Focus trapping in mobile menus
- Restore focus after menu close
- Logical tab order

## Responsive Considerations

### Mobile-First Approach
- Stack navigation items vertically
- Use hamburger menu for primary navigation
- Touch-friendly target sizes (44px minimum)
- Swipe gestures for mobile menus

### Breakpoint Strategy
- sm (640px): Basic mobile layout
- md (768px): Tablet adjustments
- lg (1024px): Desktop navigation appears
- xl (1280px): Full desktop experience

### Progressive Enhancement
- Core navigation works without JavaScript
- Enhanced interactions with JavaScript
- Graceful fallbacks for failed assets
- Performance optimization for mobile

## Testing Strategy

### Functional Tests
- Navigation state persistence
- Active link detection
- Menu open/close behavior
- Page change handling

### Accessibility Tests
- Keyboard navigation flow
- Screen reader compatibility
- Focus management
- ARIA attribute accuracy

### Performance Tests
- Mobile menu animation smoothness
- Large pagination rendering
- Navigation state updates
- Bundle size impact

### Cross-Browser Tests
- Dropdown positioning
- Mobile menu behavior
- Touch interactions
- CSS support detection

## Performance Optimization

### Code Splitting
- Lazy load mobile menu components
- Split large navigation configurations
- Bundle navigation by feature

### State Management
- Minimize navigation re-renders
- Cache navigation data
- Optimize active state detection
- Debounce search in navigation

### Animation Performance
- Use CSS transforms for movement
- Hardware acceleration for mobile menus
- Reduce animation complexity on low-end devices
- Respect reduced motion preferences
