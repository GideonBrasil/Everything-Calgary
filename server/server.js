var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

var indexRouter = require("./routes/index");
var communityRouter = require("./routes/communityData");
var geoCodeRouter = require("./routes/geoCodes");
var garbageRouter = require("./routes/garbageData.js");
var crimeRouter = require("./routes/crimeData.js");

const PORT = 3000;

// Create a new express server
const app = express();
// Make the express server serve static assets (html, javascript, css) from the /public folder
// .use(express.static("public"));

// view engine setup
// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// app.use("/", indexRouter);
app.use("/coordinates", communityRouter);
app.use("/geocoordinates", geoCodeRouter);
app.use("/garbage", garbageRouter);
app.use("/crime", crimeRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handler

app.listen(PORT, "0.0.0.0", "localhost", () =>
  console.log(`Listening on ${PORT}`)
);

module.exports = app;
