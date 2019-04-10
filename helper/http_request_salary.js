const express = require('express');
const request = require('request');
const fs = require('fs');


const salary = [];

function requestSalary(url) {
  request(url, function (error, response, body) {
    if (error){
      console.log('error:', error);
    };
    console.log('statusCode:', response && response.statusCode);
    let ourData = JSON.parse(body)
    for (let each of ourData){
      salary.push(each.position_title)
      fs.writeFile("./salary.js", JSON.stringify(salary), function(err) {
        if(err){
          console.log(error)
        }
      });
    }
    return salary;
  })
};



requestSalary('https://data.calgary.ca/resource/9bze-mzx6.json?year=2018');