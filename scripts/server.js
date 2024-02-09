const adder = require("./adder");
const http = require("node:http");
const fs = require("node:fs");

const unknownList = [];
const author = "Sarath"
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        // fs.createReadStream(__dirname + "/html/index.html").pipe(res);
        let html = fs.readFileSync(__dirname + "/html/index.html", "utf-8");
        html = html.replace("{{name}}", author);
        res.end(html);
    } else {
        console.log(req.url);
        adder.addUnknownUri(req.url);
        const writableStream = fs.createWriteStream(__dirname + "/html/unknown_uris.txt", "utf-8")
        writableStream.write("{\"unknown_uris\":\"" + adder.getUnknownUri() + "\"}\n");
        writableStream.close();
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(3000, () =>
    console.log("Server running on port 3000"));