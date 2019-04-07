const express = require("express");
const router = express.Router();
const request = require("request-promise");

function filterDates(data){
  const today = new Date(Date.now());
  const nextWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
  if (new Date(data.next_date) >= today && new Date(data.next_date) <= nextWeek){
    data.date = data.next_date_times.substring(0, 13);
    data.time = data.next_date_times.substring(13);
    return data;
  }
}

  /* GET users listing. */
  router.get("/", function(req, res, next) {
    let options = {
      url: `https://data.calgary.ca/resource/rbmk-85cw.json`,
      headers: {
        "User-Agent": "request",
        "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
      }
    };
    request(options).then(data => {
      eventsData = JSON.parse(data);
      const futureEvents = eventsData.filter(filterDates);
    res.status(200).json(futureEvents);
  });
});

module.exports = router;