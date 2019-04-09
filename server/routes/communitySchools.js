const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createCoordObjects(array) {
  return { lat: array[1], lng: array[0] };
}

function filterData(data) {
  const output = data.map( school => {
    return {
      name: school.name,
      location: createCoordObjects(school.location.coordinates),
      type: school.type,
      address: school.address,
      board: school.board,
      grades: school.grades,
      postsecond: school.postsecond
      };
    });
  return output;
}

/* GET traffic incidents listing. */
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
      const dataObj = filterData(data);
      res.status(200).json(dataObj);
    });
  });
  });


module.exports = router;