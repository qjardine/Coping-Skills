#!/usr/bin/env node

/**
 * Script to apply color themes to all pages based on their module
 */

const fs = require('fs');
const path = require('path');

const moduleColors = {
  'mindfulness': {
    bg: 'bg-blue-50',
    bgLight: 'bg-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-800',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
  'distress-tolerance': {
    bg: 'bg-orange-50',
    bgLight: 'bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-800',
    button: 'bg-orange-600',
    buttonHover: 'hover:bg-orange-700',
  },
  'emotional-regulation': {
    bg: 'bg-purple-50',
    bgLight: 'bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-800',
    button: 'bg-purple-600',
    buttonHover: 'hover:bg-purple-700',
  },
  'interpersonal-skills': {
    bg: 'bg-green-50',
    bgLight: 'bg-green-100',
    border: 'border-green-200',
    text: 'text-green-800',
    button: 'bg-green-600',
    buttonHover: 'hover:bg-green-700',
  },
  'crisis-skills': {
    bg: 'bg-red-50',
    bgLight: 'bg-red-100',
    border: 'border-red-200',
    text: 'text-red-800',
    button: 'bg-red-600',
    buttonHover: 'hover:bg-red-700',
  },
  'flowchart': {
    bg: 'bg-white',
    bgLight: 'bg-gray-50',
    border: 'border-gray-200',
    text: 'text-gray-800',
    button: 'bg-blue-600',
    buttonHover: 'hover:bg-blue-700',
  },
};

function getModuleFromPath(filePath) {
  if (filePath.includes('/mindfulness/')) return 'mindfulness';
  if (filePath.includes('/distress-tolerance/')) return 'distress-tolerance';
  if (filePath.includes('/emotional-regulation/')) return 'emotional-regulation';
  if (filePath.includes('/interpersonal-skills/')) return 'interpersonal-skills';
  if (filePath.includes('/crisis')) return 'crisis-skills';
  if (filePath.includes('/flowchart/')) return 'flowchart';
  return null;
}

function applyColorTheme(content, module) {
  if (!module || !moduleColors[module]) return content;
  
  const colors = moduleColors[module];
  let newContent = content;
  
  // Skip if already has module colors applied
  if (content.includes(colors.bg) && content.includes(colors.text)) {
    // Check if it's already fully themed
    const hasModuleBg = new RegExp(`bg-(blue|orange|purple|green|red)-50`).test(content);
    const hasModuleText = new RegExp(`text-(blue|orange|purple|green|red)-800`).test(content);
    if (hasModuleBg && hasModuleText) {
      return content; // Already themed
    }
  }
  
  // Replace bg-white/80 with module bg
  newContent = newContent.replace(
    /className="bg-white\/80 backdrop-blur-sm rounded-lg/g,
    `className="${colors.bg} backdrop-blur-sm rounded-lg border ${colors.border}`
  );
  
  // Replace bg-white rounded-lg with module bg (but not if it's already themed)
  newContent = newContent.replace(
    /className="bg-white rounded-lg(?!.*border)/g,
    `className="${colors.bg} rounded-lg border ${colors.border}`
  );
  
  // Replace standalone bg-white in main content divs (but not in nested elements that might be intentional)
  // Only replace if it's in a main content container pattern
  newContent = newContent.replace(
    /className="bg-white (backdrop-blur-sm|rounded-lg|p-\d+|shadow-lg)/g,
    `className="${colors.bg} $1 border ${colors.border}`
  );
  
  // Update generic blue buttons to module color (but preserve tooltip buttons and "Return to Landing" buttons)
  newContent = newContent.replace(
    /className="([^"]*?)bg-blue-600([^"]*?)hover:bg-blue-700([^"]*)"/g,
    (match, before, middle, after) => {
      // Skip if it's a tooltip button, Return to Landing, or already has a module color
      if (match.includes('tooltip-button') || 
          match.includes('Return to Landing') ||
          /bg-(orange|purple|green|red)-600/.test(match)) {
        return match;
      }
      return `className="${before}${colors.button}${middle}${colors.buttonHover}${after}"`;
    }
  );
  
  // Update heading colors to module text color (only if they're still gray)
  newContent = newContent.replace(
    /className="text-4xl font-bold mb-8 text-center text-gray-800"/g,
    `className="text-4xl font-bold mb-8 text-center ${colors.text}`
  );
  
  newContent = newContent.replace(
    /className="text-2xl font-semibold mb-4 text-gray-800"/g,
    `className="text-2xl font-semibold mb-4 ${colors.text}`
  );
  
  // Also update h1/h2 headings that have text-gray-800 but might have different class structures
  newContent = newContent.replace(
    /className="([^"]*?)text-gray-800([^"]*?)"/g,
    (match, before, after) => {
      // Only replace if it's in a heading context (h1, h2) and not already module-colored
      if (match.includes('text-4xl') || match.includes('text-2xl') || match.includes('text-xl')) {
        if (!/text-(blue|orange|purple|green|red)-800/.test(match)) {
          return `className="${before}${colors.text}${after}"`;
        }
      }
      return match;
    }
  );
  
  return newContent;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const module = getModuleFromPath(filePath);
  
  if (!module) {
    return { modified: false, content };
  }
  
  const newContent = applyColorTheme(content, module);
  const modified = newContent !== content;
  
  return { modified, content: newContent };
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
  
  console.log(`Found ${files.length} .tsx files to process\n`);
  
  let modifiedCount = 0;
  const modifiedFiles = [];
  
  for (const file of files) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const module = getModuleFromPath(file);
    
    if (!module) {
      console.log(`⏭️  Skipping ${relativePath} - no module match\n`);
      continue;
    }
    
    console.log(`Processing: ${relativePath} (${module})`);
    
    try {
      const result = processFile(file);
      
      if (result.modified) {
        fs.writeFileSync(file, result.content, 'utf8');
        modifiedCount++;
        modifiedFiles.push(relativePath);
        console.log(`  ✅ Modified - applied ${module} colors\n`);
      } else {
        console.log(`  ⏭️  No changes needed\n`);
      }
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
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

module.exports = { processFile, applyColorTheme };
