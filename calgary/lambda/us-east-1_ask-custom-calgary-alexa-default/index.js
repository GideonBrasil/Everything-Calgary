/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the Alexa Everything Calgary Skills Kit, you can ask for traffic or garbage information in your community!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const GetRemoteDataHandler = {
  canHandle(handlerInput) {
    return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GetRemoteDataIntent');
  },
  async handle(handlerInput) {
    let outputSpeech = 'This is the default message.';
    const community = handlerInput.requestEnvelope.request.intent.slots.community.value.toUpperCase();
    await getRemoteData(`https://data.calgary.ca/resource/g5k5-gjns.json?community=${community}&$select=distinct%20commodity,%20community,%20collection_day,clect_int_winter,clect_int_summer`)
      .then((response) => {
        const data = JSON.parse(response);
        const garbageObj = {};
        data.forEach(bin => {
          const binData = manipulateData(bin)
          garbageObj[binData[1]] = binData[0]
        });

        outputSpeech = `In ${community}, your next green bin pickup is on ${garbageObj['Green'][1] + garbageObj['Green'][0]}. 
                        Your next blue bin pickup is on ${garbageObj['Blue'][1] + garbageObj['Blue'][0]}. 
                        Your next black bin pickup is on ${garbageObj['Black'][1] + garbageObj['Black'][0]}. `;
      })
      .catch((err) => {
        //set an optional error message here
        outputSpeech = "This community does not exist.";
      });

    return handlerInput.responseBuilder
      .speak(outputSpeech)
      .getResponse();

  },
};

const TrafficHandler = {
  canHandle(handlerInput) {
    return (handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'Traffic');
  },
  async handle(handlerInput) {
    let outputSpeech = 'This is the default message.';

    await getRemoteData('https://data.calgary.ca/resource/y5vq-u678.json')
      .then((response) => {
        const data = JSON.parse(response);
        if (data[0].incident_info === 'NO TRAFFIC INCIDENTS'){
          outputSpeech = `There are currently no traffic incidents in Calgary. The roads are clear!`
        } else {
          if (data.length === 1){
            outputSpeech = `There is currently ${data.length} traffic incident.`;
          } else {
            outputSpeech = `There are currently ${data.length} traffic incidents.`;
          }
          for (let i = 0; i < data.length; i++) {
            if (i === 0) {
              //first record
              outputSpeech = outputSpeech + ' There is a ' + data[i].description.replace('.', '') + ' at ' + data[i].incident_info + ' which started ' + getElapsedTime(data[i].start_dt) + ', '
            } else if (i === data.length - 1) {
              //last record
              outputSpeech = outputSpeech + ' and a ' + data[i].description.replace('.', '') + ' at ' + data[i].incident_info + ' which started ' + getElapsedTime(data[i].start_dt) + '.'
            } else {
              //middle record(s)
              outputSpeech = outputSpeech + ' a ' + data[i].description.replace('.', '') + ' at ' + data[i].incident_info + ' which started ' + getElapsedTime(data[i].start_dt) + ', '
            }
        }
        }
      })
      .catch((err) => {
        //set an optional error message here
        outputSpeech = `There are currently no traffic incidents in Calgary. The roads are clear!`
      });

    return handlerInput.responseBuilder
      .speak(outputSpeech)
      .getResponse();

  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can introduce yourself by telling me your name';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const getRemoteData = function (url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? require('https') : require('http');
    const request = client.get(url, (response) => {
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed with status code: ' + response.statusCode));
      }
      const body = [];
      response.on('data', (chunk) => body.push(chunk));
      response.on('end', () => resolve(body.join('')));
    });
    request.on('error', (err) => reject(err))
  })
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetRemoteDataHandler,
    TrafficHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();


// HELPER FUNCTIONS
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
  let dataArr = [];
  switch(frequency_season(now, data)) {

    case 'EVEN':
      dataArr[0] = (x===0 ? [day, 'this'] : [day, 'next']);
      dataArr[1] = data.commodity;
      break;
      case 'ODD':
      dataArr[0] = (x===1 ? [day, 'this'] : [day, 'next']);
      dataArr[1] = data.commodity;
      break;
      default:
      dataArr[0] = ([day, 'this']);
      dataArr[1] = data.commodity;
      break;
    }
    return dataArr;
}

function getElapsedTime(date){
  let now = new Date();
  let happened = new Date(date);
  var diffMs = (now - happened); // milliseconds between now & accident happeend
  var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000 ); // minutes
  return `${diffMins} minutes ago`
}