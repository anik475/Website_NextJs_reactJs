// components/MarkdownRenderer.js
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter, PrismLight as SyntaxHighlighterLight, atomDark } from 'react-syntax-highlighter';
import { javascript, python } from 'react-syntax-highlighter/dist/cjs/languages/prism';

const CodeBlock = ({ node, inline, className, children, ...props }) => {
  const match = /language-(\w+)/.exec(className || '');
  return !inline && match ? (
    <SyntaxHighlighter style={atomDark} language={match[1]} PreTag="div" {...props}>
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};

const MarkdownRenderer = ({ content }) => {
  return (
    <ReactMarkdown components={{ code: CodeBlock }}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
