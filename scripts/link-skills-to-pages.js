#!/usr/bin/env node

/**
 * Script to automatically link skill mentions to their corresponding pages
 * Scans all pages for skill names and creates links where pages exist
 */

const fs = require('fs');
const path = require('path');

// Map of skill names to their page paths
// Format: { skillName: '/pages/module/page-name' }
const skillPageMap = {
  // Distress Tolerance
  'STOP': '/pages/distress-tolerance/stop',
  'TIP': '/pages/distress-tolerance/tip',
  'TIPP': '/pages/distress-tolerance/tip',
  'ACCEPTS': '/pages/distress-tolerance/accepts',
  'IMPROVE': '/pages/distress-tolerance/improve',
  'Self-Soothe': '/pages/flowchart/soothe',
  'self-soothe': '/pages/flowchart/soothe',
  'self soothe': '/pages/flowchart/soothe',
  'Pros & Cons': '/pages/distress-tolerance/pros-cons',
  'pros and cons': '/pages/distress-tolerance/pros-cons',
  'Cost-Benefit': '/pages/distress-tolerance/cost-benefit',
  'cost-benefit': '/pages/distress-tolerance/cost-benefit',
  'RESISTT': '/pages/interpersonal-skills/resistt',
  'Radical Acceptance': '/pages/distress-tolerance/radical-acceptance',
  'radical acceptance': '/pages/distress-tolerance/radical-acceptance',
  'Turning the Mind': '/pages/distress-tolerance/turning-mind',
  'turning the mind': '/pages/distress-tolerance/turning-mind',
  'Willingness': '/pages/distress-tolerance/willingness-half-smile',
  'Half-Smile': '/pages/distress-tolerance/willingness-half-smile',
  'half-smile': '/pages/distress-tolerance/willingness-half-smile',
  'Nightmare Protocol': '/pages/distress-tolerance/nightmare-protocol',
  'nightmare protocol': '/pages/distress-tolerance/nightmare-protocol',
  
  // Mindfulness
  'Wise Mind': '/pages/mindfulness/wise-mind',
  'wise mind': '/pages/mindfulness/wise-mind',
  'Body Scan': '/pages/mindfulness/body-scan',
  'body scan': '/pages/mindfulness/body-scan',
  'Breathing': '/pages/mindfulness/breathing',
  'breathing': '/pages/mindfulness/breathing',
  'Meditation': '/pages/mindfulness/meditation',
  'meditation': '/pages/mindfulness/meditation',
  'Awareness': '/pages/mindfulness/awareness',
  'awareness': '/pages/mindfulness/awareness',
  'What Skills': '/pages/mindfulness/what',
  'What skills': '/pages/mindfulness/what',
  'One-Mindfulness': '/pages/mindfulness/one-mindfulness',
  'one-mindfulness': '/pages/mindfulness/one-mindfulness',
  
  // Emotional Regulation
  'Check the Facts': '/pages/flowchart/check-facts',
  'check the facts': '/pages/flowchart/check-facts',
  'Check the facts': '/pages/flowchart/check-facts',
  'Opposite Action': '/pages/emotional-regulation/opposite-action',
  'opposite action': '/pages/emotional-regulation/opposite-action',
  'Problem Solving': '/pages/flowchart/problem-solve',
  'problem solving': '/pages/flowchart/problem-solve',
  'Problem solving': '/pages/flowchart/problem-solve',
  'ABC PLEASE': '/pages/emotional-regulation/abc-please',
  'ABC PLEASE': '/pages/emotional-regulation/abc-please',
  'PLEASE': '/pages/emotional-regulation/abc-please',
  'Build Mastery': '/pages/emotional-regulation/build-mastery',
  'build mastery': '/pages/emotional-regulation/build-mastery',
  'Cope Ahead': '/pages/emotional-regulation/cope-ahead',
  'cope ahead': '/pages/emotional-regulation/cope-ahead',
  'Pleasant Activities': '/pages/emotional-regulation/pleasant-activities',
  'pleasant activities': '/pages/emotional-regulation/pleasant-activities',
  'Letting Go': '/pages/emotional-regulation/letting-go',
  'letting go': '/pages/emotional-regulation/letting-go',
  'Being Effective': '/pages/emotional-regulation/being-effective',
  'being effective': '/pages/emotional-regulation/being-effective',
  'Mental Noting': '/pages/emotional-regulation/mental-noting',
  'mental noting': '/pages/emotional-regulation/mental-noting',
  'Cognitive Vulnerability': '/pages/emotional-regulation/cognitive-vulnerability',
  'cognitive vulnerability': '/pages/emotional-regulation/cognitive-vulnerability',
  'Mindful Emotions': '/pages/emotional-regulation/mindful-emotions',
  'mindful emotions': '/pages/emotional-regulation/mindful-emotions',
  'Feel in Body': '/pages/emotional-regulation/feel-in-body',
  'feel in body': '/pages/emotional-regulation/feel-in-body',
  
  // Interpersonal Skills
  'DEAR MAN': '/pages/interpersonal-skills/dear-man',
  'DEAR MAN': '/pages/interpersonal-skills/dear-man',
  'GIVE': '/pages/interpersonal-skills/give',
  'FAST': '/pages/interpersonal-skills/fast',
  'Interpersonal Intensity': '/pages/interpersonal-skills/interpersonal-intensity',
  'interpersonal intensity': '/pages/interpersonal-skills/interpersonal-intensity',
  'Communication Styles': '/pages/interpersonal-skills/communication-styles',
  'communication styles': '/pages/interpersonal-skills/communication-styles',
  'Assertive Communication': '/pages/interpersonal-skills/assertiveness',
  'assertive communication': '/pages/interpersonal-skills/assertiveness',
  'Assertiveness': '/pages/interpersonal-skills/assertiveness',
  'assertiveness': '/pages/interpersonal-skills/assertiveness',
  'Conflict': '/pages/interpersonal-skills/conflict',
  'conflict': '/pages/interpersonal-skills/conflict',
  'Ending Relationships': '/pages/interpersonal-skills/ending-relationship',
  'ending relationships': '/pages/interpersonal-skills/ending-relationship',
  'Interpersonal Mindfulness': '/pages/interpersonal-skills/interpersonal-mindfulness',
  'interpersonal mindfulness': '/pages/interpersonal-skills/interpersonal-mindfulness',
  'Finding Friends': '/pages/interpersonal-skills/finding-friends',
  'finding friends': '/pages/interpersonal-skills/finding-friends',
  
  // Self-Care
  'Self-Care': '/pages/flowchart/self-care',
  'self-care': '/pages/flowchart/self-care',
  'self care': '/pages/flowchart/self-care',
  'Sleep Hygiene': '/pages/sleep-hygiene',
  'sleep hygiene': '/pages/sleep-hygiene',
};

