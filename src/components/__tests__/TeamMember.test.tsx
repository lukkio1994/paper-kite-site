/**
 * TeamMember Component Tests
 * 
 * Tests for the reusable TeamMember component used in the About page.
 */

import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import TeamMember from '../TeamMember';

// Mock translations for testing
const mockMessages = {
  about: {
    team: {
      members: {
        testmember: {
          name: 'Test Member',
          role: 'Test Role',
          description: 'Test description for the team member.',
          initials: 'TM',
          socials: {
            linkedin: 'https://linkedin.com/in/test',
            twitter: 'https://twitter.com/test',
            discord: '',
            instagram: 'https://instagram.com/test'
          }
        }
      }
    }
  }
};

const renderWithIntl = (component: React.ReactElement) => {
  return render(
    <NextIntlClientProvider messages={mockMessages} locale="en">
      {component}
    </NextIntlClientProvider>
  );
};

describe('TeamMember Component', () => {
  it('renders team member information correctly', () => {
    renderWithIntl(<TeamMember memberKey="testmember" />);
    
    expect(screen.getByText('Test Member')).toBeInTheDocument();
    expect(screen.getByText('Test Role')).toBeInTheDocument();
    expect(screen.getByText('Test description for the team member.')).toBeInTheDocument();
    expect(screen.getByText('TM')).toBeInTheDocument();
  });

  it('renders social media links', () => {
    renderWithIntl(<TeamMember memberKey="testmember" />);
    
    const linkedinLink = screen.getByLabelText('Test Member LinkedIn');
    const twitterLink = screen.getByLabelText('Test Member Twitter');
    const discordLink = screen.getByLabelText('Test Member Discord');
    const instagramLink = screen.getByLabelText('Test Member Instagram');
    
    expect(linkedinLink).toBeInTheDocument();
    expect(twitterLink).toBeInTheDocument();
    expect(discordLink).toBeInTheDocument();
    expect(instagramLink).toBeInTheDocument();
    
    expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/test');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/test');
    expect(discordLink).toHaveAttribute('href', '#'); // Empty social should default to #
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/test');
  });

  it('applies custom gradient colors', () => {
    renderWithIntl(
      <TeamMember 
        memberKey="testmember" 
        gradientFrom="red-400" 
        gradientTo="yellow-500" 
      />
    );
    
    const avatar = screen.getByText('TM').parentElement;
    expect(avatar).toHaveClass('from-red-400', 'to-yellow-500');
  });

  it('disables empty social links', () => {
    renderWithIntl(<TeamMember memberKey="testmember" />);
    
    const discordLink = screen.getByLabelText('Test Member Discord');
    expect(discordLink).toHaveClass('cursor-not-allowed', 'opacity-50');
  });

  it('has proper accessibility labels', () => {
    renderWithIntl(<TeamMember memberKey="testmember" />);
    
    expect(screen.getByLabelText('Test Member LinkedIn')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Member Twitter')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Member Discord')).toBeInTheDocument();
    expect(screen.getByLabelText('Test Member Instagram')).toBeInTheDocument();
  });
});
