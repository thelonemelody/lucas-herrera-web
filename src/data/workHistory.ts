import type { Job } from '../types';

export const workHistory: Job[] = [
  {
    id: '1',
    company: 'Example Company',
    title: 'Senior Software Engineer',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Lead development of web applications and mentor junior developers. Replace this with your actual work history.',
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS'],
    achievements: [
      'Led migration to microservices architecture',
      'Reduced deployment time by 60%',
      'Mentored 3 junior developers',
    ],
  },
  {
    id: '2',
    company: 'Previous Company',
    title: 'Software Engineer',
    startDate: 'Jun 2020',
    endDate: 'Dec 2022',
    description: 'Developed and maintained full-stack web applications for enterprise clients.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    achievements: [
      'Implemented CI/CD pipeline',
      'Built customer-facing dashboard used by 10,000+ users',
      'Optimized database queries reducing load times by 40%',
    ],
  },
  {
    id: '3',
    company: 'First Job Inc',
    title: 'Junior Developer',
    startDate: 'Jan 2018',
    endDate: 'May 2020',
    description: 'Started career building internal tools and learning best practices.',
    technologies: ['JavaScript', 'React', 'MySQL'],
    achievements: [
      'Built internal inventory management system',
      'Automated reporting processes',
    ],
  },
];
