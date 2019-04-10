const express = require("express");
const router = express.Router();
const request = require("request-promise");

function populationYears(date) {
  const getDate = new Date(date);
  const toYear = getDate.getFullYear();

  return toYear;
}

function preparePopulationData(populationData) {
  let outputData = [];
  populationData.forEach(data => {
    outputData.push({
      years: populationYears(data.census_year),
      populaton: data.population
    });
  });
  return outputData;
}

function generateArrayPopulation(halfPreparedData) {
  const arrayData = { years: [], population: [] };
  halfPreparedData.forEach(singleYear => {
    arrayData.years.push(singleYear.years);
    arrayData.population.push(singleYear.populaton);
  });
  return arrayData;
}

/* GET users listing. */
router.get("/", function(req, res, next) {
  let options = {
    url: `https://data.calgary.ca/resource/eme4-y5m7.json?$select=census_year,sum(population)&$group=census_year&$order=census_year`,
    headers: {
      "User-Agent": "request",
      "X-App-Token": "TuumEdQ9KIehmtGnn2QjJoes7"
    }
  };
  request(options).then(data => {
    data = JSON.parse(data);
    const dataObj = preparePopulationData(data);
    const arrayData = generateArrayPopulation(dataObj);
    console.log("arrayData:", arrayData);
    res.status(200).json(arrayData);
  });
});

module.exports = router;
