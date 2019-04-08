const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createCoordObjects(array) {
  return { lat: array[1], lng: array[0] };
}

function generateKey() {
  return Math.random() * 33;
}

function permitDuration(issuedDate) {
  const permitIssuedDate = new Date(issuedDate);
  const currentDate = new Date();
  const dateBetween = currentDate - permitIssuedDate;

  return Math.floor(dateBetween / (60 * 24 * 60 * 1000));
}

function preparePermitsData(permitsData) {
  let outputData = [];
  permitsData.forEach(permit => {
    outputData.push({
      key: generateKey(),
      permiteDuration: permitDuration(permit.issueddate),
      description: permit.description,
      estprojectcost: permit.estprojectcost,
      location: createCoordObjects(permit.location.coordinates),
      type: permit.permittype,
      status: permit.statuscurrent,
      address: permit.originaladdress,
      geolocation: permit.locationsgeojson
    });
  });
  return outputData;
}

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/yjnz-kedd.json?communityname=${communityName.toUpperCase()}&$where=statuscurrent%20not%20in(%27Completed%27,%27Cancelled%27,%27Refused%27,%27File%20Closed%27,%20%27Expired%27)`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    permitsData = JSON.parse(data);
    // console.log("data:", data);
    const dataObj = preparePermitsData(permitsData);
    // console.log(dataObj);
    res.status(200).json(dataObj);
  });
});

module.exports = router;
