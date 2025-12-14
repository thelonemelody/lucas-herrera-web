import type { BlogPost, BlogPostMeta } from '../types';

// Sample blog posts - in a real app, these would be loaded from markdown files
// For now, we'll use static data that you can replace with actual content

const samplePosts: BlogPost[] = [
  {
    slug: '2025-01-15-getting-started',
    title: 'Getting Started with My Daily Blog',
    date: 'January 15, 2025',
    excerpt: 'Today marks the beginning of my daily blog journey where I document my work and reflections.',
    tags: ['personal', 'goals'],
    mood: 'excited',
    content: `
      <h2>What I Worked On</h2>
      <p>Today I set up this website! It's been a project I've been meaning to do for a while, and I'm excited to finally have a place to share my work and thoughts.</p>

      <h2>Reflections</h2>
      <p>Building a personal website is a great exercise in thinking about how you want to present yourself to the world. It forces you to reflect on what's important to you and what you want to share.</p>

      <h2>Tomorrow's Goals</h2>
      <ul>
        <li>Add more projects to the portfolio</li>
        <li>Write about a technical topic</li>
        <li>Update the work history with more details</li>
      </ul>
    `,
  },
  {
    slug: '2025-01-16-learning-react',
    title: 'Deep Dive into React Patterns',
    date: 'January 16, 2025',
    excerpt: 'Exploring advanced React patterns and how they can improve code organization.',
    tags: ['react', 'learning', 'web-dev'],
    mood: 'productive',
    content: `
      <h2>What I Worked On</h2>
      <p>Spent the day exploring compound components and render props patterns in React. These patterns are powerful for creating flexible, reusable components.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Compound components work great for related UI elements</li>
        <li>Render props provide maximum flexibility</li>
        <li>Hooks have replaced many use cases for these patterns</li>
      </ul>

      <h2>Reflections</h2>
      <p>Sometimes the "older" patterns are still the best solution for certain problems. It's important to have multiple tools in your toolbox.</p>
    `,
  },
];

export function getAllPosts(): BlogPostMeta[] {
  return samplePosts.map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return samplePosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
