import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to Chaowalit Greepoke (Book) Tech Blog - your source for modern web development, React tutorials, Next.js guides, TypeScript tips, and programming best practices by a Bangkok-based full-stack developer. Explore expert insights and stay updated with the latest tech trends.",
  keywords: ["Chaowalit Greepoke", "Book Chaowalit", "web development blog", "programming tutorials", "React guides", "Next.js tutorials", "TypeScript tips", "JavaScript best practices", "frontend development", "Bangkok developer", "Thai developer", "tech insights"],
  openGraph: {
    title: "Chaowalit Greepoke (Book) Tech Blog | Modern Web Development & Programming Insights",
    description: "Welcome to Chaowalit Greepoke (Book) Tech Blog - your source for modern web development tutorials, React guides, and programming best practices by a Bangkok-based developer.",
    type: "website",
    images: [
      {
        url: "/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "Chaowalit Greepoke (Book) Tech Blog Homepage - Modern Web Development Insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chaowalit Greepoke (Book) Tech Blog | Modern Web Development & Programming Insights",
    description: "Welcome to Chaowalit Greepoke (Book) Tech Blog - your source for modern web development tutorials, React guides, and programming best practices by a Bangkok-based developer.",
    images: ["/og-home.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Chaowalit Greepoke (Book) Tech Blog",
    "description": "Modern web development, programming tips, and tech insights by Chaowalit Greepoke (Book)",
    "url": "https://tech.bookchaowalit.com",
    "author": {
      "@type": "Person",
      "name": "Chaowalit Greepoke",
      "alternateName": "Book Chaowalit",
      "url": "https://tech.bookchaowalit.com/contact",
      "sameAs": ["https://linkedin.com/in/chaowalit-greepoke"],
      "jobTitle": ["Tech Generalist", "Full-stack Developer", "Solopreneur"],
      "workLocation": {
        "@type": "Place",
        "name": "Bangkok, Thailand"
      }
    },
    "publisher": {
      "@type": "Person",
      "name": "Chaowalit Greepoke",
      "alternateName": "Book Chaowalit"
    },
    "inLanguage": "en-US",
    "about": [
      {
        "@type": "Thing",
        "name": "Web Development"
      },
      {
        "@type": "Thing", 
        "name": "React"
      },
      {
        "@type": "Thing",
        "name": "Next.js"
      },
      {
        "@type": "Thing",
        "name": "TypeScript"
      },
      {
        "@type": "Thing",
        "name": "Programming"
      }
    ],
    "blogPost": [
      {
        "@type": "BlogPosting",
        "headline": "Modern React Development Best Practices",
        "url": "https://tech.bookchaowalit.com/blog/modern-react-development-best-practices",
        "datePublished": "2024-01-15",
        "author": {
          "@type": "Person",
          "name": "Chaowalit Greepoke",
          "alternateName": "Book Chaowalit"
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tech.bookchaowalit.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-16">
          <div className="ascii-title text-primary text-xl mb-4">
{`┌┬┐┌─┐┌─┐┬ ┬  ┌┐ ┬  ┌─┐┌─┐
 │ ├┤ │  ├─┤  ├┴┐│  │ ││ ┬
 ┴ └─┘└─┘┴ ┴  └─┘┴─┘└─┘└─┘`}
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Modern Web Development, Programming Tips, and Tech Insights
          </p>
          <div className="mt-4">
            <span className="text-primary">$</span>
            <span className="ml-2">cd /tech-blog</span>
            <span className="blink ml-1">_</span>
          </div>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="terminal-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Latest Posts</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-3">
                  <Link href="/blog/modern-react-development-best-practices" 
                        className="text-primary hover:underline font-medium">
                    Modern React Development Best Practices
                  </Link>
                  <p className="text-sm text-muted-foreground">Jan 15, 2024</p>
                </div>
                <div className="border-l-2 border-muted pl-3">
                  <span className="text-muted-foreground">More posts coming soon...</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="terminal-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>React & Frontend</span>
                  <span className="text-primary">1</span>
                </div>
                <div className="flex justify-between">
                  <span>Node.js & Backend</span>
                  <span className="text-muted-foreground">0</span>
                </div>
                <div className="flex justify-between">
                  <span>DevOps & Tools</span>
                  <span className="text-muted-foreground">0</span>
                </div>
                <div className="flex justify-between">
                  <span>Web Development</span>
                  <span className="text-muted-foreground">0</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="terminal-border">
            <CardContent className="p-6">
              <h3 className="font-bold text-lg mb-3">Terminal</h3>
              <div className="bg-muted p-3 rounded font-mono text-sm">
                <div className="text-primary">
                  <span className="text-muted-foreground">user@tech-blog:~$</span> ls -la
                </div>
                <div className="mt-1 text-muted-foreground">
                  drwxr-xr-x  3 user user 4096 Jan 15 10:30 components/<br/>
                  drwxr-xr-x  2 user user 4096 Jan 15 10:30 hooks/<br/>
                  -rw-r--r--  1 user user 2048 Jan 15 10:30 app.tsx<br/>
                  -rw-r--r--  1 user user 1024 Jan 15 10:30 README.md
                </div>
                <div className="mt-2 text-primary">
                  <span className="text-muted-foreground">user@tech-blog:~$</span>
                  <span className="blink ml-1">_</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="font-mono">
              <Link href="/blog">
                cd blog/ && ls
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="font-mono">
              <Link href="/contact">
                whoami
              </Link>
            </Button>
          </div>
          
          <div className="text-xs text-muted-foreground font-mono">
            <span className="text-primary">$</span> Available commands: blog, contact, --help
          </div>
        </div>

        <footer className="mt-16 pt-8 border-t border-border text-center">
          <div className="ascii-art text-muted-foreground text-xs">
{`╭─────────────────────────────────────────╮
│  Built with Next.js, shadcn/ui & MDX   │
│           Deploy on Vercel              │
╰─────────────────────────────────────────╯`}
          </div>
        </footer>
      {/* More Projects Link */}
      <div className="text-center py-8">
        <Link
          href="/more-projects"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>🚀</span>
          <span>Explore More Projects</span>
        </Link>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          Discover 100+ more apps and tools
        </p>
      </div>

      </div>
    </div>
  );
}
