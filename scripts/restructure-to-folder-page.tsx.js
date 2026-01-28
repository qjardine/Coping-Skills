#!/usr/bin/env node

/**
 * Script to restructure files to Next.js App Router format
 * Converts: app/pages/module/file-name.tsx
 * To: app/pages/module/file-name/page.tsx
 */

const fs = require('fs');
const path = require('path');

// Files/folders to skip (already in correct structure or special cases)
const skipPatterns = [
  'page.tsx',
  'sit-with-it',
  'body-scan',
  'unsafe-body-check',
  'breathing', // already has breathing/page.tsx
  'wise-mind', // already has wise-mind/wise-mind.tsx
];

function shouldSkip(filePath) {
  const fileName = path.basename(filePath);
  const dirName = path.basename(path.dirname(filePath));
  
  // Skip if it's already page.tsx
  if (fileName === 'page.tsx') return true;
  
  // Skip if parent directory is in skip list
  if (skipPatterns.includes(dirName)) return true;
  
  // Skip if it's in a nested structure that should stay as-is
  const parts = filePath.split(path.sep);
  for (const pattern of skipPatterns) {
    if (parts.includes(pattern)) return true;
  }
  
  return false;
}

function restructureFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { success: false, error: 'File does not exist' };
  }
  
  const dir = path.dirname(fullPath);
  const fileName = path.basename(fullPath, '.tsx');
  const newDir = path.join(dir, fileName);
  const newPath = path.join(newDir, 'page.tsx');
  
  // Skip if already in correct structure
  if (fs.existsSync(newPath)) {
    return { success: false, error: 'Already in correct structure', skipped: true };
  }
  
  // Skip if folder already exists with page.tsx
  if (fs.existsSync(newDir) && fs.statSync(newDir).isDirectory()) {
    const contents = fs.readdirSync(newDir);
    if (contents.includes('page.tsx')) {
      // Folder already has page.tsx, skip this file (might be duplicate)
      return { success: false, error: 'Folder already exists with page.tsx', skipped: true };
    }
    if (contents.length > 0) {
      return { success: false, error: 'Folder exists with other files' };
    }
  }
  
  try {
    // Create directory
    fs.mkdirSync(newDir, { recursive: true });
    
    // Move file
    fs.renameSync(fullPath, newPath);
    
    return { 
      success: true, 
      from: filePath, 
      to: path.relative(path.join(__dirname, '..'), newPath) 
    };
  } catch (error) {
    return { success: false, error: error.message };
  }
}

function findFilesToRestructure(baseDir) {
  const files = [];
  
  function walkDir(dir, relativePath = '') {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relPath = path.join(relativePath, entry.name);
      
      if (entry.isDirectory()) {
        // Skip certain directories
        if (!skipPatterns.includes(entry.name)) {
          walkDir(fullPath, relPath);
        }
      } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
        if (!shouldSkip(fullPath)) {
          files.push(relPath);
        }
      }
    }
  }
  
  walkDir(baseDir);
  return files;
}

function main() {
  const pagesDir = path.join(__dirname, '..', 'app', 'pages');
  
  console.log('Finding files to restructure...\n');
  const files = findFilesToRestructure(pagesDir);
  
  console.log(`Found ${files.length} files to process\n`);
  console.log('='.repeat(60));
  
  const results = {
    success: [],
    skipped: [],
    errors: [],
  };
  
  for (const file of files) {
    const filePath = `app/pages/${file}`;
    console.log(`Processing: ${filePath}`);
    
    const result = restructureFile(filePath);
    
    if (result.success) {
      results.success.push(result);
      console.log(`  ✅ Moved to: ${result.to}\n`);
    } else if (result.skipped) {
      results.skipped.push({ file: filePath, reason: result.error });
      console.log(`  ⏭️  Skipped: ${result.error}\n`);
    } else {
      results.errors.push({ file: filePath, error: result.error });
      console.log(`  ❌ Error: ${result.error}\n`);
    }
  }
  
  console.log('='.repeat(60));
  console.log('\nSummary:');
  console.log(`  ✅ Successfully restructured: ${results.success.length} files`);
  console.log(`  ⏭️  Skipped: ${results.skipped.length} files`);
  console.log(`  ❌ Errors: ${results.errors.length} files`);
  
  if (results.success.length > 0) {
    console.log('\nSuccessfully restructured files:');
    results.success.forEach(({ from, to }) => {
      console.log(`  - ${from} → ${to}`);
    });
  }
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(({ file, error }) => {
      console.log(`  - ${file}: ${error}`);
    });
  }
  
  if (results.skipped.length > 0) {
    console.log('\nSkipped files:');
    results.skipped.forEach(({ file, reason }) => {
      console.log(`  - ${file}: ${reason}`);
    });
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('\n⚠️  Note: After running this script, you may need to:');
  console.log('  1. Update route references in your code');
  console.log('  2. Check for any broken imports');
  console.log('  3. Verify all pages load correctly');
}

if (require.main === module) {
  main();
}

module.exports = { restructureFile, findFilesToRestructure };
