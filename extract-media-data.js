const fs = require('fs');
const content = fs.readFileSync('full_user_input.txt', 'utf8');

// Find where the update indicator is
const startToken = 'Update src/data/mediaData.js with this complete data:';
const startIndex = content.indexOf(startToken);

if (startIndex === -1) {
  console.error('Could not find start token in user input.');
  process.exit(1);
}

// Find code content after that
const remaining = content.slice(startIndex + startToken.length);

// Let's find the first code block fence or start of the code
// It typically starts after "---" or "```javascript" or just "// ============================================================"
let codeStart = remaining.indexOf('// ============================================================');
if (codeStart === -1) {
  codeStart = remaining.indexOf('export const airportData');
}

if (codeStart === -1) {
  console.error('Could not find start of mediaData code.');
  process.exit(1);
}

let codeContent = remaining.slice(codeStart);

// If the code is enclosed in a markdown block, remove the closing triple backticks at the end
if (codeContent.trim().endsWith('```')) {
  codeContent = codeContent.trim().slice(0, -3).trim();
}

// Write the file
const targetPath = 'C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\mediaweb\\src\\data\\mediaData.js';
fs.writeFileSync(targetPath, codeContent, 'utf8');
console.log('Successfully extracted and wrote mediaData.js. Length:', codeContent.length);
