// clean.js
const fs = require('fs');
const path = require('path');

const folders = ['playwright-report', 'test-results', '.playwright'];

folders.forEach((folder) => {
  const folderPath = path.join(__dirname, folder);
  if (fs.existsSync(folderPath)) {
    fs.rmSync(folderPath, { recursive: true, force: true });
    console.log(`✅ Deleted: ${folder}`);
  } else {
    console.log(`ℹ️  ${folder} not found — already clean.`);
  }
});
