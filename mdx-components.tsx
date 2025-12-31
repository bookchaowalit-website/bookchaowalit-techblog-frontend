import type { MDXComponents } from 'mdx/types'
import { Copy } from 'lucide-react'
import React from 'react'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 font-mono text-primary border-l-4 border-primary pl-4 bg-background">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 font-mono text-primary mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-3 font-mono text-primary mt-6">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 leading-7 text-muted-foreground font-mono">
        {children}
      </p>
    ),
    code: ({ children }) => (
      <code className="bg-muted px-2 py-1 rounded font-mono text-sm border">
        {children}
      </code>
    ),
    pre: ({ children }) => {
      const [copied, setCopied] = React.useState(false);
      const handleCopy = async () => {
        const text = (children as any).props.children;
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      };
      return (
        <div className="relative group">
          <pre className="bg-muted p-4 rounded-lg overflow-x-auto border mb-4 font-mono text-sm">
            {children}
          </pre>
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1 bg-background border rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-muted"
            title="Copy code"
          >
            <Copy size={16} />
          </button>
          {copied && <span className="absolute top-2 right-10 text-xs bg-background px-1 rounded">Copied!</span>}
        </div>
      );
    },
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 my-4 italic bg-muted/50 p-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc space-y-2 font-mono">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal space-y-2 font-mono">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-muted-foreground">
        {children}
      </li>
    ),
    ...components,
  }
}