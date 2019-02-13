module.exports.getData = function (callback) {

    webgetter;
    var http = require('http');
    var global = require('./global');

    var options = {
        host: 'jlie.serveo.net',
        path: "/_status?format=xml",
        port: '2812',
        auth: 'guest:guest'
    }

    var webgetter = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {        
            return callback(data);
        });
    });
    
    webgetter.on('error', function (e) {    
        return callback(global.offline);   
    });
    
    webgetter.end();
}
