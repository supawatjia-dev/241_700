// ทำการ import โมดูล http
const http = require('http');
const host = 'localhost';
const port = 8000;

const reqestListener = function(req, res){
    res.writeHead(200);
    res.end('Hello, world! This is my server.');
}

const server = http.createServer(reqestListener);
server.listen(port, host, () =>{
    console.log(`server is running on http://${host}:${port}`)
});