/**
 * TeamMemberList Component
 * 
 * Dynamic component that renders all team members from the translations array.
 * Automatically handles social media links - only shows icons when URLs are provided.
 * 
 * Features:
 * - Reads team members from translations array
 * - Dynamic social media icons (only shows when URL is provided)
 * - Custom gradient colors per member
 * - Responsive grid layout
 * - Accessibility features
 * - Easy to maintain via JSON configuration
 * 
 * Usage:
 * <TeamMemberList />
 */

'use client';

import { useTranslations } from 'next-intl';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  initials: string;
  gradientFrom: string;
  gradientTo: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    discord?: string;
    instagram?: string;
  };
}

const TeamMemberList = () => {
  const t = useTranslations('about');
  
  // Get team members array from translations
  const teamMembers: TeamMember[] = JSON.parse(JSON.stringify(t.raw('team.members')));

  const socialIcons = {
    linkedin: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      hoverColor: 'hover:text-blue-600'
    },
    twitter: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      hoverColor: 'hover:text-black dark:hover:text-white'
    },
    discord: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z"/>
        </svg>
      ),
      hoverColor: 'hover:text-indigo-600'
    },
    instagram: {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.52.204 5.019.385c-.516.197-.897.434-1.294.832-.397.397-.635.778-.832 1.294-.181.5-.303 1.074-.337 2.021C2.513 5.99 2.5 6.397 2.5 10.017s.013 4.027.048 4.975c.034.947.156 1.521.337 2.021.197.516.434.897.832 1.294.397.397.778.635 1.294.832.5.181 1.074.303 2.021.337.948.035 1.355.048 4.975.048s4.027-.013 4.975-.048c.947-.034 1.521-.156 2.021-.337.516-.197.897-.434 1.294-.832.397-.397.635-.778.832-1.294.181-.5.303-1.074.337-2.021.035-.948.048-1.355.048-4.975s-.013-4.027-.048-4.975c-.034-.947-.156-1.521-.337-2.021-.197-.516-.434-.897-.832-1.294C19.229.82 18.848.583 18.332.386c-.5-.181-1.074-.303-2.021-.337C15.363.013 14.956 0 11.336 0h.681zm-.681 2.164c3.534 0 3.95.013 5.344.048.904.034 1.395.156 1.723.26.433.168.742.369 1.067.693.324.325.526.634.693 1.067.104.328.226.819.26 1.723.035 1.394.048 1.81.048 5.344s-.013 3.95-.048 5.344c-.034.904-.156 1.395-.26 1.723a2.878 2.878 0 01-.693 1.067c-.325.324-.634.526-1.067.693-.328.104-.819.226-1.723.26-1.394.035-1.81.048-5.344.048s-3.95-.013-5.344-.048c-.904-.034-1.395-.156-1.723-.26a2.878 2.878 0 01-1.067-.693 2.878 2.878 0 01-.693-1.067c-.104-.328-.226-.819-.26-1.723-.035-1.394-.048-1.81-.048-5.344s.013-3.95.048-5.344c.034-.904.156-1.395.26-1.723.168-.433.369-.742.693-1.067a2.878 2.878 0 011.067-.693c.328-.104.819-.226 1.723-.26 1.394-.035 1.81-.048 5.344-.048z"/>
          <path d="M12.017 5.838a6.179 6.179 0 100 12.358 6.179 6.179 0 000-12.358zM12.017 16a4 4 0 110-8 4 4 0 010 8z"/>
          <path d="M19.846 5.595a1.441 1.441 0 11-2.883 0 1.441 1.441 0 012.883 0z"/>
        </svg>
      ),
      hoverColor: 'hover:text-pink-600'
    }
  };

  // Helper function to check if a social URL is valid
  const isValidSocialUrl = (url: string | undefined): boolean => {
    return !!(url && url.trim() !== '' && url !== '#');
  };

  // Helper function to get valid social links for a member
  const getValidSocials = (socials: TeamMember['socials']) => {
    return Object.entries(socials).filter(([, url]) => isValidSocialUrl(url));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {teamMembers.map((member) => {
        const validSocials = getValidSocials(member.socials);
        
        return (
          <div key={member.id} className="text-center">
            {/* Avatar */}
            <div className={`w-32 h-32 bg-gradient-to-br from-${member.gradientFrom} to-${member.gradientTo} rounded-full mx-auto mb-4 flex items-center justify-center`}>
              <span className="text-white font-bold text-xl">
                {member.initials}
              </span>
            </div>
            
            {/* Name */}
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {member.name}
            </h3>
            
            {/* Role */}
            <p className="text-blue-600 dark:text-blue-400 mb-2">
              {member.role}
            </p>
            
            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              {member.description}
            </p>
            
            {/* Social Links - Only show if there are valid social links */}
            {validSocials.length > 0 && (
              <div className="flex justify-center space-x-3">
                {validSocials.map(([platform, url]) => {
                  const socialConfig = socialIcons[platform as keyof typeof socialIcons];
                  
                  if (!socialConfig) return null;
                  
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${socialConfig.hoverColor} transition-colors`}
                      aria-label={`${member.name} ${platform.charAt(0).toUpperCase() + platform.slice(1)}`}
                    >
                      {socialConfig.icon}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TeamMemberList;
