const argv = process.argv;
const fs = require('fs');
const file_location = argv[argv.length -1 ];

function cat(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.log(err);
            process.exit(1);
        }
        console.log(`${data}`);
    })
}

cat(file_location);