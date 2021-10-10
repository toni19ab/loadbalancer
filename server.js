const http = require('http');
const seaport = require('seaport');
const seaportObj = seaport.connect('localhost', 9090);
let counter = 1;

http.createServer((req, res) => {
    counter++;

    console.log('Modtaget ' + counter);

    console.log(req);

    res.end('Package: ' + counter + ' from server');
}).listen(
    seaportObj.register('server'),
    () => console.log('Server initiated')
);
