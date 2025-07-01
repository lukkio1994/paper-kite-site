/**
 * Button Component Tests
 * 
 * Tests for the reusable Button component including:
 * - Rendering with different variants
 * - Size variations
 * - Event handling
 * - Accessibility features
 * 
 * @test-file
 */

import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '@/components/ui/Button'

describe('Button Component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-brand-primary')
  })

  it('renders with different variants', () => {
    const { rerender } = render(<Button variant="secondary">Secondary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-brand-secondary')

    rerender(<Button variant="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border-brand-primary')

    rerender(<Button variant="ghost">Ghost</Button>)
    expect(screen.getByRole('button')).toHaveClass('hover:bg-blue-50')
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-3', 'py-1.5', 'text-sm')

    rerender(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-6', 'py-3', 'text-base')

    rerender(<Button size="xl">Extra Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-8', 'py-4', 'text-lg')
  })

  it('handles click events', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50', 'disabled:cursor-not-allowed')
  })

  it('shows loading state', () => {
    render(<Button loading>Loading</Button>)
    const button = screen.getByRole('button')
    
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-wait')
    
    // Check for loading spinner
    const spinner = button.querySelector('svg')
    expect(spinner).toBeInTheDocument()
    expect(spinner).toHaveClass('animate-spin')
  })

  it('renders with full width', () => {
    render(<Button fullWidth>Full Width</Button>)
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })

  it('has proper accessibility attributes', () => {
    render(
      <Button aria-label="Custom label" type="submit">
        Submit
      </Button>
    )
    const button = screen.getByRole('button')
    
    expect(button).toHaveAttribute('aria-label', 'Custom label')
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    expect(screen.getByRole('button')).toHaveClass('custom-class')
  })

  it('forwards ref correctly', () => {
    const ref = jest.fn()
    render(<Button ref={ref}>Button with ref</Button>)
    expect(ref).toHaveBeenCalled()
  })

  it('handles edge cases and error conditions', () => {
    // Test with both loading and disabled
    render(<Button loading disabled>Loading & Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('cursor-wait')
  })

  it('handles click events when disabled', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} disabled>Disabled Button</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('handles click events when loading', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} loading>Loading Button</Button>)
    
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('preserves other HTML attributes', () => {
    render(
      <Button 
        data-testid="custom-button" 
        tabIndex={-1}
        role="button"
        title="Custom title"
      >
        Custom Button
      </Button>
    )
    
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-testid', 'custom-button')
    expect(button).toHaveAttribute('tabIndex', '-1')
    expect(button).toHaveAttribute('title', 'Custom title')
  })
})
