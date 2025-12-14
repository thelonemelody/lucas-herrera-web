# Implementation Plan

This document provides detailed implementation guidance for the personal portfolio and blog website.

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
│                    Markdown Parser & Transformer                        │
│              (Converts .md files into structured React props)           │
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

- **Framework**: React 18+ with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6

### Content Management

Blog posts stored as `.md` files. Markdown parser extracts frontmatter and content, rendered through custom React components.

### Hosting

- **Platform**: GitHub Pages
- **Domain**: `<username>.github.io/lucas-herrera-web`
- **Deployment**: Automatic via GitHub Actions

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

### Design Elements for Futuristic Feel

- Subtle gradient backgrounds (dark blue to darker blue)
- Glowing accent borders on cards and buttons
- Smooth animations and transitions
- Geometric shapes or subtle grid patterns in backgrounds
- Monospace or tech-style fonts for headings
- Hover effects with glow/pulse animations

---

## Project Structure

```
lucas-herrera-web/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── assets/
│       └── images/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Card.tsx
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
│   │       ├── SkillCategory.tsx
│   │       └── SkillBadge.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Blog.tsx
│   │   ├── BlogPost.tsx
│   │   ├── WorkHistory.tsx
│   │   └── Skills.tsx
│   ├── content/
│   │   └── blog/
│   │       └── (markdown files)
│   ├── utils/
│   │   └── markdownParser.ts
│   ├── data/
│   │   ├── projects.ts
│   │   ├── workHistory.ts
│   │   ├── skills.ts          // categories array - easy to add new sections
│   │   └── currentlyLearning.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

---

## Page Breakdown

### 1. Home Page

- Hero section with name and tagline (futuristic animated text)
- Brief introduction with glowing accent borders
- Featured projects (2-3) as hoverable cards
- Recent blog posts (2-3)
- **Resume download button** (links to PDF in public folder)
- Navigation links to other sections

### 2. Portfolio Page

- Grid of project cards with glow effects on hover
- Each card shows: title, description, tech stack, links (GitHub, live demo)
- Optional: filter by technology

### 3. Blog Page

- List/grid of blog posts displayed as styled cards
- Each card shows:
  - Title
  - Date
  - Brief excerpt
  - Tags
- Pagination for daily posts

### 4. Individual Blog Post Page

- Custom-styled layout for post content
- Markdown is parsed and rendered through React components
- Sections, code blocks, lists, etc. all have custom futuristic styling
- Date and navigation to previous/next posts

### 5. Work History Page

Timeline-based view of professional experience:

- **Timeline layout** with visual connectors between positions
- **Company card** for each position containing:
  - Company name and logo
  - Job title
  - Date range (start - end)
  - Detailed description of role and responsibilities
  - Technologies/tools used at that position
  - Notable achievements and accomplishments
- Chronological order (most recent first)

### 6. Skills Page

Skills organized into extensible categories:

- **Category sections** (easily add new ones):
  - Languages (programming languages)
  - Hardware (electronics, embedded systems, etc.)
  - Software (tools, frameworks, platforms)
  - Leadership (management, mentoring, etc.)
  - *(additional categories as needed)*
- **Simple skill badges/tags** within each category
- **"Currently Learning" section** at the bottom highlighting technologies in progress
- Clean, scannable layout without complex interactive elements

---

## Blog System: Markdown to Custom Layout

```
┌──────────────────┐     ┌──────────────────┐     ┌──────────────────┐
│  Write in .md    │ --> │  Parse markdown  │ --> │  Render through  │
│  (simple text)   │     │  (extract data)  │     │  React components│
└──────────────────┘     └──────────────────┘     └──────────────────┘
```

### Markdown File Format

```markdown
---
title: "Building My First React App"
date: "2025-01-15"
excerpt: "Today I learned about component composition..."
tags: ["react", "learning", "web-dev"]
---

## What I Worked On

Today I focused on...

## Reflections

I learned that...

## Tomorrow's Goals

- Finish the header component
- Add routing
```

### How It's Displayed

The parser extracts all this data, then custom React components render it:

- Title in a styled header with glow effect
- Date shown with an icon
- Tags as pill-shaped badges
- Body content with custom styling for headings, lists, code blocks

---

## Implementation Steps

### Phase 1: Project Setup

1. Initialize Vite React TypeScript project
2. Install dependencies (React Router, Tailwind CSS, markdown parser)
3. Configure Tailwind with custom dark space blue theme
4. Set up folder structure
5. Create basic routing

### Phase 2: Layout Components

1. Build Header with navigation (futuristic styling)
2. Build Footer
3. Create responsive layout wrapper with background effects
4. Implement mobile menu

### Phase 3: Core Pages

1. Build Home page with hero section and resume download link
2. Build Portfolio page with project cards
3. Build Work History page
4. Build Skills page
5. Apply futuristic theme throughout

### Phase 4: Blog System

1. Create markdown parser utility
2. Build blog post list with custom card components
3. Build individual blog post page with styled content rendering
4. Test with sample posts

### Phase 5: Deploy to GitHub Pages

1. Configure Vite for GitHub Pages base path
2. Set up GitHub Actions workflow for automatic deployment
3. Test deployment
4. Verify all routes work correctly

---

## Blog Workflow

Daily workflow for adding blog posts:

1. Create a new `.md` file in `src/content/blog/` (e.g., `2025-01-15.md`)
2. Add frontmatter and content
3. Commit and push to the repository
4. GitHub Actions automatically builds and deploys
5. New post appears on the live site

---

## Responsive Design Approach

Using Tailwind CSS breakpoints:

- **Mobile first**: Default styles for mobile
- **sm (640px)**: Small tablets
- **md (768px)**: Tablets
- **lg (1024px)**: Laptops
- **xl (1280px)**: Desktops

All futuristic effects scale appropriately - simpler on mobile, more elaborate on desktop.
