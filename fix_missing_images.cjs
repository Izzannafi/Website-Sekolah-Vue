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

    // match src="@/assets/images/..."
    const regex = /src="(@\/assets\/images\/[^"]+)"/g;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const url = match[1];
        // resolve absolute path
        const absolutePath = path.join(__dirname, url.replace('@/', 'src/').split('/').join(path.sep));
        if (!fs.existsSync(absolutePath)) {
            console.log(`Missing image found in ${path.basename(file)}: ${url}`);
            // replace with fallback image
            content = content.replace(url, '@/assets/images/Lapangan.webp');
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(file, content, 'utf-8');
        modifiedFiles++;
    }
});

console.log(`Finished checking. Modified ${modifiedFiles} files.`);
