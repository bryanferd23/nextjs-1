import type { MDXComponents } from 'mdx/types';
import Image, { ImageProps } from 'next/image';
import Link from 'next/link';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Custom components
    Image: (props: ImageProps) => (
      <Image
        {...props}
        alt={props.alt || ""}
        className="rounded-lg shadow-md my-6"
        style={{ width: '100%', height: 'auto' }}
      />
    ),
    
    // Override default HTML elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mt-8 mb-4 first:mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-6 mb-3">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
        {children}
      </p>
    ),
    a: ({ href, children }) => {
      // Check if it's an external link
      const isExternal = href?.startsWith('http');
      
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
          >
            {children}
          </a>
        );
      }
      
      return (
        <Link
          href={href || '#'}
          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline transition-colors"
        >
          {children}
        </Link>
      );
    },
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-2">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="ml-4">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 text-gray-800 dark:text-gray-200 italic">
        {children}
      </blockquote>
    ),
    code: ({ children, className, ...props }) => {
      const match = /language-(\w+)/.exec(className || '');
      const language = match ? match[1] : '';
      
      // If it's a code block with language, use syntax highlighter
      if (language && typeof children === 'string') {
        return (
          <SyntaxHighlighter
            style={tomorrow}
            language={language}
            PreTag="div"
            className="rounded-lg my-6"
            showLineNumbers={true}
            wrapLines={true}
            {...props}
          >
            {children.replace(/\n$/, '')}
          </SyntaxHighlighter>
        );
      }
      
      // Inline code
      return (
        <code className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      );
    },
    pre: ({ children }) => {
      // If the pre contains a code element with language, let the code component handle it
      if (typeof children === 'object' && children?.props?.className?.includes('language-')) {
        return <>{children}</>;
      }
      
      // Regular pre block
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6 text-sm">
          {children}
        </pre>
      );
    },
    hr: () => (
      <hr className="border-gray-300 dark:border-gray-600 my-8" />
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-600">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 px-4 py-2 text-left font-semibold">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="border border-gray-300 dark:border-gray-600 px-4 py-2">
        {children}
      </td>
    ),
    
    // Allow all other components to be passed through
    ...components,
  };
}
