export interface Project {
  slug: string
  title: string
  summary: string
  description: string[]
  role: string
  highlights: string[]
  tags: string[]
  links: {
    info?: string
    github?: string
    demo?: string
  }
}

export const projects: Project[] = [
  {
    slug: 'maikai-rewards-app',
    title: 'Maikaʻi Rewards App',
    summary:
      'A mobile app allowing Foodland shoppers to easily manage their Maikaʻi reward points and apply them at checkout.',
    description: [
      'Replace with a paragraph describing the problem this project solved and who it was for.',
      'Replace with a paragraph describing your approach, key technical decisions, and any challenges you overcame.',
    ],
    role: 'Collaborative Project',
    highlights: [
      'Replace with a notable feature or technical highlight.',
      'Replace with a measurable outcome or result (e.g., performance, adoption, scale).',
      'Replace with another highlight worth calling out.',
    ],
    tags: ['React Native', 'TypeScript', 'Expo'],
    links: {
      info: 'https://www.bizjournals.com/pacific/news/2026/07/27/foodland-piiku-maikai-app-hawaii.html',
    },
  },
  {
    slug: 'manoa-now-app',
    title: 'Mānoa Now App',
    summary:
      'A mobile app for UH Mānoa students to explore campus resources, stay informed about events, and engage with student-made media.',
    description: [
      'Replace with a paragraph describing the problem this project solved and who it was for.',
      'Replace with a paragraph describing your approach, key technical decisions, and any challenges you overcame.',
    ],
    role: 'Collaborative Project',
    highlights: [
      'Replace with a notable feature or technical highlight.',
      'Replace with a measurable outcome or result (e.g., performance, adoption, scale).',
      'Replace with another highlight worth calling out.',
    ],
    tags: ['React Native', 'Firebase', 'Docker'],
    links: {
    },
  },
  {
    slug: 'budgeting-website',
    title: 'Budgeting App',
    summary:
      'A personal analytics dashboard that allows users to manually record their income and expenses and analyze their spending over time.',
    description: [
      'Replace with a paragraph describing the problem this project solved and who it was for.',
      'Replace with a paragraph describing your approach, key technical decisions, and any challenges you overcame.',
    ],
    role: 'Solo project',
    highlights: [
      'Replace with a notable feature or technical highlight.',
      'Replace with a measurable outcome or result (e.g., performance, adoption, scale).',
    ],
    tags: ['React Native', 'Firebase', 'Redux'],
    links: {
    },
  },
]

export interface MinorProject {
  title: string
  summary: string
  tags: string[]
  links: {
    info?: string
    github?: string
    demo?: string
  }
}

export const minorProjects: MinorProject[] = [
  {
    title: 'Mānoa Now Admin Board',
    summary: 'Improved a web app to manage and upload new content for the Mānoa Now mobile app with a refactored database architecture.',
    tags: ['React', 'TypeScript', 'Firebase'],
    links: {
    },
  },
  {
    title: 'UH Groupings API',
    summary: 'Contribute to the development of the open-source UH Groupings API, a backend with a RESTful API for managing and retrieving group information.',
    tags: ['SpringBoot', 'Java', 'Swagger', 'IAM'],
    links: {
      github: 'https://github.com/uhawaii-system-its-ti-iam/uh-groupings-api',
    },
  },
  {
    title: 'Judiciary Form Filler',
    summary: 'Research under Dr. Belcaid to develop a Claude skill that assists users in filling out Hawai`i judicial forms.',
    tags: ['Python', 'Claude', 'Pydantic', 'PydanticAI'],
    links: {
    },
  },
  {
    title: 'UH Pathfinder',
    summary: 'A web app to help UH students explore career opportunities and get personalized educational pathways.',
    tags: ['React', 'Flask', 'Supabase', 'Vercel'],
    links: {
    },
  },
  {
    title: 'Chess',
    summary: 'A recreation of the classic board game in Python.',
    tags: ['Python', 'OOP'],
    links: {
    },
  },
]
