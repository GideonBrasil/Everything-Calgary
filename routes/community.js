const express = require("express");
const router = express.Router();
const request = require("request");

function returnCoordinates(data) {
  console.log(data);
}

function getCommunityCoord(community, callBack) {
  let options = {
    url: `https://data.calgary.ca/resource/kzbm-mn66.json?name=${community.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options, function(err, res, body) {
    let dataObj = JSON.parse(body)[0];
    callBack(dataObj);
  });
}

/* GET users listing. */
router.get("/", function(req, res, next) {
  console.log("Im here");
  const communityName = req.params.community;
  console.log("req:", req);
  console.log("communityName:", communityName);
  getCommunityCoord(communityName, returnCoordinates);
  res.status(200).json({ d: "d" });
});

module.exports = router;
