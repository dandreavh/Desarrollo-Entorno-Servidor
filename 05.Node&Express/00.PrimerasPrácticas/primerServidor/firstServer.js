let http = require("http");
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello World :)!");
});
server.listen(8000);
console.log("Server listening on port 8000");