import Link from "next/link";
import { ArrowUpRight, ChevronRight, Code2, Command, FileText, Github, Mail, Terminal, Twitter } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Technical writing on modern web development, React, Next.js, TypeScript, and programming practice by Chaowalit Greepoke.",
  alternates: { canonical: "/" },
};

const commands = ["blog", "contact", "--help"];
const fileRows = [
  { type: "DIR", name: "content/blog/", note: "1 article" },
  { type: "FILE", name: "modern-react-development-best-practices.mdx", note: "14 min read" },
  { type: "FILE", name: "README.md", note: "about this notebook" },
];

export default function Home() {
  const blogSchema = { "@context": "https://schema.org", "@type": "Blog", name: "Chaowalit Greepoke Tech Blog", url: "https://tech.bookchaowalit.com", author: { "@type": "Person", name: "Chaowalit Greepoke" }, blogPost: [{ "@type": "BlogPosting", headline: "Modern React Development Best Practices", url: "https://tech.bookchaowalit.com/blog/modern-react-development-best-practices", datePublished: "2024-01-15" }] };

  return (
    <div className="techblog-home">
      <div className="pc98-scanline" aria-hidden="true" />
      <header className="techblog-topbar">
        <Link href="/" className="techblog-brand"><span className="techblog-brand-chip">B/</span><span>BOOK&apos;S TECH BLOG<small>local notebook · rev. 01</small></span></Link>
        <nav aria-label="Primary navigation"><Link href="/blog">articles</Link><Link href="/contact">whoami</Link><Link href="/more-projects">more projects</Link></nav>
        <span className="techblog-topbar-code">SYS 0x01 / ONLINE</span>
      </header>

      <main className="techblog-main">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <section className="techblog-window" aria-labelledby="blog-title">
          <div className="techblog-window-bar"><span>TECH_BLOG.EXE</span><span>■ □ ×</span></div>
          <div className="techblog-window-body">
            <div className="techblog-ascii" aria-label="Book tech blog ascii title">{`╔══════════════════════════════╗
║  B O O K ' S   T E C H B L O G  ║
╚══════════════════════════════╝`}</div>
            <p className="techblog-prompt"><span>READY&gt;</span> /read /think /ship<span className="pc98-cursor">_</span></p>
            <h1 id="blog-title">Notes from the<br /><em>implementation layer.</em></h1>
            <p className="techblog-intro">Technical writing about the details that make software feel deliberate: React systems, Next.js routes, TypeScript edges, and the practice between them.</p>
            <div className="techblog-window-actions"><Link href="/blog" className="pc98-button">OPEN ARTICLE INDEX <ArrowUpRight size={14} /></Link><Link href="/contact" className="pc98-button pc98-button-quiet">WHOAMI <ChevronRight size={14} /></Link></div>
          </div>
          <div className="techblog-window-status"><span>MEM 640K OK</span><span>MDX / LOCAL SOURCE</span><span>15:42:08</span></div>
        </section>

        <section className="techblog-lower-grid">
          <div className="techblog-panel techblog-article-panel">
            <div className="techblog-panel-label">01 / LATEST_DOCUMENT</div>
            <div className="techblog-article-row"><div className="techblog-file-icon"><FileText size={20} /></div><div><p className="techblog-article-date">2024—01—15 · REACT / FRONTEND</p><Link href="/blog/modern-react-development-best-practices"><h2>Modern React Development<br />Best Practices</h2></Link><p>Patterns for building maintainable React applications with hooks, performance, and a clear component boundary.</p><span className="techblog-read-link">read article <ArrowUpRight size={13} /></span></div></div>
          </div>
          <div className="techblog-panel techblog-directory-panel">
            <div className="techblog-panel-label">02 / DIRECTORY_LIST</div>
            <div className="techblog-directory-head"><span>TYPE</span><span>NAME</span><span>NOTE</span></div>
            {fileRows.map((row) => <div className="techblog-directory-row" key={row.name}><span>{row.type}</span><code>{row.name}</code><small>{row.note}</small></div>)}
            <div className="techblog-terminal-line"><Terminal size={13} /><span>book@techblog:~$</span><b>ls -la</b><i>_</i></div>
          </div>
        </section>

        <section className="techblog-footer-callout"><div><p className="techblog-panel-label">03 / AVAILABLE_COMMANDS</p><h2>Keep the terminal<br /><em>open.</em></h2></div><div className="techblog-command-list">{commands.map((command) => <Link href={command === "blog" ? "/blog" : "/contact"} key={command}><Command size={13} /> {command}<ArrowUpRight size={13} /></Link>)}</div></section>
      </main>

      <footer className="techblog-footer"><span><Code2 size={14} /> built with Next.js, MDX & stubborn curiosity</span><div><a href="https://github.com/bookchaowalit" target="_blank" rel="noreferrer"><Github size={14} /> github</a><a href="mailto:bookchaowalit@gmail.com"><Mail size={14} /> mail</a><a href="https://twitter.com/bookchaowalit" target="_blank" rel="noreferrer"><Twitter size={14} /> twitter</a></div></footer>
    </div>
  );
}
