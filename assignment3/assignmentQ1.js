const logger = require("./logger");
const fileRemover = require("./fileRemover");
const http = require("http");
const path = require("path");
const fs = require("fs");

// Question 1 : Using  Node.js http module create a web server.
const homeServer = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("Welcome Home");
});

homeServer.listen(3000, () => logger.warn("Server running on port 3000"));

const helloWorldServer = http.createServer((req, res) => {

    // view http home page
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/html/index.html").pipe(res);
        logger.info("Server homepage loaded.");

        // remove files from directory
    } else if (req.url === "/remove") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(fileRemover.remove(path.join(__dirname, "deletableFiles")));

        // status code 404
    } else {
        logger.error("URI not found.");
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

helloWorldServer.listen(3300, () =>
    logger.warn("Hello world server running on port 3300")
);
