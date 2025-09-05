import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
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
      </div>
    </div>
  );
}
