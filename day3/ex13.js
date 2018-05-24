let http = require('http');
let server = http.createServer(handleRequest);
let fs = require('fs');
let path = require('path');

server.listen(1234, () => {
    console.log('server listening at port 1234');
    console.log('visit http://localhost:1234/ using a browser.');
});

console.log('*** end of script ***');

// the functions are part of the VM, and by the time the interpreter starts 
// its work, it already has an identifier called 'handleRequest'
function handleRequest(req, resp) {
    let filename, mime;
    console.log(req.url);
    switch (req.url) {
        case '/': mime='text/html'; filename = 'home.html'; break;
        case '/about': mime='text/html'; filename = 'about.html'; break;
        case '/contact': mime='text/html'; filename = 'contact.html'; break;
        case '/vinod.png': mime='image/png'; filename = 'vinod.png'; break;
        default: mime='text/html'; filename = '404.html';
    }
    
    fs.readFile(path.join(__dirname, 'www', filename), 'utf-8', (err, data)=>{
        resp.setHeader('Content-Type', mime);
        resp.end(data);
    });
}

// windows: check if port 1234 is occupied
// netstat -a | find "1234"
