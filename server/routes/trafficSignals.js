const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createCoordObjects(array) {
  return { lat: array[1], lng: array[0] };
}

/* GET traffic signals listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  const addSlash = communityName.replace("-", "/");
  let options = {
    url: `https://data.calgary.ca/resource/kxmf-bzkv.json?name=${addSlash.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  console.log(communityName)
 
 
  function  createSignalData(data) {
    let signalData = [];
    data.forEach(signal => {
    // const timeOf = new Date(signal.start_dt)
    signalData.push({
      key: Math.random() * 100,
      location: createCoordObjects(signal.location.coordinates),
      address: signal.crosswalk_type
        });
      });
      return signalData;
    }

  request(options).then(data => {
    data = JSON.parse(data)[0];
    let commFeatureCode = data._feature_id

    let options2 = {
      url: `https://data.calgary.ca/resource/nbax-k7vz.json?:@computed_region_kxmf_bzkv=${commFeatureCode}`,
      headers: {
        "User-Agent": "request",
        "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
      }
    };
    request(options2).then(data => {
      data = JSON.parse(data);
      const dataObj = createSignalData(data)
      res.status(200).json(dataObj);
    });
  });
});

module.exports = router;