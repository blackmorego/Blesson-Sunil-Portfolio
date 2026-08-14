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

let issues = [];

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  const basename = path.basename(file);
  
  lines.forEach((line, i) => {
    const ln = i + 1;
    // Check for hardcoded widths > 300px
    const widthMatch = line.match(/width:\s*['"](\d+)px['"]/);
    if (widthMatch && parseInt(widthMatch[1]) > 300) {
      issues.push(`${basename}:${ln}: Hardcoded width: ${widthMatch[0]}`);
    }
    // Check for hardcoded minmax(300px+)
    const minmaxMatch = line.match(/minmax\(\s*(\d+)px/);
    if (minmaxMatch && parseInt(minmaxMatch[1]) > 250) { // On very small screens 300px might cause overflow if padding exists
      issues.push(`${basename}:${ln}: Large minmax grid column: ${minmaxMatch[0]}`);
    }
    // Search for flex without wrap in cases where it might be a row (heuristic)
    if (line.includes('display:') && line.includes('flex') && !line.includes('flexWrap') && !content.slice(i*50, i*50+500).includes('flexWrap') && !line.includes('column')) {
      // Just a note, might be too noisy. We will skip this or log only.
    }
    // Check for margins/paddings that are too large horizontally
    const paddingMatch = line.match(/padding:\s*['"](\d+)px\s+(\d+)px['"]/);
    if (paddingMatch && parseInt(paddingMatch[2]) > 40) {
      issues.push(`${basename}:${ln}: Large horizontal padding: ${paddingMatch[0]}`);
    }
    // Check for 100vw which can cause scrollbar issues
    if (line.includes('100vw')) {
      issues.push(`${basename}:${ln}: Uses 100vw (can cause horizontal scroll)`);
    }
  });
});

console.log('Potential Auto Layout Issues Found:');
issues.forEach(i => console.log(i));
