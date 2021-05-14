const fs = require('fs');

const content = 'This will go in the file!';

fs.writeFile('output.txt', content, "utf8", (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Successfully wrote to file!');
});

console.log('writing file...');