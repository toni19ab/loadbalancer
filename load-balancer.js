const http = require('http');
const httpProxy = require('http-proxy');
const seaport = require('seaport');
const seaportObj = seaport.connect('localhost', 9090);

let i = -1;

// Reference til step 4
let proxy = httpProxy.createProxyServer({});

let server = http.createServer((req, res)=> {

    let arr = seaportObj.query('server');

    if (arr.length === 0) {
        console.log('No servers available')
    } else {

        i = (i + 1) % arr.length;

        var host = arr[i].host.split(":").reverse()[0];
        var port = arr[i].port;

        proxy.web(req, res, {target: 'http://' + host + ':' + port });
    }

    console.log('Package sendt til port: ' + port);
});

server.listen(
    8080,
    'localhost',
    () => console.log('Load-balancer started...')
);

