/* Builds AstrlGlass from editable src/*.css files into build/ and dist/. */

const fs = require('fs');
const path = require('path');

const config = require('./theme.config');

const root = path.join(__dirname, '..');
const baseFile = path.join(root, config.baseFile);
const buildFile = path.join(root, config.buildFile);
const distFile = config.distFile ? path.join(root, config.distFile) : null;
const srcDir = path.join(root, 'src');

function toSourcePath(filePath) {
    return filePath.split(path.sep).join('/');
}

function discoverCssFiles(dir = srcDir, prefix = '') {
    // Finds every CSS file under src/. This reminds you to list new CSS files in theme.config.js.
    return fs.readdirSync(dir, { withFileTypes: true })
        .flatMap((entry) => {
            const absolutePath = path.join(dir, entry.name);
            const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
            if (entry.isDirectory()) {
                return discoverCssFiles(absolutePath, relativePath);
            }
            return entry.isFile() && entry.name.endsWith('.css') ? [toSourcePath(relativePath)] : [];
        });
}

function validateSourceFiles() {
    // The build uses the manual order in theme.config.js, but this check reminds
    // you to add new CSS files there when you create them.
    const discovered = discoverCssFiles().sort((a, b) => a.localeCompare(b));
    const configured = config.sourceFiles.map(toSourcePath).sort((a, b) => a.localeCompare(b));
    if (JSON.stringify(discovered) !== JSON.stringify(configured)) {
        throw new Error(
            `CSS source list mismatch.\nConfigured: ${configured.join(', ')}\nDiscovered: ${discovered.join(', ')}`,
        );
    }
}

function buildSource() {
    validateSourceFiles();
    // Join every source file into one generated build file. Edit src/, not build/.
    const combined = config.sourceFiles
        .map((file) => `/* ${toSourcePath(file)} */\n${fs.readFileSync(path.join(srcDir, file), 'utf8')}\n`)
        .join('');
    fs.mkdirSync(path.dirname(buildFile), { recursive: true });
    fs.writeFileSync(buildFile, combined);
    return combined;
}

function buildCombinedTheme() {
    const compiled = buildSource();
    const base = fs.readFileSync(baseFile, 'utf8');
    const matches = base.split(config.buildImport).length - 1;
    if (matches !== 1) {
        throw new Error(`Expected exactly one build import in ${baseFile}; found ${matches}`);
    }
    // dist/ is the fully bundled theme: metadata + all CSS in one file.
    return base.replace(config.buildImport, compiled);
}

if (require.main === module) {
    const compiled = buildSource();
    console.log(`Built ${path.relative(root, buildFile)} (${compiled.length} bytes)`);
    if (distFile) {
        const combined = buildCombinedTheme();
        fs.mkdirSync(path.dirname(distFile), { recursive: true });
        fs.writeFileSync(distFile, combined);
        console.log(`Built ${path.relative(root, distFile)} (${combined.length} bytes)`);
    }
}

module.exports = { baseFile, buildCombinedTheme, buildFile, buildSource, config, distFile, root, srcDir };
