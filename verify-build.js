
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const requiredFiles = ['index.html', '.htaccess', 'web.config'];
const requiredDirs = ['assets'];

console.log('🔍 Verifying build output...');

// Check if dist directory exists
if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist directory not found. Run "npm run build" first.');
  process.exit(1);
}

// Check required files
let allFilesExist = true;
requiredFiles.forEach(file => {
  const filePath = path.join(distPath, file);
  if (fs.existsSync(filePath)) {
    console.log(`✅ ${file} found`);
  } else {
    console.error(`❌ ${file} missing`);
    allFilesExist = false;
  }
});

// Check required directories
requiredDirs.forEach(dir => {
  const dirPath = path.join(distPath, dir);
  if (fs.existsSync(dirPath)) {
    const files = fs.readdirSync(dirPath);
    console.log(`✅ ${dir} directory found with ${files.length} files`);
  } else {
    console.error(`❌ ${dir} directory missing`);
    allFilesExist = false;
  }
});

// Check index.html content
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  
  // Verify it doesn't contain dev references
  if (indexContent.includes('/src/main.tsx')) {
    console.error('❌ Error: index.html still contains development references');
    allFilesExist = false;
  } else {
    console.log('✅ index.html is production-ready');
  }
  
  // Check for built assets
  if (indexContent.includes('assets/') || indexContent.includes('.js') || indexContent.includes('.css')) {
    console.log('✅ Built assets referenced in index.html');
  } else {
    console.warn('⚠️  Warning: No built assets found in index.html');
  }
}

// Final result
if (allFilesExist) {
  console.log('\n🎉 Build verification successful! Ready for deployment.');
  console.log('\n📁 Upload the contents of the "dist" folder to your web server.');
} else {
  console.error('\n💥 Build verification failed. Please fix the issues above.');
  process.exit(1);
}
