import { forwardRef } from 'react';
import { Container } from './Container';
import { ContainerProps } from '@/types/container';

/**
 * Specialized container for header/navigation areas.
 * 
 * Pre-configured for navigation bars with:
 * - Full width (`fluid`)
 * - Tight spacing for compact nav items
 * - Nav variant for proper semantic HTML
 * 
 * @example
 * ```tsx
 * <HeaderContainer>
 *   <nav className="flex justify-between items-center">
 *     <Logo />
 *     <NavItems />
 *   </nav>
 * </HeaderContainer>
 * ```
 */
export const HeaderContainer = forwardRef<
  HTMLElement,
  Omit<ContainerProps, 'variant' | 'spacing'>
>(function HeaderContainer(props, ref) {
  return (
    <Container
      ref={ref}
      as="header"
      variant="nav"
      spacing="tight"
      fluid
      {...props}
    />
  );
});

/**
 * Specialized container for main content areas.
 * 
 * Pre-configured for article content with:
 * - Large content width (4xl - 896px)
 * - Comfortable reading spacing
 * - Semantic main element
 * 
 * @example
 * ```tsx
 * <MainContainer>
 *   <h1>Article Title</h1>
 *   <p>Your main content here...</p>
 * </MainContainer>
 * ```
 */
export const MainContainer = forwardRef<
  HTMLElement,
  Omit<ContainerProps, 'variant' | 'as'>
>(function MainContainer(props, ref) {
  return (
    <Container
      ref={ref}
      as="main"
      variant="content"
      size="4xl"
      spacing="comfortable"
      {...props}
    />
  );
});

/**
 * Specialized container for page sections.
 * 
 * Pre-configured for section content with:
 * - Extra wide layout (6xl - 1152px)
 * - Loose spacing for breathing room
 * - Semantic section element
 * 
 * @example
 * ```tsx
 * <SectionContainer>
 *   <h2>Section Title</h2>
 *   <div className="grid grid-cols-3 gap-6">
 *     <FeatureCard />
 *     <FeatureCard />
 *     <FeatureCard />
 *   </div>
 * </SectionContainer>
 * ```
 */
export const SectionContainer = forwardRef<
  HTMLElement,
  Omit<ContainerProps, 'variant' | 'as'>
>(function SectionContainer(props, ref) {
  return (
    <Container
      ref={ref}
      as="section"
      variant="section"
      size="6xl"
      spacing="loose"
      {...props}
    />
  );
});

/**
 * Specialized container for footer areas.
 * 
 * Pre-configured for footer content with:
 * - Subtle background for visual separation
 * - Loose spacing for link groups
 * - Semantic footer element
 * 
 * @example
 * ```tsx
 * <FooterContainer>
 *   <div className="grid grid-cols-4 gap-8">
 *     <FooterColumn title="Company" links={companyLinks} />
 *     <FooterColumn title="Product" links={productLinks} />
 *     <FooterColumn title="Support" links={supportLinks} />
 *     <FooterColumn title="Legal" links={legalLinks} />
 *   </div>
 * </FooterContainer>
 * ```
 */
export const FooterContainer = forwardRef<
  HTMLElement,
  Omit<ContainerProps, 'variant' | 'spacing' | 'as'>
>(function FooterContainer(props, ref) {
  return (
    <Container
      ref={ref}
      as="footer"
      variant="section"
      spacing="loose"
      background="subtle"
      {...props}
    />
  );
});

/**
 * Specialized container for cards and elevated content.
 * 
 * Pre-configured for card-style content with:
 * - Card variant for proper styling
 * - Elevated background with shadow
 * - Comfortable padding for readability
 * 
 * @example
 * ```tsx
 * <CardContainer>
 *   <h3>Product Feature</h3>
 *   <p>Description of the feature...</p>
 *   <button>Learn More</button>
 * </CardContainer>
 * ```
 */
export const CardContainer = forwardRef<
  HTMLElement,
  Omit<ContainerProps, 'variant' | 'background'>
>(function CardContainer(props, ref) {
  return (
    <Container
      ref={ref}
      variant="card"
      background="card"
      spacing="comfortable"
      {...props}
    />
  );
});
