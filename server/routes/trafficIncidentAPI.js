const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createCoordObjects(array) {
  return { lat: array[1], lng: array[0] };
}

function monthDiff(d1, d2) {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

function filterByPeriod(data) {
  const currentDate = new Date();
  const data12Months = data.filter( incident => {
    let theDate = new Date(incident.start_dt);
    let monthdiff = monthDiff(theDate, currentDate);
    return 7 >= monthdiff;
  });
  return data12Months
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

  function  createTargetData(data) {
    let outputData = [];
    data.forEach(incident => {
    // const timeOf = new Date(incident.start_dt)
    outputData.push({
      key: Math.random() * 100,
      location: createCoordObjects(incident.location.coordinates),
      address: incident.description,
      information: incident.incident_info,
      timeOf: incident.start_dt,
      timeClear: incident.modified_dt
    });
  });
  return outputData;
  }
    
  
  request(options).then(data => {
    data = JSON.parse(data)[0];
    let commFeatureCode = data._feature_id

    let options2 = {
      url: `https://data.calgary.ca/resource/m328-x8wy.json?:@computed_region_kxmf_bzkv=${commFeatureCode}`,
      headers: {
        "User-Agent": "request",
        "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
      }
    };
    request(options2).then(data => {
      data = JSON.parse(data);
      const dataObj = filterByPeriod(data)
      const newDataObj = createTargetData(dataObj)
      res.status(200).json(newDataObj);
    });
  });
  });

 
module.exports = router;