const fs = require('fs');
const process = require('process');

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

cat(path);