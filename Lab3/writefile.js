fs = require('fs');

let data = 'Test';

fs.writeFile('books.txt', data, (err => {
    if (err){
        console.log(err);
    }else {
        console.log('File Written Successfully\n')
        console.log('File Contents are\n')
        console.log(fs.readFileSync('books.txt', "utf-8"));
    }
}))

console.log('Outside Write Callback')
