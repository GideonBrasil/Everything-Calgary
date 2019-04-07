const express = require("express");
const router = express.Router();
const request = require("request-promise");


function filterData(data) {
  let outputdata = [];
  data.forEach( permit => {
    outputdata.push( {
      description: permit.description,
      estprojectcost: permit.estprojectcost,
      location: permit.location,
      type: permit.permittype,
      status: permit.statuscurrent,
      address: permit.originaladdress,
      geolocation: permit.locationsgeojson
    });
  });
  return outputdata;
}



/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/yjnz-kedd.json?communityname=${communityName.toUpperCase()}&$where=statuscurrent%20not%20in(%27Completed%27,%27Cancelled%27,%27File%20Closed%27,%20%27Expired%27,%20%27Refused%27)`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    const returnData = filterData(data);
    res.status(200).json(returnData);
  });
});

module.exports = router;
