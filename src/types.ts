export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface Job {
  id: string;
  company: string;
  logo?: string;
  title: string;
  startDate: string;
  endDate: string | 'Present';
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface LearningItem {
  name: string;
  description?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  mood?: string;
  content: string;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  mood?: string;
}
