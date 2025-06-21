
# Complete Deployment Guide for Cloud Hosting

## ⚠️ CRITICAL: You MUST build the project before deploying!

Your React application needs to be compiled into standard HTML, CSS, and JavaScript before it can run on any web server.

## Step 1: Build the Project Locally

```bash
# Install dependencies (if not already done)
npm install

# Build for production - THIS IS MANDATORY
npm run build
```

This creates a `dist` folder with compiled files that are ready for deployment.

## Step 2: Deploy ONLY the `dist` Folder Contents

**CRITICAL**: Upload ONLY the CONTENTS of the `dist` folder to your web server's public directory (usually `public_html`, `www`, or similar).

⚠️ **DO NOT upload source code files** (src/, components/, etc.) - these will NOT work on production servers!

After building, your `dist` folder will contain:
- `index.html` (production-ready HTML with compiled asset references)
- `assets/` folder (compiled and minified CSS and JS files)
- Static assets (images, fonts, etc.)
- Server configuration files (.htaccess, web.config, nginx.conf)

### What happens during the build:

1. **TypeScript Compilation**: All `.tsx` and `.ts` files are compiled to JavaScript
2. **Asset Bundling**: CSS and JS are minified and bundled
3. **HTML Transformation**: The `index.html` is updated to reference the compiled assets instead of source files
4. **File Hashing**: Assets get unique hashes for cache-busting
5. **Optimization**: Code splitting, tree shaking, and compression

### For Different Hosting Types:

#### cPanel/Shared Hosting:
1. Run `npm run build` locally
2. Compress the **contents** of the `dist` folder into a ZIP file
3. Upload and extract to your `public_html` directory
4. Ensure the `.htaccess` file is in the root directory

#### VPS/Dedicated Server:
1. Run `npm run build` locally or on server
2. Copy `dist` folder **contents** to your web root (e.g., `/var/www/html`)
3. Set proper file permissions: `chmod -R 755 /var/www/html`
4. Configure your web server (Apache/Nginx)

#### Cloud Platforms (AWS, DigitalOcean, etc.):
1. Run `npm run build` locally
2. Upload `dist` folder **contents** to your web server
3. Configure server for SPA routing
4. Set up SSL certificate if needed

## Step 3: Server Configuration

Your web server needs to handle client-side routing. Configuration files are included:

### Apache Servers:
- `.htaccess` file is automatically included in the build
- Handles SPA routing and MIME types
- Enables compression and caching

### IIS/Windows Servers:
- `web.config` file is included
- Configures URL rewriting and MIME types
- Sets up compression and security headers

### Nginx Servers:
- Use the included `nginx.conf` as a reference
- Copy the configuration to your nginx sites directory
- Reload nginx: `sudo nginx -s reload`

## Step 4: Verify Deployment

After uploading the built files:

1. **Visit your domain** - The homepage should load correctly
2. **Test navigation** - Click on blog, admin pages to ensure routing works
3. **Check browser console** - Look for any 404 errors or missing assets
4. **Test on mobile** - Ensure responsive design works
5. **Verify SEO** - Check that meta tags are present in page source
6. **Check Network Tab** - Ensure all assets load with correct MIME types

## Step 5: Troubleshooting Common Issues

### Blank Page (Most Common):
- **Cause**: Uploaded source files instead of built files, or server serving wrong MIME types
- **Solution**: Ensure you built the project (`npm run build`) and uploaded only `dist` folder contents

### MIME Type Errors:
- **Cause**: Server not configured to serve JavaScript modules correctly
- **Solution**: Ensure server configuration files (.htaccess, web.config) are uploaded and active

### 404 on Page Refresh:
- **Cause**: Server not configured for SPA routing
- **Solution**: Ensure `.htaccess` or `web.config` is properly configured and in the root directory

### Assets Not Loading:
- **Cause**: Incorrect file paths or missing files
- **Solution**: Check that all files from `dist` folder were uploaded, including the `assets` directory

### Console Errors:
- **Cause**: Missing files or incorrect paths
- **Solution**: Verify all files were uploaded and check network tab for failed requests

## Build Commands Reference:

```bash
# Production build (for deployment) - ALWAYS USE THIS
npm run build

# Development server (for local testing only)
npm run dev

# Preview built files locally (optional)
npm run preview
```

## File Structure After Build:

```
dist/
├── index.html          # Production HTML with compiled asset references
├── assets/            # Compiled and optimized CSS/JS files
│   ├── index-[hash].js    # Main application bundle
│   ├── index-[hash].css   # Compiled CSS
│   ├── vendor-[hash].js   # Third-party libraries
│   └── [other-chunks].js  # Code-split chunks
├── .htaccess          # Apache configuration
├── web.config         # IIS configuration
├── nginx.conf         # Nginx configuration reference
└── [static files]     # Images, fonts, etc.
```

## Performance Optimization:

The build is optimized with:
- ✅ Code splitting and lazy loading
- ✅ Minification and compression
- ✅ Asset optimization
- ✅ Tree shaking (unused code removal)
- ✅ Cache-friendly file naming with hashes

## Security Features:

- ✅ Security headers configured
- ✅ Source file access blocked
- ✅ XSS and clickjacking protection
- ✅ Content type validation

## Final Deployment Checklist:

- [ ] Project built successfully (`npm run build` completed without errors)
- [ ] **ONLY** `dist` folder contents uploaded to web server
- [ ] Server configuration files in place (.htaccess or web.config)
- [ ] Domain points to correct directory
- [ ] All routes accessible (test navigation manually)
- [ ] No console errors or 404s in browser developer tools
- [ ] Mobile responsiveness working
- [ ] SEO meta tags visible in page source
- [ ] Assets loading with correct MIME types

## Common Mistakes to Avoid:

❌ **Don't upload source code** (src/, components/, package.json, etc.)
❌ **Don't skip the build step** - the source code won't work on production servers
❌ **Don't upload the entire project folder** - only upload `dist` folder contents
❌ **Don't forget server configuration files** - SPA routing won't work without them

✅ **Do run `npm run build` first**
✅ **Do upload only `dist` folder contents**
✅ **Do test thoroughly after deployment**
✅ **Do check browser developer tools for errors**

**Remember**: The development version (what you see in Lovable) uses a development server that can compile TypeScript on-the-fly. Production servers cannot do this - they need pre-compiled JavaScript files, which is what the build process creates!
