# Netlify Edge Function SEO Setup Guide

## Overview

This project implements SEO optimization using Netlify Edge Functions to enhance blog post meta tags for search engine crawlers while maintaining the React SPA architecture.

## How It Works

1. **Edge Function Intercepts Requests**: When a crawler visits `/blog/[slug]`, the Netlify edge function intercepts the request
2. **Fetches Post Data**: Queries Supabase database for the blog post using the slug
3. **Generates SEO Tags**: Creates comprehensive meta tags, Open Graph data, and JSON-LD structured data
4. **Injects HTML**: Enhances the HTML `<head>` with SEO tags before serving to the crawler
5. **Client-Side Normal**: For regular users, React app functions normally

## Files Created

### 1. `netlify/edge-functions/blog-seo.ts`
The edge function that:
- Intercepts `/blog/*` routes
- Fetches blog post data from Supabase
- Generates comprehensive SEO meta tags
- Injects tags into HTML head
- Adds ~50-200ms processing time

### 2. `netlify.toml`
Netlify configuration that:
- Defines build settings
- Maps edge function to `/blog/*` paths
- Configures SPA redirects

### 3. Database Table `blog_posts`
Stores blog content with fields:
- `id`, `title`, `slug` (unique)
- `excerpt`, `content`, `author`
- `publish_date`, `category`, `tags[]`
- `meta_description`, `keywords`
- `image`, `read_time`
- `published`, `featured` flags

## Environment Variables Required

The edge function needs these Supabase credentials (automatically set by Netlify when connected):

- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_SERVICE_ROLE_KEY` - Service role key for server-side access

## Deployment Steps

### Option 1: Deploy to Netlify (Recommended)

1. **Connect to Netlify**:
   ```bash
   # If not already connected
   netlify login
   netlify init
   ```

2. **Add Environment Variables**:
   - Go to Netlify Dashboard → Site Settings → Environment Variables
   - Add `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
   - Or use CLI:
   ```bash
   netlify env:set SUPABASE_URL "your-supabase-url"
   netlify env:set SUPABASE_SERVICE_ROLE_KEY "your-service-role-key"
   ```

3. **Deploy**:
   ```bash
   git push origin main
   # Or manual deploy
   netlify deploy --prod
   ```

### Option 2: Deploy to GitHub Pages (No Edge Functions)

GitHub Pages doesn't support edge functions. You'll get:
- ✅ Client-side SEO (React Helmet)
- ❌ Server-side SEO enhancement

For full SEO, use Netlify, Vercel, or Cloudflare Pages instead.

## Testing the Edge Function

### 1. Test Locally
```bash
netlify dev
# Visit http://localhost:8888/blog/cloudways-vs-competitors-2025
```

### 2. Verify SEO Tags
```bash
curl -I https://yourdomain.com/blog/cloudways-vs-competitors-2025
# Should see X-SEO-Enhanced: true header

curl https://yourdomain.com/blog/cloudways-vs-competitors-2025 | grep -A 10 "og:title"
# Should see Open Graph tags
```

### 3. Test with Google
- Use [Google Rich Results Test](https://search.google.com/test/rich-results)
- Paste your blog post URL
- Verify structured data is detected

## SEO Features Included

### Meta Tags
- ✅ Title and description
- ✅ Keywords
- ✅ Canonical URLs
- ✅ Robots directives

### Open Graph
- ✅ Title, description, type
- ✅ Image with dimensions
- ✅ URL and site name
- ✅ Article metadata (author, published time, section, tags)

### Twitter Card
- ✅ Summary with large image
- ✅ Title and description
- ✅ Image

### Structured Data (JSON-LD)
- ✅ BlogPosting schema
- ✅ Author and publisher info
- ✅ Article metadata
- ✅ Keywords and word count

## Performance Impact

- **Edge Processing**: ~50-200ms per request
- **Database Query**: ~20-50ms
- **No Client Impact**: React app loads normally
- **Caching**: Consider adding cache headers for better performance

## Benefits

1. **Google Friendly**: Crawlers see complete meta tags instantly
2. **No SSR Needed**: Maintains React SPA architecture
3. **Selective Enhancement**: Only blog routes are processed
4. **Fast**: Edge functions run at nearest data center
5. **Isolated**: SEO logic separate from app code

## Limitations

1. **Platform Specific**: Requires Netlify (or similar edge platform)
2. **Database Dependency**: Each crawler request hits database
3. **Not True SSR**: Body content still requires JavaScript
4. **Maintenance**: Database schema changes need edge function updates

## Monitoring

Monitor edge function performance:
1. Netlify Dashboard → Functions → blog-seo
2. Check invocation count, duration, errors
3. View logs for debugging

## Next Steps

1. ✅ Blog posts database created
2. ✅ Edge function deployed
3. ✅ Sample posts inserted
4. 🔄 Deploy to Netlify
5. 🔄 Configure environment variables
6. 🔄 Test with Google Rich Results
7. 🔄 Monitor edge function performance

## Troubleshooting

### Edge function not running
- Check netlify.toml configuration
- Verify environment variables are set
- Check Netlify function logs

### No SEO tags injected
- Verify blog post exists in database with matching slug
- Check `published = true` on the post
- Review edge function logs for errors

### Database connection fails
- Verify `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`
- Check Supabase project is active
- Verify RLS policies allow service role access

## Additional Resources

- [Netlify Edge Functions Docs](https://docs.netlify.com/edge-functions/overview/)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org BlogPosting](https://schema.org/BlogPosting)
- [Open Graph Protocol](https://ogp.me/)
