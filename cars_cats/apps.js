const http = require('http');
const fs = require('fs');
const server = http.createServer(function(request, response) {

    //Split the URL in order to examine it better
    const splitURL = request.url.split('/'),
        fileType = splitURL[1], //Set of characters after the first/
        file = splitURL[2];

    switch (fileType) {
        case "styles":
            // SERVE CSS
            ServiceWorkerMessageEvent(file, response);
            break;
        case "images":
            // SERVE A JPG IMAGE
            serveJPG(file, response);
            break;
        default:
            // SERVE AN HTML FILE
            switch (fileType) {
                case "cars": //If firstChunk is 'cars', could be one of two routes
                    if (file === "new") {
                        serveHTML("new.html", response);
                    } else {
                        serveHTML("cars.html", response);
                    }
                    break;
                case "cats":
                    serveHTML("cats.html", response);
                    break;
                default:
                    //We dont recogn this URL - serve 404
                    serve404(response);

            }
    }
});

function serveHTML(filename, response) {
    fs.readFile(`images/${filename}`, function(error, contacts) {
        if (error) { return serve404(response); }
        response.writeHead(200, { 'Content-type': 'car1/jpeg' });
        response.write(contents);
        response.end();
    })
}

function serve404(response) {
    response.writeHead(404);
    response.end("File not found!");
}

server.listen(7077);
console.log("Running on 7077");