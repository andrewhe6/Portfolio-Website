import eastWestCenterLogo from '../images/eastwestcenter-logo.png'
import punahouLogo from '../images/punahou-logo.png'
import uhmanoaLogo from '../images/uhmanoa-logo.png'
import uhLogo from '../images/uh-logo.png'
import manoaNowLogo from '../images/manoanow-logo.png'
import foodlandLogo from '../images/foodland-logo.png'

export interface Experience {
  role: string
  company: string
  period: string
  bullets: string[]
  logo?: string
}

export const experience: Experience[] = [
  {
    role: 'Software Engineer Intern',
    company: 'Piʻikū Co. & Foodland | Cohort 5',
    period: 'July 2026 — October 2026',
    bullets: [
      'Collaborated in a cross-functional team to develop a new Maikaʻi Rewards mobile app for Foodland.',
      'Communicated and met weekly with a mentor, group members, and stakeholders to ensure timely delivery on all project requirements.',
    ],
    logo: foodlandLogo,
  },
  {
    role: 'Web App Developer',
    company: 'University of Hawaiʻi at Mānoa | Information Technology Services',
    period: 'May 2026 — Present',
    bullets: [
      'Developed and maintained the UH Groupings project, improving performance of backend grouping calculations by up to 1000 times.',
      'Implemented JWT exception handling to prevent unauthorized access to the application.',
    ],
    logo: uhLogo,
  },
  {
    role: 'Lead Software Developer',
    company: 'Mānoa Now | University of Hawaiʻi at Mānoa',
    period: 'Feb 2026 — Present',
    bullets: [
      'Led a group of developers in the implementation of an updated Mānoa Now mobile app to provide more features for students and improve user retention.',
      'Managed 6 websites for programs under Student Media Board including the Mānoa Now website, an admin board for the mobile app, and a content management system for Ka Leo O Hawaiʻi to promote program content to students.',
    ],
    logo: manoaNowLogo,
  },
  {
    role: 'Learning Assistant',
    company: 'University of Hawaiʻi at Mānoa | Computer Science Department',
    period: 'Sept 2025 — May 2026',
    bullets: [
      'Assisted a lab section of 40+ students in learning introductory computer science concepts in Java, achieving a confidence increase in 70% of students.',
      'Provided open tutor sessions twice a week to support student learning.',
    ],
    logo: uhmanoaLogo,
  },
  {
    role: 'IT Student Intern',
    company: 'Punahou School | Information Technology Department',
    period: 'Jan 2025 — April 2026',
    bullets: [
      'Developed a barcode scanning widget to streamline inventory management of 1,000+ devices.',
      'Wrote over 15+ documentation files and guides to support less tech-savvy users and explain inventory management processes for new faculty members.',
      'Securely wiped and reimaged 600+ MacBooks for summer school students, ensuring data privacy and device readiness.',
    ],
    logo: punahouLogo,
  },
  {
    role: 'Student Office Assistant',
    company: 'East-West Center | Seminars and Journalism Department',
    period: 'May 2024 — Jan 2026',
    bullets: [
      'Prepared program documents and materials for journalism events including Changing Faces, Korea-US Journalism Exchange, and International Media Conference to ensure smooth execution.',
      'Handled confidential applicant information and organized 150+ application files to facilitate the review process.',
    ],
    logo: eastWestCenterLogo,
  },
]
