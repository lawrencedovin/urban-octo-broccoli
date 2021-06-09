const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const expressWs = require("express-ws")(app);
app.use(express.static("public"));
// app.use("/js", express.static("js"));
// app.use(express.static("js"));

let counter = 0;

app.set("view engine", "html");
nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", (req, res, next) => {
  res.render("index.html");
});

app.ws('/counter', function(ws, req) {
  // ws.send("HELLO FROM SERVER!");
  ws.send(counter);
  ws.on('message', function(data) {
    counter++;
    //SENDING TO ALL CLIENTS not just the one that clicked
    expressWs.getWss().clients.forEach(client => {
      // 1 checks if that socket is open
      if (client.readyState === 1) {
        client.send(counter);
      }
    });
    // ws.send(counter);
    console.log(`Msg on SERVER ${data}`);
  });
});

app.use(function(err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;

  // set the status and alert the user
  return res.status(status).json({
    error: {
      message: err.message,
      status: status
    }
  });
});

module.exports = app;