function isInsideTag(text, position) {
  // Check if position is inside any HTML/JSX tag
  const beforeText = text.substring(0, position);
  const afterText = text.substring(position);
  
  // Find the last unclosed tag before this position
  const tagStack = [];
  const tagRegex = /<(\/?)([a-zA-Z][a-zA-Z0-9]*|Link|a)[^>]*>/g;
  let match;
  
  while ((match = tagRegex.exec(beforeText)) !== null) {
    const isClosing = match[1] === '/';
    const tagName = match[2].toLowerCase();
    
    if (isClosing) {
      // Remove matching opening tag
      while (tagStack.length > 0 && tagStack[tagStack.length - 1] !== tagName) {
        tagStack.pop();
      }
      if (tagStack.length > 0) {
        tagStack.pop();
      }
    } else {
      // Self-closing tags
      if (match[0].endsWith('/>')) {
        continue;
      }
      tagStack.push(tagName);
    }
  }
  
  // Check if we're inside a link tag
  if (tagStack.length > 0) {
    const currentTag = tagStack[tagStack.length - 1];
    if (currentTag === 'a' || currentTag === 'link') {
      return true;
    }
  }
  
  // Also check if immediately after an opening tag that's a link
  const lastOpenTag = beforeText.lastIndexOf('<');
  const lastCloseTag = beforeText.lastIndexOf('>');
  if (lastOpenTag > lastCloseTag) {
    const tagContent = text.substring(lastOpenTag, Math.min(text.length, lastOpenTag + 100));
    if (tagContent.match(/<(a|Link)[^>]*>/i)) {
      // Check if the closing tag comes after our position
      const closingTagMatch = afterText.match(/<\/(a|Link)>/i);
      if (closingTagMatch) {
        return true;
      }
    }
  }
  
  return false;
}

