const express = require("express");
const router = express.Router();
const request = require("request-promise");

  function createSortedDataByYear(data) {
    const lastYear = data.reduce((groupedByYear, obj) => {
      const year = (new Date(obj.date)).getFullYear();
      if (!groupedByYear[year]) groupedByYear[year] = [];
      groupedByYear[year].push(obj);
      groupedByYear[year].sort((a, b) => Number(b.median_assessed_value) - Number(a.median_assessed_value));
      return groupedByYear;
    }, {})['2017'];
    return lastYear
  }

  function createTargetData(lastYear, communityCode) {
    const myComIndex = lastYear.findIndex(obj => obj.comm_code === communityCode);
    const minIndex = myComIndex - 3 < 0 ? 0 : myComIndex - 3;
    const maxIndex = myComIndex + 4 > lastYear.length - 1 ? lastYear.length : myComIndex + 4;
    const targetRange = lastYear.slice(minIndex, maxIndex);
    return {
      range: targetRange,
      targetIndex: myComIndex,
      lastAvailableYear: '2017',
      highestValue: lastYear[0].median_assessed_value,
      lowestValue: lastYear[lastYear.length - 1].median_assessed_value
    }
  }

//   function createOutput(community, resourceID, darrenCb) {
//     apiCall(resourceID, function (data) {
//       massagedData = createSortedDataByYear(data);
//       finalOut = createTargetData(massagedData, community);
//       darrenCb(finalOut)
//     })
//   }

// createOutput("BNK", "prop_assess_val", console.log)

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityCode = req.params.community;
  let options = {
    url: `https://data.calgary.ca/resource/qzk3-5xur.json?&$Limit=50000`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    const dataObj = createSortedDataByYear(data);
    const targetData = createTargetData(dataObj, communityCode);
    res.status(200).json(targetData);
  });
});

module.exports = router;