// Question 4 : Write a program to copy the content of one file to another one.
const fs = require("fs");

const sourcefile = "./copyFolder/sourcefile.txt";
const destinationfile = "./copyFolder/destinationfile.txt"
startCopy = async () => {
    let writableStream = fs.createWriteStream(destinationfile, "utf-8");

    fs.createReadStream(sourcefile, {
        encoding: "utf-8",
        highWaterMark: 2,
    }).pipe(writableStream);

    // read destination file
    writableStream.on('close', () => {
        stringData = ""
        fs.createReadStream(destinationfile, {
            encoding: "utf-8",
            highWaterMark: 100,
        }).on('data', function (data) { console.log(data) });
    });
}
startCopy();