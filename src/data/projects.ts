import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Example Project',
    description: 'A sample project to demonstrate the portfolio. Replace this with your actual projects.',
    techStack: ['React', 'TypeScript', 'Tailwind CSS'],
    githubUrl: 'https://github.com/username/project',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Another Project',
    description: 'Another example project. Add your real projects here.',
    techStack: ['Python', 'FastAPI', 'PostgreSQL'],
    githubUrl: 'https://github.com/username/another-project',
    featured: true,
  },
  {
    id: '3',
    title: 'Third Project',
    description: 'A third example to show the grid layout.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com/username/third-project',
    featured: false,
  },
];
