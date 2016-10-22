var http = require("http");

http.createServer(function(req,res){
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("It's alive!");
    res.end();
}).listen(3000);

