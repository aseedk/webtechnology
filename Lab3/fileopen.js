fs = require('fs');
fs.open('test.txt', 'r', ((err, fd) => {
    let buffr = new Buffer(1024);
    fs.read(fd, buffr, 0, buffr.length, 0, function (err, bytesRead, buffer) {
        if (err) throw err;
        if (bytesRead > 0){
            console.log(buffer.slice(0,bytesRead).toString());
        }
        fs.close(fd, function (err) {
            if (err) throw err;
        })
    } )
}));
