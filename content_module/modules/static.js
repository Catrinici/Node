const fs = require('fs');
const path = require('path');

module.exports = function(request, response) {
    fs.exists('.' + request.url, function(exists) {
        if (exists) {
            if (request.url === '/') {
                fs.readFile('./views/index.html', function(errors, contents) {
                    response.write(contents);
                    response.end();
                });
            } else {
                fs.readFile(
                    '.' + path.dirname(request.url) + '/' + path.basename(request.url),
                    function(errors, contents) {
                        response.write(contents);
                        response.end();
                    }
                );
            }
        } else {
            response.end('File not Found!!!');
        }
    });
};