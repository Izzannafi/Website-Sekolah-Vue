const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const vueFiles = [];
walkDir(path.join(__dirname, 'src'), function(filePath) {
    if (filePath.endsWith('.vue')) {
        vueFiles.push(filePath);
    }
});

const results = [];
vueFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    lines.forEach((line, index) => {
        const match = line.match(/src\s*=\s*(["'])(http[^"']+)\1/);
        if (match) {
            results.push({
                file: file.replace(__dirname + path.sep, ''),
                line: index + 1,
                url: match[2],
                fullMatch: match[0]
            });
        }
    });
});

fs.writeFileSync('urls.json', JSON.stringify(results, null, 2));
console.log(`Found ${results.length} URLs`);
