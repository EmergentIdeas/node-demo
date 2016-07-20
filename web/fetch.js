var http = require('http');

var fetch = function(server, path, callback) {
	var options = {
	    host: server,
	    path: path
	}
	var request = http.request(options, function (res) {
	    var data = '';
	    res.on('data', function (chunk) {
	        data += chunk;
	    });
	    res.on('end', function () {
	        callback(data);

	    });
	});
	request.on('error', function (e) {
	    console.log(e.message);
	});
	request.end();
}
module.exports = fetch
