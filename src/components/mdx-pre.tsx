"use client";

import React from "react";
import { Copy } from "lucide-react";

// Split into its own Client Component file. mdx-components.tsx's `pre`
// override is rendered by next-mdx-remote/rsc's compileMDX() as part of
// the Server Component tree — React Hooks (useState) are illegal there.
// This file's "use client" directive creates the boundary that makes the
// copy-to-clipboard interaction legal again. See PRODUCT.md / the git
// history on this file for the runtime error this replaced.
export function Pre({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = React.useState(false);
  const handleCopy = async () => {
    const text = (children as React.ReactElement<{ children: string }>).props.children;
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
}
