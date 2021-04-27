function get(url) {
    const request = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
        request.onload = () => {
            if (request.readyState !== 4) return;

            // Check status code
            if (request.status >= 200 && request.status < 300) {
                resolve({
                    data: JSON.parse(request.response),
                    status: request.status,
                    request: request
                });
            } else {
                reject({
                    msg: 'Server Error',
                    status: request.status,
                    request: request
                });
            }
        }
        request.onerror = function handleError() {
            request = null;
            reject({
                msg: 'Network Error'
            });
        };
        request.open('GET', url);
        request.send();
    })
}

get('https://swapi.dev/api/planets/1/')
    .then(res => {
        console.log(res);
        return get('https://swapi.dev/api/planets/2/')
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));