function shouldSkip(text, matchIndex) {
  // Skip if inside a link tag
  if (isInsideTag(text, matchIndex)) {
    return true;
  }
  
  // Skip if in code/imports/exports
  const beforeMatch = text.substring(Math.max(0, matchIndex - 100), matchIndex);
  const afterMatch = text.substring(matchIndex, Math.min(text.length, matchIndex + 100));
  const context = beforeMatch + afterMatch;
  
  // Skip patterns
  if (
    /href=["']/.test(context) ||
    /router\.push\(/.test(context) ||
    /className=/.test(context) ||
    /import.*from/.test(context) ||
    /export.*function/.test(context) ||
    /const.*=/.test(context) ||
    /\/\/.*/.test(context) ||
    /<Link/.test(beforeMatch) ||
    /<a\s/.test(beforeMatch)
  ) {
    return true;
  }
  
  return false;
}

function linkSkillsInText(text) {
  let modified = false;
  let newText = text;
  
  // Sort skills by length (longest first) to avoid partial matches
  const sortedSkills = Object.entries(skillPageMap).sort((a, b) => b[0].length - a[0].length);
  
  // Track positions we've already linked to avoid double-linking
  const linkedRanges = [];
  
  for (const [skillName, pagePath] of sortedSkills) {
    // Create regex to find skill mentions (case-insensitive, word boundaries)
    const regex = new RegExp(`\\b${skillName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
    
    let match;
    const replacements = [];
    
    // Find all matches and check if they should be linked
    while ((match = regex.exec(newText)) !== null) {
      const matchStart = match.index;
      const matchEnd = matchStart + match[0].length;
      
      // Check if this range overlaps with an already linked range
      const overlaps = linkedRanges.some(([start, end]) => 
        (matchStart >= start && matchStart < end) || 
        (matchEnd > start && matchEnd <= end) ||
        (matchStart <= start && matchEnd >= end)
      );
      
      if (!overlaps && !shouldSkip(newText, match.index)) {
        replacements.push({
          index: match.index,
          length: match[0].length,
          skillName: match[0],
          pagePath: pagePath
        });
        linkedRanges.push([matchStart, matchEnd]);
      }
    }
  
    // Apply replacements in reverse order to maintain indices
    replacements.reverse().forEach(({ index, length, skillName, pagePath }) => {
      const before = newText.substring(0, index);
      const after = newText.substring(index + length);
      const linked = `<Link href="${pagePath}" className="text-blue-600 hover:text-blue-800 underline">${skillName}</Link>`;
      newText = before + linked + after;
      modified = true;
      
      // Update linked ranges after insertion
      const linkLength = linked.length;
      const lengthDiff = linkLength - length;
      for (let i = 0; i < linkedRanges.length; i++) {
        if (linkedRanges[i][0] > index) {
          linkedRanges[i][0] += lengthDiff;
          linkedRanges[i][1] += lengthDiff;
        }
      }
    });
  }
  
  return { modified, text: newText };
}

function processFile(filePath) {
  const fullPath = path.join(__dirname, '..', filePath);
  
  if (!fs.existsSync(fullPath)) {
    return { modified: false, error: 'File does not exist' };
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Check if file already imports Link
  const needsLinkImport = !content.includes("import Link from 'next/link'") && 
                          !content.includes('import Link from "next/link"');
  
  // Link skills in text content (but not in JSX attributes or code)
  const result = linkSkillsInText(content);
  
  if (result.modified) {
    // Add Link import if needed
    if (needsLinkImport) {
      if (result.text.includes("'use client'")) {
        result.text = result.text.replace(
          /('use client';)/,
          "$1\nimport Link from 'next/link';"
        );
      } else {
        // Add at the top of imports
        const importMatch = result.text.match(/^import .* from ['"].*['"];?/m);
        if (importMatch) {
          result.text = result.text.replace(
            importMatch[0],
            `import Link from 'next/link';\n${importMatch[0]}`
          );
        } else {
          result.text = `import Link from 'next/link';\n${result.text}`;
        }
      }
    }
    
    fs.writeFileSync(fullPath, result.text, 'utf8');
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
  const errors = [];
  
  for (const file of files) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    console.log(`Processing: ${relativePath}`);
    
    try {
      const result = processFile(relativePath);
      
      if (result.modified) {
        modifiedCount++;
        modifiedFiles.push(relativePath);
        console.log(`  ✅ Added skill links\n`);
      } else if (result.error) {
        errors.push({ file: relativePath, error: result.error });
        console.log(`  ⚠️  ${result.error}\n`);
      } else {
        console.log(`  ⏭️  No changes needed\n`);
      }
    } catch (error) {
      errors.push({ file: relativePath, error: error.message });
      console.error(`  ❌ Error: ${error.message}\n`);
    }
  }
  
  console.log('='.repeat(60));
  console.log('\nSummary:');
  console.log(`  ✅ Modified: ${modifiedCount} files`);
  console.log(`  ⚠️  Errors: ${errors.length} files`);
  
  if (modifiedFiles.length > 0) {
    console.log('\nModified files:');
    modifiedFiles.forEach(f => console.log(`  - ${f}`));
  }
  
  if (errors.length > 0) {
    console.log('\nErrors:');
    errors.forEach(({ file, error }) => console.log(`  - ${file}: ${error}`));
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('\n⚠️  Note: Review the changes to ensure links are appropriate.');
  console.log('Some links may need manual adjustment if they appear in code or special contexts.');
}

if (require.main === module) {
  main();
}

module.exports = { linkSkillsInText, processFile, skillPageMap };
