// function wait3Seconds() {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, 3000);
//     });

// }

// wait3Seconds()
//     .then(() => console.log("All Done!"))
//     .catch(() => console.log("Error"))

// setTimeout(() => {
//     $('h1').css('color', 'red');
// }, 1000)

// function changeColor(el, color, seconds) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             el.css('color', color);
//             resolve();
//         }, seconds)
//     })
// }

// changeColor($('h1'), 'red', 1000);
// changeColor($('h1'), 'blue', 2000);

function changeColor(el, color) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            el.css('color', color);
            resolve();
        }, 1000)
    })
}

changeColor($('h1'), 'red')
    .then(() => changeColor($('h1'), 'orange'))
    .then(() => changeColor($('h1'), 'yellow'))
    .then(() => changeColor($('h1'), 'green'))
    .then(() => changeColor($('h1'), 'blue'))