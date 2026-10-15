import assert from 'node:assert/strict';
import { test } from 'node:test';
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import { renderToStaticMarkup } from 'react-dom/server';

test('every published article has frontmatter and compiles to readable MDX', async () => {
  const dir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(dir).filter(file => file.endsWith('.mdx'));
  assert.ok(files.length >= 5);
  for (const file of files) {
    const {data, content} = matter(fs.readFileSync(path.join(dir,file),'utf8'));
    assert.ok(data.title && data.summary && data.excerpt && data.author, file);
    assert.match(data.date, /^\d{4}-\d{2}-\d{2}$/);
    assert.ok(content.length > 1500, file);
    const result = await compileMDX({source:content});
    const html = renderToStaticMarkup(result.content);
    assert.match(html, /<h1>/);
    assert.match(html, /<pre>/);
    const examples = [...content.matchAll(/~~~js\n([\s\S]*?)~~~/g)];
    assert.ok(examples.length > 0, file + " needs a runnable example");
    for (const match of examples) {
      const run = spawnSync(process.execPath, ['--input-type=module','-'], { input:match[1], encoding:'utf8',timeout:10000 });
      assert.equal(run.status, 0, file + ': ' + run.stderr);
    }
  }
});
