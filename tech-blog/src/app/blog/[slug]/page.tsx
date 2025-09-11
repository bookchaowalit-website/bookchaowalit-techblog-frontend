import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  tags: string[];
  content: React.ReactNode;
}

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Handle different blog posts
  if (slug === "modern-react-development-best-practices") {
    const content = (
      <div>
        <h1>Modern React Development Best Practices</h1>
        <p>Welcome to the world of modern React development!</p>
        <p>This comprehensive guide covers essential patterns and techniques for building scalable React applications in 2024.</p>
        <h2>Key Topics Covered:</h2>
        <ul>
          <li>Component Composition</li>
          <li>State Management with Hooks</li>
          <li>Performance Optimization</li>
          <li>TypeScript Integration</li>
        </ul>
      </div>
    );

    return {
      slug,
      title: "Modern React Development Best Practices",
      date: "2024-01-15",
      excerpt: "Essential patterns and techniques for building scalable React applications in 2024",
      author: "TechBlogger",
      tags: ["react", "javascript", "frontend", "best-practices"],
      content: content
    };
  }

  if (slug === "nextjs-15-new-features") {
    const content = (
      <div>
        <h1>Next.js 15: New Features and Improvements</h1>
        <p>Next.js 15 brings exciting new features and significant improvements to the React framework.</p>
        <h2>What&apos;s New in Next.js 15:</h2>
        <ul>
          <li>Enhanced Turbopack performance</li>
          <li>New API improvements</li>
          <li>Better TypeScript support</li>
          <li>Improved developer experience</li>
        </ul>
      </div>
    );

    return {
      slug,
      title: "Next.js 15: New Features and Improvements",
      date: "2024-12-01",
      excerpt: "Explore the latest features in Next.js 15 including Turbopack improvements and new API enhancements",
      author: "TechBlogger",
      tags: ["nextjs", "react", "web-development", "turbopack"],
      content: content
    };
  }

  if (slug === "typescript-advanced-patterns") {
    const content = (
      <div>
        <h1>Advanced TypeScript Patterns for React</h1>
        <p>Master advanced TypeScript patterns to write more robust and maintainable React applications.</p>
        <h2>Advanced Patterns:</h2>
        <ul>
          <li>Conditional Types</li>
          <li>Mapped Types</li>
          <li>Utility Types</li>
          <li>Generic Constraints</li>
        </ul>
      </div>
    );

    return {
      slug,
      title: "Advanced TypeScript Patterns for React",
      date: "2024-11-15",
      excerpt: "Master advanced TypeScript patterns including conditional types, mapped types, and utility types",
      author: "TechBlogger",
      tags: ["typescript", "react", "advanced", "patterns"],
      content: content
    };
  }

  if (slug === "tailwind-css-best-practices") {
    const content = (
      <div>
        <h1>Tailwind CSS Best Practices and Tips</h1>
        <p>Learn how to write maintainable and scalable CSS with Tailwind&apos;s utility-first approach.</p>
        <h2>Best Practices:</h2>
        <ul>
          <li>Component-based styling</li>
          <li>Custom utility classes</li>
          <li>Responsive design patterns</li>
          <li>Performance optimization</li>
        </ul>
      </div>
    );

    return {
      slug,
      title: "Tailwind CSS Best Practices and Tips",
      date: "2024-10-20",
      excerpt: "Learn how to write maintainable and scalable CSS with Tailwind's utility-first approach",
      author: "TechBlogger",
      tags: ["tailwind", "css", "frontend", "design"],
      content: content
    };
  }

  return null;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.title,
    description: `${post.excerpt} - Learn from Chaowalit Greepoke (Book), a Bangkok-based full-stack developer sharing practical programming insights.`,
    keywords: [...post.tags, "Chaowalit Greepoke", "Book Chaowalit", "programming", "web development", "tutorial", "guide", "Bangkok developer", "Thai developer"],
    authors: [{ name: "Chaowalit Greepoke (Book)" }],
    openGraph: {
      title: `${post.title} | Chaowalit Greepoke (Book) Tech Blog`,
      description: `${post.excerpt} - Learn from Chaowalit Greepoke (Book), a Bangkok-based full-stack developer.`,
      type: "article",
      publishedTime: post.date,
      authors: ["Chaowalit Greepoke (Book)"],
      tags: [...post.tags, "Chaowalit Greepoke", "Book Chaowalit"],
      images: [
        {
          url: `/og-blog-${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${post.title} by Chaowalit Greepoke (Book)`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Chaowalit Greepoke (Book) Tech Blog`,
      description: `${post.excerpt} - Learn from Chaowalit Greepoke (Book), a Bangkok-based full-stack developer.`,
      images: [`/og-blog-${slug}.jpg`],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://tech.bookchaowalit.com/og-blog-${slug}.jpg`,
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://tech.bookchaowalit.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chaowalit Greepoke (Book) Tech Blog",
      "url": "https://tech.bookchaowalit.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://tech.bookchaowalit.com/logo.png"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://tech.bookchaowalit.com/blog/${slug}`
    },
    "keywords": post.tags.join(", "),
    "articleSection": "Programming",
    "inLanguage": "en-US"
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="mb-8">
          <nav className="mb-6 flex gap-3 flex-wrap">
            <Button variant="outline" asChild className="font-mono">
              <Link href="/blog">
                cd ../
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-mono">
              <Link href="/">
                cd ~/
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-mono">
              <Link href="/contact">
                whoami
              </Link>
            </Button>
          </nav>

          <div className="ascii-art text-muted-foreground text-xs mb-6">
{`╭─────────────────────────────────────────╮
│              cat ${post.slug.padEnd(13)}.mdx │
╰─────────────────────────────────────────╯`}
          </div>

          <div className="terminal-border p-6 mb-8">
            <div className="font-mono text-sm text-muted-foreground mb-4">
              <div>File: {post.slug}.mdx</div>
              <div>Modified: {post.date}</div>
              <div>Author: {post.author}</div>
              <div>Size: {Math.floor(Math.random() * 9999) + 1000} bytes</div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono border rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        <main>
          <Card className="terminal-border">
            <CardContent className="p-8 prose prose-neutral dark:prose-invert max-w-none">
              {post.content}
            </CardContent>
          </Card>
        </main>

        <footer className="mt-12 pt-8 border-t border-border">
          <div className="flex justify-between items-center">
            <Button variant="outline" asChild className="font-mono">
              <Link href="/blog">
                cd ../blog/
              </Link>
            </Button>

            <div className="text-muted-foreground text-sm font-mono">
              <span className="text-primary">$</span> tail -f {post.slug}.mdx
            </div>
          </div>

          <div className="mt-6 text-center">
            <div className="ascii-art text-muted-foreground text-xs">
{`╭─────────────────────────────╮
│         End of file         │
╰─────────────────────────────╯`}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
