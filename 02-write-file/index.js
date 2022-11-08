const path = require('path');
const fs = require('fs');
const readline = require('readline');

const { stdin: input, stdout: output, stdout } = require('process');
const rl = readline.createInterface({ input, output });

const createFile = path.join(__dirname, 'text.txt');
const typeToStream = fs.createWriteStream(createFile);

rl.write('Hi! Can you type message for me?\n');

rl.on('line', input => input == 'exit' ? rl.close() : typeToStream.write(input + '\n'));
rl.on("close", () => {
  process.stdout.write('Thanks! It is good job, bye!');
  typeToStream.close();
});