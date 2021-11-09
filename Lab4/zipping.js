fs = require('fs');
zlib = require('zlib');

fs.createReadStream('foo.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'))
console.log('file Compressed.')
