import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Posts",
  description: "Explore our collection of programming tutorials, web development guides, React tips, Next.js insights, and modern JavaScript best practices. Stay updated with the latest in tech.",
  keywords: ["programming blog", "web development tutorials", "React tutorials", "Next.js guides", "JavaScript tips", "TypeScript tutorials", "frontend development", "coding best practices"],
  openGraph: {
    title: "Blog Posts | Tech Blog",
    description: "Explore our collection of programming tutorials, web development guides, React tips, and modern JavaScript best practices.",
    type: "website",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Blog - Programming Tutorials and Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Posts | Tech Blog",
    description: "Explore our collection of programming tutorials, web development guides, React tips, and modern JavaScript best practices.",
    images: ["/og-blog.jpg"],
  },
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    slug: "modern-react-development-best-practices",
    title: "Modern React Development Best Practices",
    excerpt: "Essential patterns and techniques for building scalable React applications in 2024",
    date: "2024-01-15",
    tags: ["react", "javascript", "frontend", "best-practices"],
    author: "TechBlogger"
  }
];

export default function BlogPage() {
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
          {blogPosts.map((post) => (
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
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs font-mono border rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" size="sm" className="font-mono">
                  <Link href={`/blog/${post.slug}`}>
                    cat {post.slug}.mdx
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="ascii-art text-muted-foreground text-sm">
{`╭─────────────────────────────╮
│     End of file listing     │
│      1 file(s) found        │
╰─────────────────────────────╯`}
          </div>
        </div>
      </div>
    </div>
  );
}