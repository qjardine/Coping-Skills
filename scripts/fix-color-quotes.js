#!/usr/bin/env node

/**
 * Fix missing closing quotes in className attributes after color theme application
 */

const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix missing closing quotes in className attributes
  const patterns = [
    [/text-blue-800>/g, 'text-blue-800">'],
    [/text-orange-800>/g, 'text-orange-800">'],
    [/text-purple-800>/g, 'text-purple-800">'],
    [/text-green-800>/g, 'text-green-800">'],
    [/text-red-800>/g, 'text-red-800">'],
  ];
  
  for (const [pattern, replacement] of patterns) {
    if (pattern.test(content)) {
      content = content.replace(pattern, replacement);
      modified = true;
    }
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
  }
  
  return modified;
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
  
  console.log(`Found ${files.length} .tsx files to check\n`);
  
  let fixedCount = 0;
  const fixedFiles = [];
  
  for (const file of files) {
    try {
      if (fixFile(file)) {
        fixedCount++;
        fixedFiles.push(path.relative(path.join(__dirname, '..'), file));
      }
    } catch (error) {
      console.error(`Error processing ${file}: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Fixed ${fixedCount} files`);
  if (fixedFiles.length > 0 && fixedFiles.length <= 20) {
    console.log('\nFixed files:');
    fixedFiles.forEach(f => console.log(`  - ${f}`));
  } else if (fixedFiles.length > 20) {
    console.log(`\nFixed ${fixedFiles.length} files (too many to list)`);
  }
  console.log('='.repeat(60));
}

if (require.main === module) {
  main();
}

module.exports = { fixFile };
