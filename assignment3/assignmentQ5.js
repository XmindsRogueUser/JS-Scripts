// Question 5 : Read the content of a text file and send it as response using streams.
const http = require("http");
const fs = require("fs");

const sourcefile = "./copyFolder/sourcefile.txt";
const streamServer = http.createServer((req, res) => {
    // view home page
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        fs.createReadStream(sourcefile, {
            encoding: "utf-8",
            highWaterMark: 2,
        }).pipe(res);

        console.log("Stream complete.");
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

streamServer.listen(3000, () =>
    console.log("Server running on port 3300")
);
