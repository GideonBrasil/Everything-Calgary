const express = require('express');
const request = require('request');
const fs = require('fs');


const communities = [];

function requestCommunities(url) {
  request(url, function (error, response, body) {
    if (error){
      console.log('error:', error);
    };
    console.log('statusCode:', response && response.statusCode);
    let ourData = JSON.parse(body)
    for (let each of ourData){
      communities.push(each.name)
      fs.writeFile("./communities.js", JSON.stringify(communities), function(err) {
        if(err){
          console.log(error)
        }
      });
    }
    return communities;
  })
};



requestCommunities('https://data.calgary.ca/resource/jd78-wxjp.json');




