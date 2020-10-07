function reqListener() {
  //   console.log(this.responseText);
  const data = JSON.parse(this.responseText);
  // console.log(data);
  for (let planet of data.results) {
    console.log(planet.name);
  }
  const nextUrl = data.next;
  const secondReq = new XMLHttpRequest();
  secondReq.addEventListener("load", () => {
    console.log("SUCCESS");
    const data = JSON.parse(this.responseText);
    for (let planet of data.results) {
      console.log(planet.name);
    }
  });
  secondReq.addEventListener("error", () => {
    console.log("Error");
  });
  secondReq.open("GET", nextUrl);
  secondReq.send();
  console.log("Just sent 2nd Request....");
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://swapi.dev/api/planets/");
oReq.send();
console.log("SENDING REQUEST....");
