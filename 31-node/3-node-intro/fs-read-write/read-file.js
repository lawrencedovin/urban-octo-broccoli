const fs = require('fs');

fs.readFile('poem.txt', 'utf8', (err, data) => {
    if(err) {
        console.log(err);
        process.kill(1);
    }

    console.log(`file contains: ${data}`);
});

console.log('reading file');