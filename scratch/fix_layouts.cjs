const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
let files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx')).map(f => path.join(componentsDir, f));
const dirs = ['3d', 'icons'];
dirs.forEach(d => {
  const dPath = path.join(componentsDir, d);
  if (fs.existsSync(dPath)) {
    fs.readdirSync(dPath).filter(f => f.endsWith('.jsx')).forEach(f => files.push(path.join(dPath, f)));
  }
});

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Replace minmax(320px, 1fr) with minmax(min(100%, 280px), 1fr)
  const regex = /minmax\(\s*(\d+)px\s*,\s*1fr\s*\)/g;
  const newContent = content.replace(regex, (match, p1) => {
    if (parseInt(p1) >= 280) {
      changed = true;
      return `minmax(min(100%, 280px), 1fr)`;
    }
    return match;
  });
  
  // Fix 100vw
  let finalContent = newContent;
  if (finalContent.includes('100vw')) {
    finalContent = finalContent.replace(/100vw/g, '100%');
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(file, finalContent, 'utf8');
    console.log(`Fixed layout issues in ${path.basename(file)}`);
  }
});
