#!/usr/bin/env node

/**
 * Script to restructure files to Next.js App Router format (folder/page.tsx)
 * Moves direct .tsx files to folders with page.tsx
 */

const fs = require('fs');
const path = require('path');

const filesToRestructure = [
  { file: 'app/pages/flowchart/landing-page.tsx', folder: 'app/pages/flowchart/landing-page' },
  { file: 'app/pages/about.tsx', folder: 'app/pages/about' },
  { file: 'app/pages/timer.tsx', folder: 'app/pages/timer' },
  { file: 'app/pages/sleep-hygiene.tsx', folder: 'app/pages/sleep-hygiene' },
  { file: 'app/pages/crisis.tsx', folder: 'app/pages/crisis' },
  { file: 'app/pages/flowchart/changing-feelings.tsx', folder: 'app/pages/flowchart/changing-feelings' },
  { file: 'app/pages/soothe.tsx', folder: 'app/pages/soothe' },
];

function restructureFiles() {
  const baseDir = path.join(__dirname, '..');
  let movedCount = 0;
  const movedFiles = [];
  const errors = [];
  
  for (const { file, folder } of filesToRestructure) {
    const oldPath = path.join(baseDir, file);
    const newDir = path.join(baseDir, folder);
    const newPath = path.join(newDir, 'page.tsx');
    
    if (!fs.existsSync(oldPath)) {
      console.log(`⏭️  Skipping ${file} - file doesn't exist`);
      continue;
    }
    
    if (fs.existsSync(newPath)) {
      console.log(`⏭️  Skipping ${file} - ${folder}/page.tsx already exists`);
      // Check if the old file is different - if so, warn
      const oldContent = fs.readFileSync(oldPath, 'utf8');
      const newContent = fs.readFileSync(newPath, 'utf8');
      if (oldContent !== newContent) {
        console.log(`  ⚠️  Warning: ${file} differs from ${folder}/page.tsx`);
      }
      continue;
    }
    
    try {
      // Create directory
      fs.mkdirSync(newDir, { recursive: true });
      
      // Move file
      fs.renameSync(oldPath, newPath);
      
      movedCount++;
      movedFiles.push({ from: file, to: `${folder}/page.tsx` });
      console.log(`✅ Moved ${file} → ${folder}/page.tsx`);
    } catch (error) {
      errors.push({ file, error: error.message });
      console.error(`❌ Error moving ${file}: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Moved ${movedCount} files`);
  if (movedFiles.length > 0) {
    console.log('\nMoved files:');
    movedFiles.forEach(({ from, to }) => console.log(`  - ${from} → ${to}`));
  }
  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`));
  }
  console.log('='.repeat(60));
}

if (require.main === module) {
  restructureFiles();
}

module.exports = { restructureFiles };
