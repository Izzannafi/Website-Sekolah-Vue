const fs = require('fs');
const path = require('path');
const https = require('https');

const urls = JSON.parse(fs.readFileSync('urls.json', 'utf-8'));

async function downloadImage(url, destPath) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(destPath);
        https.get(url, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else if (response.statusCode === 301 || response.statusCode === 302) {
                // simple redirect handle
                downloadImage(response.headers.location, destPath).then(resolve).catch(reject);
            } else {
                reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
            }
        }).on('error', (err) => {
            fs.unlink(destPath, () => reject(err));
        });
    });
}

function getPageName(filePath) {
    const basename = path.basename(filePath, '.vue');
    if (basename === 'Footer') return 'footer';
    if (basename.endsWith('View')) {
        return basename.replace('View', '').toLowerCase();
    }
    return basename.toLowerCase();
}

async function processUrls() {
    const fileModifications = {};
    let imageCounter = {};

    for (const item of urls) {
        if (item.url.includes('maps.google.com')) continue;

        const pageName = getPageName(item.file);
        
        // determine extension
        let ext = '.jpg';
        if (item.url.includes('.webp')) ext = '.webp';
        else if (item.url.includes('.png')) ext = '.png';
        else if (item.url.includes('.jpeg')) ext = '.jpeg';

        if (!imageCounter[pageName]) imageCounter[pageName] = 1;
        const imageName = `img-${imageCounter[pageName]++}${ext}`;
        
        const destDir = path.join(__dirname, 'src', 'assets', 'images', pageName);
        if (!fs.existsSync(destDir)) {
            fs.mkdirSync(destDir, { recursive: true });
        }
        
        const destPath = path.join(destDir, imageName);
        
        console.log(`Downloading ${item.url.substring(0, 40)}... to ${pageName}/${imageName}`);
        try {
            await downloadImage(item.url, destPath);
            
            if (!fileModifications[item.file]) {
                fileModifications[item.file] = fs.readFileSync(path.join(__dirname, item.file), 'utf-8');
            }
            
            // replace URL with alias path
            // The original match in `item.fullMatch` is something like src="http..."
            // We need to replace it with relative path or `@/assets/...`
            const newSrc = `src="@/assets/images/${pageName}/${imageName}"`;
            fileModifications[item.file] = fileModifications[item.file].replace(item.fullMatch, newSrc);

        } catch (err) {
            console.error(err.message);
        }
    }

    // save modified files
    for (const [file, content] of Object.entries(fileModifications)) {
        fs.writeFileSync(path.join(__dirname, file), content, 'utf-8');
        console.log(`Updated ${file}`);
    }
}

processUrls().then(() => console.log('Done')).catch(console.error);
