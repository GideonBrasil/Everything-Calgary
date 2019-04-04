const express = require("express");
const router = express.Router();
const request = require("request-promise");

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/kzbm-mn66.json?name=${communityName.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data)[0];
    const dataObj = { lat: data.latitude, lng: data.longitude };
    res.status(200).json(dataObj);
  });
});

module.exports = router;
