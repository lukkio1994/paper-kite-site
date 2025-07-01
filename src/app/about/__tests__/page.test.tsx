/**
 * About Page Tests
 * 
 * Tests for the About page component rendering and content.
 * Includes tests for the official mission statement.
 */

import { render, screen } from '@testing-library/react';
import About from '../page';
import { BRAND_CONTENT } from '@/lib/constants';

describe('About Page', () => {
  it('renders main heading', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', { name: /about paper kite games/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<About />);
    
    const description = screen.getByText(/we are an indie game development studio/i);
    expect(description).toBeInTheDocument();
  });

  it('renders mission section with official mission statement', () => {
    render(<About />);
    
    const missionHeading = screen.getByRole('heading', { name: /our mission/i });
    expect(missionHeading).toBeInTheDocument();
    
    // Check for the official mission statement
    expect(screen.getByText(BRAND_CONTENT.missionStatement)).toBeInTheDocument();
  });

  it('renders values section with all three values', () => {
    render(<About />);
    
    const valuesHeading = screen.getByRole('heading', { name: /our values/i });
    expect(valuesHeading).toBeInTheDocument();
    
    expect(screen.getByText('Innovation')).toBeInTheDocument();
    expect(screen.getByText('Passion')).toBeInTheDocument();
    expect(screen.getByText('Community')).toBeInTheDocument();
  });

  it('renders team section with placeholder team members', () => {
    render(<About />);
    
    const teamHeading = screen.getByRole('heading', { name: /meet our team/i });
    expect(teamHeading).toBeInTheDocument();
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('Alex Brown')).toBeInTheDocument();
    
    expect(screen.getByText('Game Designer & Founder')).toBeInTheDocument();
    expect(screen.getByText('Lead Developer')).toBeInTheDocument();
    expect(screen.getByText('Art Director')).toBeInTheDocument();
  });

  it('renders call to action section', () => {
    render(<About />);
    
    const ctaHeading = screen.getByRole('heading', { name: /join our journey/i });
    expect(ctaHeading).toBeInTheDocument();
    
    const blogLink = screen.getByRole('link', { name: /follow our blog/i });
    expect(blogLink).toBeInTheDocument();
    
    const discordLink = screen.getByRole('link', { name: /join discord/i });
    expect(discordLink).toBeInTheDocument();
  });

  it('has proper semantic structure', () => {
    const { container } = render(<About />);
    
    const sections = container.querySelectorAll('section');
    expect(sections).toHaveLength(5); // Hero, Mission, Values, Team, CTA
  });

  it('has responsive layout classes', () => {
    const { container } = render(<About />);
    
    const responsiveContainers = container.querySelectorAll('.max-w-7xl');
    expect(responsiveContainers.length).toBeGreaterThan(0);
  });

  it('contains proper accessibility features', () => {
    render(<About />);
    
    // Check for proper heading hierarchy
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
    
    const h3Elements = screen.getAllByRole('heading', { level: 3 });
    expect(h3Elements.length).toBeGreaterThan(0);
  });
});
