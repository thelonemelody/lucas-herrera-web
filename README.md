# Lucas Herrera - Personal Portfolio & Blog

A personal portfolio website showcasing skills, accomplishments, and a daily blog of work and reflections.

## Overview

This website serves as a professional portfolio and daily blog platform. It features a dark space blue theme with a futuristic aesthetic - modern, tech-forward design with glowing accents, smooth animations, and clean typography.

## Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7
- **Hosting**: GitHub Pages with automatic deployment

## Quick Start

```bash
npm install      # Install dependencies
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── layout/     # Header, Footer, Navigation
│   ├── common/     # Button, Card, Badge, etc.
│   ├── portfolio/  # Project cards and grid
│   ├── work-history/  # Timeline components
│   ├── skills/     # Skill badges and categories
│   └── blog/       # Blog post components
├── pages/          # Route pages
├── data/           # Static data (projects, skills, etc.)
├── content/blog/   # Markdown blog posts
├── utils/          # Utilities (blog parser, etc.)
└── types.ts        # TypeScript types
```

## Blog Workflow

Blog posts are stored as monthly markdown files in `src/content/blog/` (e.g., `2025-01.md`).

To add a new post:
1. Open or create the monthly file (e.g., `2025-03.md`)
2. Add a new post with frontmatter at the top
3. Commit and push - the site auto-deploys

See [docs/implementation_plan.md](docs/implementation_plan.md) for the full blog format specification.

## Documentation

- [Implementation Plan](docs/implementation_plan.md) - Detailed architecture and implementation guide
- [Local Development](docs/local-development.md) - Development setup instructions
- [GitHub Pages Deployment](docs/github-pages-deployment.md) - Deployment configuration

## Live Site

Visit the live site at: https://lucasjherrera.github.io/lucas-herrera-web/
