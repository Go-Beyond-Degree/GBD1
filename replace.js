const fs = require('fs');
const path = require('path');

const walkSync = function(dir, filelist) {
  files = fs.readdirSync(dir);
  filelist = filelist || [];
  files.forEach(function(file) {
    if (fs.statSync(dir + '/' + file).isDirectory()) {
      filelist = walkSync(dir + '/' + file, filelist);
    }
    else {
      filelist.push(dir + '/' + file);
    }
  });
  return filelist;
};

const files = walkSync('./src');
const exts = ['.tsx', '.ts', '.css'];

const replacements = [
  { regex: /text-\[#[a-fA-F0-9]{6}\]/g, replacer: (match) => {
      const hex = match.slice(6, 13).toLowerCase();
      if (['#15130f', '#171512', '#101215'].includes(hex)) return 'text-primary-text';
      if (['#806956', '#7d6856', '#715a47', '#735e4d'].includes(hex)) return 'text-signature';
      if (['#3d3b39', '#4e4741', '#3e3833', '#4a4541', '#4f4b47', '#564e48', '#4b4540', '#37322e', '#24201d'].includes(hex)) return 'text-muted-text';
      return match;
  }},
  { regex: /bg-\[#[a-fA-F0-9]{6}\]/g, replacer: (match) => {
      const hex = match.slice(4, 11).toLowerCase();
      if (['#fbfaf8', '#fdfcfb'].includes(hex)) return 'bg-primary-bg';
      if (['#806956'].includes(hex)) return 'bg-signature';
      if (['#fffdfa', '#f3eeea'].includes(hex)) return 'bg-warm-ivory';
      if (['#15191d'].includes(hex)) return 'bg-secondary-dark';
      return match;
  }},
  { regex: /border-\[#[a-fA-F0-9]{6}\]/g, replacer: (match) => {
      const hex = match.slice(8, 15).toLowerCase();
      if (['#e9e4de', '#eee9e3', '#ece7e2', '#e8e3de', '#e4ddd6', '#ded6cf'].includes(hex)) return 'border-soft-border';
      if (['#aa9584'].includes(hex)) return 'border-soft-taupe';
      return match;
  }},
  { regex: /bg-white/g, replacer: () => 'bg-warm-ivory' },
  { regex: /hover:bg-\[#695442\]/g, replacer: () => 'hover:bg-signature\/90' },
  { regex: /text-\[#[a-fA-F0-9]{6}\]/g, replacer: (match) => {
      const hex = match.slice(6, 13).toLowerCase();
      if (['#57483d'].includes(hex)) return 'text-secondary-dark';
      return match;
  }},
  { regex: /fill="#806956"/g, replacer: () => 'fill="var(--color-signature)"' },
  { regex: /stroke="#806956"/g, replacer: () => 'stroke="var(--color-signature)"' },
  { regex: /fill="#fbfaf8"/g, replacer: () => 'fill="var(--color-primary-bg)"' },
  { regex: /fill="#fffdfa"/g, replacer: () => 'fill="var(--color-warm-ivory)"' }
];

files.forEach(file => {
  if (exts.includes(path.extname(file))) {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    replacements.forEach(({regex, replacer}) => {
      content = content.replace(regex, replacer);
    });
    if (content !== original) {
      fs.writeFileSync(file, content);
      console.log('Updated', file);
    }
  }
});
