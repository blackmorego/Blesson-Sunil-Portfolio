const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, '..', 'src', 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.jsx'));
const additionalDirs = [path.join(componentsDir, '3d')];
additionalDirs.forEach(dir => {
    if (fs.existsSync(dir)) {
        fs.readdirSync(dir).filter(f => f.endsWith('.jsx')).forEach(f => files.push(path.join('3d', f)));
    }
});

let changedFiles = 0;

files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Find lines with background: 'linear-gradient...100%)',
  const regex = /^\s*background:\s*'linear-gradient[^']*',\r?\n/gm;
  
  if (regex.test(content)) {
    content = content.replace(regex, '');
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
    changedFiles++;
  }
});

console.log(`Total files changed: ${changedFiles}`);
