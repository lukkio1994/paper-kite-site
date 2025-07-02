// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Mock next-intl to avoid ESM issues
jest.mock('next-intl', () => ({
  useTranslations: jest.fn((namespace) => {
    const mockTranslations = {
      'common.companyName': 'Paper Kite Games',
      'navigation.home': 'Home',
      'navigation.about': 'About', 
      'navigation.games': 'Games',
      'navigation.contact': 'Contact',
      'about.team.members.testmember.name': 'Test Member',
      'about.team.members.testmember.role': 'Test Role',
      'about.team.members.testmember.description': 'Test description for the team member.',
      'about.team.members.testmember.initials': 'TM',
      'about.team.members.testmember.socials.linkedin': 'https://linkedin.com/in/test',
      'about.team.members.testmember.socials.twitter': 'https://twitter.com/test',
      'about.team.members.testmember.socials.discord': '',
      'about.team.members.testmember.socials.instagram': 'https://instagram.com/test',
      'team.members.testmember.name': 'Test Member',
      'team.members.testmember.role': 'Test Role',
      'team.members.testmember.description': 'Test description for the team member.',
      'team.members.testmember.initials': 'TM',
      'team.members.testmember.socials.linkedin': 'https://linkedin.com/in/test',
      'team.members.testmember.socials.twitter': 'https://twitter.com/test',
      'team.members.testmember.socials.discord': '',
      'team.members.testmember.socials.instagram': 'https://instagram.com/test'
    };
    
    return (key) => {
      const fullKey = namespace ? `${namespace}.${key}` : key;
      return mockTranslations[fullKey] || '';
    };
  }),
  useLocale: jest.fn(() => 'en'),
  NextIntlClientProvider: ({ children }) => children,
}))

jest.mock('next-intl/server', () => ({
  getTranslations: jest.fn(() => (key) => key),
  getLocale: jest.fn(() => 'en'),
  setRequestLocale: jest.fn(),
  getRequestConfig: jest.fn(),
}))

// Mock Next.js redirect function to prevent NEXT_REDIRECT errors in tests
jest.mock('next/navigation', () => ({
  redirect: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
    replace: jest.fn(),
    back: jest.fn(),
  })),
  usePathname: jest.fn(() => '/'),
}))
