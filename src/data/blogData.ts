export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  publishTime?: string;
  scheduled?: boolean;
  autoPublish?: boolean;
  category: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  imageTitle?: string;
  readTime: number;
  published: boolean;
  featured?: boolean;
  seoTitle?: string;
  metaTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schema?: string;
  videoSEO?: {
    title?: string;
    description?: string;
    duration?: string;
    uploadDate?: string;
    thumbnailUrl?: string;
    transcript?: string;
  };
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaDescription?: string;
  metaTitle?: string;
  keywords?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schema?: string;
  count: number;
  color: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  description: string;
  metaDescription?: string;
  metaTitle?: string;
  keywords?: string;
  focusKeyword?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  schema?: string;
  count: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to React Hooks",
    slug: "the-ultimate-guide-to-react-hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in your functional components.",
    content: "<h1>React Hooks</h1><p>React Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>",
    author: "John Doe",
    publishDate: "2024-01-26",
    category: "React",
    tags: ["react", "hooks", "javascript"],
    image: "https://source.unsplash.com/random/800x450?react",
    readTime: 5,
    published: true,
    featured: true,
    seoTitle: "React Hooks Guide",
    metaTitle: "React Hooks Guide",
    metaDescription: "A comprehensive guide to React Hooks with examples.",
    focusKeyword: "React Hooks",
    keywords: "react, hooks, useState, useEffect",
    canonicalUrl: "https://example.com/react-hooks-guide",
    ogTitle: "React Hooks: The Complete Guide",
    ogDescription: "Learn React Hooks with practical examples.",
    twitterTitle: "React Hooks Guide",
    twitterDescription: "A complete guide to React Hooks.",
    noIndex: false,
    noFollow: false,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "React Hooks Guide",
      "author": {
        "@type": "Person",
        "name": "John Doe"
      },
      "datePublished": "2024-01-26"
    }`
  },
  {
    id: "2",
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    excerpt: "A step-by-step guide to setting up your first Next.js application.",
    content: "<h1>Next.js Tutorial</h1><p>Next.js is a React framework that enables server-side rendering and static site generation.</p>",
    author: "Jane Smith",
    publishDate: "2024-01-25",
    category: "Next.js",
    tags: ["nextjs", "react", "javascript"],
    image: "https://source.unsplash.com/random/800x450?nextjs",
    readTime: 7,
    published: true,
    featured: false,
    seoTitle: "Next.js Tutorial",
    metaTitle: "Next.js Tutorial",
    metaDescription: "Learn how to get started with Next.js and build your first application.",
    focusKeyword: "Next.js",
    keywords: "nextjs, react, tutorial, server-side rendering",
    canonicalUrl: "https://example.com/nextjs-tutorial",
    ogTitle: "Next.js: A Beginner's Guide",
    ogDescription: "Start building with Next.js today.",
    twitterTitle: "Next.js Tutorial",
    twitterDescription: "A beginner's guide to Next.js.",
    noIndex: false,
    noFollow: false,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Next.js Tutorial",
      "author": {
        "@type": "Person",
        "name": "Jane Smith"
      },
      "datePublished": "2024-01-25"
    }`
  },
  {
    id: "3",
    title: "The Future of Web Development with WebAssembly",
    slug: "the-future-of-web-development-with-webassembly",
    excerpt: "Explore how WebAssembly is changing the landscape of web development.",
    content: "<h1>WebAssembly</h1><p>WebAssembly (Wasm) is a binary instruction format for a stack-based virtual machine.</p>",
    author: "Alice Johnson",
    publishDate: "2024-01-24",
    category: "WebAssembly",
    tags: ["webassembly", "wasm", "web development"],
    image: "https://source.unsplash.com/random/800x450?webassembly",
    readTime: 6,
    published: true,
    featured: false,
    seoTitle: "WebAssembly: The Future of Web Development",
    metaTitle: "WebAssembly: The Future of Web Development",
    metaDescription: "Explore how WebAssembly is revolutionizing web development.",
    focusKeyword: "WebAssembly",
    keywords: "webassembly, wasm, web development, performance",
    canonicalUrl: "https://example.com/webassembly-future",
    ogTitle: "WebAssembly: The Next Big Thing",
    ogDescription: "Discover the power of WebAssembly.",
    twitterTitle: "WebAssembly: Future of Web Dev",
    twitterDescription: "Explore WebAssembly and its impact.",
    noIndex: false,
    noFollow: false,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "WebAssembly: The Future of Web Development",
      "author": {
        "@type": "Person",
        "name": "Alice Johnson"
      },
      "datePublished": "2024-01-24"
    }`
  },
  {
    id: "4",
    title: "Mastering TypeScript: A Practical Guide",
    slug: "mastering-typescript-a-practical-guide",
    excerpt: "Learn TypeScript with practical examples and improve your JavaScript development skills.",
    content: "<h1>TypeScript Guide</h1><p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.</p>",
    author: "Bob Williams",
    publishDate: "2024-01-23",
    category: "TypeScript",
    tags: ["typescript", "javascript", "programming"],
    image: "https://source.unsplash.com/random/800x450?typescript",
    readTime: 8,
    published: true,
    featured: false,
    seoTitle: "TypeScript: A Practical Guide",
    metaTitle: "TypeScript: A Practical Guide",
    metaDescription: "Master TypeScript and improve your JavaScript development skills.",
    focusKeyword: "TypeScript",
    keywords: "typescript, javascript, guide, programming",
    canonicalUrl: "https://example.com/typescript-guide",
    ogTitle: "TypeScript: Become a Pro",
    ogDescription: "Learn TypeScript with practical examples.",
    twitterTitle: "TypeScript Guide",
    twitterDescription: "A practical guide to mastering TypeScript.",
    noIndex: false,
    noFollow: false,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "TypeScript: A Practical Guide",
      "author": {
        "@type": "Person",
        "name": "Bob Williams"
      },
      "datePublished": "2024-01-23"
    }`
  },
  {
    id: "5",
    title: "Building RESTful APIs with Node.js and Express",
    slug: "building-restful-apis-with-nodejs-and-express",
    excerpt: "A comprehensive guide to building RESTful APIs using Node.js and Express.",
    content: "<h1>Node.js and Express APIs</h1><p>Learn how to build RESTful APIs with Node.js and Express.</p>",
    author: "Eve Davis",
    publishDate: "2024-01-22",
    category: "Node.js",
    tags: ["nodejs", "express", "api", "restful"],
    image: "https://source.unsplash.com/random/800x450?nodejs",
    readTime: 9,
    published: true,
    featured: false,
    seoTitle: "Node.js and Express: Building RESTful APIs",
    metaTitle: "Node.js and Express: Building RESTful APIs",
    metaDescription: "Learn how to build RESTful APIs using Node.js and Express.",
    focusKeyword: "RESTful APIs",
    keywords: "nodejs, express, api, restful, javascript",
    canonicalUrl: "https://example.com/nodejs-express-api",
    ogTitle: "Node.js and Express: API Mastery",
    ogDescription: "Build RESTful APIs with Node.js and Express.",
    twitterTitle: "Node.js API Guide",
    twitterDescription: "Building RESTful APIs with Node.js.",
    noIndex: false,
    noFollow: false,
    schema: `{
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Node.js and Express: Building RESTful APIs",
      "author": {
        "@type": "Person",
        "name": "Eve Davis"
      },
      "datePublished": "2024-01-22"
    }`
  },
];

