
import ReactMarkdown from 'react-markdown';
import { OptimizedImage } from "@/components/OptimizedImage";

interface BlogPostRendererProps {
  content: string;
  className?: string;
}

export const BlogPostRenderer = ({ content, className = "" }: BlogPostRendererProps) => {
  // Custom components for ReactMarkdown
  const components = {
    h1: ({ children, ...props }: any) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8 leading-tight" {...props}>
        {children}
      </h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-3xl font-bold text-gray-900 mb-5 mt-8 leading-tight" {...props}>
        {children}
      </h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-2xl font-semibold text-gray-900 mb-4 mt-6 leading-tight" {...props}>
        {children}
      </h3>
    ),
    h4: ({ children, ...props }: any) => (
      <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-5 leading-tight" {...props}>
        {children}
      </h4>
    ),
    h5: ({ children, ...props }: any) => (
      <h5 className="text-lg font-semibold text-gray-900 mb-3 mt-4 leading-tight" {...props}>
        {children}
      </h5>
    ),
    h6: ({ children, ...props }: any) => (
      <h6 className="text-base font-semibold text-gray-900 mb-2 mt-4 leading-tight" {...props}>
        {children}
      </h6>
    ),
    p: ({ children, ...props }: any) => (
      <p className="text-lg text-gray-700 mb-6 leading-relaxed" {...props}>
        {children}
      </p>
    ),
    strong: ({ children, ...props }: any) => (
      <strong className="font-bold text-gray-900" {...props}>
        {children}
      </strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic text-gray-800" {...props}>
        {children}
      </em>
    ),
    u: ({ children, ...props }: any) => (
      <u className="underline" {...props}>
        {children}
      </u>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 py-4 my-8 bg-blue-50 italic text-gray-800 text-lg" {...props}>
        {children}
      </blockquote>
    ),
    ul: ({ children, ...props }: any) => (
      <ul className="list-disc list-inside mb-6 space-y-2 text-lg text-gray-700" {...props}>
        {children}
      </ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol className="list-decimal list-inside mb-6 space-y-2 text-lg text-gray-700" {...props}>
        {children}
      </ol>
    ),
    li: ({ children, ...props }: any) => (
      <li className="mb-1" {...props}>
        {children}
      </li>
    ),
    a: ({ children, href, ...props }: any) => (
      <a 
        href={href} 
        className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
        target={href?.startsWith('http') ? '_blank' : '_self'}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : ''}
        {...props}
      >
        {children}
      </a>
    ),
    img: ({ src, alt, ...props }: any) => (
      <div className="my-8">
        <OptimizedImage
          src={src}
          alt={alt || ''}
          className="w-full h-auto rounded-lg shadow-lg"
          {...props}
        />
        {alt && (
          <p className="text-sm text-gray-600 text-center mt-2 italic">
            {alt}
          </p>
        )}
      </div>
    ),
    code: ({ children, className, ...props }: any) => {
      const isInline = !className;
      
      if (isInline) {
        return (
          <code className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono" {...props}>
            {children}
          </code>
        );
      }
      
      return (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6" {...props}>
          <code className="font-mono text-sm">
            {children}
          </code>
        </pre>
      );
    },
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-8">
        <table className="min-w-full border-collapse border border-gray-300" {...props}>
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: any) => (
      <th className="border border-gray-300 bg-gray-100 px-4 py-2 text-left font-semibold" {...props}>
        {children}
      </th>
    ),
    td: ({ children, ...props }: any) => (
      <td className="border border-gray-300 px-4 py-2" {...props}>
        {children}
      </td>
    ),
    hr: ({ ...props }: any) => (
      <hr className="border-t-2 border-gray-200 my-8" {...props} />
    )
  };

  // If content contains HTML, render it directly with proper styling
  if (content.includes('<')) {
    return (
      <div 
        className={`prose prose-lg max-w-none
          prose-headings:text-gray-900 prose-headings:font-bold
          prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-8
          prose-h2:text-3xl prose-h2:mb-5 prose-h2:mt-8
          prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-6
          prose-h4:text-xl prose-h4:mb-3 prose-h4:mt-5
          prose-h5:text-lg prose-h5:mb-3 prose-h5:mt-4
          prose-h6:text-base prose-h6:mb-2 prose-h6:mt-4
          prose-p:text-lg prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed
          prose-strong:font-bold prose-strong:text-gray-900
          prose-em:italic prose-em:text-gray-800
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:my-8 prose-blockquote:bg-blue-50 prose-blockquote:italic prose-blockquote:text-gray-800
          prose-ul:list-disc prose-ul:list-inside prose-ul:mb-6 prose-ul:space-y-2
          prose-ol:list-decimal prose-ol:list-inside prose-ol:mb-6 prose-ol:space-y-2
          prose-li:mb-1 prose-li:text-lg prose-li:text-gray-700
          prose-a:text-blue-600 prose-a:underline prose-a:font-medium hover:prose-a:text-blue-800
          prose-code:bg-gray-100 prose-code:text-gray-800 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
          prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:my-6
          prose-img:w-full prose-img:h-auto prose-img:rounded-lg prose-img:shadow-lg prose-img:my-8
          prose-table:min-w-full prose-table:border-collapse prose-table:my-8
          prose-th:border prose-th:border-gray-300 prose-th:bg-gray-100 prose-th:px-4 prose-th:py-2 prose-th:text-left prose-th:font-semibold
          prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
          prose-hr:border-t-2 prose-hr:border-gray-200 prose-hr:my-8
          ${className}`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    );
  }

  // Render Markdown
  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <ReactMarkdown components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
};
