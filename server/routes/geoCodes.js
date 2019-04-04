const express = require("express");
const router = express.Router();
const request = require("request-promise");

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/surr-xmvs.json?name=${communityName.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data)[0];
    console.log(data.the_geom.coordinates[0]);
    let geoCodes = data.the_geom.coordinates[0].map(coordinates => {
      return { lat: coordinates[1], lng: coordinates[0] };
    });
    const dataObj = {
      communityCode: data.comm_code,
      geoCodes: geoCodes
    };
    res.status(200).json(dataObj);
  });
});

module.exports = router;
