const fs = require('fs');
const readline = require('readline');
const path = 'C:\\Users\\Admin\\.gemini\\antigravity\\brain\\d594faab-7988-4ebe-8d8b-46db736f0e78\\.system_generated\\logs\\transcript_full.jsonl';

const rl = readline.createInterface({
  input: fs.createReadStream(path),
  output: process.stdout,
  terminal: false
});

let lastUserInput = '';

rl.on('line', (line) => {
  try {
    const obj = JSON.parse(line);
    if (obj.type === 'USER_INPUT') {
      lastUserInput = obj.content;
    }
  } catch(e) {}
});

rl.on('close', () => {
  console.log('--- FOUND LAST USER INPUT ---');
  fs.writeFileSync('C:\\Users\\Admin\\.gemini\\antigravity\\scratch\\mediaweb\\full_user_input.txt', lastUserInput);
  console.log('Saved to full_user_input.txt. Total length:', lastUserInput.length);
});
