const express = require("express");
const router = express.Router();
const request = require("request-promise");

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  const addSlash = communityName.replace("-", "/");

  let options = {
    url: `https://data.calgary.ca/resource/eme4-y5m7.json?name=${addSlash.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    console.log("data:", data);
    res.status(200).json(data);
  });
});

module.exports = router;
