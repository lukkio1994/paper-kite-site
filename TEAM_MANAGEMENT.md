# Team Management Guide

This guide explains how to manage team members on the Paper Kite Games website.

## Adding a New Team Member

To add a new team member, you need to update the translations file and optionally use the reusable component.

### Step 1: Add Team Member Data to Translations

Edit `/messages/en.json` and add a new member to the `about.team.members` section:

```json
{
  "about": {
    "team": {
      "members": {
        "newmember": {
          "name": "New Member Name",
          "role": "Their Job Title",
          "description": "Brief description of their role and expertise.",
          "initials": "NM",
          "socials": {
            "linkedin": "https://linkedin.com/in/username",
            "twitter": "https://twitter.com/username",
            "discord": "https://discord.gg/username",
            "instagram": "https://instagram.com/username"
          }
        }
      }
    }
  }
}
```

### Step 2: Add to About Page

#### Option A: Using the TeamMember Component (Recommended)

Import and use the reusable component in `/src/app/[locale]/about/page.tsx`:

```tsx
import TeamMember from '@/components/TeamMember';

// In the team section:
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  <TeamMember memberKey="david" gradientFrom="blue-400" gradientTo="purple-500" />
  <TeamMember memberKey="luis" gradientFrom="green-400" gradientTo="blue-500" />
  <TeamMember memberKey="carlos" gradientFrom="purple-400" gradientTo="pink-500" />
  <TeamMember memberKey="newmember" gradientFrom="yellow-400" gradientTo="red-500" />
</div>
```

#### Option B: Manual HTML (if you need custom styling)

Add the full HTML structure manually following the existing pattern.

### Step 3: Customize Avatar Colors

Choose gradient colors for the avatar background:

- `from-blue-400 to-purple-500` (Blue to Purple)
- `from-green-400 to-blue-500` (Green to Blue)
- `from-purple-400 to-pink-500` (Purple to Pink)
- `from-yellow-400 to-red-500` (Yellow to Red)
- `from-indigo-400 to-cyan-500` (Indigo to Cyan)
- `from-pink-400 to-rose-500` (Pink to Rose)

## Current Team Members

### David Leon
- **Role**: Senior Developer
- **Key**: `david`
- **Gradient**: Blue to Purple

### Luis Sequeira
- **Role**: Lead Developer
- **Key**: `luis`
- **Gradient**: Green to Blue

### Carlos Sequeira
- **Role**: UI/UX Designer
- **Key**: `carlos`
- **Gradient**: Purple to Pink

## Social Media Guidelines

### Supported Platforms
- **LinkedIn**: Professional networking
- **Twitter/X**: General updates and tech discussions
- **Discord**: Community engagement
- **Instagram**: Personal/creative content

### Adding Social Links
1. Add the full URL to the translations file
2. Leave empty string `""` if the platform is not used
3. The component will automatically disable non-functional links

### Example Social Configuration
```json
"socials": {
  "linkedin": "https://linkedin.com/in/johndoe",
  "twitter": "https://twitter.com/johndoe",
  "discord": "", // Not used - will be disabled
  "instagram": "https://instagram.com/johndoe"
}
```

## Removing a Team Member

1. Remove their entry from `/messages/en.json`
2. Remove their `<TeamMember />` component from the About page
3. Update any references to them in other files if necessary

## Multi-language Support

When adding support for other languages (Spanish, French, etc.):

1. Create corresponding translation files (`es.json`, `fr.json`)
2. Translate all team member information
3. Keep the same structure and keys as `en.json`

## Best Practices

- Keep descriptions concise (1-2 sentences)
- Use professional profile photos if available (replace gradient avatars)
- Ensure social media links are current and active
- Use consistent formatting for roles/titles
- Test all social media links before deploying

## Component Features

The `TeamMember` component includes:
- ✅ Gradient avatar with initials
- ✅ Responsive design
- ✅ Hover effects on social icons
- ✅ Accessibility features (ARIA labels)
- ✅ Automatic link validation
- ✅ Dark mode support
- ✅ Easy customization via props

This system makes it very easy to manage team members without touching complex HTML or CSS!
