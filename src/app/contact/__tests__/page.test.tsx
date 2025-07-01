/**
 * Contact Page Tests
 * 
 * Tests for the Contact page component rendering and content.
 */

import { render, screen } from '@testing-library/react';
import Contact from '../page';
import { CONTACT_INFO } from '@/lib/constants';

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
    
    // Check the form by finding its submit button and traversing to form
    const submitButton = screen.getByRole('button', { name: /send message/i });
    const form = submitButton.closest('form');
    expect(form).toBeInTheDocument();
    
    // Check form fields
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/subject/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    
    // Check submit button
    expect(submitButton).toBeInTheDocument();
  });

  it('renders contact information section', () => {
    render(<Contact />);
    
    const contactHeading = screen.getByRole('heading', { name: /other ways to reach us/i });
    expect(contactHeading).toBeInTheDocument();
    
    expect(screen.getAllByText(CONTACT_INFO.email)).toHaveLength(2); // Should appear in contact info and FAQ
    expect(screen.getByText(/twitter: @paperkitegames/i)).toBeInTheDocument();
  });

  it('renders FAQ section', () => {
    render(<Contact />);
    
    const faqHeading = screen.getByRole('heading', { name: /frequently asked questions/i });
    expect(faqHeading).toBeInTheDocument();
  });

  it('renders FAQ questions with "This Is Not A Dungeon" references', () => {
    render(<Contact />);
    
    const gameQuestion = screen.getByText(/when will this is not a dungeon be released/i);
    expect(gameQuestion).toBeInTheDocument();
    
    const platformQuestion = screen.getByText(/what platforms will your games be available on/i);
    expect(platformQuestion).toBeInTheDocument();
  });

  it('renders social media links', () => {
    render(<Contact />);
    
    const socialHeading = screen.getByRole('heading', { name: /social media/i });
    expect(socialHeading).toBeInTheDocument();
    
    const twitterLink = screen.getByText(/twitter: @paperkitegames/i);
    expect(twitterLink).toBeInTheDocument();
    
    const discordLink = screen.getByText(/discord: paper kite games community/i);
    expect(discordLink).toBeInTheDocument();
    
    const redditLink = screen.getByText(/reddit: r\/paperkitegames/i);
    expect(redditLink).toBeInTheDocument();
  });

  it('has proper form accessibility', () => {
    render(<Contact />);
    
    // Check that all form inputs have proper labels
    const nameInput = screen.getByLabelText(/full name/i);
    expect(nameInput).toHaveAttribute('required');
    
    const emailInput = screen.getByLabelText(/email address/i);
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(emailInput).toHaveAttribute('required');
    
    const messageTextarea = screen.getByLabelText(/message/i);
    expect(messageTextarea).toHaveAttribute('required');
  });

  it('has proper semantic structure', () => {
    const { container } = render(<Contact />);
    
    const sections = container.querySelectorAll('section');
    expect(sections).toHaveLength(3); // Hero, Contact Info, FAQ
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
