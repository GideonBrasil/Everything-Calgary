const express = require("express");
const router = express.Router();
const request = require("request-promise");

function filterDates(data){
  const today = new Date(Date.now());
  const lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()-7);
  if (new Date(data.pubdate) >= lastWeek){
    data.pubdate = data.pubdate.substring(0, 10);
    return data;
  }
}

/* GET users listing. */
router.get("/", function(req, res, next) {
  let options = {
    url: `https://data.calgary.ca/resource/5ehk-wfu2.json`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    let newsData = JSON.parse(data);
    const filteredNews = newsData.filter(filterDates);
    res.status(200).json(filteredNews);
  });
});

module.exports = router;