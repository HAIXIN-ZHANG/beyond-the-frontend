import { createElement } from 'react';
import type { ReactNode } from 'react';
import type { Nodes } from 'mdast';
import Link from 'next/link';
import { nodeText } from '../../content/markdown.ts';
import { CodeBlock } from './code-block.tsx';
import { ComparisonTable } from './comparison-table.tsx';

export function MarkdownContent({ node }: { node: Nodes }): ReactNode {
  const children = 'children' in node ? node.children.map((child, index) => <MarkdownContent key={index} node={child} />) : null;
  switch (node.type) {
    case 'root': return children;
    case 'text': return node.value;
    case 'paragraph': return <p>{children}</p>;
    case 'strong': return <strong>{children}</strong>;
    case 'emphasis': return <em>{children}</em>;
    case 'inlineCode': return <code>{node.value}</code>;
    case 'break': return <br />;
    case 'thematicBreak': return <hr />;
    case 'heading': {
      const id = node.data?.id;
      if (!id) throw new Error('Heading IDs must be assigned before rendering');
      return createElement(`h${node.depth}`, { id, tabIndex: -1 },
        <a className="heading-link" href={`#${encodeURIComponent(id)}`}>{children}</a>);
    }
    case 'link': return node.url.startsWith('/')
      ? <Link href={node.url} title={node.title ?? undefined}>{children}</Link>
      : <a href={node.url} title={node.title ?? undefined}>{children}</a>;
    case 'list': return node.ordered ? <ol start={node.start ?? undefined}>{children}</ol> : <ul>{children}</ul>;
    case 'listItem': return <li>{children}</li>;
    case 'blockquote': return <blockquote>{children}</blockquote>;
    case 'code': return <CodeBlock code={node.value}
      language={`${node.lang === 'text' ? '原文文本图与示例' : node.lang || '代码'} · ${String(node.data?.sectionTitle || '')}`}
      labels={{ copy: '复制文本', copied: '已复制', manualCopy: '请选择文本并手动复制' }} />;
    case 'table': {
      const [header, ...rows] = node.children;
      return <ComparisonTable caption={`${String(node.data?.sectionTitle || '本节')}：对照表`}
        columns={header.children.map((cell, index) => ({ id: `column-${index}`, title: <>{cell.children.map((child, key) => <MarkdownContent key={key} node={child} />)}</> }))}
        rows={rows.map((row, index) => ({ id: `row-${index}`, cells: row.children.map(cell => <>{cell.children.map((child, key) => <MarkdownContent key={key} node={child} />)}</>) }))} />;
    }
    default: throw new Error(`Unsupported Markdown rendering node: ${node.type} (${nodeText(node)})`);
  }
}
