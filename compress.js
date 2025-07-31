import fs from 'fs';
import archiver from 'archiver';

const output = fs.createWriteStream('dist.zip');
const archive = archiver('zip', { zlib: { level: 9 } }); // Level 9 is maximum compression

output.on('close', () => {
  console.log('dist.zip has been created with size:', archive.pointer() + ' bytes');
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory('dist', false); // Compress the dist folder
archive.finalize();