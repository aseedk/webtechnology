fs = require('fs');
fs.appendFile('output.txt', 'OMEGAKEK', function (err) {
    if (err) throw err;
    console.log('Saved');
})
