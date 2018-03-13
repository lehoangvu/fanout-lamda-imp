var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Grip-Hold': 'stream',
        'Grip-Channel': 'mychannel'
      ,
        'Grip-Keep-Alive': ':\\n\\n; format=cstring; timeout=20'
    });

    // 2k padding for old browsers
    var padding = new Array(2048);
    res.write(':' + padding.join(' ') + '\n');

    res.end();
}).listen(8081	, '0.0.0.0');
