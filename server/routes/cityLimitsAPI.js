const express = require("express");
const router = express.Router();
const request = require("request-promise");

/* GET users listing. */
router.get("/:calgary", function(req, res, next) {
  let options = {
    url: `https://data.calgary.ca/resource/erra-cqp9.json`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data)[0];
    let geoCodes = data.the_geom.coordinates[0].map(coordinates => {
      return { lat: coordinates[1], lng: coordinates[0] };
    });
    res.status(200).json(geoCodes);
  });
});

module.exports = router;
