let mockAjaxRequest = new Promise((resolve, reject) => {
    let probSuccess = 0.5;
    let requestTime = 1000;

    // We mock a network request using a setTimeout.
    // The request takes requestTime milliseconds.
    // Afterwards, the promise is either resolved with data
    // or rejected with a timeout message,
    // based on whether randomNum is less than probSuccess.
    setTimeout(() => {
        let randomNum = Math.random();
        if (randomNum < probSuccess) {
            let data = "Here's your data";
            resolve(data);
        } else {
            reject("Sorry, your request failed.")
        }
    }, requestTime);
});

mockAjaxRequest
    .then(data => console.log(data))
    .catch(err => console.log(err));