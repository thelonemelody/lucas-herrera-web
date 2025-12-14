# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (Vite)
npm run build    # TypeScript compile + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build locally
```

## Architecture

This is a personal portfolio/blog website built with React 19 + TypeScript + Vite + Tailwind CSS 4, deployed to GitHub Pages.

### Routing

React Router v7 with `basename="/lucas-herrera-web"` for GitHub Pages. Routes defined in `src/App.tsx`:

- `/` - Home
- `/portfolio` - Project showcase
- `/work-history` - Career timeline
- `/skills` - Skills by category
- `/blog` - Blog listing
- `/blog/:slug` - Individual blog post

### Component Organization

- `src/components/layout/` - Header, Footer, Navigation, Layout wrapper
- `src/components/common/` - Reusable UI: Button, Card, Badge, SectionTitle
- `src/components/portfolio/` - ProjectCard, ProjectGrid
- `src/components/work-history/` - JobCard, Timeline
- `src/components/skills/` - SkillBadge, SkillCategory, CurrentlyLearning
- `src/components/blog/` - BlogPostCard, BlogPostList, BlogPostContent

### Data Layer

Static data files in `src/data/`:

- `projects.ts` - Portfolio projects
- `workHistory.ts` - Job history
- `skills.ts` - Skill categories
- `currentlyLearning.ts` - Learning items

Blog posts stored as monthly markdown files in `src/content/blog/` (e.g., `2025-01.md`). Each file contains multiple posts separated by `---`. Parsed by `src/utils/blogPosts.ts` using gray-matter. Types defined in `src/types.ts`.

### Styling

Dark space blue theme with futuristic aesthetics. Custom CSS variables and utility classes defined in `src/index.css`:

- Theme colors: `--color-space-black`, `--color-electric-blue`, `--color-cyan-glow`, `--color-purple-accent`
- Glow effects: `.glow-blue`, `.glow-cyan`, `.glow-purple`, `.text-glow`
- Card animations: `.card-hover`

### Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically builds and deploys to GitHub Pages on push to `main`. Uses Node 22.
