import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    name: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'C++', 'Rust', 'SQL'],
  },
  {
    id: 'hardware',
    name: 'Hardware',
    skills: ['Arduino', 'Raspberry Pi', 'FPGA', 'Circuit Design', 'Embedded Systems'],
  },
  {
    id: 'software',
    name: 'Software',
    skills: ['React', 'Node.js', 'Docker', 'Git', 'Linux', 'AWS', 'PostgreSQL'],
  },
  {
    id: 'leadership',
    name: 'Leadership',
    skills: ['Team Management', 'Mentoring', 'Agile/Scrum', 'Code Review', 'Technical Writing'],
  },
];

// Add new categories by adding objects to the array above
