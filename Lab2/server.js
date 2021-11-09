const http = require('http');
let time = 0;
global.setInterval(()=>{
    time++;
    console.log(`${time}s have passed`);
}, 1000)
http.createServer(function (request,response) {
    response.setHeader('Content-Type', 'text/html');
    response.write("<h1 style='color: green; text-align: center'>Hello World</h1>")
    response.end("<h3>KEKW<h3>")
}).listen(8081, ()=>{
    console.log("Waiting...")
})
console.log('Server running at localhost:8081/')
