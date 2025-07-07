# Component Quick Reference

This file provides a quick overview of all available components for easy reference.

## 🎨 UI Components (12)

| Component | Purpose | Usage |
|-----------|---------|-------|
| **Button** | Primary actions | `<Button variant="primary">Click me</Button>` |
| **IconButton** | Icon-only buttons | `<IconButton icon={<Icon />} aria-label="Close" />` |
| **Link** | Navigation links | `<Link href="/about">About</Link>` |
| **Card** | Content containers | `<Card title="Title" description="Text" />` |
| **Badge** | Status indicators | `<Badge variant="success">Active</Badge>` |
| **Avatar** | User profile images | `<Avatar src="/avatar.jpg" alt="User" />` |
| **Modal** | Dialogs and overlays | `<Modal isOpen={true}>Content</Modal>` |
| **Tooltip** | Contextual information | `<Tooltip content="Help text">Hover me</Tooltip>` |
| **Toast** | Notifications | `useToast().success("Saved!")` |
| **Tabs** | Tabbed content | `<Tabs><TabsList>...</TabsList></Tabs>` |
| **Accordion** | Collapsible sections | `<Accordion><AccordionItem>...</AccordionItem></Accordion>` |
| **Breadcrumbs** | Navigation paths | `<Breadcrumbs items={breadcrumbItems} />` |

## 🧭 Navigation Components (4)

| Component | Purpose | Usage |
|-----------|---------|-------|
| **NavItem** | Navigation links | `<NavItem href="/home" active>Home</NavItem>` |
| **NavDropdown** | Dropdown menus | `<NavDropdown items={menuItems} />` |
| **MobileMenu** | Mobile navigation | `<MobileMenu isOpen={true} items={menuItems} />` |
| **Pagination** | Page navigation | `<Pagination currentPage={1} totalPages={10} />` |

## 📝 Form Components (8)

| Component | Purpose | Usage |
|-----------|---------|-------|
| **Input** | Text input fields | `<Input label="Email" type="email" />` |
| **Textarea** | Multi-line text | `<Textarea label="Message" rows={4} />` |
| **Select** | Dropdown selection | `<Select options={options} />` |
| **Checkbox** | Binary choices | `<Checkbox label="Subscribe" />` |
| **Radio** | Single selection | `<Radio options={radioOptions} />` |
| **Toggle** | Switch controls | `<Toggle label="Enable notifications" />` |
| **FormField** | Field wrapper | `<FormField label="Name" error={error}>...</FormField>` |
| **FormError** | Error display | `<FormError error="Required field" />` |

## 🔧 Utility Components (7)

| Component | Purpose | Usage |
|-----------|---------|-------|
| **LoadingSpinner** | Loading indicators | `<LoadingSpinner size="md" color="primary" />` |
| **Skeleton** | Content placeholders | `<Skeleton variant="text" shimmer />` |
| **ThemeToggle** | Theme switching | `<ThemeToggle variant="dropdown" />` |
| **ErrorBoundary** | Error handling | `<ErrorBoundary level="default" enableReporting />` |
| **NotFound** | 404 pages | `<NotFound variant="detailed" showSearch />` |
| **SEO** | Meta tags (App Router) | `<SEO title="Page" structuredData={{...}} />` |
| **Analytics** | Privacy-compliant tracking | `<Analytics config={{ga: {...}}} respectDNT />` |
| **ProtectedRoute** | Auth & permissions | `<ProtectedRoute requiredRole="admin" />` |

## 🏗️ Layout Components (4)

| Component | Purpose | Usage |
|-----------|---------|-------|
| **Container** | Responsive containers | `<Container size="lg" spacing="comfortable">...</Container>` |
| **Header** | Page headers | `<Header logo={<Logo />} navItems={items} />` |
| **Footer** | Page footers | `<Footer sections={sections} copyright="© 2024" />` |
| **SpecializedContainers** | Layout patterns | `<HeroContainer>...</HeroContainer>` |

## 📚 Getting Help

1. **Detailed Guides**: Check `src/app/components/guides/[category]/index.md`
2. **Component Props**: Look at TypeScript interfaces in component files
3. **Examples**: Copy examples from guides and modify them
4. **Main README**: `src/app/components/README.md` for setup and patterns

## 🎯 Most Common Components for Beginners

Start with these components - they're used in almost every app:

1. **Container** - For page structure and responsive layouts
2. **Button** - For actions and interactions
3. **Input** - For user input
4. **Card** - For content organization
5. **LoadingSpinner** - For loading states
6. **FormField** - For form organization

## 📖 Learning Path

1. **Week 1**: Layout & UI Basics (Container, Header, Button, Card, Input)
2. **Week 2**: Forms (FormField, FormError, Select, Checkbox)
3. **Week 3**: Navigation (NavItem, Breadcrumbs, Header integration)
4. **Week 4**: Advanced (Modal, Toast, ErrorBoundary, ProtectedRoute)

Happy coding! 🚀
