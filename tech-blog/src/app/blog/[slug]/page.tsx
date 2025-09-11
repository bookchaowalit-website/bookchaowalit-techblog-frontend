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
  // For now, let's just handle the one post we know exists
  if (slug === "modern-react-development-best-practices") {
    try {
      const { default: Content } = await import(`../../../../content/blog/modern-react-development-best-practices.mdx`);
      return {
        slug,
        title: "Modern React Development Best Practices",
        date: "2024-01-15",
        excerpt: "Essential patterns and techniques for building scalable React applications in 2024",
        author: "TechBlogger",
        tags: ["react", "javascript", "frontend", "best-practices"],
        content: <Content />
      };
    } catch (error) {
      console.error("Error loading blog post:", error);
      return null;
    }
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
