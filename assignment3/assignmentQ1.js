// Question 1 : Using  Node.js http module create a web server.

const logger = require("./logger");
const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
    // Question 5 : Create a basic web server that prints “Hello World” using http module.
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        fs.createReadStream(__dirname + "/html/index.html").pipe(res);
        logger.info("Server homepage loaded.")
    } else {
        logger.error("URI not found.")
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(3000, () =>
    logger.warn("Server running on port 3000"));