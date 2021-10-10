const http = require('http');
let host = 'localhost';
let port = 8080;
let msgCounter = 0;

for (let i = 0; i < 10; i++) {

    http.get('http://' + host + ':' + port, (res) => {
        let data = '';

        //Receives data in chunks, and pushes these into one single string
        res.on('data', (chunk) => {
            data += chunk;
        });

        //When all data is received, the client logs the data
        res.on('end', (res) => {
            msgCounter++;
            console.log('Message number: ' + msgCounter + ' - Message: ' + data);
        });
    });
}
