import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Explore Chaowalit Greepoke (Book)'s collection of programming tutorials, web development guides, React tips, Next.js insights, and modern JavaScript best practices. Learn from a Bangkok-based full-stack developer's expertise and stay updated with the latest in tech.",
  keywords: ["Chaowalit Greepoke", "Book Chaowalit", "programming blog", "web development tutorials", "React tutorials", "Next.js guides", "JavaScript tips", "TypeScript tutorials", "frontend development", "coding best practices", "Bangkok developer", "Thai developer"],
  openGraph: {
    title: "Blog Posts | Chaowalit Greepoke (Book) Tech Blog",
    description: "Explore Chaowalit Greepoke (Book)'s collection of programming tutorials, web development guides, React tips, and modern JavaScript best practices.",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Chaowalit Greepoke (Book) Tech Blog - Programming Tutorials and Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Chaowalit Greepoke (Book) Tech Blog",
    description: "Explore Chaowalit Greepoke (Book)'s collection of programming tutorials, web development guides, React tips, and modern JavaScript best practices.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

async function getAllBlogPosts() {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.mdx'));
  const posts = files.map(file => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      // Normalize tags: allow an array, a comma-separated string, or undefined
      tags: Array.isArray(data.tags)
        ? data.tags
        : typeof data.tags === 'string'
        ? data.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : [],
      author: data.author,
    };
  });
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-12">
          <div className="ascii-title text-primary text-lg mb-4">
{`┌┐ ┬  ┌─┐┌─┐  ┌─┐┌─┐┌─┐┌┬┐┌─┐
├┴┐│  │ ││ ┬  ├─┘│ ││─┘ │ └─┐
└─┘┴─┘└─┘└─┘  ┴  └─┘┴   ┴ └─┘`}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-primary">$</span>
            <span>ls -la blog/</span>
            <span className="blink">_</span>
          </div>
          <nav className="mt-6 flex gap-3 flex-wrap">
            <Button variant="outline" asChild className="font-mono">
              <Link href="/">
                cd ../
              </Link>
            </Button>
            <Button variant="outline" asChild className="font-mono">
              <Link href="/contact">
                whoami
              </Link>
            </Button>
          </nav>
        </header>

        <div className="grid gap-6 md:gap-8">
          {posts.map((post) => (
            <Card key={post.slug} className="terminal-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 font-mono">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:underline"
                      >
                        {post.title}
                      </Link>
                    </CardTitle>
                    <div className="text-sm text-muted-foreground font-mono space-y-1">
                      <div>-rw-r--r-- 1 {post.author} {post.author} {Math.floor(Math.random() * 9999) + 1000} {post.date} {post.slug}.mdx</div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 font-mono">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {(post.tags || []).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono border rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all border-2 border-primary/20 bg-background shadow-sm hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-md dark:bg-input/30 dark:border-input dark:hover:bg-primary dark:hover:border-primary h-9 rounded-md gap-2 px-4 font-mono cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-2 w-full justify-start transform hover:scale-[1.02] active:scale-[0.98] no-underline"
                >
                  📄 cat {post.slug}.mdx
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="ascii-art text-muted-foreground text-sm">
{`╭─────────────────────────────╮
│     End of file listing     │
│      ${posts.length} file(s) found        │
╰─────────────────────────────╯`}
          </div>
        </div>
      </div>
    </div>
  );
}
