fs = require('fs');

stream = fs.createReadStream('output.txt');
stream.on('data', function (data){
    let chunk = data.toString();
    console.log(chunk);
})
stream.on('end', function () {
    console.log('End');
})
