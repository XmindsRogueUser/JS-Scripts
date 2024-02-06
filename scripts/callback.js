function download(url, callback) {
    setTimeout(() => {
        // script to download the picture here
        console.log(`process 1:  Downloading ${url} ...`);

        // process the picture once it is completed
        callback(url);
    }, 1000);

    // script to download the picture here
    console.log(`process 2:  Downloading ${url} ...`);

    // process the picture once it is completed
    callback(url);


}

download("http://www.google.com/lpl.img", (url) => {
    console.log("processing image from " + url)
});
