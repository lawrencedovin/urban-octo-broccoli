const fs = require('fs');
const process = require('process');
const axios = require('axios');

const argv = process.argv;
const path = argv[argv.length -1 ];

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        console.log(`${data}`);
    })
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch(err) {
        console.error(`Error fetching ${url}: ${err}`);
        process.exit(1);
    }
}

if (path.slice(0,4) == 'http') {
    webCat(path);
} else {
    cat(path);
}