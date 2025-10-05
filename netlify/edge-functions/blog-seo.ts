import { Context } from "https://edge.netlify.com";

// Netlify Edge Function for Blog SEO Enhancement
export default async (request: Request, context: Context) => {
  const url = new URL(request.url);
  
  // Only process blog post routes
  if (!url.pathname.startsWith('/blog/') || url.pathname === '/blog' || url.pathname === '/blog/') {
    return context.next();
  }

  // Extract slug from URL
  const pathParts = url.pathname.split('/');
  const slug = pathParts[pathParts.length - 1] || pathParts[pathParts.length - 2];
  
  if (!slug) {
    return context.next();
  }

  try {
    // Fetch blog post data from Supabase
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
    
    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase credentials');
      return context.next();
    }

    const response = await fetch(
      `${supabaseUrl}/rest/v1/blog_posts?slug=eq.${slug}&published=eq.true&select=*`,
      {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (!response.ok) {
      console.error('Failed to fetch blog post:', response.status);
      return context.next();
    }

    const posts = await response.json();
    
    if (!posts || posts.length === 0) {
      return context.next();
    }

    const post = posts[0];

    // Get the original HTML
    const originalResponse = await context.next();
    const html = await originalResponse.text();

    // Generate SEO meta tags
    const seoMetaTags = `
    <title>${post.title} | Cloudways Blog</title>
    <meta name="description" content="${post.meta_description}" />
    <meta name="keywords" content="${post.keywords}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${post.title}" />
    <meta property="og:description" content="${post.meta_description}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url.href}" />
    <meta property="og:image" content="${post.image}" />
    <meta property="article:published_time" content="${post.publish_date}" />
    <meta property="article:author" content="${post.author}" />
    <meta property="article:section" content="${post.category}" />
    ${post.tags.map((tag: string) => `<meta property="article:tag" content="${tag}" />`).join('\n    ')}
    
    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${post.title}" />
    <meta name="twitter:description" content="${post.meta_description}" />
    <meta name="twitter:image" content="${post.image}" />
    
    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${post.title}",
      "description": "${post.meta_description}",
      "image": "${post.image}",
      "author": {
        "@type": "Person",
        "name": "${post.author}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Cloudways Hosting Reviews",
        "logo": {
          "@type": "ImageObject",
          "url": "https://best-managed-cloud-hosting-for-business.lovable.app/logo.png"
        }
      },
      "datePublished": "${post.publish_date}",
      "dateModified": "${post.updated_at || post.publish_date}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "${url.href}"
      },
      "keywords": "${post.keywords}",
      "articleSection": "${post.category}",
      "wordCount": ${post.content.split(' ').length}
    }
    </script>`;

    // Inject SEO meta tags into the HTML head
    const enhancedHtml = html.replace('</head>', `${seoMetaTags}\n</head>`);

    return new Response(enhancedHtml, {
      status: originalResponse.status,
      headers: {
        ...Object.fromEntries(originalResponse.headers),
        'Content-Type': 'text/html; charset=utf-8',
        'X-SEO-Enhanced': 'true'
      }
    });

  } catch (error) {
    console.error('Error in blog-seo edge function:', error);
    return context.next();
  }
};

export const config = {
  path: "/blog/*"
};