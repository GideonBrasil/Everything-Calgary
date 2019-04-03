const express = require("express");
const router = express.Router();
const request = require("request-promise");

function sortCrimeData(communityData) {
  crimeObj = {};
  for (let crime of communityData) {
    if (crimeObj[crime.category]) {
      crimeObj[crime.category] ++;
    } else {
      crimeObj[crime.category] =1;
    }
  }
  return crimeObj;
}


function dataFilter(data, community) {
  const totalCalgaryCrime = data.length;
  const communityCrime = data.filter( crimeObj => {
    return crimeObj.community_name === community.toUpperCase();
  });
  const crimeCalgaryTypeData = sortCrimeData(data);
  const crimeCommunityTypeData = sortCrimeData(communityCrime);
  const totalComCrimes = communityCrime.length;

   return ({'community': community,
        'calgaryNumCrime': totalCalgaryCrime,
        'communityNumCrime': totalComCrimes,
        'communityCrimeData': communityCrime,
        'communityCrimeStats': crimeCommunityTypeData,
        'calgaryCrimeStats': crimeCalgaryTypeData,
      });
  }




/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let now = new Date()
  let options = {
    url: `https://data.calgary.ca/resource/kudt-f99k.json?&year=${now.getFullYear()}&$Limit=50000`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    dataObj = dataFilter(data, communityName);
    res.status(200).json(dataObj);
  });
});

module.exports = router;
