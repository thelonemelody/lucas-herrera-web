# Implementation Plan

This document provides detailed implementation guidance for the personal portfolio and blog website.

**Status**: Implemented and deployed

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           Frontend (React)                              │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────────┐ ┌───────────┐  │
│  │   Home   │ │ Portfolio│ │   Blog   │ │ Work History │ │  Skills   │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────────┘ └───────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    Custom Frontmatter Parser                            │
│         (Browser-compatible, extracts posts from .md files)             │
└─────────────────────────────────────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                           Content Source                                │
│                    (Markdown files in repository)                       │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

### Frontend

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Routing**: React Router v7

### Content Management

Blog posts stored as `.md` files in `src/content/blog/`. A custom browser-compatible frontmatter parser (in `src/utils/blogPosts.ts`) extracts post metadata and content. Posts are rendered through custom React components.

**Note**: We use a custom parser instead of `gray-matter` because `gray-matter` requires Node.js `Buffer` which isn't available in browsers.

### Hosting

- **Platform**: GitHub Pages
- **Domain**: `lucasjherrera.github.io/lucas-herrera-web`
- **Deployment**: Automatic via GitHub Actions on push to `main`

---

## Visual Design

### Color Palette (Dark Space Blue / Futuristic)

```
Primary Background:    #0a0e17 (deep space black)
Secondary Background:  #111827 (dark blue-gray)
Accent Primary:        #3b82f6 (electric blue)
Accent Secondary:      #06b6d4 (cyan glow)
Text Primary:          #f1f5f9 (off-white)
Text Secondary:        #94a3b8 (muted blue-gray)
Accent Highlight:      #8b5cf6 (purple for special elements)
```

CSS variables defined in `src/index.css`:
- `--color-space-black`, `--color-electric-blue`, `--color-cyan-glow`, `--color-purple-accent`
- Glow effects: `.glow-blue`, `.glow-cyan`, `.glow-purple`, `.text-glow`
- Card animations: `.card-hover`

### Design Elements

- Subtle gradient backgrounds (dark blue to darker blue)
- Glowing accent borders on cards and buttons
- Smooth animations and transitions
- Monospace fonts for headings
- Hover effects with glow/pulse animations

---

## Project Structure

```
lucas-herrera-web/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment
├── docs/
│   ├── implementation-plan.md
│   ├── local-development.md
│   └── github-pages-deployment.md
├── public/
│   └── assets/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Layout.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── SectionTitle.tsx
│   │   ├── portfolio/
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProjectGrid.tsx
│   │   ├── blog/
│   │   │   ├── BlogPostCard.tsx
│   │   │   ├── BlogPostList.tsx
│   │   │   └── BlogPostContent.tsx
│   │   ├── work-history/
│   │   │   ├── JobCard.tsx
│   │   │   └── Timeline.tsx
│   │   └── skills/
│   │       ├── SkillBadge.tsx
│   │       ├── SkillCategory.tsx
│   │       └── CurrentlyLearning.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── WorkHistory.tsx
│   │   └── Skills.tsx
│   ├── content/
│   │   └── blog/
│   │       ├── 2025-01.md
│   │       ├── 2025-02.md
│   │       └── 2025-03.md
│   ├── utils/
│   │   └── blogPosts.ts        # Custom frontmatter parser
│   ├── data/
│   │   ├── projects.ts
│   │   ├── workHistory.ts
│   │   ├── skills.ts
│   │   └── currentlyLearning.ts
│   ├── types.ts
│   ├── index.css               # Tailwind + custom theme
│   ├── App.tsx                 # Routes
│   └── main.tsx
├── CLAUDE.md                   # Claude Code instructions
├── README.md
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

---

## Routes

Defined in `src/App.tsx` with `basename="/lucas-herrera-web"` for GitHub Pages:

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero, featured projects, recent posts |
| `/portfolio` | Portfolio | Project showcase grid |
| `/work-history` | Work History | Career timeline |
| `/skills` | Skills | Skills by category |
| `/blog` | Blog | Blog post listing |
| `/blog/:slug` | BlogPost | Individual post |

---

## Blog System

### File Organization

Blog posts are organized into monthly files:
- **Location**: `src/content/blog/`
- **Naming**: `YYYY-MM.md` (e.g., `2025-01.md`)
- **Loading**: Vite's `import.meta.glob` with `?raw` query

### Post Format

```markdown
---
date: 2025-01-16
title: Deep Dive into React Patterns
excerpt: Exploring advanced React patterns.
tags: react, learning, web-dev
---

## What I Worked On

Post content here...

---

---
date: 2025-01-15
title: Next Post Title
excerpt: Brief description.
tags: personal, goals
---

Next post content...
```

### Format Rules

- Each post starts with frontmatter (between `---` markers)
- Required fields: `date`, `title`, `excerpt`, `tags`
- Tags are comma-separated
- Posts separated by: blank line → `---` → blank line → `---`
- Newest posts first within each file
- Slug auto-generated: `{date}-{slugified-title}`

### Parser Implementation

The parser in `src/utils/blogPosts.ts`:
1. Uses `import.meta.glob` to load all `.md` files as raw strings
2. Splits content by separator pattern (`/\n+---\n+---\n/`)
3. Parses frontmatter with a custom browser-compatible function
4. Converts markdown to simple HTML (headings, lists, paragraphs)
5. Exports: `getAllPosts()`, `getPostBySlug()`, `getRecentPosts()`

---

## Data Files

Static data in `src/data/`:

| File | Purpose |
|------|---------|
| `projects.ts` | Portfolio projects with tech stack, links |
| `workHistory.ts` | Job history with dates, descriptions |
| `skills.ts` | Skill categories and items |
| `currentlyLearning.ts` | Technologies being learned |

Types defined in `src/types.ts`.

---

## Deployment

### GitHub Actions Workflow

Located at `.github/workflows/deploy.yml`:
1. Triggers on push to `main`
2. Uses Node 22
3. Runs `npm ci` and `npm run build`
4. Deploys `dist/` to GitHub Pages

### Vite Configuration

In `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/lucas-herrera-web/',
  // ...
})
```

---

## Adding Content

### New Blog Post

1. Open `src/content/blog/YYYY-MM.md` (create if needed)
2. Add post at top with frontmatter
3. Commit and push
4. Auto-deploys in ~1 minute

### New Project

1. Edit `src/data/projects.ts`
2. Add project object with required fields
3. Commit and push

### New Skill

1. Edit `src/data/skills.ts`
2. Add to existing category or create new one
3. Commit and push

---

## Responsive Design

Tailwind CSS breakpoints (mobile-first):

- Default: Mobile
- `sm` (640px): Small tablets
- `md` (768px): Tablets
- `lg` (1024px): Laptops
- `xl` (1280px): Desktops

Effects scale appropriately - simpler on mobile, more elaborate on desktop.
