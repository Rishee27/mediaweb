const fs = require('fs');
const content = fs.readFileSync('src/data/mediaData.js', 'utf8');
const lines = content.split('\n');
console.log('Total Lines:', lines.length);
console.log('Last 60 lines:');
console.log(lines.slice(-60).join('\n'));
