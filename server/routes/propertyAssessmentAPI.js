const express = require("express");
const router = express.Router();
const request = require("request-promise");

function createSortedDataByYear(data) {
  const lastYear = data.reduce((groupedByYear, obj) => {
    const year = new Date(obj.date).getFullYear();
    if (!groupedByYear[year]) groupedByYear[year] = [];
    groupedByYear[year].push(obj);
    groupedByYear[year].sort(
      (a, b) =>
        Number(a.median_assessed_value) - Number(b.median_assessed_value)
    );
    return groupedByYear;
  }, {})["2017"];
  return lastYear;
}

function createTargetData(lastYear, communityCode) {
  const myComIndex = lastYear.findIndex(obj => obj.comm_code === communityCode);
  const minIndex = myComIndex - 2 < 0 ? 0 : myComIndex - 2;
  const maxIndex =
    myComIndex + 3 > lastYear.length - 1 ? lastYear.length : myComIndex + 3;
  const targetRange = lastYear.slice(minIndex, maxIndex);
  return {
    range: targetRange.reverse(),
    targetIndex: myComIndex,
    lastAvailableYear: "2017",
    highestValue: lastYear[lastYear.length - 1].median_assessed_value,
    lowestValue: lastYear[0].median_assessed_value
  };
}

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
