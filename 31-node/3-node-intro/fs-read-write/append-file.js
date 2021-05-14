const fs = require('fs');

const content = '\nAnother one';

// fs.writeFile('output.txt', content, { encoding: "utf8", flag: "a" }, (err) => {
//     if (err) {
//         console.error(err);
//         process.exit(1);
//     }
//     console.log('Successfully wrote to file!');
// });

fs.appendFile('output.txt', '\nBrand New Content!', 'utf8', (err) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log('Successfully wrote to file!');
});

console.log('writing file...');