const ws = new WebSocket(`ws://localhost:3000/counter`);
const h1 = document.querySelector("h1");
const btn = document.querySelector("#clicker");

ws.onopen = function(evt) {
    // called when browser connects to server
};

ws.onmessage = function(evt) {
    console.log("CLIENT MESSAGE");
    console.log("got", evt.data);
    h1.innerText = evt.data;
};

ws.onclose = function(evt) {
    // called when server closes connection
};

btn.addEventListener("click", (e) => {
    ws.send("CLICKity");
});


