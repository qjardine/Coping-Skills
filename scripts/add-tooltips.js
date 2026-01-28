#!/usr/bin/env node

/**
 * Script to systematically add tooltips to all buttons with navigation
 * 
 * This script:
 * 1. Scans all .tsx files in app/pages
 * 2. Finds buttons with router.push() calls
 * 3. Adds tooltip functionality using the established pattern
 * 4. Generates tooltip text based on destination routes
 */

const fs = require('fs');
const path = require('path');

// Load tooltip descriptions
const tooltipDescriptions = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'tooltip-descriptions.json'), 'utf8')
);

// Routes that should NOT get tooltips (back buttons, return to landing, etc.)
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
  // Clean route
  const cleanRoute = route.replace(/['"]/g, '');
  
  // Try exact match first
  if (tooltipDescriptions[cleanRoute]) {
    return tooltipDescriptions[cleanRoute];
  }
  
  // Try without leading slash
  if (tooltipDescriptions[cleanRoute.replace(/^\//, '')]) {
    return tooltipDescriptions[cleanRoute.replace(/^\//, '')];
  }
  
  // Generate default description
  const routeParts = cleanRoute.split('/').filter(Boolean);
  const pageName = routeParts[routeParts.length - 1] || 'this page';
  return `Learn about ${pageName.replace(/-/g, ' ')}. This DBT skill helps you manage emotions and build effective coping strategies.`;
}

// Extract route from router.push call
function extractRoute(code, pushCall) {
  // Match router.push('/path') or router.push(\`/path\`)
  const match = pushCall.match(/router\.push\(['"`]([^'"`]+)['"`]\)/);
  if (match) {
    return match[1];
  }
  
  // Match router.push(\`/path\${variable}\`)
  const templateMatch = pushCall.match(/router\.push\([`'"]\/pages\/[^`'"]+[`'"]\)/);
  if (templateMatch) {
    // Extract base path
    const baseMatch = templateMatch[0].match(/\/pages\/[^`'"]+/);
    return baseMatch ? baseMatch[0] : null;
  }
  
  return null;
}

// Check if button should have tooltip
function shouldAddTooltip(code, buttonCode, route) {
  // Skip if route is in skip list
  if (skipRoutes.some(skip => route && route.includes(skip))) {
    return false;
  }
  
  // Skip if button already has tooltip
  if (buttonCode.includes('tooltip-button') || buttonCode.includes('tooltip-container')) {
    return false;
  }
  
  // Skip if it's a BackButton or NextButton component
  if (buttonCode.includes('<BackButton') || buttonCode.includes('<NextButton')) {
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
function generateTooltipCode(tooltipId, tooltipText, buttonCode, route) {
  const questionMarkIcon = `
                  <svg
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

  return `
            <div className="tooltip-container">
              <div className="flex items-center gap-2">
                ${buttonCode.trim().replace(/^<button/, '<button className="flex-1"')}
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
                  ${questionMarkIcon.trim()}
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
    console.log(`⏭️  Skipping ${filePath} - already has tooltips`);
    return { modified: false, content };
  }
  
  let modified = false;
  let newContent = content;
  
  // Check if file uses router
  if (!content.includes('useRouter') && !content.includes('router.push')) {
    return { modified: false, content };
  }
  
  // Find all router.push calls
  const routerPushRegex = /router\.push\([^)]+\)/g;
  const pushCalls = content.match(routerPushRegex) || [];
  
  if (pushCalls.length === 0) {
    return { modified: false, content };
  }
  
  // Find buttons that call router.push
  const buttonRegex = /<button[^>]*onClick=\{?[^}]*router\.push\([^)]+\)[^}]*\}?[^>]*>[\s\S]*?<\/button>/g;
  const buttons = content.match(buttonRegex) || [];
  
  if (buttons.length === 0) {
    return { modified: false, content };
  }
  
  // Add imports if needed
  if (!content.includes("import { useState, useEffect }")) {
    if (content.includes("import { useState }")) {
      newContent = newContent.replace(
        "import { useState }",
        "import { useState, useEffect }"
      );
    } else if (content.includes("'use client'")) {
      newContent = newContent.replace(
        /('use client';)/,
        "$1\n\nimport { useState, useEffect } from 'react';"
      );
    }
    modified = true;
  }
  
  // Add tooltip state and functions
  if (!content.includes('const [activeTooltip')) {
    // Find the component function
    const componentMatch = content.match(/(export default function \w+\([^)]*\)\s*{[\s\S]*?const router = useRouter\(\);)/);
    if (componentMatch) {
      const insertPoint = componentMatch[0].length;
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
      
      newContent = newContent.slice(0, componentMatch.index + insertPoint) + 
                   tooltipState + 
                   newContent.slice(componentMatch.index + insertPoint);
      modified = true;
    }
  }
  
  // Process each button
  for (const button of buttons) {
    // Extract route
    const pushMatch = button.match(/router\.push\(['"`]([^'"`]+)['"`]\)/);
    if (!pushMatch) continue;
    
    const route = pushMatch[1];
    
    // Check if should add tooltip
    if (!shouldAddTooltip(newContent, button, route)) {
      continue;
    }
    
    const tooltipId = generateTooltipId(route);
    const tooltipText = getTooltipText(route);
    
    // Generate new button code with tooltip
    const newButtonCode = generateTooltipCode(tooltipId, tooltipText, button, route);
    
    // Replace button in content
    newContent = newContent.replace(button, newButtonCode);
    modified = true;
  }
  
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
