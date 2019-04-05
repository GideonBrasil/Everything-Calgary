const express = require("express");
const router = express.Router();
const request = require("request-promise");

function sortCrimeData(communityData) {
  crimeObj = {};
  for (let crime of communityData) {
    if (crimeObj[crime.category]) {
      crimeObj[crime.category] += Number(crime.count);
    } else {
      crimeObj[crime.category] = Number(crime.count);
    }
  }
  return crimeObj;
}

function monthDiff(d1, d2) {
    let months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth() + 1;
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}

function dataFilter(data, community) {
  const currentDate = new Date();
  const data12Months = data.filter( crime => {
    let theDate = new Date(crime.date);
    let monthdiff = monthDiff(new Date(crime.date), currentDate);
    return 12 >= monthdiff;
  });

  let totalCalgaryCrime = 0;
  data12Months.forEach( crime => {
    totalCalgaryCrime += Number(crime.count);
  });

  const communityCrimes = data12Months.filter( crimeObj => {
    return crimeObj.community_name === community.toUpperCase();
  });

  let totalComCrimes = 0;
  communityCrimes.forEach( crime => {totalComCrimes += Number(crime.count);});

  const communityMonthCrimes = communityCrimes.filter( crime => {
    return crime.month === 'FEB';
  });

  const calgaryMonthCrimes = data12Months.filter( crime => {
    return crime.month === 'FEB';
  });

  const residentsCount = communityMonthCrimes[0].resident_count;

  const comm12Stats = sortCrimeData(communityCrimes);
  const YYC12Stats = sortCrimeData(data12Months);
  const commMonthStats = sortCrimeData(communityMonthCrimes);
  const YYCMonthStats = sortCrimeData(calgaryMonthCrimes);

  console.log(Object.keys(YYCMonthStats))
  console.log(Object.values(YYCMonthStats))

  function createByPeriod(YYCStats, commStats) {

    return Object.keys(YYCStats).reduce((crimeMonth, cat) => {
      if (Number(cat)) return crimeMonth;
      const newCrimeStat = {
        category: cat,
        commNum: commStats[cat] || 0,
        yycNum: YYCStats[cat]
      }
      crimeMonth.push(newCrimeStat)
      return crimeMonth
    }, []);
  }

  const monthCrimeStats = createByPeriod(YYCMonthStats, commMonthStats);
  const yearCrimeStats = createByPeriod(YYC12Stats, comm12Stats)


  

   return ({'community_name': community,
            'totalYYCCrime12': totalCalgaryCrime,
            'totalCommCrime12': totalComCrimes,
            'residentsCount': residentsCount,
            // 'comm12Stats': comm12Stats,
            // 'YYC12Stats': YYC12Stats,
            // 'commMonthStats': commMonthStats,
            // 'YYCMonthStats': YYCMonthStats,
            'monthCrimeStats': monthCrimeStats,
            'yearCrimeStats': yearCrimeStats
      });
  }

/* GET users listing. */
router.get("/:community", function(req, res, next) {
  const communityName = req.params.community;
  let now = new Date()
  let options = {
    url: `https://data.calgary.ca/resource/kudt-f99k.json?&$where=year > '${now.getFullYear()-2}'&$Limit=50000`,
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
