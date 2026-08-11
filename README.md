# Tech Blog

A modern tech blog built with Next.js, featuring a unique Text-Art ASCII design aesthetic.

```
┌┬┐┌─┐┌─┐┬ ┬  ┌┐ ┬  ┌─┐┌─┐
 │ ├┤ │  ├─┤  ├┴┐│  │ ││ ┬
 ┴ └─┘└─┘┴ ┴  └─┘┴─┘└─┘└─┘
```

## Features

- 🚀 **Next.js 15** with App Router
- 🎨 **shadcn/ui** components
- 📝 **MDX** for blog content
- 🎯 **Text-Art ASCII** design theme
- 📱 **Responsive** design
- 🌙 **Dark mode** support
- ⚡ **Vercel** ready deployment

## Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Content**: MDX
- **Deployment**: Vercel

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open** [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home page
│   ├── blog/
│   │   ├── page.tsx       # Blog listing
│   │   └── [slug]/
│   │       └── page.tsx   # Individual blog posts
│   └── globals.css        # Global styles + Text-Art theme
├── components/
│   └── ui/                # shadcn/ui components
└── lib/
    └── utils.ts           # Utility functions

content/
└── blog/
    └── *.mdx              # Blog posts in MDX format
```

## Adding Blog Posts

Create new MDX files in the `content/blog/` directory:

```mdx
---
title: "Your Tech Post Title"
date: "2024-01-15"
excerpt: "Brief technical description"
author: "TechBlogger"
tags: ["react", "javascript", "frontend"]
---

# Your Tech Post Title

Your technical content here...
```

## Text-Art Design System

The blog features a unique ASCII/terminal-inspired design with:

- **ASCII Headers**: Terminal-style typography
- **Monospace Fonts**: Code/terminal aesthetic
- **Terminal Borders**: Box-drawing characters
- **Blinking Cursors**: Animated terminal elements
- **Command-line Navigation**: Unix-style breadcrumbs

**Note on `mdx-components.tsx`:** this file's custom h1–h3/code/pre/
blockquote overrides — the actual implementation of the terminal aesthetic
above, for article body content — were defined but never applied. Next.js's
`useMDXComponents` convention auto-wires for `@next/mdx` file-based `.mdx`
page routes; this blog instead loads posts from `content/blog/*.mdx` at
runtime via `next-mdx-remote/rsc`'s `compileMDX()`, which needs its
`components` passed explicitly and wasn't receiving them. Every blog post
was rendering as unstyled default HTML. Fixed in `src/app/blog/[slug]/page.tsx`.
The `pre` override (a copy-to-clipboard button) also needed splitting into
its own `"use client"` file (`src/components/mdx-pre.tsx`) once wired up —
`compileMDX`'s Server Component render tree can't run `useState` inline.

## Deployment

This project is optimized for Vercel deployment:

```bash
# Deploy to Vercel
vercel
```

The `vercel.json` configuration is already included for optimal deployment.

## Development

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Built with ❤️ for developers, by developers using Next.js, shadcn/ui, and MDX

## Related

- **Mobile App:** [bookchaowalit-techblog-mobile](https://github.com/bookchaowalit-mobile/bookchaowalit-techblog-mobile)
- **Portfolio:** [bookchaowalit.com](https://bookchaowalit.com)

