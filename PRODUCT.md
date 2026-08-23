# Product

<!-- impeccable:product-schema 1 -->

> Product truth inferred from the existing README, routes, content, and implementation. Confirm any missing product decisions in a future init pass.

## Platform

web

## Users

Developers and technical readers who want concise, practical notes about modern web development.

## Product Purpose

Tech Blog publishes technical articles from local MDX content. Success means a reader can discover an article, understand its premise quickly, and stay in a readable technical document.

## Positioning

The blog treats terminal/text-art notation as part of the reading experience rather than presenting another generic article grid.

## Capabilities and Constraints

- Next.js App Router with MDX blog content.
- Blog listing and individual article routes.
- Responsive layout and dark-mode support are existing product requirements.
- Content is local and authored; do not invent authors, readership, or performance claims.

## Evidence on Hand

- `content/blog/modern-react-development-best-practices.mdx`
- `src/app/`, `src/components/`, and the existing README.

## Product Principles

- Make the technical question visible before the implementation detail.
- Let the article remain the primary artifact.
- Keep the system honest about locally authored content.
