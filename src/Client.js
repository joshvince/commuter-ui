/*
CLIENT IS RESPONSIBLE FOR TALKING TO THE COMMUTER BACKEND SERVICE
*/
const linesUrl = 'http://lines.choob.io'
var choobUrl = 'https://choob-service.herokuapp.com'
var TflColors = require('./styles/TflColors.js');

// STATIONS

/*
Fetches an array of every single station object from the backend service.
These objects have name, id, and line data for each station served by the app.
*/
function getStationList(callback){
  console.log(`tried to call: ${choobUrl}/stations`);
  return fetch(`${choobUrl}/stations`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
    .catch(err => {
      console.log(err);
    })
}

// ARRIVALS

function getArrivals(stationId, lineId, callback){
  var url = `${choobUrl}/stations/${stationId}/${lineId}`
  console.log(`calling: ${url}`);
  return fetch(url, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
}

// LINES

function getLineData(id, callback) {
  console.log(`tried to call: ${linesUrl}/lines/${id}`)
  return fetch(`${linesUrl}/lines/${id}`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(callback)
}

function getLineObjects(callback) {
  console.log(`tried to call: ${linesUrl}/lines`)
  return fetch(`${linesUrl}/lines`, {
    accept: 'application/json'
  }).then(parseJSON)
    .then(addColors)
    .then(callback)
    .catch(error => {
      console.log(error)
    })
}

// FEEDBACK

/*
When a user clicks on a feedback button, it sends along some data, such as the time,
the feedback, the line and the text displayed.
This function then uses XHR to make a POST request to the commuter service
with this data as JSON. It doesn't currently care about the reply.
*/

function sendFeedback(pageData, feedbackData) {
  var url = `${linesUrl}/lines/feedback`
  var data = {
    line: pageData.lineData,
    display: {
      current: pageData.currentStatus,
      historic: pageData.historicStatus
    },
    raw: pageData.rawResponse,
    feedback: feedbackData
  }
  data = JSON.stringify(data)
  console.log(data)
  var XHR = new XMLHttpRequest();
  XHR.open("POST", url, true)
  XHR.setRequestHeader("Content-Type", "application/json");
  XHR.send(data);
}

// PRIVATE FUNCTIONS

function parseJSON(response) {
  return response.json();
}

function addColors(array) {
  return array.map(obj => {
    obj.color = TflColors[obj.id];
    return obj
  })
}

module.exports = {
  getLineData: getLineData,
  getLineObjects: getLineObjects,
  getStationList: getStationList,
  getArrivals: getArrivals,
  sendFeedback: sendFeedback
}
