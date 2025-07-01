/**
 * Games Page Tests
 * 
 * Tests for the Games page component rendering and content.
 */

import { render, screen } from '@testing-library/react';
import Games from '../page';

describe('Games Page', () => {
  it('renders main heading', () => {
    render(<Games />);
    
    const heading = screen.getByRole('heading', { name: /our games/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders page description', () => {
    render(<Games />);
    
    const description = screen.getByText(/explore our collection of immersive gaming experiences/i);
    expect(description).toBeInTheDocument();
  });

  it('renders featured game section', () => {
    render(<Games />);
    
    const featuredBadge = screen.getByText('Featured Game');
    expect(featuredBadge).toBeInTheDocument();
  });

  it('renders "This Is Not A Dungeon" game details', () => {
    render(<Games />);
    
    const gameTitle = screen.getByRole('heading', { name: /this is not a dungeon/i });
    expect(gameTitle).toBeInTheDocument();
    
    // Look for the specific heading instead of the general text
    const gameDescription = screen.getByRole('heading', { name: /comedic base-defense strategy game/i });
    expect(gameDescription).toBeInTheDocument();
    
    // The micro-tagline appears in multiple places, so check for the specific one in the header
    const microTaglineElements = screen.getAllByText(/build\. defend\. survive\./i);
    expect(microTaglineElements.length).toBeGreaterThan(0);
  });

  it('renders game features', () => {
    render(<Games />);
    
    // Check for new key features
    expect(screen.getByText(/be the grumpy wizard/i)).toBeInTheDocument();
    expect(screen.getByText(/build traps & rearrange rooms/i)).toBeInTheDocument();
    expect(screen.getByText(/outsmart the heroes/i)).toBeInTheDocument();
    expect(screen.getByText(/comedy, chaos & quirky cast/i)).toBeInTheDocument();
  });

  it('renders development progress section', () => {
    render(<Games />);
    
    const progressHeading = screen.getByRole('heading', { name: /development progress/i });
    expect(progressHeading).toBeInTheDocument();
  });

  it('renders call to action buttons', () => {
    render(<Games />);
    
    const wishlistButton = screen.getByRole('link', { name: /wishlist on steam/i });
    expect(wishlistButton).toBeInTheDocument();
    
    const trailerButton = screen.getByRole('link', { name: /watch trailer/i });
    expect(trailerButton).toBeInTheDocument();
  });
  it('has proper semantic structure', () => {
    const { container } = render(<Games />);

    const sections = container.querySelectorAll('section');
    expect(sections).toHaveLength(4); // Hero, Featured Game, Development Progress, Newsletter
  });

  it('has responsive layout classes', () => {
    const { container } = render(<Games />);
    
    const responsiveContainers = container.querySelectorAll('.max-w-7xl');
    expect(responsiveContainers.length).toBeGreaterThan(0);
  });

  it('contains proper heading hierarchy', () => {
    render(<Games />);
    
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
    
    const h3Elements = screen.getAllByRole('heading', { level: 3 });
    expect(h3Elements.length).toBeGreaterThan(0);
  });

  it('renders hero image with correct attributes', () => {
    render(<Games />);
    
    const heroImage = screen.getByAltText(/promotional artwork for this is not a dungeon/i);
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', expect.stringContaining('tinad-hero.png'));
  });
});
