# Local Development Guide

This guide explains how to run the website locally for development.

## Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ (required by Vite)
- **npm**: Comes with Node.js

To check your versions:

```bash
node --version
npm --version
```

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/lucas-herrera-web.git
cd lucas-herrera-web
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173/lucas-herrera-web/`

## Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run lint`    | Run ESLint to check code quality         |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── common/       # Buttons, Cards, Badges, etc.
│   ├── layout/       # Header, Footer, Navigation
│   ├── portfolio/    # Project cards and grid
│   ├── work-history/ # Timeline and job cards
│   ├── skills/       # Skill categories and badges
│   └── blog/         # Blog post components
├── pages/            # Page components (Home, Portfolio, etc.)
├── data/             # Static data (projects, skills, work history)
├── utils/            # Utility functions (blog posts)
├── types.ts          # TypeScript type definitions
└── index.css         # Global styles and Tailwind config
```

## Making Changes

### Adding a New Project

Edit `src/data/projects.ts`:

```typescript
{
  id: '4',
  title: 'My New Project',
  description: 'Description of the project',
  techStack: ['React', 'TypeScript'],
  githubUrl: 'https://github.com/...',
  liveUrl: 'https://...',
  featured: true,  // Set to true to show on home page
}
```

### Adding Work History

Edit `src/data/workHistory.ts`:

```typescript
{
  id: '4',
  company: 'New Company',
  title: 'Software Engineer',
  startDate: 'Jan 2024',
  endDate: 'Present',
  description: 'What you do there...',
  technologies: ['React', 'Node.js'],
  achievements: [
    'Achievement 1',
    'Achievement 2',
  ],
}
```

### Adding a Skill Category

Edit `src/data/skills.ts`:

```typescript
{
  id: 'new-category',
  name: 'New Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3'],
}
```

### Adding a Blog Post

Blog posts are organized into monthly markdown files in `src/content/blog/`. To add a new post:

1. Open the monthly file (e.g., `2025-01.md` for January 2025)
   - Create the file if it doesn't exist for the current month
2. Add your new post at the top of the file (newest first)

**Monthly file format** (`src/content/blog/YYYY-MM.md`):

```markdown
---
date: 2025-01-20
title: My New Post
excerpt: Brief summary of the post...
tags: topic1, topic2, topic3
---

## Section Title

Content goes here in markdown format.

## Another Section

- Bullet points work
- As do other markdown features

---

---
date: 2025-01-19
title: Previous Post
excerpt: Another summary...
tags: tag1, tag2
---

Content for the previous post...
```

**Format rules:**
- Each post starts with frontmatter (between `---` markers)
- Required fields: `date`, `title`, `excerpt`, `tags`
- Tags are comma-separated
- Posts are separated by a blank line, then `---`, then a blank line
- The slug is auto-generated from the date and title

## Updating Your Resume

Place your resume PDF in the `public/` folder as `resume.pdf`. The download button on the home page will link to it.

## Troubleshooting

### Port Already in Use

If port 5173 is in use, Vite will automatically try the next available port. Check the terminal output for the actual URL.

### Dependencies Issues

Try removing node_modules and reinstalling:

```bash
rm -rf node_modules
npm install
```

### Build Errors

Make sure all TypeScript types are correct. Run `npm run build` to see any type errors.
