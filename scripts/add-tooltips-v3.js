#!/usr/bin/env node

/**
 * Script to systematically add tooltips to all buttons with navigation
 * 
 * This version handles:
 * 1. Inline router.push() calls
 * 2. Handler functions that call router.push()
 * 3. Both patterns in the same file
 */

const fs = require('fs');
const path = require('path');

// Load tooltip descriptions
const tooltipDescriptions = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'tooltip-descriptions.json'), 'utf8')
);

// Routes that should NOT get tooltips
const skipRoutes = [
  '/pages/landing-page',
  'router.back()',
  'router.push(\'/pages/landing-page\')',
  'handleReturnToLanding',
  'handleBack',
];

// Helper to generate tooltip ID from route
function generateTooltipId(route) {
  return route
    .replace(/^\/pages\//, '')
    .replace(/\//g, '-')
    .replace(/[^a-z0-9-]/gi, '')
    .toLowerCase();
}

// Helper to get tooltip text for a route
function getTooltipText(route) {
  const cleanRoute = route.replace(/['"]/g, '');
  
  if (tooltipDescriptions[cleanRoute]) {
    return tooltipDescriptions[cleanRoute];
  }
  
  if (tooltipDescriptions[cleanRoute.replace(/^\//, '')]) {
    return tooltipDescriptions[cleanRoute.replace(/^\//, '')];
  }
  
  const routeParts = cleanRoute.split('/').filter(Boolean);
  const pageName = routeParts[routeParts.length - 1] || 'this page';
  return `Learn about ${pageName.replace(/-/g, ' ')}. This DBT skill helps you manage emotions and build effective coping strategies.`;
}

// Extract route from handler function
function extractRouteFromHandler(content, handlerName) {
  // Find the handler function
  const handlerRegex = new RegExp(`const\\s+${handlerName}\\s*=\\s*\\(\\)\\s*=>\\s*{([^}]+)}`, 's');
  const match = content.match(handlerRegex);
  
  if (!match) {
    // Try function declaration style
    const funcRegex = new RegExp(`function\\s+${handlerName}\\s*\\([^)]*\\)\\s*{([^}]+)}`, 's');
    const funcMatch = content.match(funcRegex);
    if (funcMatch) {
      const handlerBody = funcMatch[1];
      const pushMatch = handlerBody.match(/router\.push\(['"`]([^'"`]+)['"`]\)/);
      if (pushMatch) {
        return pushMatch[1];
      }
    }
    return null;
  }
  
  const handlerBody = match[1];
  const pushMatch = handlerBody.match(/router\.push\(['"`]([^'"`]+)['"`]\)/);
  if (pushMatch) {
    return pushMatch[1];
  }
  
  // Handle template literals
  const templateMatch = handlerBody.match(/router\.push\([`'"]\/pages\/[^`'"]+[`'"]\)/);
  if (templateMatch) {
    const baseMatch = templateMatch[0].match(/\/pages\/[^`'"]+/);
    return baseMatch ? baseMatch[0] : null;
  }
  
  return null;
}

// Check if button should have tooltip
function shouldAddTooltip(buttonCode, route) {
  // Skip if already has tooltip
  if (buttonCode.includes('tooltip-button') || buttonCode.includes('tooltip-container')) {
    return false;
  }
  
  // Skip if it's a BackButton or NextButton component
  if (buttonCode.includes('<BackButton') || buttonCode.includes('<NextButton')) {
    return false;
  }
  
  // Skip if route is in skip list
  if (route && skipRoutes.some(skip => route.includes(skip))) {
    return false;
  }
  
  // Skip if button text suggests it's a return/back button
  const buttonText = buttonCode.match(/>([^<]+)</)?.[1] || '';
  if (/return|back|close|cancel/i.test(buttonText) && !route) {
    return false;
  }
  
  return true;
}

// Generate tooltip component code
function generateTooltipCode(tooltipId, tooltipText, buttonCode) {
  // Extract button attributes and content
  const buttonMatch = buttonCode.match(/<button([^>]*)>([\s\S]*?)<\/button>/);
  if (!buttonMatch) return buttonCode;
  
  const buttonAttrs = buttonMatch[1];
  const buttonContent = buttonMatch[2];
  
  // Preserve existing className and add flex-1 if needed
  let newAttrs = buttonAttrs;
  if (!newAttrs.includes('className=')) {
    newAttrs += ' className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md"';
  } else {
    // Add flex-1 to existing className
    newAttrs = newAttrs.replace(/className="([^"]*)"/, (match, classes) => {
      if (!classes.includes('flex-1')) {
        return `className="flex-1 ${classes}"`;
      }
      return match;
    });
  }
  
  const questionMarkIcon = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>`;

  return `<div className="tooltip-container">
              <div className="flex items-center gap-2">
                <button${newAttrs}>
                  ${buttonContent.trim()}
                </button>
                <button
                  onClick={() => {
                    toggleTooltip({ tooltipId: '${tooltipId}' });
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                  className="text-gray-600 hover:text-gray-800 transition-transform duration-200 tooltip-button flex-shrink-0"
                  aria-label="What is on this page?"
                >
                  ${questionMarkIcon}
                </button>
              </div>
              {activeTooltip === '${tooltipId}' && (
                <div className="mt-2 bg-white rounded-lg shadow-xl p-4 border border-gray-200 tooltip-container">
                  <p className="text-sm text-gray-700">${tooltipText}</p>
                  <button
                    onClick={() => {
                      setActiveTooltip(null);
                    }}
                    className="mt-2 text-xs text-blue-600 hover:text-blue-800"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>`;
}

// Process a single file
function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Skip if file already has tooltip infrastructure
  if (content.includes('const [activeTooltip') && content.includes('toggleTooltip')) {
    console.log(`⏭️  Skipping ${path.relative(process.cwd(), filePath)} - already has tooltips`);
    return { modified: false, content };
  }
  
  // Check if file uses router
  if (!content.includes('useRouter') && !content.includes('router.push')) {
    return { modified: false, content };
  }
  
  let modified = false;
  let newContent = content;
  
  // Find buttons with inline router.push
  const inlineButtonRegex = /<button([^>]*onClick=\{?[^}]*router\.push\([^)]+\)[^}]*\}?[^>]*)>([\s\S]*?)<\/button>/g;
  const inlineButtons = [];
  let inlineMatch;
  
  while ((inlineMatch = inlineButtonRegex.exec(content)) !== null) {
    const fullButton = inlineMatch[0];
    const onClickAttr = inlineMatch[1];
    const routeMatch = onClickAttr.match(/router\.push\(['"`]([^'"`]+)['"`]\)/);
    if (routeMatch) {
      inlineButtons.push({
        fullButton,
        route: routeMatch[1],
        index: inlineMatch.index
      });
    }
  }
  
  // Find buttons with handler functions
  const handlerButtonRegex = /<button([^>]*onClick=\{(\w+)\}[^>]*)>([\s\S]*?)<\/button>/g;
  const handlerButtons = [];
  let handlerMatch;
  
  while ((handlerMatch = handlerButtonRegex.exec(content)) !== null) {
    const fullButton = handlerMatch[0];
    const handlerName = handlerMatch[2];
    const route = extractRouteFromHandler(content, handlerName);
    
    if (route) {
      handlerButtons.push({
        fullButton,
        route,
        handlerName,
        index: handlerMatch.index
      });
    }
  }
  
  // Combine all buttons
  const allButtons = [...inlineButtons, ...handlerButtons].sort((a, b) => b.index - a.index);
  
  if (allButtons.length === 0) {
    return { modified: false, content };
  }
  
  // Add imports if needed
  if (!content.includes("import { useState, useEffect }")) {
    if (content.includes("import { useState }")) {
      newContent = newContent.replace(
        "import { useState }",
        "import { useState, useEffect }"
      );
      modified = true;
    } else {
      // Find the first import statement or 'use client'
      const importMatch = content.match(/(import[^;]+;)/);
      if (importMatch) {
        newContent = newContent.replace(
          importMatch[0],
          importMatch[0] + "\nimport { useState, useEffect } from 'react';"
        );
        modified = true;
      } else if (content.includes("'use client'")) {
        newContent = newContent.replace(
          /('use client';)/,
          "$1\n\nimport { useState, useEffect } from 'react';"
        );
        modified = true;
      }
    }
  }
  
  // Add tooltip state and functions - find the component function
  if (!content.includes('const [activeTooltip')) {
    // Find the component function declaration
    const componentMatch = content.match(/(export default function \w+\([^)]*\)\s*{[\s\S]*?)(const router = useRouter\(\);)/);
    if (componentMatch) {
      const insertPoint = componentMatch.index + componentMatch[0].length;
      const tooltipState = `
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };`;
      
      newContent = newContent.slice(0, insertPoint) + tooltipState + newContent.slice(insertPoint);
      modified = true;
    } else {
      // Try to find function component without export default
      const funcMatch = content.match(/(function \w+\([^)]*\)\s*{[\s\S]*?)(const router = useRouter\(\);)/);
      if (funcMatch) {
        const insertPoint = funcMatch.index + funcMatch[0].length;
        const tooltipState = `
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.tooltip-container') && !target.closest('.tooltip-button')) {
        setActiveTooltip(null);
      }
    };

    if (activeTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeTooltip]);

  const toggleTooltip = ({ tooltipId }: { tooltipId: string }) => {
    if (activeTooltip === tooltipId) {
      setActiveTooltip(null);
    } else {
      setActiveTooltip(tooltipId);
    }
  };`;
        
        newContent = newContent.slice(0, insertPoint) + tooltipState + newContent.slice(insertPoint);
        modified = true;
      }
    }
  }
  
  // Process buttons in reverse order to maintain indices
  allButtons.forEach(({ fullButton, route }) => {
    if (!shouldAddTooltip(fullButton, route)) {
      return;
    }
    
    const tooltipId = generateTooltipId(route);
    const tooltipText = getTooltipText(route);
    const newButtonCode = generateTooltipCode(tooltipId, tooltipText, fullButton);
    
    // Replace button in content
    newContent = newContent.replace(fullButton, newButtonCode);
    modified = true;
  });
  
  return { modified, content: newContent };
}

// Main function
function main() {
  const pagesDir = path.join(__dirname, '..', 'app', 'pages');
  const files = [];
  
  // Recursively find all .tsx files
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
    console.log(`Processing: ${relativePath}`);
    
    try {
      const result = processFile(file);
      
      if (result.modified) {
        fs.writeFileSync(file, result.content, 'utf8');
        modifiedCount++;
        modifiedFiles.push(relativePath);
        console.log(`  ✅ Modified - added tooltips\n`);
      } else {
        console.log(`  ⏭️  Skipped\n`);
      }
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
      console.error(error.stack);
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

// Run script
if (require.main === module) {
  main();
}

module.exports = { processFile, generateTooltipCode, getTooltipText };
