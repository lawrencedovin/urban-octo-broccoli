// let url = "https://swapi.dev/api/planets/1/";
// axios.get(url)
    // .then(res => {
    //     console.log(res)
    //     axios.get(res.data.residents[0])
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // })
    // .catch(err => console.log("Rejected: ", err))

let url = "https://swapi.dev/api/planets/1/";
axios.get(url)
    .then(res => {
        console.log(res.data)
        return axios.get(res.data.residents[0])
    })
    .then(res => {
        // Gets the residents data from previous call
        console.log(res.data)
        return axios.get(res.data.films[0])
    })
    .then(res => {
        // Gets the films the resident was in
        console.log(res.data)
    })
    .catch(err => console.log("Rejected: ", err))