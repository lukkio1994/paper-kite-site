/**
 * HeroSection Component Tests
 * 
 * Tests for the HeroSection component including:
 * - Rendering with different props
 * - CTA button functionality
 * - Background variants
 * - Accessibility features
 * 
 * @test-file
 */

import { render, screen } from '@testing-library/react'
import { HeroSection } from '@/components/ui/HeroSection'

// Mock Next.js Link component
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
  MockLink.displayName = 'MockLink'
  return MockLink
})

describe('HeroSection Component', () => {
  const defaultProps = {
    title: 'Test Title',
    subtitle: 'Test Subtitle',
    description: 'Test description text'
  }

  it('renders with required props', () => {
    render(<HeroSection {...defaultProps} />)
    
    expect(screen.getByRole('heading', { level: 1, name: /test title/i })).toBeInTheDocument()
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument()
    expect(screen.getByText('Test description text')).toBeInTheDocument()
  })

  it('renders logo when provided', () => {
    const logo = <div data-testid="test-logo">Logo</div>
    render(<HeroSection {...defaultProps} logo={logo} />)
    
    expect(screen.getByTestId('test-logo')).toBeInTheDocument()
  })

  it('renders primary CTA button', () => {
    const primaryCta = {
      text: 'Get Started',
      href: '/get-started'
    }
    
    render(<HeroSection {...defaultProps} primaryCta={primaryCta} />)
    
    const ctaButton = screen.getByRole('link', { name: /get started/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/get-started')
  })

  it('renders secondary CTA button', () => {
    const secondaryCta = {
      text: 'Learn More',
      href: '/learn-more'
    }
    
    render(<HeroSection {...defaultProps} secondaryCta={secondaryCta} />)
    
    const ctaButton = screen.getByRole('link', { name: /learn more/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', '/learn-more')
  })

  it('renders both CTA buttons when provided', () => {
    const primaryCta = { text: 'Get Started', href: '/start' }
    const secondaryCta = { text: 'Learn More', href: '/learn' }
    
    render(
      <HeroSection 
        {...defaultProps} 
        primaryCta={primaryCta} 
        secondaryCta={secondaryCta} 
      />
    )
    
    expect(screen.getByRole('link', { name: /get started/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('applies gradient background variant', () => {
    render(<HeroSection {...defaultProps} backgroundVariant="gradient" />)
    
    const section = screen.getByRole('banner')
    expect(section).toHaveClass('bg-gradient-to-br')
  })

  it('applies solid background variant', () => {
    render(<HeroSection {...defaultProps} backgroundVariant="solid" />)
    
    const section = screen.getByRole('banner')
    expect(section).toHaveClass('bg-white', 'dark:bg-gray-900')
  })

  it('applies custom className', () => {
    render(<HeroSection {...defaultProps} className="custom-hero-class" />)
    
    const section = screen.getByRole('banner')
    expect(section).toHaveClass('custom-hero-class')
  })

  it('has proper semantic structure', () => {
    render(<HeroSection {...defaultProps} />)
    
    // Should be wrapped in a section element
    const section = screen.getByRole('banner')
    expect(section.tagName).toBe('SECTION')
    
    // Title should be h1
    const title = screen.getByRole('heading', { level: 1 })
    expect(title).toBeInTheDocument()
  })

  it('centers content properly', () => {
    render(<HeroSection {...defaultProps} />)
    
    const contentContainer = screen.getByRole('banner').querySelector('.text-center')
    expect(contentContainer).toBeInTheDocument()
  })
})
