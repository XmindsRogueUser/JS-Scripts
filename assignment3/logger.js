// Question 2 : Create and use a simple logging local module which logs the information, warning or error to the console.

info = (message) => console.log("INFO : " + new Date().toLocaleString() + " : " + message);
warn = (message) => console.warn("WARN : " + new Date().toLocaleString() + " : " + message);
error = (message) => console.error("ERROR : " + new Date().toLocaleString() + " : " + message);

module.exports = { info, warn, error };