fs = require('fs');

fs.readFile(__filename, function (error, data) {
   if (error){
       return console.error(error.message);
   }
   console.log("Async reading operation");
   console.log(data);
});

data = fs.readFileSync(__filename);
console.log("Sync reading operation");
console.log(data);
