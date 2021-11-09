fs = require('fs');
fs.rename('output.txt', './test.txt', function (err) {
    if (err) throw err;
    console.log('file Renamed!');
});
