const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const validator = require("validator");

app.use(express.static("public"));
app.use("/js", express.static("js"));
app.use(cookieParser());
// app.use(express.static("js"));

app.set("view engine", "html");
nunjucks.configure("views", {
  autoescape: true,
  express: app
});

app.get("/", (req, res, next) => {
  res.render("index");
  const email = "lawrence@gmail.com";
  const phone = "4843541823";
  const dashPhone = "484-354-1823";
  console.log(validator.isEmail(email));
  console.log(validator.isMobilePhone(phone));
  console.log(validator.isMobilePhone(dashPhone));
});

app.get("/dogs/:name", (req, res, next) => {
  res.render("dog", { 
                      name: req.params.name, 
                      date: moment().format('MMMM Do YYYY, h:mm:ss a') 
                    }
  );
});

app.get('/showmecookies', (req, res, next) => {
  res.cookie('isLoggedIn', 'mayeb');
  res.send(req.cookies);
})

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
