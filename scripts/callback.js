function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`Downloading ${url} ...`);

        // process the picture once it is completed
        callback(url);
    }, 1000);
}

download("http://www.google.com/lpl.img", (url) => {
    console.log("processing image from " + url)
});
