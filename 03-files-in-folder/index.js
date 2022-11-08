const fs = require('fs');
const path = require('path');

const folder = path.join(__dirname, 'secret-folder');

async function files(dir){
  await (await fs.promises.readdir(dir, {withFileTypes: true}))
    .filter(el => el.isFile())
    .map(el => el.name)
    .forEach(el => {
      fs.stat(path.join(dir, el), (err, stats) => {
        if (err) throw err;
        console.log(`${path.parse(el).name} - ${path.extname(el).slice(1)} - ${(stats.size / 1024).toFixed(2)} kb`);}
      );
    });
}

files(folder);
