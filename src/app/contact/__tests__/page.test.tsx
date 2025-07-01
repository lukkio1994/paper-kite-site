/**
 * Contact Page Tests
 * 
 * Tests for the Contact page component rendering and content.
 */

import { render, screen } from '@testing-library/react';
import Contact from '../page';

describe('Contact Page', () => {
  it('renders main heading', () => {
    render(<Contact />);
    
    const heading = screen.getByRole('heading', { name: /get in touch/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders page description', () => {
    render(<Contact />);
    
    const description = screen.getByText(/we'd love to hear from you/i);
    expect(description).toBeInTheDocument();
  });

  it('renders contact form', () => {
    render(<Contact />);
    
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    
    // Check submit button
    const submitButton = screen.getByRole('button', { name: /send message/i });
    expect(submitButton).toBeInTheDocument();
  });

  it('renders contact information section', () => {
    render(<Contact />);
    
    const contactHeading = screen.getByRole('heading', { name: /contact information/i });
    expect(contactHeading).toBeInTheDocument();
    
    expect(screen.getByText(/business inquiries/i)).toBeInTheDocument();
    expect(screen.getByText(/press & media/i)).toBeInTheDocument();
    expect(screen.getByText(/support/i)).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Contact />);
    
    const faqHeading = screen.getByRole('heading', { name: /frequently asked questions/i });
    expect(faqHeading).toBeInTheDocument();
  });

  it('renders FAQ questions with "This Is Not A Dungeon" references', () => {
    render(<Contact />);
    
    const gameQuestion = screen.getByText(/when will.*this is not a dungeon.*be released/i);
    expect(gameQuestion).toBeInTheDocument();
    
    const platformQuestion = screen.getByText(/what platforms will.*this is not a dungeon.*be available on/i);
    expect(platformQuestion).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Contact />);
    
    const socialHeading = screen.getByRole('heading', { name: /follow us/i });
    expect(socialHeading).toBeInTheDocument();
    
    const twitterLink = screen.getByText(/twitter/i);
    expect(twitterLink).toBeInTheDocument();
    
    const discordLink = screen.getByText(/discord/i);
    expect(discordLink).toBeInTheDocument();
    
    const youtubeLink = screen.getByText(/youtube/i);
    expect(youtubeLink).toBeInTheDocument();
  });

  it('has proper form accessibility', () => {
    render(<Contact />);
    
    // Check that all form inputs have proper labels
    const nameInput = screen.getByLabelText(/name/i);
    expect(nameInput).toHaveAttribute('required');
    
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
    
    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toHaveAttribute('required');
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Contact />);
    
    const sections = container.querySelectorAll('section');
    expect(sections).toHaveLength(4); // Hero, Contact Info, FAQ, Social
  });

  it('has responsive layout classes', () => {
    const { container } = render(<Contact />);
    
    const responsiveContainers = container.querySelectorAll('.max-w-7xl');
    expect(responsiveContainers.length).toBeGreaterThan(0);
  });

  it('contains proper heading hierarchy', () => {
    render(<Contact />);
    
    const h1 = screen.getByRole('heading', { level: 1 });
    expect(h1).toBeInTheDocument();
    
    const h2Elements = screen.getAllByRole('heading', { level: 2 });
    expect(h2Elements.length).toBeGreaterThan(0);
  });
});
