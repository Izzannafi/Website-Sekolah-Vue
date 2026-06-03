const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

const vueFiles = [];
walkDir(srcDir, function(filePath) {
    if (filePath.endsWith('.vue')) {
        vueFiles.push(filePath);
    }
});

let modifiedFiles = 0;

vueFiles.forEach(file => {
    let content = fs.readFileSync(file, 'utf-8');
    let changed = false;

    // match src="http..." (which are the ones that failed to download)
    const regex = /src="https?:\/\/(lh3\.googleusercontent\.com|aida)[^"]+"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const url = match[0];
        console.log(`Replacing external image in ${path.basename(file)}`);
        content = content.replace(url, 'src="@/assets/images/Lapangan.webp"');
        changed = true;
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf-8');
        modifiedFiles++;
    }
});

console.log(`Finished checking. Modified ${modifiedFiles} files.`);
