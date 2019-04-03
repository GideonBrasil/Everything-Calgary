const express = require("express");
const router = express.Router();
const request = require("request-promise");


function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function frequency_season (date, data) {
    if(date.getMonth() > 9 || date.getMonth() < 4) {
      return data.clect_int_winter;
    } else {
      return data.clect_int_summer;
    }
}

function manipulateData(data) {
  let day = data.collection_day;
  let startDate = new Date("17 July 2017");
  let now = new Date();
  let x = weeksBetween(startDate, now) % 2;
  switch(frequency_season(now, data)) {

    case 'EVEN':
      return (x===0 ? `${data.commodity} bin pick up: this ${day}` : `${data.commodity} bin pick up: next ${day}`);
      break;
    case 'ODD':
      return (x===1 ? `${data.commodity} bin pick up: this ${day}` : `${data.commodity} bin pick up: next ${day}`);
      break;
    default:
      return( `${data.commodity} bin pick up: this ${day}`);
      break;
    }
}


/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/g5k5-gjns.json?community=${communityName}&$select=distinct%20commodity,%20community,%20collection_day,clect_int_winter,clect_int_summer`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    console.log(data);
    const dataArray = data.map( obj => {
      return manipulateData(obj);
    })
    res.status(200).json(dataArray);
  });
});

module.exports = router;
