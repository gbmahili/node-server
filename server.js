var http = require("http");

var port1 = 7000;
var port2 = 7500;

function listener(request, repsponse) {
    repsponse.end("I’m the best programmer in this class" + request.url);
}
function listener2(request, repsponse) {
    repsponse.end("YOU CAN NEVER LET ME SAY ANYTHING BAD ABOUT MYSELF" + request.url);
}

var server = http.createServer(listener);

var server2 = http.createServer(listener2);

server.listen(port1, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port1);
 });
server2.listen(port2, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port2);
 });