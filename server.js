// Archivo de servidor

let static = require('node-static');
let http = require('http');
let port = process.env.PORT;
let directory = __dirname + '/public';

if ((typeof port === 'undefined') || (port === null)) {
    port = 8080;
    directory = '/public';
}

let file = new static.Server(directory);

let app = http.createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();

    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');


}).listen(port);


console.log('Servidor corriendo en el puerto ' + port);