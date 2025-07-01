/**
 * Footer Component Tests
 * 
 * Tests for the Footer component functionality, rendering, and accessibility.
 * Includes tests for the new brand tagline.
 */

import { render, screen } from '@testing-library/react';
import Footer from '../Footer';
import { BRAND_CONTENT } from '@/lib/constants';

describe('Footer', () => {
  it('renders copyright text', () => {
    render(<Footer />);
    
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(`© ${currentYear} Paper Kite Games. All rights reserved.`);
    
    expect(copyrightText).toBeInTheDocument();
  });

  it('renders brand tagline', () => {
    render(<Footer />);
    
    expect(screen.getByText(BRAND_CONTENT.tagline)).toBeInTheDocument();
  });

  it('renders social media links with proper accessibility', () => {
    render(<Footer />);
    
    // Check for Twitter link
    const twitterLink = screen.getByLabelText('Follow us on Twitter');
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute('href', '#');

    // Check for Discord link
    const discordLink = screen.getByLabelText('Follow us on Discord');
    expect(discordLink).toBeInTheDocument();
    expect(discordLink).toHaveAttribute('href', '#');

    // Check for GitHub link
    const githubLink = screen.getByLabelText('Follow us on GitHub');
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', '#');
  });

  it('renders footer links', () => {
    render(<Footer />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Support')).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Footer />);
    
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass('bg-gray-50', 'dark:bg-gray-800', 'border-t');
  });

  it('has responsive layout classes', () => {
    const { container } = render(<Footer />);
    
    const footerContent = container.querySelector('.max-w-7xl');
    expect(footerContent).toBeInTheDocument();
    expect(footerContent).toHaveClass('mx-auto', 'px-4', 'sm:px-6', 'lg:px-8');
  });

  it('renders social media icons', () => {
    render(<Footer />);
    
    // Check that social links are present (svg icons are hidden from screen readers)
    const twitterLink = screen.getByLabelText('Follow us on Twitter');
    const discordLink = screen.getByLabelText('Follow us on Discord');
    const githubLink = screen.getByLabelText('Follow us on GitHub');
    
    expect(twitterLink).toBeInTheDocument();
    expect(discordLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
  });
});
