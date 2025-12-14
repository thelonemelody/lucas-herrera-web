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

Edit `src/utils/blogPosts.ts` and add a new entry to the `samplePosts` array:

```typescript
{
  slug: '2025-01-20-my-post',
  title: 'My New Post',
  date: 'January 20, 2025',
  excerpt: 'Brief summary...',
  tags: ['topic1', 'topic2'],
  content: `
    <h2>Section Title</h2>
    <p>Content goes here...</p>
  `,
}
```

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
