import type { PersonalInfo } from './types';

export const personalInfo: PersonalInfo = {
  name: "Your Name",
  title: "Full Stack Developer",
  about: {
    short: "Brief introduction about yourself",
    long: `
      A longer, more detailed description about your background,
      experience, and interests. This can be multiple paragraphs.
    `,
  },
  skills: [
    { name: "React", level: "Advanced" },
    { name: "TypeScript", level: "Advanced" },
    // Add more skills
  ],
  experience: [
    {
      title: "Senior Developer",
      company: "Company Name",
      period: "2023-Present",
      description: "Key responsibilities and achievements",
    },
    // Add more experiences
  ],
} as const;