const unknownURI = []
addUnknownUri = (uri) => {
    unknownURI.push(uri);
}

getUnknownUri = () => {
    return unknownURI;
}

add = (a,b) => a+b;
subtract = (a,b) => a-b;
module.exports.getId = () => "G8DFS9DSS";
// or
module.exports = {add, addUnknownUri, getUnknownUri};



// export default subtract;
// or export default subtract = () ...
// or export default {subtract:sub};
// save file as .mjs
// import subtract from "./adder.mjs";
// import * from "./adder.mjs";

// import json data
// const data = require("./sad.json") 

// command(watchmode) ===> node --watch moduel_index

// build in modules ===> path, events, fs, stream, http

// const path = require("node:path")
// const path = require("node:fs")
// const path = require("node:fs/promise")
// the node prefix tells that it is a build in module (use it to avoid confusion)
// path.basename(_dir)






