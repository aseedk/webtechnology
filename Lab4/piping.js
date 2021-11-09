fs = require('fs');
readStream = fs.createReadStream('foo.txt');
writeStream = fs.createWriteStream('bar.txt')
readStream.pipe(writeStream);
