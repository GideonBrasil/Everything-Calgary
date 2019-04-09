const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createCoordObjects(array) {
  return { lat: array[1], lng: array[0] };
}

/* GET traffic incidents listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/kxmf-bzkv.json?name=${communityName.toUpperCase()}`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };

  request(options).then(data => {
    data = JSON.parse(data)[0];
    let commFeatureCode = data._feature_id;

    let options2 = {
      url: `https://data.calgary.ca/resource/gddc-smf3.json?:@computed_region_kxmf_bzkv=${commFeatureCode}`,
      headers: {
        "User-Agent": "request",
        "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
      }
    };
    request(options2).then(data => {
      data = JSON.parse(data);
      console.log(data);
      res.status(200).json(data);
    });
  });
  });


module.exports = router;