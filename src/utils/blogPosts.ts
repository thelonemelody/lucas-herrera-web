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

// Parse new format: # YYYY-MM-DD heading with * key: value metadata
function parseNewFormat(section: string): { data: Record<string, string>; content: string } | null {
  const lines = section.split('\n');

  // First line should be the date heading (# YYYY-MM-DD)
  const dateMatch = lines[0]?.match(/^#\s+(\d{4}-\d{2}-\d{2})\s*$/);
  if (!dateMatch) {
    return null;
  }

  const data: Record<string, string> = {
    date: dateMatch[1],
  };

  let contentStartIndex = 1;

  // Parse metadata lines (starting with * )
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('* ')) {
      const colonIndex = line.indexOf(':');
      if (colonIndex > 2) {
        const key = line.slice(2, colonIndex).trim();
        const value = line.slice(colonIndex + 1).trim();
        data[key] = value;
      }
      contentStartIndex = i + 1;
    } else if (line.trim() === '') {
      // Skip empty lines between metadata and content
      contentStartIndex = i + 1;
    } else {
      // Content starts here
      break;
    }
  }

  const content = lines.slice(contentStartIndex).join('\n').trim();
  return { data, content };
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

  // Check if this is the new format (starts with # YYYY-MM-DD)
  const isNewFormat = /^#\s+\d{4}-\d{2}-\d{2}/m.test(content);

  if (isNewFormat) {
    // New format: split by H1 headings (# at start of line)
    // The regex splits on lines starting with "# " but keeps the delimiter
    const sections = content.split(/(?=^# \d{4}-\d{2}-\d{2})/m).filter(s => s.trim());

    for (const section of sections) {
      try {
        const parsed = parseNewFormat(section.trim());
        if (!parsed || !parsed.data.date || !parsed.data.title) continue;

        const { data, content: bodyContent } = parsed;
        const dateStr = String(data.date);
        const slug = `${dateStr}-${slugify(data.title)}`;

        // Convert markdown content to simple HTML
        const htmlContent = convertMarkdownToHtml(bodyContent);

        const tags = typeof data.tags === 'string'
          ? data.tags.split(',').map((t: string) => t.trim())
          : [];

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
  } else {
    // Old format: split by --- separators
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
        const htmlContent = convertMarkdownToHtml(bodyContent);

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
  }

  return posts;
}

function convertMarkdownToHtml(bodyContent: string): string {
  return bodyContent
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

// Extract date components from slug (format: YYYY-MM-DD-title)
export function getDateFromSlug(slug: string): { year: number; month: number; day: number } | null {
  const match = slug.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  return {
    year: parseInt(match[1], 10),
    month: parseInt(match[2], 10),
    day: parseInt(match[3], 10),
  };
}

// Group posts by month (returns Map with key format "YYYY-MM")
export function getPostsByMonth(): Map<string, BlogPostMeta[]> {
  const posts = getAllPosts();
  const byMonth = new Map<string, BlogPostMeta[]>();

  for (const post of posts) {
    const dateInfo = getDateFromSlug(post.slug);
    if (!dateInfo) continue;

    const monthKey = `${dateInfo.year}-${String(dateInfo.month).padStart(2, '0')}`;

    if (!byMonth.has(monthKey)) {
      byMonth.set(monthKey, []);
    }
    byMonth.get(monthKey)!.push(post);
  }

  // Sort map keys in reverse chronological order
  const sortedEntries = [...byMonth.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  return new Map(sortedEntries);
}
