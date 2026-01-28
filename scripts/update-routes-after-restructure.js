#!/usr/bin/env node

/**
 * Script to update route references after restructuring to folder/page.tsx format
 * Updates routes from /pages/module/file-name to /pages/module/file-name (no change needed)
 * But ensures all routes use the correct /pages/ prefix
 */

const fs = require('fs');
const path = require('path');

const routeMappings = {
  // Old routes that might not have /pages/ prefix
  "'/landing-page'": "'/pages/landing-page'",
  '"/landing-page"': '"/pages/landing-page"',
  "'/about'": "'/pages/about'",
  '"/about"': '"/pages/about"',
  "'/crisis'": "'/pages/crisis'",
  '"/crisis"': '"/pages/crisis"',
  "'/timer'": "'/pages/timer'",
  '"/timer"': '"/timer"',
  "'/sleep-hygiene'": "'/pages/sleep-hygiene'",
  '"/sleep-hygiene"': '"/pages/sleep-hygiene"',
  
  // Fix routes missing /pages/ prefix
  "router.push('/changing-your-feelings')": "router.push('/pages/flowchart/changing-feelings')",
  "router.push('/sit-with-it')": "router.push('/pages/flowchart/sit-with-it')",
  "router.push('/landing-page')": "router.push('/pages/landing-page')",
  "router.push('/about')": "router.push('/pages/about')",
  "router.push('/crisis')": "router.push('/pages/crisis')",
  
  // Fix href attributes
  'href="/about"': 'href="/pages/about"',
  'href="/crisis"': 'href="/pages/crisis"',
  'href="/landing-page"': 'href="/pages/landing-page"',
};

function updateRoutesInFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { modified: false };
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Apply route mappings
  for (const [oldRoute, newRoute] of Object.entries(routeMappings)) {
    if (content.includes(oldRoute)) {
      content = content.replace(new RegExp(oldRoute.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), newRoute);
    }
  }
  
  const modified = content !== originalContent;
  
  if (modified) {
    fs.writeFileSync(fullPath, content, 'utf8');
  }
  
  return { modified, content };
}

function main() {
  const pagesDir = path.join(__dirname, '..', 'app');
  const files = [];
  
  function findTsxFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        findTsxFiles(fullPath);
      } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
  }
  
  findTsxFiles(pagesDir);
  findTsxFiles(path.join(__dirname, '..', 'components'));
  
  console.log(`Found ${files.length} files to process\n`);
  
  let modifiedCount = 0;
  const modifiedFiles = [];
  
  for (const file of files) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const result = updateRoutesInFile(relativePath);
    
    if (result.modified) {
      modifiedCount++;
      modifiedFiles.push(relativePath);
      console.log(`✅ Updated: ${relativePath}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Modified ${modifiedCount} files`);
  if (modifiedFiles.length > 0) {
    console.log('\nModified files:');
    modifiedFiles.forEach(f => console.log(`  - ${f}`));
  }
  console.log('='.repeat(60));
}

if (require.main === module) {
  main();
}

module.exports = { updateRoutesInFile };
