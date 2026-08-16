export const socialLinks = {
  email: {
    href: 'mailto:andrewhe9264@gmail.com',
    icon: 'envelope-fill',
    label: 'Email',
    display: 'andrewhe9264@gmail.com',
  },
  github: {
    href: 'https://github.com/andrewhe6',
    icon: 'github',
    label: 'GitHub',
    display: 'github.com/andrewhe6',
  },
  linkedin: {
    href: 'https://linkedin.com/in/andrewhe-cs/',
    icon: 'linkedin',
    label: 'LinkedIn',
    display: 'linkedin.com/in/andrewhe-cs/',
  },
} as const

export type SocialKey = keyof typeof socialLinks
