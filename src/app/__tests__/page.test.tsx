/**
 * Home Page Tests
 * 
 * Tests for the main landing page including:
 * - Page r  it('has proper heading hierarchy', () => {
    render(<Home />)
    
    // Main heading should be h1
    expect(screen.getByRole('heading', { level: 1, name: /paper kite games/i })).toBeInTheDocument()
    
    // Section headings should be h2
    expect(screen.getByRole('heading', { level: 2, name: /what we do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /this is not a dungeon/i })).toBeInTheDocument()
  }) * - HeroSection integration
 * - Featured game section
 * - Navigation links
 * 
 * @test-file
 */

import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// Mock Next.js components
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

// Mock the HeroSection component
jest.mock('@/components/ui/HeroSection', () => ({
  HeroSection: ({ title, subtitle, primaryCta, secondaryCta }: {
    title: string;
    subtitle: string;
    primaryCta?: { text: string; href: string };
    secondaryCta?: { text: string; href: string };
  }) => (
    <div data-testid="hero-section">
      <h1>{title}</h1>
      <p>{subtitle}</p>
      {primaryCta && <a href={primaryCta.href}>{primaryCta.text}</a>}
      {secondaryCta && <a href={secondaryCta.href}>{secondaryCta.text}</a>}
    </div>
  )
}))

// Mock the Button component
jest.mock('@/components/ui/Button', () => ({
  Button: ({ children, variant, ...props }: {
    children: React.ReactNode;
    variant?: string;
    [key: string]: unknown;
  }) => (
    <button data-variant={variant} {...props}>{children}</button>
  )
}))

describe('Home Page', () => {
  it('renders the page without crashing', () => {
    render(<Home />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('displays the main company branding', () => {
    render(<Home />)
    
    expect(screen.getByText('Paper Kite Games')).toBeInTheDocument()
    expect(screen.getByText(/crafting immersive gaming experiences/i)).toBeInTheDocument()
  })

  it('shows primary and secondary CTAs', () => {
    render(<Home />)
    
    expect(screen.getByRole('link', { name: /explore our games/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn about us/i })).toBeInTheDocument()
  })

  it('displays the features section', () => {
    render(<Home />)
    
    expect(screen.getByText('What We Do')).toBeInTheDocument()
    expect(screen.getByText('Innovative Gameplay')).toBeInTheDocument()
    expect(screen.getByText('Player-Focused')).toBeInTheDocument()
    expect(screen.getByText('Quality Craftsmanship')).toBeInTheDocument()
  })

  it('showcases "This Is Not A Dungeon" game', () => {
    render(<Home />)
    
    expect(screen.getByText('This Is Not A Dungeon')).toBeInTheDocument()
    expect(screen.getByText(/comedic strategy base-defense game/i)).toBeInTheDocument()
  })

  it('has proper heading hierarchy', () => {
    render(<Home />)
    
    // Main title should be h1
    expect(screen.getByRole('heading', { level: 1, name: /paper kite games/i })).toBeInTheDocument()
    
    // Section headings should be h2
    expect(screen.getByRole('heading', { level: 2, name: /what we do/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: /our latest creation/i })).toBeInTheDocument()
  })

  it('includes game features and benefits', () => {
    render(<Home />)
    
    expect(screen.getByText(/strategic tower defense with a comedic twist/i)).toBeInTheDocument()
    expect(screen.getByText(/charming pixel art and witty dialogue/i)).toBeInTheDocument()
  })
  it('has call-to-action buttons for the featured game', () => {
    render(<Home />)

    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /wishlist soon/i })).toBeInTheDocument()
  })
  it('renders company logo', () => {
    render(<Home />)

    // Logo should contain "PK" initials within the HeroSection
    expect(screen.getByText('PK')).toBeInTheDocument()
  })
  it('has proper semantic structure', () => {
    render(<Home />)

    // Should have main sections (HeroSection uses section elements)
    const sections = screen.getAllByRole('banner')
    expect(sections.length).toBeGreaterThan(0)
  })

  it('includes accessibility features', () => {
    render(<Home />)
    
    // Images should have alt text (if any)
    const images = screen.queryAllByRole('img')
    images.forEach(img => {
      expect(img).toHaveAttribute('alt')
    })
    
    // Links should be accessible
    const links = screen.getAllByRole('link')
    links.forEach(link => {
      expect(link).toHaveAttribute('href')
    })
  })
})
