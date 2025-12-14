import type { BlogPost, BlogPostMeta } from '../types';

// Simple frontmatter parser (browser-compatible, no Buffer dependency)
function parseFrontmatter(content: string): { data: Record<string, string>; content: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { data: {}, content };
  }

  const frontmatter = match[1];
  const body = match[2];

  const data: Record<string, string> = {};
  for (const line of frontmatter.split('\n')) {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      const value = line.slice(colonIndex + 1).trim();
      data[key] = value;
    }
  }

  return { data, content: body };
}

// Import all monthly markdown files as raw text
const blogFiles = import.meta.glob('../content/blog/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>;

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function parseMonthlyFile(content: string): BlogPost[] {
  const posts: BlogPost[] = [];

  // Split the file by the post separator pattern (blank line, ---, blank line, ---)
  // But the first post starts with --- so we need to handle that
  const sections = content.split(/\n+---\n+---\n/);

  for (let i = 0; i < sections.length; i++) {
    let section = sections[i].trim();
    if (!section) continue;

    // First section already has the leading ---, others don't
    if (i > 0) {
      section = '---\n' + section;
    }

    try {
      const { data, content: bodyContent } = parseFrontmatter(section);

      if (!data.date || !data.title) continue;

      const dateStr = String(data.date);
      const slug = `${dateStr}-${slugify(data.title)}`;

      // Convert markdown content to simple HTML
      const htmlContent = bodyContent
        .trim()
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hul])/gm, (match, offset, string) => {
          // Only wrap in <p> if not already an HTML tag and has content
          const line = string.substring(offset).split('\n')[0];
          if (line && !line.startsWith('<')) {
            return '<p>' + line;
          }
          return match;
        })
        .replace(/<p><h/g, '<h')
        .replace(/<\/h([23])><\/p>/g, '</h$1>')
        .replace(/<p><ul>/g, '<ul>')
        .replace(/<\/ul><\/p>/g, '</ul>')
        .replace(/<p><\/p>/g, '');

      const tags = typeof data.tags === 'string'
        ? data.tags.split(',').map((t: string) => t.trim())
        : data.tags || [];

      posts.push({
        slug,
        title: data.title,
        date: formatDate(dateStr),
        excerpt: data.excerpt || '',
        tags,
        content: htmlContent,
      });
    } catch (e) {
      console.error('Error parsing blog post section:', e);
    }
  }

  return posts;
}

// Parse all monthly files and collect posts
const allPosts: BlogPost[] = [];

for (const [, content] of Object.entries(blogFiles)) {
  const posts = parseMonthlyFile(content);
  allPosts.push(...posts);
}

// Sort by date (newest first)
allPosts.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);
  return dateB.getTime() - dateA.getTime();
});

export function getAllPosts(): BlogPostMeta[] {
  return allPosts.map(({ content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allPosts.find((post) => post.slug === slug);
}

export function getRecentPosts(count: number = 3): BlogPostMeta[] {
  return getAllPosts().slice(0, count);
}