export const blogCategories: BlogCategory[] = [
  {
    id: "react",
    name: "React",
    slug: "react",
    description: "All about React and its ecosystem.",
    count: 15,
    color: "bg-blue-100 text-blue-800",
    metaTitle: "React Category",
    metaDescription: "All about React and its ecosystem.",
    keywords: "react, javascript, frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    slug: "nextjs",
    description: "The React Framework for Production.",
    count: 10,
    color: "bg-green-100 text-green-800",
    metaTitle: "Next.js Category",
    metaDescription: "The React Framework for Production.",
    keywords: "nextjs, react, framework",
  },
  {
    id: "webassembly",
    name: "WebAssembly",
    slug: "webassembly",
    description: "A binary instruction format for a stack-based virtual machine.",
    count: 7,
    color: "bg-yellow-100 text-yellow-800",
    metaTitle: "WebAssembly Category",
    metaDescription: "A binary instruction format for a stack-based virtual machine.",
    keywords: "webassembly, wasm, web",
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    description: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    count: 12,
    color: "bg-purple-100 text-purple-800",
    metaTitle: "TypeScript Category",
    metaDescription: "TypeScript is a typed superset of JavaScript.",
    keywords: "typescript, javascript, typing",
  },
  {
    id: "nodejs",
    name: "Node.js",
    slug: "nodejs",
    description: "Node.js is an open-source, cross-platform, JavaScript runtime environment.",
    count: 8,
    color: "bg-red-100 text-red-800",
    metaTitle: "Node.js Category",
    metaDescription: "Node.js is a JavaScript runtime environment.",
    keywords: "nodejs, javascript, backend",
  },
];

export const blogTags: BlogTag[] = [
  {
    id: "javascript",
    name: "JavaScript",
    slug: "javascript",
    description: "All about JavaScript.",
    count: 50,
    metaTitle: "JavaScript Tag",
    metaDescription: "All about JavaScript.",
    keywords: "javascript, js, programming",
  },
  {
    id: "react",
    name: "React",
    slug: "react",
    description: "React is a free and open-source front-end JavaScript library.",
    count: 35,
    metaTitle: "React Tag",
    metaDescription: "React is a JavaScript library for building user interfaces.",
    keywords: "react, javascript, frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    slug: "nextjs",
    description: "Next.js is a React framework for production.",
    count: 25,
    metaTitle: "Next.js Tag",
    metaDescription: "Next.js is a React framework for production.",
    keywords: "nextjs, react, framework",
  },
  {
    id: "webassembly",
    name: "WebAssembly",
    slug: "webassembly",
    description: "WebAssembly (Wasm) is a binary instruction format.",
    count: 15,
    metaTitle: "WebAssembly Tag",
    metaDescription: "WebAssembly is a binary instruction format.",
    keywords: "webassembly, wasm, web",
  },
  {
    id: "typescript",
    name: "TypeScript",
    slug: "typescript",
    description: "TypeScript is a typed superset of JavaScript.",
    count: 30,
    metaTitle: "TypeScript Tag",
    metaDescription: "TypeScript is a typed superset of JavaScript.",
    keywords: "typescript, javascript, typing",
  },
];
