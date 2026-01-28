#!/usr/bin/env node

/**
 * Script to fix broken function declarations where the function name got split
 */

const fs = require('fs');
const path = require('path');

const brokenFunctions = {
  'app/pages/mindfulness/meditation.tsx': { broken: 'Med', complete: 'MeditationPage' },
  'app/pages/mindfulness/breathing.tsx': { broken: 'Br', complete: 'BreathingPage' },
  'app/pages/mindfulness/awareness.tsx': { broken: 'Aw', complete: 'AwarenessPage' },
  'app/pages/interpersonal-skills/problem-solve.tsx': { broken: 'Prob', complete: 'ProblemSolvePage' },
  'app/pages/interpersonal-skills/finding-friends.tsx': { broken: 'Finding', complete: 'FindingFriendsPage' },
  'app/pages/interpersonal-skills/communication-styles.tsx': { broken: 'Communicatio', complete: 'CommunicationStylesPage' },
  'app/pages/interpersonal-skills/assertiveness.tsx': { broken: 'Assert', complete: 'AssertivenessPage' },
  'app/pages/emotional-regulation/problem-solve.tsx': { broken: 'Prob', complete: 'ProblemSolvePage' },
  'app/pages/emotional-regulation/opposite-action.tsx': { broken: 'Opposit', complete: 'OppositeActionPage' },
  'app/pages/emotional-regulation/mental-noting.tsx': { broken: 'Menta', complete: 'MentalNotingPage' },
  'app/pages/emotional-regulation/letting-go.tsx': { broken: 'Le', complete: 'LettingGoPage' },
  'app/pages/emotional-regulation/cope-ahead.tsx': { broken: 'Co', complete: 'CopeAheadPage' },
  'app/pages/emotional-regulation/check-facts.tsx': { broken: 'Ch', complete: 'CheckFactsPage' },
  'app/pages/emotional-regulation/build-mastery.tsx': { broken: 'Build', complete: 'BuildMasteryPage' },
  'app/pages/emotional-regulation/abc-please.tsx': { broken: 'Ab', complete: 'AbcPleasePage' },
  'app/pages/distress-tolerance/turning-mind.tsx': { broken: 'Turn', complete: 'TurningMindPage' },
  'app/pages/distress-tolerance/cost-benefit.tsx': { broken: 'Cost', complete: 'CostBenefitPage' },
  'app/pages/flowchart/problem-solve/page.tsx': { broken: 'Prob', complete: 'ProblemSolvePage' },
  'app/pages/flowchart/check-facts/page.tsx': { broken: 'Ch', complete: 'CheckFactsPage' },
  'app/pages/sleep-hygiene/page.tsx': { broken: 'Sleep', complete: 'SleepHygienePage' },
};

function fixBrokenFunction(filePath, broken, complete) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⏭️  Skipping ${filePath} - file doesn't exist`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Pattern: export default function BrokenName\n  const [activeTooltip...
  // Should be: export default function CompleteName() {\n  const [activeTooltip...
  const pattern = new RegExp(
    `export default function ${broken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\n\\s*const \\[activeTooltip`,
    's'
  );
  
  if (pattern.test(content)) {
    content = content.replace(
      pattern,
      `export default function ${complete}() {\n  const [activeTooltip`
    );
    
    // Also need to find where the closing brace for the function name is
    // Pattern: };ompleteName() {
    const closingPattern = new RegExp(
      `};${complete.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\(\\) \\{`,
      's'
    );
    
    if (closingPattern.test(content)) {
      content = content.replace(closingPattern, `${complete}() {`);
    }
    
    if (content !== originalContent) {
      fs.writeFileSync(fullPath, content, 'utf8');
      return true;
    }
  }
  
  return false;
}

function main() {
  const baseDir = path.join(__dirname, '..');
  let fixedCount = 0;
  const fixedFiles = [];
  
  for (const [filePath, { broken, complete }] of Object.entries(brokenFunctions)) {
    const relativePath = path.relative(baseDir, path.join(baseDir, filePath));
    console.log(`Processing: ${relativePath}`);
    
    try {
      if (fixBrokenFunction(filePath, broken, complete)) {
        fixedCount++;
        fixedFiles.push(relativePath);
        console.log(`  ✅ Fixed function declaration\n`);
      } else {
        console.log(`  ⏭️  No changes needed (or pattern not found)\n`);
      }
    } catch (error) {
      console.error(`  ❌ Error: ${error.message}\n`);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log(`Summary: Fixed ${fixedCount} files`);
  if (fixedFiles.length > 0) {
    console.log('\nFixed files:');
    fixedFiles.forEach(f => console.log(`  - ${f}`));
  }
  console.log('='.repeat(60));
}

if (require.main === module) {
  main();
}

module.exports = { fixBrokenFunction };
