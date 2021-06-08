const express = require("express");
const app = express();
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const moment = require("moment");
const validator = require("validator");
const _ = require("lodash");

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


  const obj1 = {
    name: 'Anna',
    age: 20,
    location: {
      city: 'Cody',
      state: 'WY'
    }
  };
  
  const obj2 = {
    name: 'Anna',
    age: 20,
    location: {
      city: 'Cody',
      state: 'WY'
    }
  };

  const building = {
    "owner": {
      "name": {
        "title": "Mrs",
        "first": "Anna",
        "last": "Madrigal"
      }
    },
    "location": {
      "street": "28 Barbary Lane",
      "city": "San Francisco",
      "state": "CA",
      "postcode": "941001",
      "coordinates": {
        "latitude": "20.9267",
        "longitude": "-7.9310"
      }
    }
  };

  const building2 = {
    "owner": {
      "name": {
        "title": "Mr",
        "first": "Lawrence",
        "last": "Dovin"
      }
    },
    "location": {
      "street": "29 Pleasant View Dr.",
      "city": "Bowie",
      "state": "MD",
      "postcode": "20878",
      "coordinates": {
        "latitude": "2.9487",
        "longitude": "-15.9213"
      }
    }
  };

  const building3 = {
    "owner": {
      "name": {
        "title": "Mrs",
        "first": "Julie",
        "last": "Bee"
      }
    },
    "location": {
      "street": "234 Burger View Dr.",
      "city": "Makati",
      "state": "PH",
      "postcode": "20458",
      "coordinates": {
        "latitude": "9.9127",
        "longitude": "-5.9783"
      }
    }
  };

  const buildings = [building, building2, building3];

  const landlord = "Bee";

  //true
  console.log(_.isEqual(obj1, obj2));
  
  //_get(obj, location, default)
  // console.log(_.get(building, "owner.name.first", "N/A"));

  // Looks up information by landlord last name and by state of MD
  console.log(_.keyBy(buildings, 'owner.name.last')[landlord]);

  console.log(_.keyBy(buildings, 'location.state')['MD']);
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
