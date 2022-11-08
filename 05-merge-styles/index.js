const path = require('path');
const { readdir, readFile, writeFile } = require('fs').promises;

const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
const currentDir = path.join(__dirname, 'styles');
let styles = [];

(async () => {
  const dir = await readdir(currentDir, { withFileTypes: true });
  for (let file of dir) {
    const toDir = path.join(currentDir, file.name);
    // const extension = path.extname(pathFile);
    const inFile = await readFile(toDir, 'utf8');

    if (path.extname(toDir) === '.css') {
      styles.push(inFile);
    }
  }
  await writeFile(bundle, styles.join('\n'), 'utf8');
})();