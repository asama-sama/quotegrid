var http = require('http');
var url = require('url');

http.createServer(onRequest).listen(8888);

function onRequest(request, response) {

    console.dir("it works");

    response.writeHead(200, {'Content-Type': 'text/html'});
    // Poor man's templating system: Replace "DBCONTENT" in page HTML with
    // the actual content we received from the database
    response.write("it works");
    response.end();

}