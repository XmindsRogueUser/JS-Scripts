// Question 3 : Write a program to delete all files from a given directory.(use path and fs module).
const fs = require("fs");
const fsPromise = require("fs").promises;
const path = require("path");
const logger = require("./logger");

// removes all files in the folder including sub directories
// param folerName : the folder to be processed
remove = (folderName) => {
    console.log("\n");
    logger.warn("Remove Function called with input " + folderName);
    let filesDiscovered = getCurrentFilenames(folderName);
    filesDiscovered.forEach((resource) => {
        fsPromise
            .lstat(resource)
            .then((stats) => {
                if (stats.isFile()) {
                    logger.warn(`Removing file ${resource}`);
                    fsPromise.rm(resource);
                } else {
                    logger.warn(`Removing files in subdirectory ${resource}`);
                    remove(resource);
                }
            })
            .catch((err) => {
                logger.error(err);
            });
    });
    return "Files cleared";
};

// Get filenames in the path provided
function getCurrentFilenames(rootPath) {
    logger.info("Current dir root : " + rootPath);
    discoveredFiles = [];
    fs.readdirSync(rootPath).forEach((file) => {
        discoveredFiles.push(path.join(rootPath, file));
    });
    return discoveredFiles;
}

module.exports = { remove };
