const express = require("express");
const router = express.Router();
const request = require("request-promise");

function preparePermitsData(permitsData) {
  let outputData = [];
  permitsData.forEach(permit => {
    outputData.push({
      description: permit.description,
      estprojectcost: permit.estprojectcost,
      location: permit.location,
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
    url: `https://data.calgary.ca/resource/yjnz-kedd.json?communityname=${communityName.toUpperCase()}&$where=statuscurrent%20not%20in(%27Completed%27,%27Cancelled%27,%27File%20Closed%27,%20%27Expired%27)`,
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
