fs = require('fs');
data = 'Testing 1 2 3';
writerStream = fs.createWriteStream('output.txt');
writerStream.write(data, 'utf8');
writerStream.end();
writerStream.on('finish', function () {
    console.log('Write Completed');
});
writerStream.on('error', function (err){
    console.log(err.stack);
});
console.log('Program Ended');
