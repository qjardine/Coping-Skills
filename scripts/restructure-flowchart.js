#!/usr/bin/env node

/**
 * Script to restructure flowchart pages to use folder/page.tsx structure
 * Moves files like change.tsx to change/page.tsx
 */

const fs = require('fs');
const path = require('path');

const flowchartPages = [
  'change',
  'change-situation',
  'check-facts',
  'guage-overwhelm',
  'problem-solve',
  'reaction',
  'regulate',
  'self-care',
  'soothe',
];

function restructureFlowchartPages() {
  const flowchartDir = path.join(__dirname, '..', 'app', 'pages', 'flowchart');
  let movedCount = 0;
  const movedFiles = [];
  
  for (const pageName of flowchartPages) {
    const oldPath = path.join(flowchartDir, `${pageName}.tsx`);
    const newDir = path.join(flowchartDir, pageName);
    const newPath = path.join(newDir, 'page.tsx');
    
    if (!fs.existsSync(oldPath)) {
      console.log(`⏭️  Skipping ${pageName}.tsx - file doesn't exist`);
      continue;
    }
    
    if (fs.existsSync(newPath)) {
      console.log(`⏭️  Skipping ${pageName} - already restructured`);
      continue;
    }
    
    try {
      // Create directory
      fs.mkdirSync(newDir, { recursive: true });
      
      // Move file
      fs.renameSync(oldPath, newPath);
      
      movedCount++;
      movedFiles.push(pageName);
      console.log(`✅ Moved ${pageName}.tsx → ${pageName}/page.tsx`);
    } catch (error) {
      console.error(`❌ Error moving ${pageName}: ${error.message}`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Moved ${movedCount} files`);
  if (movedFiles.length > 0) {
    console.log('\nMoved files:');
    movedFiles.forEach(f => console.log(`  - ${f}.tsx → ${f}/page.tsx`));
  }
  console.log('='.repeat(60));
  console.log('\n⚠️  Note: You will need to update route references in code!');
}

if (require.main === module) {
  restructureFlowchartPages();
}

module.exports = { restructureFlowchartPages };
