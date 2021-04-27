let url = "https://swapi.dev/api/planets/1/";
let firstPromise = axios.get(url);
firstPromise.then(res => console.log(res.data))
firstPromise.catch(err => console.log("Rejected: ", err))
// console.log(firstPromise)