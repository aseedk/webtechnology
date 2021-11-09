const http = require('http');
const fs = require('fs');

http.createServer(function (request, response) {
    if(request.method !== 'GET')
        return;
    const log = `GET Request ${request.url} made by User\n`;
    response.writeHead(200, {'Content-Type': 'text/html'});
    switch(request.url){
        case '/':
            response.end('<h1>Root Page</h1>')
            break;
        case '/contactus':
            response.end('<h1>Contact Us</h1>')
            break;
        case '/aboutus':
            response.end('<h1>About us</h1>')
            break;
        default:
            response.writeHead(404);
            response.end('<h1>Page Not Found</h1>')
    }
    fs.appendFile('log.txt', log, function (error) {
        if (error) throw error;
    });
  }).listen(8080);
