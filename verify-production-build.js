
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Verifying production build...\n');

const distDir = path.join(process.cwd(), 'dist');
const indexHtmlPath = path.join(distDir, 'index.html');
const assetsDir = path.join(distDir, 'assets');

// Check if dist directory exists
if (!fs.existsSync(distDir)) {
  console.error('❌ ERROR: dist directory not found!');
  console.error('   Please run "npm run build" first.\n');
  process.exit(1);
}

// Check if index.html exists
if (!fs.existsSync(indexHtmlPath)) {
  console.error('❌ ERROR: index.html not found in dist directory!');
  process.exit(1);
}

// Check if assets directory exists
if (!fs.existsSync(assetsDir)) {
  console.error('❌ ERROR: assets directory not found in dist directory!');
  process.exit(1);
}

// Read and analyze index.html
const indexContent = fs.readFileSync(indexHtmlPath, 'utf8');

// Check if it references TypeScript files (should not in production)
if (indexContent.includes('/src/main.tsx') && !indexContent.includes('assets/')) {
  console.error('❌ ERROR: index.html still references TypeScript source files!');
  console.error('   This indicates the build process did not complete properly.');
  console.error('   Please run "npm run build" again.\n');
  process.exit(1);
}

// Check if it references compiled assets
const hasCompiledAssets = indexContent.includes('assets/') && 
                         (indexContent.includes('.js') || indexContent.includes('.css'));

if (!hasCompiledAssets) {
  console.error('❌ ERROR: index.html does not reference compiled assets!');
  console.error('   This indicates the build process did not inject the asset references.');
  process.exit(1);
}

// Check for essential assets
const assets = fs.readdirSync(assetsDir);
const hasJS = assets.some(file => file.endsWith('.js'));
const hasCSS = assets.some(file => file.endsWith('.css'));

if (!hasJS) {
  console.error('❌ ERROR: No JavaScript files found in assets directory!');
  process.exit(1);
}

if (!hasCSS) {
  console.error('❌ ERROR: No CSS files found in assets directory!');
  process.exit(1);
}

// Check for server configuration files
const configFiles = ['.htaccess', 'web.config'];
const foundConfigs = configFiles.filter(file => 
  fs.existsSync(path.join(distDir, file))
);

console.log('✅ Build verification passed!\n');
console.log('📊 Build Summary:');
console.log(`   - index.html: ✅ Found and properly configured`);
console.log(`   - JavaScript assets: ✅ ${assets.filter(f => f.endsWith('.js')).length} files`);
console.log(`   - CSS assets: ✅ ${assets.filter(f => f.endsWith('.css')).length} files`);
console.log(`   - Server configs: ✅ ${foundConfigs.join(', ') || 'None found'}`);
console.log(`   - Total assets: ${assets.length} files\n`);

console.log('🚀 Ready for deployment!');
console.log('   Upload the CONTENTS of the dist/ folder to your web server.\n');
