#!/usr/bin/env node

/**
 * Script to fix nested links created by link-skills-to-pages.js
 * Removes nested <Link> tags inside <a> tags or other <Link> tags
 */

const fs = require('fs');
const path = require('path');

function fixNestedLinks(content) {
  let newContent = content;
  let modified = false;
  
  // Pattern 1: <a> tags containing <Link> tags - replace with just <Link>
  // <a href="..."><Link href="...">text</Link></a> -> <Link href="...">text</Link>
  const pattern1 = /<a\s+href=["']([^"']+)["'][^>]*><Link\s+href=["']([^"']+)["'][^>]*>([^<]+)<\/Link><\/a>/g;
  newContent = newContent.replace(pattern1, (match, aHref, linkHref, text) => {
    modified = true;
    // Use the Link href if it exists, otherwise use a href
    const href = linkHref || aHref;
    return `<Link href="${href}" className="text-blue-600 hover:text-blue-800 underline">${text}</Link>`;
  });
  
  // Pattern 2: Multiple nested <Link> tags - keep only the innermost
  // <Link><Link><Link>text</Link></Link></Link> -> <Link>text</Link>
  let prevContent = '';
  while (prevContent !== newContent) {
    prevContent = newContent;
    newContent = newContent.replace(
      /<Link\s+href=["']([^"']+)["'][^>]*><Link\s+href=["']([^"']+)["'][^>]*>([^<]+)<\/Link><\/Link>/g,
      (match, outerHref, innerHref, text) => {
        modified = true;
        // Use inner href (most specific)
        return `<Link href="${innerHref}" className="text-blue-600 hover:text-blue-800 underline">${text}</Link>`;
      }
    );
  }
  
  // Pattern 3: <a> tags that should be <Link> tags (Next.js)
  newContent = newContent.replace(
    /<a\s+href=["']\/pages\/([^"']+)["']([^>]*)>([^<]+)<\/a>/g,
    (match, path, attrs, text) => {
      modified = true;
      // Extract className if present, otherwise use default
      const classNameMatch = attrs.match(/className=["']([^"']+)["']/);
      const className = classNameMatch ? classNameMatch[1] : 'text-blue-600 hover:text-blue-800 underline';
      return `<Link href="/pages/${path}" className="${className}">${text}</Link>`;
    }
  );
  
  return { modified, content: newContent };
}

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { modified: false, error: 'File does not exist' };
  }
  
  const content = fs.readFileSync(fullPath, 'utf8');
  const result = fixNestedLinks(content);
  
  if (result.modified) {
    fs.writeFileSync(fullPath, result.content, 'utf8');
  }
  
  return result;
}

function main() {
  const pagesDir = path.join(__dirname, '..', 'app', 'pages');
  const files = [];
  
  function findTsxFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        findTsxFiles(fullPath);
      } else if (entry.name.endsWith('.tsx')) {
        files.push(fullPath);
      }
    }
  }
  
  findTsxFiles(pagesDir);
  
  console.log(`Found ${files.length} files to process\n`);
  console.log('='.repeat(60));
  
  let modifiedCount = 0;
  const modifiedFiles = [];
  
  for (const file of files) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const result = processFile(relativePath);
    
    if (result.modified) {
      modifiedCount++;
      modifiedFiles.push(relativePath);
      console.log(`✅ Fixed: ${relativePath}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Fixed ${modifiedCount} files`);
  if (modifiedFiles.length > 0) {
    console.log('\nFixed files:');
    modifiedFiles.forEach(f => console.log(`  - ${f}`));
  }
  console.log('='.repeat(60));
}

if (require.main === module) {
  main();
}

module.exports = { fixNestedLinks, processFile };
