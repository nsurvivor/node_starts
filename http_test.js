var http = require('http');
var port = 9090;
http.createServer(responseHandler).listen(port)
console.log('Server running at http://localhost:'+port+'/')
function responseHandler(req,res){
    res.writeHead(200,{
        'Content-Type':'text/html'
    })
    res.end('<html><head><title>test my node js</title></head>\
        <body>Node JS to go for with changes reflected using nodemon!</body></html>')
}
