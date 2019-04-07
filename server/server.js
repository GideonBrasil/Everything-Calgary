//Dependencies
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

//These are for the routes
const indexRouter = require("./routes/index");
const communityRouter = require("./routes/communityAPI");
const geoCodeRouter = require("./routes/geoCodes");
const garbageRouter = require("./routes/garbageAPI");
const crimeRouter = require("./routes/crimeAPI");
const permitsRouter = require("./routes/constructionPermits");
const propertyAssessmentRouter = require("./routes/propertyAssessmentAPI");
const eventsRouter = require("./routes/eventsAPI");
const newsRouter = require("./routes/newsAPI");
const trafficRouter = require("./routes/trafficAPI");
const cityRouter = require("./routes/cityLimitsAPI");

const PORT = 3000;

// Create a new express server
const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/coordinates", communityRouter);
app.use("/geocoordinates", geoCodeRouter);
app.use("/garbage", garbageRouter);
app.use("/crime", crimeRouter);
app.use("/propertyAssessment", propertyAssessmentRouter);
app.use("/events", eventsRouter);
app.use("/news", newsRouter);
app.use("/traffic", trafficRouter);
app.use("/city", cityRouter);
app.use("/constructionPermits", permitsRouter);

app.listen(PORT, "0.0.0.0", "localhost", () =>
  console.log(`Listening on ${PORT}`)
);

module.exports = app;
