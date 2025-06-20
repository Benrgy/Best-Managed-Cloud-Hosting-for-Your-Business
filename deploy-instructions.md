
# Deployment Instructions for Cloud Hosting

## Important: You MUST build the project before deploying!

Your React application needs to be compiled into standard HTML, CSS, and JavaScript before it can run on a traditional web server.

### Step 1: Build the Project Locally

```bash
# Install dependencies
npm install

# Build for production
npm run build
```

This creates a `dist` folder with compiled files.

### Step 2: Deploy the `dist` Folder Contents

**IMPORTANT**: Upload the CONTENTS of the `dist` folder to your web server's public directory (usually `public_html`, `www`, or similar), NOT the source code files.

The `dist` folder will contain:
- `index.html` (pure HTML that loads your app)
- `assets/` folder (compiled CSS and JS files)
- Other static assets

### Step 3: Server Configuration

Your web server needs to handle client-side routing. The included files help with this:

- **Apache**: `.htaccess` file is already configured
- **Nginx**: Add the nginx configuration
- **IIS/Windows**: `web.config` file is included

### Step 4: Verify Deployment

After uploading the built files:
1. Visit your domain
2. Check that navigation works (blog, admin pages)
3. Verify all assets load correctly

### Common Issues:

1. **Blank page**: Make sure you uploaded the `dist` folder contents, not source files
2. **404 on refresh**: Configure your server for SPA routing
3. **Assets not loading**: Check file paths and server configuration

### Build Commands:

- Development build: `npm run build:dev`
- Production build: `npm run build`

Always use the production build for live deployment.
