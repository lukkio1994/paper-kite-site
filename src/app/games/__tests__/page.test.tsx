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
    
    const gameDescription = screen.getByText(/a comedic strategy base-defense adventure/i);
    expect(gameDescription).toBeInTheDocument();
  });

  it('renders game features', () => {
    render(<Games />);
    
    expect(screen.getByText(/strategic tower defense mechanics with humorous twists/i)).toBeInTheDocument();
    expect(screen.getByText(/charming pixel art style with detailed animations/i)).toBeInTheDocument();
    expect(screen.getByText(/clever puzzle elements and tactical gameplay/i)).toBeInTheDocument();
    expect(screen.getByText(/witty dialogue and comedic storyline/i)).toBeInTheDocument();
  });

  it('renders development progress section', () => {
    render(<Games />);
    
    const progressHeading = screen.getByRole('heading', { name: /development progress/i });
    expect(progressHeading).toBeInTheDocument();
    
    const futureProjectsHeading = screen.getByRole('heading', { name: /future projects/i });
    expect(futureProjectsHeading).toBeInTheDocument();
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
    expect(sections).toHaveLength(5); // Hero, Featured Game, Development Progress, Future Projects, Newsletter
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
});
